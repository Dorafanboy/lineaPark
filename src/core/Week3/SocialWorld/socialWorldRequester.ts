import axios from 'axios';
import { badgeType, socialWorldUrls } from './socialWorldData';
import { ISocialScanData } from '../../../data/utils/interfaces';
import { printError, printSuccess } from '../../../data/logger/logPrinter';

export async function socialWorldLogin(address: string, message: string, signature: string) {
    console.log(address);
    const response = await axios
        .post(socialWorldUrls.loginUrl, {
            wallet_address: address, // to lower
            message: message,
            signature: signature,
        })
        .then(async (res) => {
            printSuccess(`Успешно получил токен аккаунта`);
            return res;
        })
        .catch((err) => {
            console.log(err);

            return null;
        });

    console.log(response!.data.auth);
    return response!.data.auth;
}

export async function getMintBadgeData(token: string, badgeType: badgeType): Promise<ISocialScanData> {
    const response = await axios
        .post(
            socialWorldUrls.mintBadgeUrl,
            {
                badge_type: badgeType.toString(),
            },
            {
                headers: {
                    authorization: token,
                },
            },
        )
        .then(async (res) => {
            printSuccess(`Успешно получил данные транзакции`);
            return res;
        })
        .catch((err) => {
            console.log(err.response.data);
            console.log(socialWorldUrls.mintBadgeUrl, {
                badge_type: badgeType.toString(),
            });
            return null;
        });

    return {
        signer: response!.data.signer_address,
        url: response!.data.token_uri,
        signature: response!.data.signed_message,
        tokenId: response!.data.token_id,
    };
}
