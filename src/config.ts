import { IBridgeRange, IDelayRange, IFixedRange, IOkx, IRpc } from './data/utils/interfaces';

export class TelegramData {
    public static readonly telegramBotId: string = ''; // айди телеграм бота, которому будут отправляться логи
    public static readonly telegramId: string = ''; // телеграм айди @my_id_bot у него можно получить id
}

export class OkxData {
    public static readonly isUse: boolean = false; // использовать ли Okx в софте
    public static readonly bridgeData: IOkx[] = [
        {
            okxFee: '0.8',
            chainName: 'ETH-Linea',
            networkName: 'Linea',
            tokenName: 'ETH',
            withdraw: { min: 0.01, max: 0.015 },
            randomFixed: { min: 2, max: 4 },
            withdrawStart: '0.5',
        },
    ];

    public static readonly delayAfterWithdraw: IBridgeRange = { min: 4, max: 5 }; // сколько ожидать времени (в минутах) после вывода с окекса
}

export class Config {
    public static readonly IsShuffleWallets: boolean = true; // перемешивать ли строки в текстовом файле для приватных ключей
    public static readonly retryCount: number = 15; // сколько будет попыток в случае ошибки
    public static readonly delayBetweenAction: IDelayRange = { min: 1, max: 5 }; // задержка между действиями (в секундах) в случае ошибки
    public static readonly delayBetweenAccounts: IDelayRange = { min: 15, max: 25 }; // задержка между аккаунтами (в минутах)
    public static readonly delayBetweenModules: IDelayRange = { min: 0.3, max: 1 }; // задержка между выполнением квестов (в минутах)
    public static readonly delayBetweenGweiCheck: IDelayRange = { min: 0.3, max: 1 }; // задержка перед получением нового гвея (в минутах)
    public static readonly maxGwei = 15; // до какого гвея будет использоваться скрипт
    public static readonly rpc: IRpc = { chain: 'Linea', url: 'https://rpc.linea.build' }; // менять только содержимое внутри rpcUrl, если рпс не нужно указывать, то оставить ''
}

export class Week1GamerBoomSignProof {
    // 15 lxp ~0.07$ GamerBoom: Genesis Testing with Linea
    public static readonly isUse: boolean = true;
}

export class Week1GamerBoomMintNFT {
    // 25 lxp ~0.3$ GamerBoom: Genesis Testing with Linea
    public static readonly isUse: boolean = true;
}

export class Week1NidumBatch {
    // 15 lxp ~0.07$ Claim Nidum Mystery Box 2
    public static readonly isUse: boolean = true;
}

export class Week1NidumBurn {
    // 15 lxp ~0.07$ Claim Nidum Mystery Box 2
    public static readonly isUse: boolean = true;
}

export class Week3SendingMe {
    // 20 lxp ~0.04$ Linea Park - SendingMe
    public static readonly isUse: boolean = true;
    public static readonly ethTransferAmount: { range: IBridgeRange; fixed: IFixedRange } = {
        range: { min: 0.000005, max: 0.000008 },
        fixed: { min: 7, max: 10 },
    }; // сколько eth отправлять на адрес
}

export class Week2Yooldo {
    // 25 lxp ~0.3$ Yooldo: Trouble Punk
    public static readonly isUse: boolean = true;
}

export class Week3BitAvatar {
    // 35 lxp ~0.07$ BitAvatar
    public static readonly isUse: boolean = true;
}

export class Week3ReadOn {
    // 25 lxp ~0.07$ ReadON
    public static readonly isUse: boolean = true;
}

export class Week3GamicHub {
    // 40 lxp ~0.15$ Into the Gamic Hub
    public static readonly isUse: boolean = true;
    public static readonly ethTransferAmount: { range: IBridgeRange; fixed: IFixedRange } = {
        range: { min: 0.000005, max: 0.000008 },
        fixed: { min: 7, max: 10 },
    }; // сколько eth оборачивать
}

export class Week3Dmail {
    // 25 lxp ~0.07$ Send Email from Linea
    public static readonly isUse: boolean = true;
    public static readonly wordsCount: number[] = [2, 5]; // количество слов в сообщении
}

export class Week4LuckyCat {
    // 20 lxp ~0.3$ We're Up All Nite To Get Lucky Cat
    public static readonly isUse: boolean = true;
}

export class Week5Battlemon {
    // 40 lxp ~0.28$ Battlemon
    public static readonly isUse: boolean = true;
}

export class Week5Omnizone {
    // 40 lxp ~0.35$ Omnizone Attraction at Linea Park
    public static readonly isUse: boolean = false;
}
