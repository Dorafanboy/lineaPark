﻿export const checkInABI = [
    {
        "type": "constructor",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "string",
                "name": "_name",
                "internalType": "string"
            },
            {
                "type": "string",
                "name": "_symbol",
                "internalType": "string"
            },
            {
                "type": "uint256",
                "name": "price",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "internalType": "bool",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BatchMetadataUpdate",
        "inputs": [
            {
                "type": "uint256",
                "name": "_fromTokenId",
                "internalType": "uint256",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_toTokenId",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "CheckedIn",
        "inputs": [
            {
                "type": "address",
                "name": "who",
                "internalType": "address",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MetadataUpdate",
        "inputs": [
            {
                "type": "uint256",
                "name": "_tokenId",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "internalType": "address",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Paused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "internalType": "address",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Unpaused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "internalType": "address",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "addMultipleAddressToWhitelist",
        "inputs": [
            {
                "type": "address[]",
                "name": "wallets",
                "internalType": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "addToWhitelist",
        "inputs": [
            {
                "type": "address",
                "name": "wallet",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "approve",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "balanceOf",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "checkIn",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "currentPrice",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "getApproved",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isApprovedForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "operator",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [],
        "name": "mint",
        "inputs": [
            {
                "type": "string",
                "name": "uri",
                "internalType": "string"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "name",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "owner",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "ownerOf",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "paused",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "publicMintIsActive",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "removeFromWhitelist",
        "inputs": [
            {
                "type": "address",
                "name": "wallet",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "renounceOwnership",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "safeTransferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "to",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "safeTransferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "to",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            },
            {
                "type": "bytes",
                "name": "data",
                "internalType": "bytes"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "internalType": "address"
            },
            {
                "type": "bool",
                "name": "approved",
                "internalType": "bool"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setCurrentMintLimit",
        "inputs": [
            {
                "type": "uint256",
                "name": "newLimit",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setCurrentPrice",
        "inputs": [
            {
                "type": "uint256",
                "name": "price",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setPublicMintIsActive",
        "inputs": [
            {
                "type": "bool",
                "name": "isActive",
                "internalType": "bool"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setWhitelistActive",
        "inputs": [
            {
                "type": "bool",
                "name": "active",
                "internalType": "bool"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "supportsInterface",
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId",
                "internalType": "bytes4"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "symbol",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "inputs": [
            {
                "type": "uint256",
                "name": "index",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "index",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "tokenURI",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "totalSupply",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "transferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "to",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "transferOwnership",
        "inputs": [
            {
                "type": "address",
                "name": "newOwner",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "userLimit",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "whitelistAddresses",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "whitelistIsActive",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "withdraw",
        "inputs": []
    }
]