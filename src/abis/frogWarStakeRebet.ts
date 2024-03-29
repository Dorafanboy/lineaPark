export const frogWarStakeRebetABI = [
    {
        type: 'constructor',
        name: '',
        inputs: [
            {
                type: 'address',
                name: 'pickaxeContractAddress',
                internalType: 'contract IERC1155',
            },
            {
                type: 'address',
                name: 'gemsContractAddress',
                internalType: 'contract IERC20',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'calculateRewards',
        inputs: [
            {
                type: 'address',
                name: '_player',
                internalType: 'address',
            },
        ],
        outputs: [
            {
                type: 'uint256',
                name: '_rewards',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'claim',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'onERC1155BatchReceived',
        inputs: [
            {
                type: 'address',
                name: '',
                internalType: 'address',
            },
            {
                type: 'address',
                name: '',
                internalType: 'address',
            },
            {
                type: 'uint256[]',
                name: '',
                internalType: 'uint256[]',
            },
            {
                type: 'uint256[]',
                name: '',
                internalType: 'uint256[]',
            },
            {
                type: 'bytes',
                name: '',
                internalType: 'bytes',
            },
        ],
        outputs: [
            {
                type: 'bytes4',
                name: '',
                internalType: 'bytes4',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'onERC1155Received',
        inputs: [
            {
                type: 'address',
                name: '',
                internalType: 'address',
            },
            {
                type: 'address',
                name: '',
                internalType: 'address',
            },
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
            {
                type: 'uint256',
                name: '',
                internalType: 'uint256',
            },
            {
                type: 'bytes',
                name: '',
                internalType: 'bytes',
            },
        ],
        outputs: [
            {
                type: 'bytes4',
                name: '',
                internalType: 'bytes4',
            },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'pickaxeNftCollection',
        inputs: [],
        outputs: [
            {
                type: 'address',
                name: '',
                internalType: 'contract IERC1155',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'playerLastUpdate',
        inputs: [
            {
                type: 'address',
                name: '',
                internalType: 'address',
            },
        ],
        outputs: [
            {
                type: 'bool',
                name: 'isData',
                internalType: 'bool',
            },
            {
                type: 'uint256',
                name: 'value',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'playerPickaxe',
        inputs: [
            {
                type: 'address',
                name: '',
                internalType: 'address',
            },
        ],
        outputs: [
            {
                type: 'bool',
                name: 'isData',
                internalType: 'bool',
            },
            {
                type: 'uint256',
                name: 'value',
                internalType: 'uint256',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'rewardsToken',
        inputs: [],
        outputs: [
            {
                type: 'address',
                name: '',
                internalType: 'contract IERC20',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'stake',
        inputs: [
            {
                type: 'uint256',
                name: '_tokenId',
                internalType: 'uint256',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'supportsInterface',
        inputs: [
            {
                type: 'bytes4',
                name: 'interfaceId',
                internalType: 'bytes4',
            },
        ],
        outputs: [
            {
                type: 'bool',
                name: '',
                internalType: 'bool',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'withdraw',
        inputs: [],
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
