import {
    createPublicClient,
    createWalletClient,
    formatUnits,
    http,
    PrivateKeyAccount,
    SimulateContractReturnType,
} from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { auth, checkAttestation, getScore, getTransactionData } from './rubyScoreRequester';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { minScore, rubyScoreAttestationPrice, rubyScoreContractAddress } from './rubyScoreData';
import { rubyScoreABI } from '../../../abis/rubyScore';
import { addTextMessage } from '../../../data/telegram/telegramBot';

export async function getAttestationRubyScore(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль POH - RubyScore. Attest Rubyscore Level B`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const token = await auth(account, walletClient);

    const score = await getScore(account.address);

    if (score < minScore) {
        printError(`Маленький Score для получения RubyScore аттестации, текущий score - ${score}`);
        return false;
    }

    await checkAttestation(account.address, token);

    const data = await getTransactionData(token);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Attest Rubyscore по цене ${formatUnits(rubyScoreAttestationPrice, 18)} ETH`);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });

    const transferRequest = await lineaClient
        .simulateContract({
            address: rubyScoreContractAddress,
            abi: rubyScoreABI,
            functionName: 'attestRubyscore',
            account: account,
            args: [
                [
                    data.attestationParams.schemaId,
                    data.attestationParams.expirationDate,
                    data.attestationParams.subject,
                    data.attestationParams.attestationData,
                ],
                [data.signature],
            ],
            nonce: nonce,
            value: rubyScoreAttestationPrice,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля POH - RubyScore Level B - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля POH - RubyScore Level B - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅POH - RubyScore: Attestation Level B <a href='${url}'>link</a>`);
    }

    return true;
}
