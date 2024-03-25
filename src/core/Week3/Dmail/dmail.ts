import { createPublicClient, createWalletClient, http, PrivateKeyAccount, SimulateContractReturnType } from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { linea } from 'viem/chains';
import { Config, Week3Dmail } from '../../../config';
import { dmailContractAddress, domains } from './dmailData';
import { dmailABI } from '../../../abis/dmail';
import crypto from 'crypto';
import { IDmailData } from '../../../data/utils/interfaces';
import { addTextMessage } from '../../../data/telegram/telegramBot';

export async function sendDmail(account: PrivateKeyAccount, words: string[]) {
    printInfo(`Выполняю модуль Week3 - Dmail. Send Email from Linea`);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Send_Mail`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const data = getTransactionData(words);

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: dmailContractAddress,
            abi: dmailABI,
            functionName: 'send_mail',
            account: account,
            args: [data.to, data.amount],
            nonce: nonce,
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Send_Mail - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Send_Mail - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week3 - Send_Mail: Send Email from Linea <a href='${url}'>link</a>`);
    }

    return true;
}

function getTransactionData(words: string[]): IDmailData {
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomName = Math.random().toString(36).substring(2, 10);
    const to = randomName + randomDomain;

    const randomAmount = getRandomSentence(Week3Dmail.wordsCount, words);

    const toHashed = crypto.createHash('sha256').update(to).digest('hex');
    const amountHashed = crypto.createHash('sha256').update(randomAmount).digest('hex');

    return {
        to: toHashed,
        amount: amountHashed,
    };
}

function getRandomSentence(wordCount: number[], dictionary: string[]) {
    const minRange = Math.min(...wordCount);
    const maxRange = Math.max(...wordCount);
    const randomNum = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

    const randomWords = [];
    for (let i = 0; i < randomNum; i++) {
        const randomIndex = Math.floor(Math.random() * dictionary.length);
        randomWords.push(dictionary[randomIndex].trim());
    }

    const sentence = randomWords.join(' ');

    return sentence.trim();
}
