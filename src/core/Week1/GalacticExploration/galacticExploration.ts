import {
    createPublicClient,
    createWalletClient,
    http,
    PrivateKeyAccount,
    SimulateContractReturnType,
    WalletClient,
} from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { linea } from 'viem/chains';
import { Config, Week1TownStoryBonus } from '../../../config';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import {
    galacticExplorationClaimTravelbagContractAddress,
    galacticExplorationContractAddress,
    getMessage,
    getNonce,
} from './galacticExplorationData';
import { townStoryABI } from '../../../abis/townStory';
import { delay } from '../../../data/helpers/delayer';
import { getLineaSign } from './galacticExplorationRequester';
import { townStoryClaimABI } from '../../../abis/townStoryClaim';

export async function galacticExplorationCreateAccountSign(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week1 - Create Account Sign. Galactic Exploration: Unlock Your Linea Travelbag`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const signature = await getSignatureMessage(account, walletClient);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Create Account Sign`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });

    const block = await lineaClient.getBlock();
    const deadline = Number(block.timestamp) + 300;
    console.log(Number(block.timestamp) + 300);

    const transferRequest = await lineaClient
        .simulateContract({
            address: galacticExplorationContractAddress,
            abi: townStoryABI,
            functionName: 'createAccountSign',
            account: account,
            nonce: nonce,
            args: [signature, 0, deadline],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Create Account Sign - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Create Account Sign - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week1 - Create Account Sign: Galactic Exploration: Unlock Your Linea Travelbag <a href='${url}'>link</a>`,
        );

        if (Week1TownStoryBonus.isUse) {
            await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
            await claimLineaTravelbag(account);
            return false;
        }
    }

    return true;
}

async function getSignatureMessage(account: PrivateKeyAccount, walletClient: WalletClient) {
    const nonce = getNonce();
    const address =
        account.address.substring(0, 19).toLowerCase() + '...' + account.address.substring(24).toLowerCase();

    const message = getMessage(address, nonce);

    const signature = await walletClient.signMessage({
        account,
        message: message,
    });

    console.log(message);
    return signature;
}

export async function claimLineaTravelbag(account: PrivateKeyAccount) {
    printInfo(
        `Выполняю модуль Week1 - Claim Linea Travelbag. Galactic Exploration: Unlock Your Linea Travelbag(Bonus)`,
    );

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const data = await getLineaSign(<`0x${string}`>account.address.toLowerCase());

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Claim Linea Travelbag`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });

    const transferRequest = await lineaClient
        .simulateContract({
            address: galacticExplorationClaimTravelbagContractAddress,
            abi: townStoryClaimABI,
            functionName: 'claimLineaTravelbag',
            account: account,
            nonce: nonce,
            args: [data.signature, account.address, data.deadline],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim Linea Travelbag - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim Linea Travelbag - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week1 - Claim Linea Travelbag: Galactic Exploration: Unlock Your Linea Travelbag(Bonus) <a href='${url}'>link</a>`,
        );
    }

    return true;
}
