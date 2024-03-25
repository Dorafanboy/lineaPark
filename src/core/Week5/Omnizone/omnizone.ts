import { createPublicClient, createWalletClient, http, PrivateKeyAccount, SimulateContractReturnType } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { omnizoneContractAddress } from './omnizoneData';
import { omnizoneABI } from '../../../abis/omnizone';

export async function mintOmnizone(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week5 - Omnizone. Omnizone Attraction at Linea Park`);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Mint`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: omnizoneContractAddress,
            abi: omnizoneABI,
            functionName: 'mint',
            account: account,
            nonce: nonce,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Mint - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week5 - Mint: Omnizone Attraction at Linea Park <a href='${url}'>link</a>`);
    }

    return true;
}
