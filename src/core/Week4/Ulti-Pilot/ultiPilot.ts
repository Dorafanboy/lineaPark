import { createPublicClient, createWalletClient, http, PrivateKeyAccount, SimulateContractReturnType } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { ultiPilotContractAddress } from './ultiPilotData';
import { ultiPilotABI } from '../../../abis/ultiPilot';
import { getMintData, ultiPilotGetMessage, ultiPilotGetToken } from './ultiPilotRequester';

export async function ultiPilotMintSBT(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week4 - Mint SBT. Ulti-Pilot`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const lineaClient = createPublicClient({
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
        chain: linea,
    });

    const message = await ultiPilotGetMessage(account.address);

    const signature = await walletClient.signMessage({
        account,
        message: message,
    });

    const token = await ultiPilotGetToken(account.address, signature);

    const data = await getMintData(token, account.address);
    await checkGwei();

    printInfo(`Вызываю функцию Mint SBT`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: ultiPilotContractAddress,
            abi: ultiPilotABI,
            functionName: 'mintSBT',
            account: account,
            nonce: nonce,
            args: [data.deadline, data.attributeHash, data.signature],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint SBT - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint SBT - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week4 - Mint SBT: Ulti-Pilot <a href='${url}'>link</a>`);
    }

    return true;
}
