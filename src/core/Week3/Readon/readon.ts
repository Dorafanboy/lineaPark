import { createPublicClient, createWalletClient, http, PrivateKeyAccount, SimulateContractReturnType } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { contentHubContractAddress, max, min } from './readonData';
import { contentHubABI } from '../../../abis/readon';

export async function curate(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week3 - Curate URL. ReadON`);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию curate`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const randomNum = getRandomNumberStartingWith170or171();

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: contentHubContractAddress,
            abi: contentHubABI,
            functionName: 'curate',
            account: account,
            args: [randomNum],
            nonce: nonce,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Curate - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Curate - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week3 - Curate: ReadON <a href='${url}'>link</a>`);
    }

    return true;
}

function getRandomNumberStartingWith170or171() {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const start = Math.random() < 0.5 ? '170' : '171';

    return BigInt(start + num.toString().substring(2));
}
