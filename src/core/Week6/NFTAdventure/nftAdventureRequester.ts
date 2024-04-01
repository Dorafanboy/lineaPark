import axios from 'axios';
import { INftAdventureData } from '../../../data/utils/interfaces';
import { nftAdventureRegisterUrl } from './nftAdventureData';
import { getAddress } from 'viem';
import { printError, printSuccess } from '../../../data/logger/logPrinter';

export async function nftAdventureGetToken(
    email: string,
    username: string,
    password: string,
): Promise<INftAdventureData> {
    const response = await axios
        .post(
            nftAdventureRegisterUrl,
            {
                username: username,
                email: email,
                referralCode: '',
                password: password,
            },
            {
                headers: {
                    authorization: 'Bearer null',
                },
            },
        )
        .then(async (res) => {
            printSuccess(`Успешно зарегистрирован аккаунт`);
            return res;
        })
        .catch((err) => {
            if (err.response.data.message.includes(`Internal server error`)) {
                printError(`Произошла ошибка во время регистрации пользователя.`);
            }

            return null;
        });

    return {
        token: response!.data.token,
        walletAddress: getAddress(response!.data.user.walletAddress),
    };
}
