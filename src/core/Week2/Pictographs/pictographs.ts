import { createPublicClient, createWalletClient, http, PrivateKeyAccount, SimulateContractReturnType } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { linea } from 'viem/chains';
import { Config, Week2PictographsBonus } from '../../../config';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { pictographsContractAddress } from './pictographsData';
import { pictographsABI } from '../../../abis/pictographs';
import { delay } from '../../../data/helpers/delayer';

export async function pictographsMintNft(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week2 - Mint NFT. Snap, Play and Earn with Pictographs`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Mint NFT`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });

    const transferRequest = await lineaClient
        .simulateContract({
            address: pictographsContractAddress,
            abi: pictographsABI,
            functionName: 'mintNFT',
            account: account,
            nonce: nonce,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint NFT - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint NFT - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week2 - Mint NFT: Snap, Play and Earn with Pictographs <a href='${url}'>link</a>`);

        if (Week2PictographsBonus.isUse) {
            await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
            await pictographsStakeNFT(account);
            return false;
        }
    }

    return true;
}

export async function pictographsStakeNFT(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week2 - Stake. Snap, Play and Earn with Pictographs(Bonus)`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Stake`);

    const balance = (await lineaClient.readContract({
        address: pictographsContractAddress,
        abi: pictographsABI,
        functionName: 'balanceOf',
        account: account,
        args: [account.address],
    })) as number;

    if (Number(balance) == 0) {
        printError(`Баланс NFT для pictographs равен нулю`);
        return false;
    }

    const idx = Number(balance) - 1;
    const nftId = (await lineaClient.readContract({
        address: pictographsContractAddress,
        abi: pictographsABI,
        functionName: 'tokenOfOwnerByIndex',
        account: account,
        args: [account.address.toLowerCase(), idx],
    })) as bigint[];

    const nonce = await lineaClient.getTransactionCount({ address: account.address });

    const transferRequest = await lineaClient
        .simulateContract({
            address: pictographsContractAddress,
            abi: pictographsABI,
            functionName: 'stake',
            account: account,
            nonce: nonce,
            args: [nftId],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Stake NFT - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Stake NFT - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week2 - Stake NFT: Snap, Play and Earn with Pictographs(Bonus) <a href='${url}'>link</a>`,
        );
    }

    return true;
}
