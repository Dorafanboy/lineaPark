import { createPublicClient, createWalletClient, http, PrivateKeyAccount, SimulateContractReturnType } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { domains } from '../../Week3/Dmail/dmailData';
import { nftAdventureGetToken } from './nftAdventureRequester';
import { nftAdventureContractAddress } from './nftAdventureData';
import { nftAdventureABI } from '../../../abis/nftAdventure';

export async function nftAdventureSafeMint(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week6 - Safe Mint. NFT Adventure`);

    const data = await registerUser();

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Safe Mint`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: nftAdventureContractAddress,
            abi: nftAdventureABI,
            functionName: 'safeMint',
            account: account,
            nonce: nonce,
            args: [data.walletAddress],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Safe Mint - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Safe Mint - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week6 - Safe Mint: NFT Adventure <a href='${url}'>link</a>`);
    }

    return true;
}

async function registerUser() {
    printInfo(`Проивзожу регистрацию пользователя`);

    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomEmail = Math.random().toString(36).substring(4, 10);
    const email = randomEmail + randomDomain;

    const randomUsername = Math.random().toString(36).substring(5, 13);
    const randomPassword = Math.random().toString(36).substring(2, 13);

    printInfo(
        `Выполняю регистрацию пользователя, email: ${email}, username: ${randomUsername}, password: ${randomPassword}`,
    );

    const data = await nftAdventureGetToken(email, randomUsername, randomPassword);

    return data;
}
