﻿export const rubyScoreABI = [
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'modules',
                type: 'address[]',
            },
            {
                internalType: 'address',
                name: 'router',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'ArrayLengthMismatch',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidAttestationFee',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidCertificateId',
        type: 'error',
    },
    {
        inputs: [],
        name: 'OnlyPortalOwner',
        type: 'error',
    },
    {
        inputs: [],
        name: 'WithdrawFail',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ZeroAddressCheck',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'bytes32[]',
                name: 'schemaIds',
                type: 'bytes32[]',
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'attestationFees',
                type: 'uint256[]',
            },
        ],
        name: 'FeesSet',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Paused',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Unpaused',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'module',
                type: 'address',
            },
        ],
        name: 'addModule',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'schemaId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint64',
                        name: 'expirationDate',
                        type: 'uint64',
                    },
                    {
                        internalType: 'bytes',
                        name: 'subject',
                        type: 'bytes',
                    },
                    {
                        internalType: 'bytes',
                        name: 'attestationData',
                        type: 'bytes',
                    },
                ],
                internalType: 'struct AttestationPayload',
                name: 'attestationPayload',
                type: 'tuple',
            },
            {
                internalType: 'bytes[]',
                name: 'validationPayloads',
                type: 'bytes[]',
            },
        ],
        name: 'attest',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'schemaId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint64',
                        name: 'expirationDate',
                        type: 'uint64',
                    },
                    {
                        internalType: 'bytes',
                        name: 'subject',
                        type: 'bytes',
                    },
                    {
                        internalType: 'bytes',
                        name: 'attestationData',
                        type: 'bytes',
                    },
                ],
                internalType: 'struct AttestationPayload',
                name: 'attestationPayload',
                type: 'tuple',
            },
            {
                internalType: 'bytes[]',
                name: 'validationPayload',
                type: 'bytes[]',
            },
        ],
        name: 'attestRubyscore',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        name: 'attestationFees',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'attestationRegistry',
        outputs: [
            {
                internalType: 'contract IAttestationRegistry',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'schemaId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint64',
                        name: 'expirationDate',
                        type: 'uint64',
                    },
                    {
                        internalType: 'bytes',
                        name: 'subject',
                        type: 'bytes',
                    },
                    {
                        internalType: 'bytes',
                        name: 'attestationData',
                        type: 'bytes',
                    },
                ],
                internalType: 'struct AttestationPayload[]',
                name: 'attestationsPayloads',
                type: 'tuple[]',
            },
            {
                internalType: 'bytes[][]',
                name: 'validationPayloads',
                type: 'bytes[][]',
            },
        ],
        name: 'bulkAttest',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32[]',
                name: 'attestationIds',
                type: 'bytes32[]',
            },
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'schemaId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint64',
                        name: 'expirationDate',
                        type: 'uint64',
                    },
                    {
                        internalType: 'bytes',
                        name: 'subject',
                        type: 'bytes',
                    },
                    {
                        internalType: 'bytes',
                        name: 'attestationData',
                        type: 'bytes',
                    },
                ],
                internalType: 'struct AttestationPayload[]',
                name: 'attestationsPayloads',
                type: 'tuple[]',
            },
            {
                internalType: 'bytes[][]',
                name: 'validationPayloads',
                type: 'bytes[][]',
            },
        ],
        name: 'bulkReplace',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32[]',
                name: 'attestationIds',
                type: 'bytes32[]',
            },
        ],
        name: 'bulkRevoke',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'bulkStatus',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        name: 'certificates',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'schemaId',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'checkFee',
        outputs: [],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'feeStatus',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getAttester',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getModules',
        outputs: [
            {
                internalType: 'address[]',
                name: '',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'moduleRegistry',
        outputs: [
            {
                internalType: 'contract IModuleRegistry',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'modules',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paused',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'portalRegistry',
        outputs: [
            {
                internalType: 'contract IPortalRegistry',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'removeModules',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'attestationId',
                type: 'bytes32',
            },
            {
                components: [
                    {
                        internalType: 'bytes32',
                        name: 'schemaId',
                        type: 'bytes32',
                    },
                    {
                        internalType: 'uint64',
                        name: 'expirationDate',
                        type: 'uint64',
                    },
                    {
                        internalType: 'bytes',
                        name: 'subject',
                        type: 'bytes',
                    },
                    {
                        internalType: 'bytes',
                        name: 'attestationData',
                        type: 'bytes',
                    },
                ],
                internalType: 'struct AttestationPayload',
                name: 'attestationPayload',
                type: 'tuple',
            },
            {
                internalType: 'bytes[]',
                name: 'validationPayloads',
                type: 'bytes[]',
            },
        ],
        name: 'replace',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'attestationId',
                type: 'bytes32',
            },
        ],
        name: 'revoke',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'router',
        outputs: [
            {
                internalType: 'contract IRouter',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bool',
                name: 'fee',
                type: 'bool',
            },
            {
                internalType: 'bool',
                name: 'bulk',
                type: 'bool',
            },
        ],
        name: 'setCheckStatuses',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32[]',
                name: 'schemaIds',
                type: 'bytes32[]',
            },
            {
                internalType: 'uint256[]',
                name: '_attestationFees',
                type: 'uint256[]',
            },
        ],
        name: 'setFees',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32[]',
                name: 'schemaIds',
                type: 'bytes32[]',
            },
            {
                internalType: 'bool[]',
                name: 'certificateStatuses',
                type: 'bool[]',
            },
        ],
        name: 'setUpCertificates',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceID',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address payable',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
