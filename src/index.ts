import { privateKeyToAccount } from 'viem/accounts';
import fs from 'fs';
import readline from 'readline';
import { printError, printInfo, printSuccess } from './data/logger/logPrinter';
import { delay } from './data/helpers/delayer';
import {
    Config,
    TelegramData,
    Week1GamerBoomMintNFT,
    Week1GamerBoomSignProof,
    Week1NidumBatch,
    Week1NidumBurn,
    Week3SendingMe,
    Week2Yooldo,
    Week3BitAvatar,
    Week3Dmail,
    Week3GamicHub,
    Week3ReadOn,
    Week4LuckyCat,
    Week5Battlemon,
    Week5Omnizone,
} from './config';
import {
    addTextMessage,
    initializeTelegramBot,
    resetTextMessage,
    sendMessage,
    stopTelegramBot,
} from './data/telegram/telegramBot';
import path from 'path';
import { IFunction } from './data/utils/interfaces';
import { withdrawAmount } from './data/okx/okx';
import { mintNFT, signGenesisProof } from './core/Week1/GamerBoom/gamerBoom';
import { batch, burn } from './core/Week1/Nidum/nidum';
import { transfer } from './core/Week3/SendingMe/sendingMe';
import { standUp } from './core/Week2/Yooldo/yooldo';
import { checkIn } from './core/Week3/BitAvatar/bitAvatar';
import { curate } from './core/Week3/Readon/readon';
import { sendDmail } from './core/Week3/Dmail/dmail';
import { wrapETH } from './core/Week3/GamicHub/gamicHub';
import { adoptCat } from './core/Week4/LuckyCat/luckyCat';
import { safeMint } from './core/Week5/BattleMon/battleMon';
import { mintOmnizone } from './core/Week5/Omnizone/omnizone';

let account;

const privateKeysFilePath = path.join(__dirname, 'assets', 'private_keys.txt');
const privateKeysPath = fs.createReadStream(privateKeysFilePath);

const wordsFilePath = path.join(__dirname, 'assets', 'random_words.txt');
const words = fs.readFileSync(wordsFilePath).toString().split('\n');

const functions: { [key: string]: IFunction } = {
    'Week 1 - Gamer Boom Sign Genesis Proof. GamerBoom: Genesis Testing with Linea': {
        func: signGenesisProof,
        isUse: Week1GamerBoomSignProof.isUse,
    },
    'Week 1 - Gamer Boom Mint NFT. GamerBoom: Genesis Testing with Linea': {
        func: mintNFT,
        isUse: Week1GamerBoomMintNFT.isUse,
    },
    'Week 1 - Sidus Heroes Batch. Claim Nidum Mystery Box 2': { func: batch, isUse: Week1NidumBatch.isUse },
    'Week 1 - Sidus Heroes Burn. Claim Nidum Mystery Box 2': { func: burn, isUse: Week1NidumBurn.isUse }, // проверить что если эта, то сначала выполнить функцию выше
    'Week 2 - Yooldo Me Stand Up. Yooldo: Trouble Punk': { func: standUp, isUse: Week2Yooldo.isUse },
    'Week 3 - Sending Me Transfer. Linea Park - SendingMe': { func: transfer, isUse: Week3SendingMe.isUse },
    'Week 3 - Check In. BitAvatar': { func: checkIn, isUse: Week3BitAvatar.isUse },
    'Week 3 - Content Hub Curate. ReadON': { func: curate, isUse: Week3ReadOn.isUse },
    'Week 3 - Dmail Send_Mail. Send Email from Linea': {
        func: (account) => sendDmail(account, words),
        isUse: Week3Dmail.isUse,
        words,
    },
    'Week 3 - Metamask Wrap ETH. Into the Gamic Hub': { func: wrapETH, isUse: Week3GamicHub.isUse },
    'Week 4 - Lucky Cat Adopt Cat. We`re Up All Nite To Get Lucky Cat': { func: adoptCat, isUse: Week4LuckyCat.isUse },
    'Week 5 - BattleMon Safe Mint. Battlemon': { func: safeMint, isUse: Week5Battlemon.isUse },
    'Week 5 - Omnizone Safe Mint. Omnizone Attraction at Linea Park': {
        func: mintOmnizone,
        isUse: Week5Omnizone.isUse,
    },
};

const filteredFunctions = Object.keys(functions)
    .filter((key) => functions[key].isUse)
    .map((key) => functions[key].func);

if (filteredFunctions.length == 0) {
    printError(`Нету модулей для запуска`);
    throw `No modules`;
}

async function main() {
    const rl = readline.createInterface({
        input: privateKeysPath,
        crlfDelay: Infinity,
    });

    let index = 0;

    const data = fs.readFileSync(privateKeysFilePath, 'utf8');

    const count = data.split('\n').length;
    await initializeTelegramBot(TelegramData.telegramBotId, TelegramData.telegramId);

    const keys = Object.keys(functions).filter((key) => functions[key].isUse);
    const functionsList = keys.join('\n');

    printInfo(`Были включены следующие модули:\n${functionsList}`);

    for await (const line of rl) {
        try {
            if (line == '') {
                printError(`Ошибка, пустая строка в файле private_keys.txt`);
                return;
            }

            if (Config.IsShuffleWallets) {
                printInfo(`Произвожу перемешивание только кошельков.`);
                await shuffleData();

                printSuccess(`Кошельки успешно перемешаны.\n`);
            }

            account = privateKeyToAccount(<`0x${string}`>line);
            printInfo(`Start [${index + 1}/${count} - ${account.address}]\n`);

            await addTextMessage(`${index + 1}/${count} - ${account.address}\n`);

            await withdrawAmount(account.address);

            printInfo(`Перемешал модули`);
            const shuffledFunctions = Object.keys(functions)
                .filter(
                    (key) => functions[key].isUse && key !== 'Week 1 - Sidus Heroes Batch. Claim Nidum Mystery Box 2',
                )
                .sort(() => Math.random() - 0.5);

            const filteredShuffledFunctions = shuffledFunctions.map((key) => functions[key].func);

            const modulesCount = filteredShuffledFunctions.length;

            for (let i = 0; i < modulesCount; i++) {
                const func = filteredShuffledFunctions[i];

                const result = await func(account);

                if (i != modulesCount - 1) {
                    printInfo(`Осталось выполнить ${modulesCount - i - 1} модулей на аккаунте\n`);

                    if (result == true) {
                        await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
                    } else {
                        await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, false);
                    }
                }
            }

            printSuccess(`Ended [${index + 1}/${count} - ${account.address}]\n`);

            await sendMessage();
            await resetTextMessage();

            fs.appendFile('assets/completed_accounts.txt', `${line}\n`, 'utf8', (err) => {
                if (err) {
                    printError(`Произошла ошибка при записи в файл: ${err}`);
                }
            });

            index++;

            if (index == count) {
                printSuccess(`Все аккаунты отработаны`);
                rl.close();
                await stopTelegramBot();
                return;
            }

            printInfo(`Ожидаю получение нового аккаунта`);
            await delay(Config.delayBetweenAccounts.min, Config.delayBetweenAccounts.max, true);
        } catch (e) {
            printError(`Произошла ошибка при обработке строки: ${e}\n`);

            await addTextMessage(`❌Аккаунт отработал с ошибкой`);
            await sendMessage();
            await resetTextMessage();

            printInfo(`Ожидаю получение нового аккаунта`);
            await delay(Config.delayBetweenAccounts.min, Config.delayBetweenAccounts.max, true);
            fs.appendFile('assets/uncompleted_accounts.txt', `${line}\n`, 'utf8', (err) => {
                if (err) {
                    printError(`Произошла ошибка при записи в файл: ${err}`);
                }
            });

            index++;
        }
    }
}

async function shuffleData() {
    try {
        const data = fs.readFileSync(privateKeysFilePath, 'utf8');
        const lines = data.split('\n');

        for (let i = lines.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lines[i], lines[j]] = [lines[j], lines[i]];
        }

        await fs.writeFileSync(privateKeysFilePath, lines.join('\n'), 'utf8');
    } catch (error) {
        printError(`Произошла ошибка во время перемешивания данных: ${error}`);
    }
}

main();
