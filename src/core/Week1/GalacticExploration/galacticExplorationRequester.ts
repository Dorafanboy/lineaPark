import { Hex } from 'viem';
import axios from 'axios';
import { lineaSignUrl } from './galacticExplorationData';
import { ILineaSignData } from '../../../data/utils/interfaces';
import { printError, printSuccess } from '../../../data/logger/logPrinter';

export async function getLineaSign(address: Hex): Promise<ILineaSignData> {
    const response = await axios
        .post(
            lineaSignUrl,
            new URLSearchParams({
                action: 'getLineaSign',
                address: address,
            }),
        )
        .then(async (res) => {
            printSuccess(`Успешно получил signature и deadline аккаунта`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время получения signature и deadline аккаунта`);

            return null;
        });

    return {
        deadline: response!.data.deadline,
        signature: response!.data.signature,
    };
}
