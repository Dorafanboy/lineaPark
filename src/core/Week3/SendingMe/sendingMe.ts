import { createPublicClient, createWalletClient, formatUnits, http, PrivateKeyAccount } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { withdrawAddress } from './sendingMeData';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { linea } from 'viem/chains';
import { Config, Week3SendingMe } from '../../../config';
import { getValue } from '../../../data/utils/utils';
import { delay } from '../../../data/helpers/delayer';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { SendRawTransactionParameters, SignTransactionParameters } from 'viem/actions';

export async function transfer(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week2 - SendingMe, transfer to ${withdrawAddress}. Linea Park - SendingMe`);

    let currentTry: number = 0,
        value = BigInt(0);

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    while (currentTry <= Config.retryCount) {
        if (currentTry == Config.retryCount) {
            printError(
                `Не нашел баланс для бриджа из сети Linea. Превышено количество попыток - [${currentTry}/${Config.retryCount}]\n`,
            );
            return false;
        }

        value = await getValue(
            lineaClient,
            account.address,
            Week3SendingMe.ethTransferAmount.range,
            Week3SendingMe.ethTransferAmount.fixed,
            true,
        );

        printInfo(
            `Пытаюсь произвести бридж ${formatUnits(value, 18)} ETH в сети ${linea.name} на адрес ${withdrawAddress}`,
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

    printInfo(`Буду производить бридж ${formatUnits(value, 18)} ETH в сети ${linea.name} на адрес ${withdrawAddress}`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const request = await walletClient
        .prepareTransactionRequest({
            account,
            to: withdrawAddress,
            value: value,
            nonce: nonce,
        })
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Withdraw to ${withdrawAddress} - ${e}`);
            return { request: undefined };
        });

    if (request !== undefined) {
        const signature = await walletClient.signTransaction(request as SignTransactionParameters);
        const params: SendRawTransactionParameters = {
            serializedTransaction: signature,
        };

        const hash = await walletClient.sendRawTransaction(params);
        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week2 - bridge from Linea ${formatUnits(value!, 18)} ${linea.nativeCurrency.symbol} to ${withdrawAddress}: Linea Park - SendingMe <a href='${url}'>link</a>`,
        );
    }

    return true;
}
