import axios from 'axios';
import { PrivateKeyAccount, WalletClient } from 'viem';
import { trustaMessage, trustaUrls } from './trustaData';
import { attestType, ITrustaData } from '../../../data/utils/interfaces';
import { printError, printSuccess } from '../../../data/logger/logPrinter';
import * as console from 'console';

export async function getToken(account: PrivateKeyAccount, walletClient: WalletClient) {
    const signature = await walletClient.signMessage({
        account,
        message: trustaMessage,
    });

    const response = await axios
        .post(trustaUrls.getTokenUrl, {
            mode: 'evm',
            address: account.address,
            message: trustaMessage,
            signature: signature,
            invite_from: {
                from: '0',
                code: 'EPR0QD9W52I8',
            },
        })
        .then(async (res) => {
            printSuccess(`Успешно авторизировал аккаунт`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время авторизирования аккаунта ${err}`);
            return null;
        });

    return response!.data.data.token;
}

export async function checkInviteInfo(token: string) {
    await axios
        .get(trustaUrls.getInviteInfo, {
            headers: {
                Authorization: `TOKEN ${token}`,
            },
        })
        .then(async (res) => {
            printSuccess(`Успешно проверил check invite аккаунт`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время check invite аккаунта ${err}`);
            return null;
        });
}

export async function getCalldataTransaction(token: string, attestType: attestType): Promise<ITrustaData> {
    const response = await axios
        .get(trustaUrls.getCalldata, {
            params: {
                attest_type: attestType.toString(),
            },
            headers: {
                Authorization: `TOKEN ${token}`,
            },
        })
        .then(async (res) => {
            printSuccess(`Успешно получил calldata транзакции`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во получения calldata аккаунта ${err}`);
            return null;
        });

    return {
        calldata: response!.data.data.calldata.data,
        score: response!.data.data.message.score,
    };
}
