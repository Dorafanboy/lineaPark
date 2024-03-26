import { parseUnits } from 'viem';

export const trustaMessage = `Please sign this message to confirm you are the owner of this address and Sign in to TrustGo App`;

export const trustaContractAddress = `0xb86b3e16b6b960fd822849fd4b4861d73805879b`;

export const levelAAttestationPrice = parseUnits('8', 14);
export const levelBAttestationPrice = parseUnits('4', 14);

export const trustaUrls = {
    getTokenUrl: `https://mp.trustalabs.ai/accounts/check_signed_message`,
    getInviteInfo: `https://mp.trustalabs.ai/accounts/invite_info`,
    getCalldata: `https://mp.trustalabs.ai/accounts/attest_calldata`,
};

export const levelBMinScore = 20;
export const levelAMinScore = -2;
