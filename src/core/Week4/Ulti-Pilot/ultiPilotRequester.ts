import { ultiPilotUrls } from './ultiPilotData';
import axios from 'axios';
import { printError, printSuccess } from '../../../data/logger/logPrinter';
import { IUltiPilotData } from '../../../data/utils/interfaces';

export async function ultiPilotGetMessage(address: string) {
    const response = await axios
        .post(
            ultiPilotUrls.signatureUrl,
            {
                address: address,
                feature: 'assets-wallet-login',
                chainId: 59144,
            },
            {
                headers: {
                    authority: 'account-api.ultiverse.io',
                    origin: 'https://pilot-linea.ultiverse.io',
                    referer: 'https://pilot-linea.ultiverse.io/',
                    'ul-auth-api-key': 'YWktYWdlbnRAZFd4MGFYWmxjbk5s',
                },
            },
        )
        .then(async (res) => {
            printSuccess(`Успешно получил message account`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время получения message аккаунта`);
            console.log(err.response.data);
            return null;
        });

    console.log(response!.data);
    return response!.data.data.message;
}

export async function ultiPilotGetToken(address: string, signature: string) {
    const response = await axios
        .post(
            ultiPilotUrls.signInUrl,
            {
                address: address,
                signature: signature,
                chainId: 59144,
            },
            {
                headers: {
                    authority: 'account-api.ultiverse.io',
                    origin: 'https://pilot-linea.ultiverse.io',
                    referer: 'https://pilot-linea.ultiverse.io/',
                    'ul-auth-api-key': 'YWktYWdlbnRAZFd4MGFYWmxjbk5s',
                },
            },
        )
        .then(async (res) => {
            printSuccess(`Успешно получил access token аккаунта`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время получения access token аккаунта`);

            return null;
        });

    console.log(response!.data.data.access_token);
    return response!.data.data.access_token;
}

export async function getMintData(token: string, address: string): Promise<IUltiPilotData> {
    const response = await axios
        .post(
            ultiPilotUrls.mintUrl,
            {
                meta: ['Adventurous', 'Curious', 'Independent', 'Humorous', 'Altruistic'],
                chainId: 59144,
            },
            {
                headers: {
                    authority: 'account-api.ultiverse.io',
                    origin: 'https://pilot-linea.ultiverse.io',
                    referer: 'https://pilot-linea.ultiverse.io/',
                    'ul-auth-api-key': 'YWktYWdlbnRAZFd4MGFYWmxjbk5s',
                    'ul-auth-address': address,
                    'ul-auth-token': token,
                },
            },
        )
        .then(async (res) => {
            printSuccess(`Успешно получил transaction data аккаунта`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время получения transaction data аккаунта`);
            console.log(err.response);
            return null;
        });

    return {
        deadline: response!.data.data.deadline,
        attributeHash: response!.data.data.attributeHash,
        signature: response!.data.data.signature,
    };
}
