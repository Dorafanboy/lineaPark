import { createPublicClient, createWalletClient, http, PrivateKeyAccount, SimulateContractReturnType } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { currency, playNounsContractAddress, proof, quantityLimitPerWallet } from './playNounsData';
import { playNounsABI } from '../../../abis/playNouns';

export async function playNounsClaim(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week5 - Claim. Play Nouns`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const lineaClient = createPublicClient({
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
        chain: linea,
    });

    await checkGwei();

    printInfo(`Вызываю функцию Claim`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: playNounsContractAddress,
            abi: playNounsABI,
            functionName: 'claim',
            account: account,
            nonce: nonce,
            args: [account.address, 0, 1, currency, 0, [[proof], quantityLimitPerWallet, 0, currency], '0x'],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week5 - Claim: Play Nouns <a href='${url}'>link</a>`);
    }

    return true;
}
