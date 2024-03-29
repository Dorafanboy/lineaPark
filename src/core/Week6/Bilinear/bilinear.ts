import { createPublicClient, createWalletClient, http, PrivateKeyAccount } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { bilinearContractAddress, bilinearData } from './bilinearData';

export async function claimBilinear(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week6 - Claim. Bilinear: the zero-fees NFT marketplace`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    await checkGwei();

    printInfo(`Вызываю функцию Claim`);

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const preparedTransaction = await walletClient!.prepareTransactionRequest({
        account,
        to: bilinearContractAddress,
        data: bilinearData,
        nonce: nonce,
    });

    const signature = await walletClient.signTransaction(preparedTransaction).catch((e) => {
        printError(`Произошла ошибка во время выполнения модуля Claim Bilinear ${e}`);
        return undefined;
    });

    if (signature !== undefined) {
        const hash = await walletClient.sendRawTransaction({ serializedTransaction: signature }).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim Bilinear ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week6 - Bilinear: Attestation Bilinear: the zero-fees NFT marketplace <a href='${url}'>link</a>`,
        );
    }

    return true;
}
