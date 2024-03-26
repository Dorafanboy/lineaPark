import axios from 'axios';
import { Hex, PrivateKeyAccount, WalletClient } from 'viem';
import { printError, printSuccess } from '../../../data/logger/logPrinter';
import { authRubyScoreMessage, rubyScoreUrls } from './rubyScoreData';
import { IRubyScoreData } from '../../../data/utils/interfaces';

export async function auth(account: PrivateKeyAccount, walletClient: WalletClient) {
    const signature = await walletClient.signMessage({
        account,
        message: authRubyScoreMessage,
    });

    const response = await axios
        .post(
            `${rubyScoreUrls.signatureUrl}${signature}&message=+A+signature+is+required+for+authorization+on+the+platform+and+does+not+pose+a+threat+to+users!&wallet=${account.address}`,
            '',
        )
        .then(async (res) => {
            printSuccess(`Успешно авторизировал аккаунт`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время авторизирования аккаунта ${err}`);
            return null;
        });

    return response!.data.result.token;
}

export async function getScore(address: Hex) {
    const response = await axios
        .get(`${rubyScoreUrls.profileUrl}${address}/score`, {
            params: {
                attestation: '1',
            },
        })
        .then(async (res) => {
            printSuccess(`Успешно получил score аккаунта - ${res.data.result.linea.score}`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время получения score аккаунта ${err}`);
            return null;
        });

    return response!.data.result.linea.score;
}

export async function checkAttestation(address: Hex, token: string) {
    await axios
        .post(`${rubyScoreUrls.checkUrl}`, '', {
            params: {
                wallet: address,
                project: 'linea',
            },
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        .then(async (res) => {
            printSuccess(`Успешно выполнил check аккаунта`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время check аккаунта ${err}`);
            return null;
        });
}

export async function getTransactionData(token: string): Promise<IRubyScoreData> {
    const response = await axios
        .post(`${rubyScoreUrls.claimUrl}`, '', {
            params: {
                project: 'linea',
            },
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        .then(async (res) => {
            printSuccess(`Успешно выполнил claim аккаунта`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время claim аккаунта ${err}`);
            return null;
        });

    return response!.data.result;
}
