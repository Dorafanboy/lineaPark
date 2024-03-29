export const zaceABI = [
    {
        type: 'error',
        inputs: [
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'AlreadyBoundReferrer',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'lastCheckinAt',
                internalType: 'uint64',
                type: 'uint64',
            },
        ],
        name: 'AlreadyCheckedIn',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'taskId',
                internalType: 'uint8',
                type: 'uint8',
            },
        ],
        name: 'AlreadyClaimedTask',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: 'cardIndex',
                internalType: 'uint8',
                type: 'uint8',
            },
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'AlreadyRevealed',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'AlreadyShuffled',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'seriesId',
                internalType: 'uint64',
                type: 'uint64',
            },
        ],
        name: 'DuplicateDeck',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'GameNotOngoing',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'requiredAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: 'actualAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'InsufficientCash',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'requiredAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: 'actualAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'InsufficientCashAllowance',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'requiredAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: 'actualAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'InsufficientCashBalance',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'requiredAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: 'actualAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'InsufficientChips',
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidAuthorizationSignature',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'signedAt',
                internalType: 'uint64',
                type: 'uint64',
            },
        ],
        name: 'InvalidAuthorizationTimeout',
    },
    {
        type: 'error',
        inputs: [],
        name: 'InvalidBettingOption',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'currentStage',
                internalType: 'enum IHoldemErrors.GameStage',
                type: 'uint8',
            },
        ],
        name: 'InvalidGameStage',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'InvalidMaskedDeck',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'InvalidReferrer',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'referrerV2',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'InvalidReferrerV2',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: 'cardIndex',
                internalType: 'uint8',
                type: 'uint8',
            },
        ],
        name: 'InvalidRevealProof',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'newValue',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'InvalidSettingValue',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'InvalidShuffleProof',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'InvalidTableStatus',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'taskId',
                internalType: 'uint8',
                type: 'uint8',
            },
        ],
        name: 'InvalidTaskId',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'fullAt',
                internalType: 'uint64',
                type: 'uint64',
            },
        ],
        name: 'LineupFull',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'playerCount',
                internalType: 'uint8',
                type: 'uint8',
            },
        ],
        name: 'LineupNotFull',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'cardIndexes',
                internalType: 'uint8[]',
                type: 'uint8[]',
            },
        ],
        name: 'MissingRevealToken',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'NotController',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'NotPlaying',
    },
    {
        type: 'error',
        inputs: [],
        name: 'NotYourTurn',
    },
    {
        type: 'error',
        inputs: [],
        name: 'PermissionDenied',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'PlayerAlreadyInTable',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'PlayerHasLeftDueToOvertime',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'readyAt',
                internalType: 'uint64',
                type: 'uint64',
            },
        ],
        name: 'PlayerHasReady',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'PlayerNotWaiting',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'minRaise',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'RaiseTooSmall',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'TableAlreadyFinished',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'TableNotExists',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'TableNotPending',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'taskId',
                internalType: 'uint8',
                type: 'uint8',
            },
        ],
        name: 'TaskNotCompleted',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'wallet',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'WalletInLineup',
    },
    {
        type: 'error',
        inputs: [
            {
                name: 'wallet',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'WalletInUse',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'spender',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'Approval',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !0,
            },
            {
                name: 'stage',
                internalType: 'enum IHoldemErrors.GameStage',
                type: 'uint8',
                indexed: !1,
            },
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
                indexed: !0,
            },
            {
                name: 'position',
                internalType: 'uint8',
                type: 'uint8',
                indexed: !0,
            },
            {
                name: 'option',
                internalType: 'enum AqHoldemCoreInterface.BettingOption',
                type: 'uint8',
                indexed: !1,
            },
            {
                name: 'callAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
            {
                name: 'raiseAmount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'Bet',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'CashReferralBonusClaimed',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'timestamp',
                internalType: 'uint64',
                type: 'uint64',
                indexed: !1,
            },
        ],
        name: 'Checkin',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !0,
            },
            {
                name: 'position',
                internalType: 'uint8',
                type: 'uint8',
                indexed: !1,
            },
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
                indexed: !1,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
            {
                name: 'fee',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'ClaimedPot',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !0,
            },
            {
                name: 'dealer',
                internalType: 'address',
                type: 'address',
                indexed: !1,
            },
        ],
        name: 'DeckShuffled',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'token',
                internalType: 'address',
                type: 'address',
                indexed: !1,
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'Deposit',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
                indexed: !0,
            },
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
        ],
        name: 'PlayerJoined',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
                indexed: !0,
            },
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'sender',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
        ],
        name: 'PlayerLeft',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'PointReferralBonusClaimed',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'PointsAwarded',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
        ],
        name: 'ReferralLv1Added',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
        ],
        name: 'ReferralLv2Added',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
        ],
        name: 'ReferralRelationSettled',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !0,
            },
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'handRank',
                internalType: 'enum AqHoldemCoreInterface.HandRanking',
                type: 'uint8',
                indexed: !1,
            },
            {
                name: 'kickers',
                internalType: 'uint64',
                type: 'uint64',
                indexed: !1,
            },
        ],
        name: 'ShowdownResult',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
                indexed: !0,
            },
            {
                name: 'tableAddress',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'starter',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'players',
                internalType: 'address[]',
                type: 'address[]',
                indexed: !1,
            },
        ],
        name: 'StartTableFailure',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
                indexed: !0,
            },
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !0,
            },
            {
                name: 'pots',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'TableGameEnded',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
                indexed: !0,
            },
            {
                name: 'seriesId',
                internalType: 'uint64',
                type: 'uint64',
                indexed: !0,
            },
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !0,
            },
        ],
        name: 'TableGameStarted',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
                indexed: !0,
            },
            {
                name: 'seriesId',
                internalType: 'uint64',
                type: 'uint64',
                indexed: !0,
            },
            {
                name: 'startedAt',
                internalType: 'uint64',
                type: 'uint64',
                indexed: !1,
            },
            {
                name: 'players',
                internalType: 'address[]',
                type: 'address[]',
                indexed: !1,
            },
        ],
        name: 'TableSeriesStarted',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
                indexed: !0,
            },
            {
                name: 'seriesId',
                internalType: 'uint64',
                type: 'uint64',
                indexed: !0,
            },
            {
                name: 'stoppedAt',
                internalType: 'uint64',
                type: 'uint64',
                indexed: !1,
            },
        ],
        name: 'TableSeriesStopped',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'taskId',
                internalType: 'uint8',
                type: 'uint8',
                indexed: !1,
            },
        ],
        name: 'TaskCompleted',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'from',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'to',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'Transfer',
    },
    {
        type: 'event',
        anonymous: !1,
        inputs: [
            {
                name: 'token',
                internalType: 'address',
                type: 'address',
                indexed: !1,
            },
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
                indexed: !0,
            },
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
                indexed: !1,
            },
        ],
        name: 'Withdraw',
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'allinBets',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'owner',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'spender',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'allowance',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'spender',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool',
            },
        ],
    },
    {
        stateMutability: 'payable',
        type: 'function',
        inputs: [
            {
                name: 'deputyAccount',
                internalType: 'address payable',
                type: 'address',
            },
            {
                name: 'authorizeTimeout',
                internalType: 'uint64',
                type: 'uint64',
            },
            {
                name: 'deputySignature',
                internalType: 'bytes',
                type: 'bytes',
            },
            {
                name: 'signedAt',
                internalType: 'uint64',
                type: 'uint64',
            },
            {
                name: 'unsafeIgnoreCurrentAuthorization',
                internalType: 'bool',
                type: 'bool',
            },
        ],
        name: 'authorize',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'account',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'callBets',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'deputyAccount',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'cancelAuthorization',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'cashOut',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'checkBets',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'checkin',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'pos',
                internalType: 'uint8',
                type: 'uint8',
            },
        ],
        name: 'claimPots',
        outputs: [
            {
                name: 'amount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'claimReferralCashback',
        outputs: [
            {
                name: 'cashAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: 'pointAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'taskIds',
                internalType: 'uint8[]',
                type: 'uint8[]',
            },
        ],
        name: 'claimTaskRewards',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'foldBets',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'getCheckinStatus',
        outputs: [
            {
                name: '',
                internalType: 'struct AqTaskViewInterface.CheckinStatusResponse',
                type: 'tuple',
                components: [
                    {
                        name: 'rewardAmounts',
                        internalType: 'uint256[]',
                        type: 'uint256[]',
                    },
                    {
                        name: 'consecutiveCount',
                        internalType: 'uint32',
                        type: 'uint32',
                    },
                    {
                        name: 'lastCheckinAt',
                        internalType: 'uint64',
                        type: 'uint64',
                    },
                    {
                        name: 'hasCheckedIn',
                        internalType: 'bool',
                        type: 'bool',
                    },
                ],
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'user',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'getReferralStatus',
        outputs: [
            {
                name: '',
                internalType: 'struct AqReferralViewInterface.ReferralStatus',
                type: 'tuple',
                components: [
                    {
                        name: 'referrer',
                        internalType: 'address',
                        type: 'address',
                    },
                    {
                        name: 'lv1ReferralCount',
                        internalType: 'uint32',
                        type: 'uint32',
                    },
                    {
                        name: 'lv2ReferralCount',
                        internalType: 'uint32',
                        type: 'uint32',
                    },
                    {
                        name: 'pendingCashback',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'totalCashback',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'pendingPoints',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'totalPoints',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                ],
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'getTasks',
        outputs: [
            {
                name: '',
                internalType: 'struct AqTaskViewInterface.TasksResponse',
                type: 'tuple',
                components: [
                    {
                        name: 'dailyTasks',
                        internalType: 'struct AqTaskCoreInterface.PlayerTask[]',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'id',
                                internalType: 'uint8',
                                type: 'uint8',
                            },
                            {
                                name: 'task',
                                internalType: 'enum AqTaskCoreInterface.TaskType',
                                type: 'uint8',
                            },
                            {
                                name: 'requiredValue',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'currentValue',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'rewardAmount',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'claimed',
                                internalType: 'bool',
                                type: 'bool',
                            },
                        ],
                    },
                    {
                        name: 'weeklyTasks',
                        internalType: 'struct AqTaskCoreInterface.PlayerTask[]',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'id',
                                internalType: 'uint8',
                                type: 'uint8',
                            },
                            {
                                name: 'task',
                                internalType: 'enum AqTaskCoreInterface.TaskType',
                                type: 'uint8',
                            },
                            {
                                name: 'requiredValue',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'currentValue',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'rewardAmount',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'claimed',
                                internalType: 'bool',
                                type: 'bool',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'holdemTimers',
        outputs: [
            {
                name: 'shuffleTimeout',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'revealTimeout',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'betTimeout',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'showdownTimeout',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'endTimeout',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'player',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'isPlayerPlaying',
        outputs: [
            {
                name: 'playing',
                internalType: 'bool',
                type: 'bool',
            },
            {
                name: 'lastTableId',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'mainWallet',
                internalType: 'address',
                type: 'address',
            },
        ],
    },
    {
        stateMutability: 'payable',
        type: 'function',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'playerPublicKey',
                internalType: 'struct IGlobals.PublicKey',
                type: 'tuple',
                components: [
                    {
                        name: 'x',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'y',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                ],
            },
        ],
        name: 'join',
        outputs: [
            {
                name: 'waitingPlayerCounts',
                internalType: 'uint8',
                type: 'uint8',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'leave',
        outputs: [
            {
                name: 'refundAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'lobbyTimers',
        outputs: [
            {
                name: 'readyTimeout',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'signatureTimeout',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'tableNoResponseTimeout',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'ponish',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'raiseAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'raiseBets',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'ready',
        outputs: [
            {
                name: 'tableStarted',
                internalType: 'bool',
                type: 'bool',
            },
        ],
    },
    {
        stateMutability: 'payable',
        type: 'function',
        inputs: [
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'deputyAccount',
                internalType: 'address payable',
                type: 'address',
            },
            {
                name: 'authorizeTimeout',
                internalType: 'uint64',
                type: 'uint64',
            },
            {
                name: 'deputySignature',
                internalType: 'bytes',
                type: 'bytes',
            },
            {
                name: 'signedAt',
                internalType: 'uint64',
                type: 'uint64',
            },
            {
                name: 'unsafeIgnoreCurrentAuthorization',
                internalType: 'bool',
                type: 'bool',
            },
        ],
        name: 'refAndAuthorize',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'refAndCheckin',
        outputs: [],
    },
    {
        stateMutability: 'payable',
        type: 'function',
        inputs: [
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
            {
                name: 'playerPublicKey',
                internalType: 'struct IGlobals.PublicKey',
                type: 'tuple',
                components: [
                    {
                        name: 'x',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'y',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                ],
            },
        ],
        name: 'refAndJoin',
        outputs: [
            {
                name: 'waitingPlayerCounts',
                internalType: 'uint8',
                type: 'uint8',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [],
        name: 'refund',
        outputs: [
            {
                name: 'refundAmount',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'referrer',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'setReferrer',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'reveals',
                internalType: 'struct AqHoldemRevealerInterface.RevealTokenSubmission[]',
                type: 'tuple[]',
                components: [
                    {
                        name: 'cardIndex',
                        internalType: 'uint8',
                        type: 'uint8',
                    },
                    {
                        name: 'revealToken',
                        internalType: 'struct IGlobals.RevealToken',
                        type: 'tuple',
                        components: [
                            {
                                name: 'x',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'y',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                        ],
                    },
                    {
                        name: 'revealProof',
                        internalType: 'bytes',
                        type: 'bytes',
                    },
                ],
            },
        ],
        name: 'showCards',
        outputs: [],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'gameId',
                internalType: 'uint256',
                type: 'uint256',
            },
            {
                name: 'maskedCards',
                internalType: 'uint256[4][52]',
                type: 'uint256[4][52]',
            },
            {
                name: 'shuffledCards',
                internalType: 'uint256[4][52]',
                type: 'uint256[4][52]',
            },
            {
                name: 'proof',
                internalType: 'bytes',
                type: 'bytes',
            },
            {
                name: 'pkc',
                internalType: 'uint256[]',
                type: 'uint256[]',
            },
        ],
        name: 'shuffle',
        outputs: [],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'table',
        outputs: [
            {
                name: '',
                internalType: 'struct AqHoldemViewInterface.HoldemTableStatus',
                type: 'tuple',
                components: [
                    {
                        name: 'id',
                        internalType: 'uint32',
                        type: 'uint32',
                    },
                    {
                        name: 'gameId',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'gameKey',
                        internalType: 'struct IGlobals.PublicKey',
                        type: 'tuple',
                        components: [
                            {
                                name: 'x',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'y',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                        ],
                    },
                    {
                        name: 'stage',
                        internalType: 'enum IHoldemErrors.GameStage',
                        type: 'uint8',
                    },
                    {
                        name: 'positions',
                        internalType: 'struct AqHoldemViewInterface.HoldemPosition[]',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'pid',
                                internalType: 'uint8',
                                type: 'uint8',
                            },
                            {
                                name: 'wallet',
                                internalType: 'address',
                                type: 'address',
                            },
                            {
                                name: 'status',
                                internalType: 'enum AqHoldemCoreInterface.HoldemPlayerStatus',
                                type: 'uint8',
                            },
                            {
                                name: 'holeCards',
                                internalType: 'struct AqHoldemCoreInterface.HoldemPokerCard[]',
                                type: 'tuple[]',
                                components: [
                                    {
                                        name: 'suit',
                                        internalType: 'enum IGlobals.PokerSuit',
                                        type: 'uint8',
                                    },
                                    {
                                        name: 'rank',
                                        internalType: 'enum IGlobals.PokerRank',
                                        type: 'uint8',
                                    },
                                    {
                                        name: 'backface',
                                        internalType: 'uint256[4]',
                                        type: 'uint256[4]',
                                    },
                                    {
                                        name: 'revealTokens',
                                        internalType: 'struct IGlobals.RevealToken[]',
                                        type: 'tuple[]',
                                        components: [
                                            {
                                                name: 'x',
                                                internalType: 'uint256',
                                                type: 'uint256',
                                            },
                                            {
                                                name: 'y',
                                                internalType: 'uint256',
                                                type: 'uint256',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: 'bets',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'chips',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'toReveals',
                                internalType: 'uint8[]',
                                type: 'uint8[]',
                            },
                            {
                                name: 'unrevealedCommunityCards',
                                internalType: 'uint8[]',
                                type: 'uint8[]',
                            },
                        ],
                    },
                    {
                        name: 'communityCards',
                        internalType: 'struct AqHoldemCoreInterface.HoldemPokerCard[]',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'suit',
                                internalType: 'enum IGlobals.PokerSuit',
                                type: 'uint8',
                            },
                            {
                                name: 'rank',
                                internalType: 'enum IGlobals.PokerRank',
                                type: 'uint8',
                            },
                            {
                                name: 'backface',
                                internalType: 'uint256[4]',
                                type: 'uint256[4]',
                            },
                            {
                                name: 'revealTokens',
                                internalType: 'struct IGlobals.RevealToken[]',
                                type: 'tuple[]',
                                components: [
                                    {
                                        name: 'x',
                                        internalType: 'uint256',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'y',
                                        internalType: 'uint256',
                                        type: 'uint256',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'mainPot',
                        internalType: 'struct AqHoldemCoreInterface.HoldemPot',
                        type: 'tuple',
                        components: [
                            {
                                name: 'amount',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'positions',
                                internalType: 'uint8[]',
                                type: 'uint8[]',
                            },
                            {
                                name: 'winners',
                                internalType: 'uint8[]',
                                type: 'uint8[]',
                            },
                            {
                                name: 'winnerHandRanking',
                                internalType: 'enum AqHoldemCoreInterface.HandRanking',
                                type: 'uint8',
                            },
                        ],
                    },
                    {
                        name: 'sidePots',
                        internalType: 'struct AqHoldemCoreInterface.HoldemPot[]',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'amount',
                                internalType: 'uint256',
                                type: 'uint256',
                            },
                            {
                                name: 'positions',
                                internalType: 'uint8[]',
                                type: 'uint8[]',
                            },
                            {
                                name: 'winners',
                                internalType: 'uint8[]',
                                type: 'uint8[]',
                            },
                            {
                                name: 'winnerHandRanking',
                                internalType: 'enum AqHoldemCoreInterface.HandRanking',
                                type: 'uint8',
                            },
                        ],
                    },
                    {
                        name: 'minRaise',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'betAmount',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'lastStageBet',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'actingPosition',
                        internalType: 'uint8',
                        type: 'uint8',
                    },
                    {
                        name: 'actingTimeStart',
                        internalType: 'uint64',
                        type: 'uint64',
                    },
                    {
                        name: 'actingTimeout',
                        internalType: 'uint64',
                        type: 'uint64',
                    },
                    {
                        name: 'deck',
                        internalType: 'uint256[4][]',
                        type: 'uint256[4][]',
                    },
                    {
                        name: 'timestamp',
                        internalType: 'uint64',
                        type: 'uint64',
                    },
                ],
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'tableId',
                internalType: 'uint32',
                type: 'uint32',
            },
        ],
        name: 'tablePlaying',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool',
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'tables',
        outputs: [
            {
                name: '',
                internalType: 'struct AqLobbyViewInterface.Table[]',
                type: 'tuple[]',
                components: [
                    {
                        name: 'id',
                        internalType: 'uint32',
                        type: 'uint32',
                    },
                    {
                        name: 'table',
                        internalType: 'address',
                        type: 'address',
                    },
                    {
                        name: 'seats',
                        internalType: 'uint8',
                        type: 'uint8',
                    },
                    {
                        name: 'activePlayers',
                        internalType: 'uint8',
                        type: 'uint8',
                    },
                    {
                        name: 'status',
                        internalType: 'enum AqLobbyViewInterface.TableStatus',
                        type: 'uint8',
                    },
                    {
                        name: 'waitings',
                        internalType: 'struct AqLobbyViewInterface.TableWaiting[]',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'player',
                                internalType: 'address',
                                type: 'address',
                            },
                            {
                                name: 'publicKey',
                                internalType: 'struct IGlobals.PublicKey',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'x',
                                        internalType: 'uint256',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'y',
                                        internalType: 'uint256',
                                        type: 'uint256',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'pendingAction',
                        internalType: 'struct AqLobbyViewInterface.PendingLobbyAction',
                        type: 'tuple',
                        components: [
                            {
                                name: 'act',
                                internalType: 'enum AqLobbyViewInterface.PendingLobbyActionType',
                                type: 'uint8',
                            },
                            {
                                name: 'users',
                                internalType: 'address[]',
                                type: 'address[]',
                            },
                            {
                                name: 'timeout',
                                internalType: 'uint64',
                                type: 'uint64',
                            },
                        ],
                    },
                    {
                        name: 'initialBuyin',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'bbAmount',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'sbAmount',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                    {
                        name: 'anteAmount',
                        internalType: 'uint256',
                        type: 'uint256',
                    },
                ],
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                name: '',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'to',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'transfer',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool',
            },
        ],
    },
    {
        stateMutability: 'nonpayable',
        type: 'function',
        inputs: [
            {
                name: 'from',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'to',
                internalType: 'address',
                type: 'address',
            },
            {
                name: 'value',
                internalType: 'uint256',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [
            {
                name: '',
                internalType: 'bool',
                type: 'bool',
            },
        ],
    },
    {
        stateMutability: 'view',
        type: 'function',
        inputs: [
            {
                name: 'deputyAccount',
                internalType: 'address',
                type: 'address',
            },
        ],
        name: 'wallet',
        outputs: [
            {
                name: '',
                internalType: 'address',
                type: 'address',
            },
        ],
    },
];
