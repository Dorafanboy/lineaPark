import { createPublicClient, createWalletClient, http, PrivateKeyAccount, SimulateContractReturnType } from 'viem';
import { linea } from 'viem/chains';
import { Config, Week1NidumBurn } from '../../../config';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { sidusHeroesContractAddress, tokenId } from './nidumData';
import { sidusABI } from '../../../abis/nidum';
import {
    getNonce,
    getSignature,
    getToken,
    getTransactionData,
    realiseItemData,
    registerAccount,
} from './nidumRequester';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { delay } from '../../../data/helpers/delayer';

export async function batch(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week1 - Sidus Heroes. Claim Nidum Mystery Box 2`);

    await registerAccount(account.address);

    const nonce = await getNonce(account.address);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const signature = await getSignature(nonce, account, walletClient);

    const token = await getToken(account.address, signature);

    await realiseItemData(account.address, token);

    const data = await getTransactionData(account.address, token);

    if (data == null) {
        printError(`Попытки получить item не удались, завершаю работу этой функции\n`);
        return false;
    }

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    await checkGwei();

    printInfo(`Вызываю функцию Mint From Shadow Batch`);

    const transactionMessage = data.message;
    const transactionSignature = data.signature;

    const nonceTransaction = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: sidusHeroesContractAddress,
            abi: sidusABI,
            functionName: 'mintFromShadowBatch',
            account: account,
            args: [[tokenId], [1], 0, transactionMessage, transactionSignature],
            nonce: nonceTransaction,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint From Shadow Batch - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint From Shadow Batch - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week1 - Mint From Shadow Batch: Claim Nidum Mystery Box 2 <a href='${url}'>link</a>`);
    }

    if (Week1NidumBurn.isUse) {
        await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
        await burn(account);
        return false;
    }

    return true;
}

export async function burn(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week1 - Sidus Heroes. Claim Nidum Mystery Box 2`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    await checkGwei();

    printInfo(`Вызываю функцию Burn`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: sidusHeroesContractAddress,
            abi: sidusABI,
            functionName: 'burn',
            account: account,
            args: [account.address, tokenId, 1],
            nonce: nonce,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Burn - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Burn - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week1 - Burn: Claim Nidum Mystery Box 2 <a href='${url}'>link</a>`);
    }

    return true;
}
