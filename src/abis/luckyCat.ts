﻿export const luckyCatABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collectionImp",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_catAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "name": "LogException",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_catId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "NewCatAdopted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_sessionIdx",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_sessionAddress",
                "type": "address"
            }
        ],
        "name": "NewSessionEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_sessionIdx",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_rewardIdx",
                "type": "uint256"
            }
        ],
        "name": "NewSessionReward",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_sessionAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_player",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_ticketId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "_txHash",
                "type": "bytes32"
            }
        ],
        "name": "NewTicketEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_sessionIdx",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_sessionAddress",
                "type": "address"
            }
        ],
        "name": "SessionEnded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_sesssionIdx",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_winner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_rewardIdx",
                "type": "uint256"
            }
        ],
        "name": "SessionWinnerEvent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "dataJson",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "tokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "contractType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "claimed",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    }
                ],
                "indexed": true,
                "internalType": "struct ShareStructs.Reward",
                "name": "_sessionReward",
                "type": "tuple"
            }
        ],
        "name": "WinnerClaimReward",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "_currentSessionAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "adoptCat",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "catAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "rewardIdx",
                "type": "uint8"
            }
        ],
        "name": "claim",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            }
        ],
        "name": "claimAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "collectionImp",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "_merkleRoot",
                "type": "bytes32"
            }
        ],
        "name": "createSeeds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllSession",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            }
        ],
        "name": "getSeeds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "rewardIdx",
                "type": "uint8"
            }
        ],
        "name": "getSessionReward",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "dataJson",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "tokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "contractType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "claimed",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    }
                ],
                "internalType": "struct ShareStructs.Reward",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            }
        ],
        "name": "getTotalRewards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "messageHash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "isValidSignature",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "dataJson",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "contractType",
                "type": "uint8"
            }
        ],
        "name": "newReward",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "initialize_data",
                "type": "bytes"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "dataJson",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "tokenAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "contractType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "claimed",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "winner",
                        "type": "address"
                    }
                ],
                "internalType": "struct ShareStructs.Reward[]",
                "name": "rewards",
                "type": "tuple[]"
            }
        ],
        "name": "newSession",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "bytes32[]",
                "name": "txHashes",
                "type": "bytes32[]"
            },
            {
                "internalType": "bytes",
                "name": "_signature",
                "type": "bytes"
            }
        ],
        "name": "newTicket",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "participantIdx",
                "type": "uint256"
            }
        ],
        "name": "participant",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "_address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_weight",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ShareStructs.ParticipantAndWeight",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            }
        ],
        "name": "participantCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "offset",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "limit",
                "type": "uint256"
            }
        ],
        "name": "participants",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "_address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_weight",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ShareStructs.ParticipantAndWeight[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            }
        ],
        "name": "pauseSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            }
        ],
        "name": "pauseStatus",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "proofs",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes32[][]",
                "name": "merkleProofs",
                "type": "bytes32[][]"
            },
            {
                "internalType": "uint256[]",
                "name": "winnerIndices",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "leafIndices",
                "type": "uint256[]"
            }
        ],
        "name": "randomWinners",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collectionImp",
                "type": "address"
            }
        ],
        "name": "setCollectionImp",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSessions",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            }
        ],
        "name": "unpauseSession",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "dataJson",
                "type": "string"
            }
        ],
        "name": "updateSessionParticipantData",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "sessionIdx",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "dataJson",
                "type": "string"
            }
        ],
        "name": "updateSessionTokenData",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]