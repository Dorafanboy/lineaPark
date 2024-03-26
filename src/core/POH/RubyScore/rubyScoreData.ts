import { parseUnits } from 'viem';

export const authRubyScoreMessage = ` A signature is required for authorization on the platform and does not pose a threat to users!`;

export const rubyScoreUrls = {
    signatureUrl: `https://rubyscore.io/api/auth/login?signature=`,
    profileUrl: `https://rubyscore.io/api/profile/`,
    checkUrl: `https://rubyscore.io/api/attestation/check`,
    claimUrl: `https://rubyscore.io/api/attestation/claim`,
};

export const rubyScoreContractAddress = `0xB9cC0Bb020cF55197C4C3d826AC87CAdba51f272`;

export const rubyScoreAttestationPrice = parseUnits('5', 14);

export const minScore = 15;
