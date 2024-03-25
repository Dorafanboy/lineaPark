import { delay } from './delayer';
import { createPublicClient, formatGwei, http, PublicClient } from 'viem';
import {printInfo} from "../logger/logPrinter";
import {linea} from "viem/chains";
import {Config} from "../../config";

export async function checkGwei() {
    printInfo(`Выполняю проверку Gwei`);

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    let gwei = await lineaClient.getGasPrice();

    while (
        Number(formatGwei(gwei)).toFixed(2) > Number(Config.maxGwei).toFixed(2)
    ) {
        if (Number(formatGwei(gwei)).toFixed(2) > Number(Config.maxGwei).toFixed(2)) {
            printInfo(
                `Газ в сети Linea высокий: ${Number(formatGwei(gwei)).toFixed(2)} > ${Config.maxGwei}(from config)\n`,
            );
            
            await delay(Config.delayBetweenGweiCheck.min, Config.delayBetweenGweiCheck.max, true);
        } 

        gwei = await lineaClient.getGasPrice();
    }

    printInfo(
        `Гвей позволяет продолжить работу. Linea: ${Number(formatGwei(gwei)).toFixed(2)} gwei`,
    );
}
