export const galacticExplorationContractAddress = '0x281A95769916555D1C97036E0331b232b16EdABC';
export const galacticExplorationClaimTravelbagContractAddress = '0xd41ac492fedc671eb965707d1dedad4eb7b6efc5';

const message =
    'Welcome to Town Story! \n\nClick to sign in and accept the Town Story\nTerms of Service:\nhttps://townstory.io/\n\nThis request will not trigger a blockchain\ntransaction or cost any gas fees.\n\nYour authentication status will reset after\neach session.\n\nWallet address:\n';

export const getNonce = () => Math.floor(Date.now() / 8.64e7);

export const getMessage = (address: string, nonce: number) => {
    return message + address + '\n\nNonce: ' + nonce;
};

export const lineaSignUrl = 'https://townstory.io//api';
