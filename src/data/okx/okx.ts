import { Config, OkxAuth, OkxData } from '../../config';
import { createPublicClient, Hex, http, parseEther } from 'viem';
import { printError, printInfo, printSuccess } from '../logger/logPrinter';
import { delay } from '../helpers/delayer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ccxt, { okx } from 'ccxt';
import { addTextMessage } from '../telegram/telegramBot';
import { linea } from 'viem/chains';
import * as process from 'process';

export async function withdrawAmount(address: Hex) {
    if (OkxData.isUse == false) {
        printInfo(`Настройка пополнения через OKX не включена`);
        return;
    }

    if (OkxData.bridgeData.length <= 0) {
        printError(`Bridge data из OkxData(config) пуста`);
        return;
    }

    printInfo(`Выполняю модуль вывода через OKX`);

    const okxOptions = {
        apiKey: OkxAuth.apiKey,
        secret: OkxAuth.apiSecret,
        password: OkxAuth.apiPassword,
        enableRateLimit: true,
    };

    const exchange: okx = new ccxt.okx(okxOptions);

    console.log(okxOptions);
    let client;
    for (let i = 0; i < OkxData.bridgeData.length; i++) {
        const data = OkxData.bridgeData[i];

        client = createPublicClient({
            chain: linea,
            transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
        });

        const balance = await client.getBalance({
            address: address,
        });

        const isLessBalance: boolean = Number(parseEther(data.withdrawStart).toString()) > Number(balance.toString());

        if (data.withdraw.min != 0 && data.withdraw.max != 0 && isLessBalance) {
            printInfo(`Произвожу вывод с OKX в сеть ${data.networkName}`);

            const randomFixed = Math.floor(
                Math.random() * (data.randomFixed.max - data.randomFixed.min) + data.randomFixed.min,
            );

            const amount = (
                Math.random() * (parseFloat(data.withdraw.max.toString()) - parseFloat(data.withdraw.min.toString())) +
                parseFloat(data.withdraw.min.toString())
            ).toFixed(randomFixed);

            await exchange.withdraw(data.tokenName, amount, address, {
                toAddress: address,
                chainName: data.chainName,
                dest: 4,
                fee: data.okxFee,
                pwd: '-',
                amt: amount,
                network: data.networkName,
            });

            printSuccess(` Withdraw from okx ${amount} ${data.tokenName} to address ${address}`);
            await addTextMessage(`✅OKX:withdraw ${amount} ${data.tokenName}`);
            await delay(Config.delayBetweenAction.min, Config.delayBetweenAction.max, false);
        }
    }

    await delay(OkxData.delayAfterWithdraw.min, OkxData.delayAfterWithdraw.max, true);

    return true;
}
