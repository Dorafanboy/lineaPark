import { createWalletClient, encodeFunctionData, http, PrivateKeyAccount } from 'viem';
import { z2048ABI } from '../../../abis/z2048';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { z2048ContactAddress } from './z2048Data';

export async function playNounsClaim(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week 4 - New Game. z2048`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    await checkGwei();

    printInfo(`Вызываю функцию New Game`);

    const randomBigInt = getRandomBigInt();
    const data = encodeFunctionData({
        abi: z2048ABI,
        functionName: 'newGame',
        args: [randomBigInt, true],
    });

    const preparedTransaction = await walletClient!.prepareTransactionRequest({
        account,
        to: z2048ContactAddress,
        data: data,
    });

    const signature = await walletClient.signTransaction(preparedTransaction).catch((e) => {
        printError(`Произошла ошибка во время выполнения модуля New Game - ${e}`);
        return undefined;
    });

    if (signature !== undefined) {
        const hash = await walletClient.sendRawTransaction({ serializedTransaction: signature }).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля New Game - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week 4 - New Game: z2048 <a href='${url}'>link</a>`);

        return true;
    }

    return true;
}

function getRandomBigInt() {
    const length = Math.floor(Math.random() * 2) + 77;
    let result = String(Math.floor(Math.random() * 9) + 1);

    for (let i = 1; i < length - 1; i++) {
        result += Math.floor(Math.random() * 10);
    }

    return result;
}
