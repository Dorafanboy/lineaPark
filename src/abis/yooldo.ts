export const yooldoABI = [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "name": "AccessControlBadConfirmation",
        "type": "error",
        "inputs": []
    },
    {
        "name": "AccessControlUnauthorizedAccount",
        "type": "error",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "neededRole",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ]
    },
    {
        "name": "AddressEmptyCode",
        "type": "error",
        "inputs": [
            {
                "name": "target",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "name": "ERC1967InvalidImplementation",
        "type": "error",
        "inputs": [
            {
                "name": "implementation",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "name": "ERC1967NonPayable",
        "type": "error",
        "inputs": []
    },
    {
        "name": "EnforcedPause",
        "type": "error",
        "inputs": []
    },
    {
        "name": "ExpectedPause",
        "type": "error",
        "inputs": []
    },
    {
        "name": "FailedInnerCall",
        "type": "error",
        "inputs": []
    },
    {
        "name": "IncorrectNativeTokenAmount",
        "type": "error",
        "inputs": []
    },
    {
        "name": "InvalidInitialization",
        "type": "error",
        "inputs": []
    },
    {
        "name": "NotInitializing",
        "type": "error",
        "inputs": []
    },
    {
        "name": "ReentrancyGuardReentrantCall",
        "type": "error",
        "inputs": []
    },
    {
        "name": "UUPSUnauthorizedCallContext",
        "type": "error",
        "inputs": []
    },
    {
        "name": "UUPSUnsupportedProxiableUUID",
        "type": "error",
        "inputs": [
            {
                "name": "slot",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ]
    },
    {
        "name": "Initialized",
        "type": "event",
        "inputs": [
            {
                "name": "version",
                "type": "uint64",
                "indexed": false,
                "internalType": "uint64"
            }
        ],
        "anonymous": false
    },
    {
        "name": "Paused",
        "type": "event",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "name": "RoleAdminChanged",
        "type": "event",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "previousAdminRole",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "newAdminRole",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "name": "RoleGranted",
        "type": "event",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "name": "RoleRevoked",
        "type": "event",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "indexed": true,
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "name": "Transfer",
        "type": "event",
        "inputs": [
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "name": "Unpaused",
        "type": "event",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "name": "Upgraded",
        "type": "event",
        "inputs": [
            {
                "name": "implementation",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "name": "DEFAULT_ADMIN_ROLE",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "FUNDER_ROLE",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "UPGRADE_INTERFACE_VERSION",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "claim",
        "type": "function",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "name": "distributeReward",
        "type": "function",
        "inputs": [
            {
                "name": "recipients",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "amounts",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "name": "getRoleAdmin",
        "type": "function",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "grantRole",
        "type": "function",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "name": "hasRole",
        "type": "function",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "initialize",
        "type": "function",
        "inputs": [
            {
                "name": "_admin",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_funder",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "name": "paused",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "proxiableUUID",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "refresh",
        "type": "function",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "name": "renounceRole",
        "type": "function",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "callerConfirmation",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "name": "revokeRole",
        "type": "function",
        "inputs": [
            {
                "name": "role",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "account",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "name": "standUp",
        "type": "function",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "name": "supportsInterface",
        "type": "function",
        "inputs": [
            {
                "name": "interfaceId",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "tokenAddress",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "updateTokenAddress",
        "type": "function",
        "inputs": [
            {
                "name": "_tokenAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_nativeTokenAmount1",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_nativeTokenAmount2",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_nativeTokenAmount3",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "name": "upgradeToAndCall",
        "type": "function",
        "inputs": [
            {
                "name": "newImplementation",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    }
]