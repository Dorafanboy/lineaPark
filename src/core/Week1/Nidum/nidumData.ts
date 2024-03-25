import {Hex} from "viem";

export const sidusHeroesContractAddress = '0x34be5b8c30ee4fde069dc878989686abe9884470'

export const tokenId = 9

export const sidusHeroesDataUrls = {
    registerUrl: `https://auth.sidusheroes.com/api/v1/users`,
    loginUrl: `https://auth.sidusheroes.com/api/v1/users/`,
    authUrl: `https://auth.sidusheroes.com/api/v1/auth`,
    itemUrl: `https://plsrv.sidusheroes.com/shadow-game-linea/api/v1/item`,
    claimUrl: `https://plsrv.sidusheroes.com/shadow-game-linea/api/v1/claim`
}

export const getRegisterData = (address: Hex) => {
    return {'address': address.toLowerCase()}
}

export const getAuthData = (address: Hex, signature: Hex) => {
    return {
        'address': address.toLowerCase(),
        'signature': signature
    }
}

export const getItemData = (address: Hex) => {
    return {
        'contract': sidusHeroesContractAddress,
        'user': address.toLowerCase(),
        'tokenId': tokenId
    }
}

export const getClaimData = (address: Hex) => {
    return {
        'contract': sidusHeroesContractAddress,
        'user': address.toLowerCase(),
        'tokensData': [
            {
                'tokenId': tokenId,
                "amount": 1
            }
        ]
    }
}

export const getConfigData = (token: string) => {
    return {
        headers: {
            'authorization': `Bearer ${token}`,
        }
    }
}