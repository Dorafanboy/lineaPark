import {
    createPublicClient,
    createWalletClient,
    http,
    PrivateKeyAccount,
    SimulateContractReturnType,
    WalletClient,
} from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { linea } from 'viem/chains';
import { Config, Week3LineaThemedBonus } from '../../../config';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { delay } from '../../../data/helpers/delayer';
import { socialWorldContractAddress } from './socialWorldData';
import { socialWorldABI } from '../../../abis/socialWorld';
import { getMintBadgeData, socialWorldLogin } from './socialWorldRequester';
import { IMessageSignatureData } from '../../../data/utils/interfaces';

export async function socialWorldMintWithSignatureLineScanner(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week3 - Mint With Signature. Free Mint of Linea-Themed NFT Badge`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const dataMessageSignature = await getMessageSignature(walletClient, account);

    const token = await socialWorldLogin(
        account.address.toLowerCase(),
        dataMessageSignature.message,
        dataMessageSignature.signature,
    );

    const data = await getMintBadgeData(token, 'linea_data_scanner');

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Mint With Signature`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });

    const transferRequest = await lineaClient
        .simulateContract({
            address: socialWorldContractAddress,
            abi: socialWorldABI,
            functionName: 'mintWithSignature',
            account: account,
            nonce: nonce,
            args: [data.signer, account.address, data.tokenId, data.url, data.signature],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint With Signature - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint With Signature - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week3 - Mint With Signature: Free Mint of Linea-Themed NFT Badge <a href='${url}'>link</a>`,
        );

        if (Week3LineaThemedBonus.isUse) {
            await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
            await socialWorldMintWithSignatureLineaGang(account, token);
            return false;
        }
    }

    return true;
}

export async function socialWorldMintWithSignatureLineaGang(account: PrivateKeyAccount, token?: string) {
    printInfo(`Выполняю модуль Week3 - Mint With Signature. Free Mint of Linea-Themed NFT Badge(Bonus)`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const data = await getMintBadgeData(token!, 'linea_gang');

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Mint With Signature`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });

    const transferRequest = await lineaClient
        .simulateContract({
            address: socialWorldContractAddress,
            abi: socialWorldABI,
            functionName: 'mintWithSignature',
            account: account,
            nonce: nonce,
            args: [data.signer, account.address, data.tokenId, data.url, data.signature],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint With Signature - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint With Signature - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week3 - Mint With Signature: Free Mint of Linea-Themed NFT Badge(Bonus) <a href='${url}'>link</a>`,
        );
    }

    return true;
}

async function getMessageSignature(
    walletClient: WalletClient,
    account: PrivateKeyAccount,
): Promise<IMessageSignatureData> {
    const message = getMessageToSign();

    console.log(message);
    const signature = await walletClient.signMessage({
        account,
        message: message,
    });

    return {
        message: message,
        signature: signature,
    };
}

function getMessageToSign() {
    return `Login with this account\n\ntime: ${new Date().toISOString()}\n${generateRandomHex(32)}`;
}

function generateRandomHex(length: number) {
    let N = '';
    for (let H = 0; H < length; H++)
        N += Math.floor(256 * Math.random())
            .toString(16)
            .padStart(2, '0');

    return N;
}
