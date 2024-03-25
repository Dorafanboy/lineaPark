import axios from 'axios';
import {
    getAuthData,
    getClaimData,
    getConfigData,
    getItemData,
    getRegisterData,
    sidusHeroesDataUrls,
} from './nidumData';
import { Hex, PrivateKeyAccount, WalletClient } from 'viem';
import { printError, printSuccess } from '../../../data/logger/logPrinter';

export async function registerAccount(address: Hex) {
    await axios
        .post(sidusHeroesDataUrls.registerUrl, getRegisterData(address))
        .then(async (res) => {
            printSuccess(`Успешно зарегистрирован аккаунт`);
            return res;
        })
        .catch((err) => {
            if (err.response.data.data.includes(`Address already exists`)) {
                printError(
                    `Произошла ошибка во время получения регистрации адреса ${err.response.data.data} (уже зарегистрирован)`,
                );
            }

            return null;
        });
}

export async function getNonce(address: Hex) {
    const response = await axios
        .get(`${sidusHeroesDataUrls.loginUrl}${address.toLowerCase()}`)
        .then(async (res) => {
            printSuccess(`Успешно получен nonce аккаунта`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время получения nonce аккаунта ${err}`);
            return null;
        });

    const nonce = response!.data.data.nonce;

    return nonce;
}

export async function getSignature(nonce: number, account: PrivateKeyAccount, walletClient: WalletClient) {
    const message = `Please sign this message to connect to sidusheroes.com: ${nonce}`;

    const signature = await walletClient.signMessage({
        account,
        message: message,
    });

    return signature;
}

export async function getToken(address: Hex, signature: Hex) {
    const response = await axios
        .post(sidusHeroesDataUrls.authUrl, getAuthData(address, signature))
        .then(async (res) => {
            printSuccess(`Успешно авторизован аккаунт`);
            return res;
        })
        .catch((err) => {
            printError(`Произошла ошибка во время получения token аккаунта ${err}`);
            return null;
        });

    const token = response!.data.data.accessToken;

    return token;
}

export async function realiseItemData(address: Hex, token: string) {
    await axios
        .post(sidusHeroesDataUrls.itemUrl, getItemData(address), getConfigData(token))
        .then(async (res) => {
            printSuccess(`Успешно получены данные о item`);
            return res;
        })
        .catch((err) => {
            if (err.response.data.message.includes(`item for user`)) {
                printError(`Произошла ошибка во время получения item аккаунта ${err.response.data.message}`);
            }

            return null;
        });
}

export async function getTransactionData(address: Hex, token: string) {
    const response = await axios
        .post(sidusHeroesDataUrls.claimUrl, getClaimData(address), getConfigData(token))
        .then(async (res) => {
            printSuccess(`Успешно получен item\n`);
            return res;
        })
        .catch((err) => {
            if (err.response.data.message.includes(`Cannot read properties of null (reading 'tokenId')`)) {
                printError(
                    `Произошла ошибка во время получения claim аккаунта ${err.response.data.message}(токен не заклеймлен/уже была попытка)`,
                );
            }

            return null;
        });

    if (response == null) {
        return null;
    }

    return response!.data;
}
