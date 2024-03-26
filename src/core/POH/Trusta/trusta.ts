import { createWalletClient, formatUnits, http, PrivateKeyAccount } from 'viem';
import { checkInviteInfo, getCalldataTransaction, getToken } from './trustaRequester';
import { linea } from 'viem/chains';
import { Config } from '../../../config';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import {
    levelAAttestationPrice,
    levelAMinScore,
    levelBAttestationPrice,
    levelBMinScore,
    trustaContractAddress,
} from './trustaData';
import { checkGwei } from '../../../data/helpers/gweiChecker';

export async function getLevelAAttestation(account: PrivateKeyAccount) {
    await interlayerAttestation(account, true);
    return true;
}

export async function getLevelBAttestation(account: PrivateKeyAccount) {
    await interlayerAttestation(account, false);
    return true;
}

async function interlayerAttestation(account: PrivateKeyAccount, isLevelA: boolean) {
    const level = isLevelA ? 'A' : 'B';

    printInfo(`Выполняю модуль POH - Trusta. Attest Trusta Level ${level}`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const token = await getToken(account, walletClient);
    await checkInviteInfo(token);

    const trustaData = await getCalldataTransaction(token, isLevelA ? 'humanity' : 'media');

    const isEnoughScore = await checkScore(isLevelA, trustaData.score);

    if (isLevelA && isEnoughScore == false) {
        printError(
            `Недостаточно score для аттестации Trusta Level ${level}. Текущий score аккаунта ${trustaData.score}, необходимо ${levelAMinScore}`,
        );
        return true;
    } else if (isEnoughScore == false) {
        printError(
            `Недостаточно score для аттестации Trusta Level ${level}. Текущий score аккаунта ${trustaData.score}, необходимо ${levelBMinScore}`,
        );
        return true;
    }

    await checkGwei();

    const price = isLevelA ? levelAAttestationPrice : levelBAttestationPrice;
    printInfo(`Вызываю функцию Attest Trusta по цене ${formatUnits(price, 18)} ETH`);

    const preparedTransaction = await walletClient!.prepareTransactionRequest({
        account,
        to: trustaContractAddress,
        data: trustaData.calldata,
        value: price,
    });

    const signature = await walletClient.signTransaction(preparedTransaction).catch((e) => {
        printError(`Произошла ошибка во время выполнения модуля Trusta Level ${level} Attest ${e}`);
        return undefined;
    });

    if (signature !== undefined) {
        const hash = await walletClient.sendRawTransaction({ serializedTransaction: signature }).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Trusta Level ${level} Attest ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅POH - Trusta: Attestation Level ${level} <a href='${url}'>link</a>`);
    }

    return true;
}

async function checkScore(isLevelA: boolean, score: number) {
    if (isLevelA == false) {
        return score > levelBMinScore;
    } else {
        return score == levelAMinScore;
    }
}
