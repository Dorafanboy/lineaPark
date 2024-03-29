import {
    createPublicClient,
    createWalletClient,
    formatUnits,
    http,
    parseUnits,
    PrivateKeyAccount,
    SimulateContractReturnType,
} from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import { micro3ContractAddress, purchaseValueBigInt } from './micro3Data';
import { micro3ABI } from '../../../abis/micro';

export async function purchase(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week6 - Micro3. Experience Micro3 Magic: Linea Park Edition`);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Purchase за ${formatUnits(BigInt(purchaseValueBigInt), 15)} ETH`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: micro3ContractAddress,
            abi: micro3ABI,
            functionName: 'purchase',
            account: account,
            args: [1],
            nonce: nonce,
            value: parseUnits(purchaseValueBigInt, 3),
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Purchase - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Purchase - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week6 - Micro3: Purchase <a href='${url}'>link</a>`);
    }

    return true;
}
