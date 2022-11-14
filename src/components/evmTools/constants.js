export const defaultAbiSample = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'rateMode',
        type: 'uint256'
      }
    ],
    name: 'borrow',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'rateMode',
        type: 'uint256'
      }
    ],
    name: 'borrowETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'assets',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'premiums',
        type: 'uint256[]'
      },
      {
        internalType: 'address',
        name: 'initiator',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes'
      }
    ],
    name: 'executeOperation',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'assets',
        type: 'address[]'
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]'
      },
      {
        internalType: 'uint256[]',
        name: 'modes',
        type: 'uint256[]'
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes'
      }
    ],
    name: 'flashLoan',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getContractName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'rateMode',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address'
      }
    ],
    name: 'repay',
    outputs: [
      {
        internalType: 'uint256',
        name: 'remainDebt',
        type: 'uint256'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'rateMode',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address'
      }
    ],
    name: 'repayETH',
    outputs: [
      {
        internalType: 'uint256',
        name: 'remainDebt',
        type: 'uint256'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'supply',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'supplyETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: 'withdrawAmount',
        type: 'uint256'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'withdrawETH',
    outputs: [
      {
        internalType: 'uint256',
        name: 'withdrawAmount',
        type: 'uint256'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  }
]
