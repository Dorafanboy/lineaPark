import { formatUnits, Hex, parseEther, parseUnits, PublicClient } from 'viem';
import {IBridgeRange, IFixedRange} from "./interfaces";
import {Config} from "../../config";
import {printInfo} from "../logger/logPrinter";
import {delay} from "../helpers/delayer";

export async function getValue(
    client: PublicClient,
    address: Hex,
    bridgeRange: IBridgeRange,
    fixedRange: IFixedRange,
    isBridge: boolean,
    tokenBalance: bigint = BigInt(-1),
): Promise<bigint> {
    const balance = tokenBalance == BigInt(-1) ? await getBridgeBalance(client, address) : tokenBalance;

    let value = 0,
        fixed,
        currentTry = 0;
    let weiValue: bigint = parseEther('0');
    const decimals = isBridge ? 18 : 6;

    if (balance == parseEther('0')) {
        return BigInt(-1);
    }

    while (weiValue > balance || weiValue == parseEther('0')) {
        if (currentTry < Config.retryCount) {
            value = Math.random() * (bridgeRange.max - bridgeRange.min) + bridgeRange.min;
            fixed = Math.floor(Math.random() * (fixedRange.max - fixedRange.min) + fixedRange.min);

            weiValue = parseEther(value.toFixed(fixed));
            const compareValue = isBridge ? weiValue : parseUnits(value.toFixed(fixed), 6);

            if (compareValue > balance) {
                printInfo(
                    `Полученное значение для ${isBridge ? 'бриджа' : 'свапа'} ${value.toFixed(
                        fixed,
                    )} больше чем баланс ${Number(formatUnits(balance, decimals)).toFixed(fixed)}`,
                );

                currentTry++;
                await delay(Config.delayBetweenAction.min, Config.delayBetweenAction.max, false);
            } else {
                return isBridge ? weiValue : parseUnits(value.toFixed(fixed), 6);
            }
        } else {
            printInfo(
                `Не было найдено необходимого кол-во средств для ${isBridge ? 'бриджа' : 'свапа'} в сети ${
                    client.chain?.name
                }\n`,
            );

            return BigInt(-1);
        }
    }

    return isBridge ? weiValue : parseUnits(value.toFixed(fixed), 6);
}

export async function getBridgeBalance(client: PublicClient, address: Hex) {
    const balance = await client.getBalance({
        address: address,
    });

    await checkZeroBalance(client, balance);

    return balance;
}

async function checkZeroBalance(client: PublicClient, balance: bigint, tokenName: string = '') {
    if (balance == parseEther('0')) {
        printInfo(`Баланс аккаунта в токене ${tokenName} сети ${client.chain?.name} равен нулю\n`);

        await delay(1, 2, false);

        return parseEther('0');
    }
}
