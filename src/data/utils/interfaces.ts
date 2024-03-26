import { Hex, PrivateKeyAccount } from 'viem';

export type workMode = 'POH' | 'quest';

export interface IBridgeRange {
    readonly min: number;
    readonly max: number;
}

export interface IFixedRange extends IBridgeRange {}

export interface IDelayRange extends IBridgeRange {}

export interface IOkx {
    readonly okxFee: string;
    readonly chainName: string;
    readonly networkName: string;
    readonly tokenName: string;
    readonly withdraw: IBridgeRange;
    readonly randomFixed: IFixedRange;
    readonly withdrawStart: string;
}

export interface IFunction {
    readonly func: (account: PrivateKeyAccount) => Promise<boolean>;
    readonly isUse: boolean;
    readonly words?: string[];
}

export interface IRpc {
    readonly chain: string;
    readonly url: string;
}

export interface IDmailData {
    readonly to: string;
    readonly amount: string;
}

export interface IRubyScoreData {
    attestationParams: {
        schemaId: string;
        expirationDate: number;
        subject: string;
        attestationData: string;
    };
    signature: string;
}

export type attestType = 'media' | 'humanity';

export interface ITrustaData {
    readonly calldata: Hex;
    readonly score: number;
}
