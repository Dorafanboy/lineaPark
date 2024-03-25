import {
    createPublicClient,
    createWalletClient,
    formatUnits,
    http,
    PrivateKeyAccount,
    SimulateContractReturnType,
} from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { linea } from 'viem/chains';
import { Config, Week3SendingMe } from '../../../config';
import { getValue } from '../../../data/utils/utils';
import { delay } from '../../../data/helpers/delayer';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { metamaskABI } from '../../../abis/gamicHub';
import { lineaWETHContractAddress } from './gamicHubData';

export async function wrapETH(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week3 - Wrap ETH. Into the Gamic Hub`);

    let currentTry: number = 0,
        value = BigInt(0);

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    while (currentTry <= Config.retryCount) {
        if (currentTry == Config.retryCount) {
            printError(
                `Не нашел баланс для wrap ETH в сети Linea. Превышено количество попыток - [${currentTry}/${Config.retryCount}]\n`,
            );
            return false;
        }

        printInfo(`Пытаюсь произвести wrap ${formatUnits(value, 18)} ETH в сети ${linea.name}`);

        value = await getValue(
            lineaClient,
            account.address,
            Week3SendingMe.ethTransferAmount.range,
            Week3SendingMe.ethTransferAmount.fixed,
            true,
        );

        currentTry++;

        if (value != null && value != BigInt(-1)) {
            currentTry = Config.retryCount + 1;
        } else {
            await delay(Config.delayBetweenAction.min, Config.delayBetweenAction.max, false);
        }
    }

    await checkGwei();

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Буду производить wrap ${formatUnits(value, 18)} ETH в сети ${linea.name}`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const request = await lineaClient
        .simulateContract({
            address: lineaWETHContractAddress,
            abi: metamaskABI,
            functionName: 'deposit',
            account: account,
            value: value,
            nonce: nonce,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Metamask - ${e}`);
            return { transferRequest: undefined };
        });

    if (request !== undefined && 'request' in request) {
        const hash = await walletClient.writeContract(request!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Metamask - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week3 - wrap ${formatUnits(value, 18)} ETH: Into the Gamic Hub <a href='${url}'>link</a>`,
        );
    }

    return true;
}
