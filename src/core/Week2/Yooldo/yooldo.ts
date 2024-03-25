import {
    createPublicClient,
    createWalletClient,
    formatUnits,
    http,
    PrivateKeyAccount,
    SimulateContractReturnType,
} from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { standUpValue, yooldoContractAddress } from './yooldoData';
import { yooldoABI } from '../../../abis/yooldo';

export async function standUp(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week2 - Stand Up. Yooldo: Trouble Punk`);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Stand Up за ${formatUnits(standUpValue, 18)} ETH`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: yooldoContractAddress,
            abi: yooldoABI,
            functionName: 'standUp',
            account: account,
            value: standUpValue,
            nonce: nonce,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Stand Up - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Stand Up - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week2 - Stand Up: Yooldo: Trouble Punk <a href='${url}'>link</a>`);
    }

    return true;
}
