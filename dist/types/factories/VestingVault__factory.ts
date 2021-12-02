/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VestingVault, VestingVaultInterface } from "../VestingVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stale",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "VoteChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_startTime",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_expiration",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_cliff",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "_delegatee",
        type: "address",
      },
    ],
    name: "addGrantAndDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256",
      },
    ],
    name: "changeUnvestedMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "getGrant",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "allocation",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "withdrawn",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "created",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "expiration",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "cliff",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "latestVotingPower",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "delegatee",
            type: "address",
          },
        ],
        internalType: "struct VestingVaultStorage.Grant",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryVotePower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "queryVotePowerView",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "removeGrant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
    ],
    name: "setTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staleBlockLag",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unvestedMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "updateVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620028cf380380620028cf833981016040819052620000349162000050565b60609190911b6001600160601b03191660805260a0526200008a565b6000806040838503121562000063578182fd5b82516001600160a01b03811681146200007a578283fd5b6020939093015192949293505050565b60805160601c60a0516127f9620000d6600039600081816102d10152611804015260008181610339015281816104780152818161073c01528181610c67015261151301526127f96000f3fe608060405234801561001057600080fd5b50600436106101505760003560e01c8063b6b55f25116100cd578063d0ebdbe711610081578063e7d2028311610066578063e7d202831461030e578063e91f323514610321578063fc0c546a1461033457610150565b8063d0ebdbe7146102f3578063d33219b41461030657610150565b8063bf31dbf4116100b2578063bf31dbf41461022f578063c1006f4f146102b6578063c2c94b88146102cc57610150565b8063b6b55f2514610209578063bdacb3031461021c57610150565b8063485cc955116101245780635c19a95c116101095780635c19a95c146101d05780635f389a9d146101e3578063747c1255146101f657610150565b8063485cc955146101b55780634e71d92d146101c857610150565b8062f714ce146101555780632168034d1461016a578063267406cb1461017d578063481c6a7514610190575b600080fd5b6101686101633660046124c8565b61035b565b005b6101686101783660046124b0565b6104fa565b61016861018b366004612326565b6105f4565b610198610976565b6040516001600160a01b0390911681526020015b60405180910390f35b6101686101c3366004612340565b610986565b610168610b8c565b6101686101de366004612326565b610d4b565b6101686101f1366004612372565b611013565b610168610204366004612326565b611424565b6101686102173660046124b0565b611453565b61016861022a366004612326565b61159c565b61024261023d366004612326565b61163d565b6040516101ac9190600060e0820190506001600160801b038084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a0840152506001600160a01b0360c08401511660c083015292915050565b6102be611716565b6040519081526020016101ac565b6102be7f000000000000000000000000000000000000000000000000000000000000000081565b610168610301366004612326565b611720565b6101986117c1565b6102be61031c3660046123e5565b6117cb565b6102be61032f36600461240e565b6117ed565b6101987f000000000000000000000000000000000000000000000000000000000000000081565b61036361183c565b516001600160a01b031633146103c05760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60006103ca6118a6565b905082816000015410156104205760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e636500000000000000000000000060448201526064016103b7565b82816000016000828254610434919061274e565b90915550506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156104bc57600080fd5b505af11580156104d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f49190612490565b50505050565b6105026118eb565b516001600160a01b0316331461055a5760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b000000000000000000000000000000000000000000000060448201526064016103b7565b60648111156105ab5760405162461bcd60e51b815260206004820152600a60248201527f41626f766520313030250000000000000000000000000000000000000000000060448201526064016103b7565b6105f16105ec6040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611938565b829055565b50565b6105fc61183c565b516001600160a01b031633146106545760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064016103b7565b600061065e6119b1565b6001600160a01b03808416600090815260209283526040808220815160e08101835281546001600160801b038082168352700100000000000000000000000000000000918290048116978301979097526001830154808816948301949094529283900486166060820152600282015480871660808301529290920490941660a0820152600384015490921660c08301529192506106fa906119f1565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b15801561078257600080fd5b505af1158015610796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ba9190612490565b5060006107c56118a6565b83549091506000906107f590849070010000000000000000000000000000000090046001600160801b031661255a565b845461080a91906001600160801b031661274e565b905080826000016000828254610820919061255a565b9091555060009050610830611ad5565b600386015490915060009061084f9083906001600160a01b0316611b28565b6003870154600288015491925061089b916001600160a01b03909116906108939070010000000000000000000000000000000090046001600160801b03168461274e565b849190611bb3565b600386015460028701546001600160a01b038981169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e0906108fe9070010000000000000000000000000000000090046001600160801b03166000196125ac565b60405190815260200160405180910390a36109176119b1565b6001600160a01b039097166000908152602097909752505060408520858155600181018690556002810195909555505050600390910180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905550565b600061098061183c565b51905090565b6109c46040518060400160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250611938565b5415610a125760405162461bcd60e51b815260206004820152600b60248201527f696e697469616c697a656400000000000000000000000000000000000000000060448201526064016103b7565b610a59610a536040518060400160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250611938565b60019055565b610acd610a9a6040518060400160405280600781526020017f6d616e6167657200000000000000000000000000000000000000000000000000815250611cc2565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038516179055565b610b41610b0e6040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611cc2565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416179055565b610b88610b826040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611938565b60649055565b5050565b6000610b966119b1565b33600090815260209182526040808220815160e08101835281546001600160801b038082168352700100000000000000000000000000000000918290048116968301969096526001830154808716948301949094529283900485166060820152600282015480861660808301529290920490931660a082015260038301546001600160a01b031660c082015291925090610c2f906119f1565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610cb357600080fd5b505af1158015610cc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ceb9190612490565b50815481908390601090610d1d90849070010000000000000000000000000000000090046001600160801b031661252f565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610b883383611cfd565b6000610d556119b1565b3360009081526020919091526040902060038101549091506001600160a01b0383811691161415610dc85760405162461bcd60e51b815260206004820152601160248201527f416c72656164792064656c65676174656400000000000000000000000000000060448201526064016103b7565b6000610dd2611ad5565b6003830154909150600090610df19083906001600160a01b0316611b28565b6040805160e08101825285546001600160801b03808216835270010000000000000000000000000000000091829004811660208401526001880154808216948401949094529281900483166060830152600287015480841660808401520490911660a082015260038501546001600160a01b031660c0820152909150600090610e7990611ebb565b60038501546002860154919250610ec5916001600160a01b0390911690610ebd9070010000000000000000000000000000000090046001600160801b03168561274e565b859190611bb3565b6003840154600285015433916001600160a01b0316907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e090610f269070010000000000000000000000000000000090046001600160801b03166000196125ac565b60405190815260200160405180910390a36000610f438487611b28565b9050336001600160a01b0316866001600160a01b03167f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e084604051610f8a91815260200190565b60405180910390a3610fa886610fa0848461255a565b869190611bb3565b506002840180546001600160801b03928316700100000000000000000000000000000000029216919091179055505060030180546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055565b61101b61183c565b516001600160a01b031633146110735760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064016103b7565b826001600160801b0316826001600160801b0316111580156110a75750826001600160801b0316846001600160801b031611155b6110f35760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420636f6e66696775726174696f6e000000000000000000000060448201526064016103b7565b6001600160801b038416611105574393505b600061110f6118a6565b9050600061111b611f2c565b9050866001600160801b03168260000154101561117a5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e636500000000000000000000000060448201526064016103b7565b60006111846119b1565b6001600160a01b038a1660009081526020919091526040902080549091506001600160801b0316156111f85760405162461bcd60e51b815260206004820152600960248201527f486173204772616e74000000000000000000000000000000000000000000000060448201526064016103b7565b6001600160a01b0384161561120d578361120f565b885b93506000606483600001518a6112259190612664565b61122f9190612572565b90506040518060e001604052808a6001600160801b0316815260200160006001600160801b03168152602001896001600160801b03168152602001886001600160801b03168152602001876001600160801b03168152602001826001600160801b03168152602001866001600160a01b03168152506112ac6119b1565b6001600160a01b038c81166000908152602092835260408082208551948601516001600160801b0395861670010000000000000000000000000000000091871682021782559186015160608701519086169086168302176001820155608086015160a087015190861690861690920291909117600282015560c090940151600390940180547fffffffffffffffffffffffff000000000000000000000000000000000000000016949092169390931790558554908b1691869161137090849061274e565b9091555060009050611380611ad5565b600384015490915060009061139f9083906001600160a01b0316611b28565b60038501549091506113c7906001600160a01b03166108936001600160801b0386168461255a565b60038401546040516001600160801b03851681526001600160a01b038e81169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3505050505050505050505050565b600061142e6119b1565b6001600160a01b0383166000908152602091909152604090209050610b888282611cfd565b61145b61183c565b516001600160a01b031633146114b35760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064016103b7565b60006114bd6118a6565b9050818160000160008282546114d3919061255a565b90915550506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561155f57600080fd5b505af1158015611573573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115979190612490565b505050565b6115a46118eb565b516001600160a01b031633146115fc5760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b000000000000000000000000000000000000000000000060448201526064016103b7565b6105f1610b0e6040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611cc2565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915261167e6119b1565b6001600160a01b0380841660009081526020928352604090819020815160e08101835281546001600160801b038082168352700100000000000000000000000000000000918290048116968301969096526001830154808716948301949094529283900485166060820152600282015480861660808301529290920490931660a08201526003909201541660c082015290505b919050565b6000610980611f2c565b6117286118eb565b516001600160a01b031633146117805760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b000000000000000000000000000000000000000000000060448201526064016103b7565b6105f1610b0e6040518060400160405280600781526020017f6d616e6167657200000000000000000000000000000000000000000000000000815250611cc2565b60006109806118eb565b6000806117d6611ad5565b90506117e3818585611f8d565b9150505b92915050565b6000806117f8611ad5565b905061183286866118297f00000000000000000000000000000000000000000000000000000000000000004361274e565b84929190611fe6565b9695505050505050565b6040805160208101909152600081526118896040518060400160405280600781526020017f6d616e6167657200000000000000000000000000000000000000000000000000815250611cc2565b604080516020810190915290546001600160a01b03168152905090565b60006118e66040518060400160405280600a81526020017f756e61737369676e656400000000000000000000000000000000000000000000815250611938565b905090565b6040805160208101909152600081526118896040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611cc2565b6000807fec13d6d12b88433319b64e1065a96ea19cd330ef6603f5f6fb685dde3959a3209050600081846040516020016119739291906124ea565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b60006118e66040518060400160405280600681526020017f6772616e74730000000000000000000000000000000000000000000000000000815250612054565b600081608001516001600160801b0316431080611a1a575081604001516001600160801b031643105b15611a2757506000611711565b81606001516001600160801b03164310611a5c5760208201518251611a4c9190612726565b6001600160801b03169050611711565b600082604001518360600151611a729190612726565b6001600160801b031683604001516001600160801b031643611a94919061274e565b8451611aa991906001600160801b0316612693565b611ab39190612598565b905082602001516001600160801b031681611ace919061274e565b9392505050565b6040805180820190915260608152600060208201526118e66040518060400160405280600b81526020017f766f74696e67506f77657200000000000000000000000000000000000000000081525061208f565b600080611b36846020015190565b6001600160a01b03841660009081526020919091526040902080549091506001600160801b031680611b6d576000925050506117e7565b6000611ba883611b7e60018561274e565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b979650505050505050565b77ffffffffffffffffffffffffffffffffffffffffffffffff811115611c1b5760405162461bcd60e51b815260206004820152600360248201527f4f6f42000000000000000000000000000000000000000000000000000000000060448201526064016103b7565b6000611c28846020015190565b6001600160a01b03841660009081526020829052604081208054929350914360c01b9185831791608081901c916001600160801b03909116908115611c7a57611c7686611b7e60018561274e565b5090505b8143821415611c9157611c8e60018461274e565b90505b8481600189010155438214611cb557611cb58785611cb086600161255a565b6120c8565b5050505050505050505050565b6000807f421683f821a0574472445355be6d2b769119e8515f8376a1d7878523dfdecf7b9050600081846040516020016119739291906124ea565b6000611d07611ad5565b6003830154909150600090611d269083906001600160a01b0316611b28565b6040805160e08101825285546001600160801b03808216835270010000000000000000000000000000000091829004811660208401526001880154808216948401949094529281900483166060830152600287015480841660808401520490911660a082015260038501546001600160a01b031660c0820152909150600090611dae90611ebb565b6002850154909150600090611de09070010000000000000000000000000000000090046001600160801b0316836126b2565b905080611df05750505050610b88565b6000811315611e1a576003850154611e15906001600160a01b0316610fa0838661255a565b611e42565b6003850154611e42906001600160a01b0316611e38836000196125ac565b610fa0908661274e565b60038501546040518281526001600160a01b038881169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3506002840180546001600160801b0392831670010000000000000000000000000000000002921691909117905550505050565b600080611ec7836119f1565b9050600083602001516001600160801b031682611ee4919061255a565b8451611ef991906001600160801b031661274e565b90506064611f05611f2c565b51611f109083612693565b611f1a9190612598565b611f24908361255a565b949350505050565b604080516020810190915260008152611f796040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611938565b604080516020810190915290548152905090565b600080611f9b856020015190565b6001600160a01b0385166000908152602082905260408120805492935091608081901c916001600160801b0390911690611fd884888386866120e8565b9a9950505050505050505050565b600080611ff4866020015190565b6001600160a01b0386166000908152602082905260408120805492935091608081901c916001600160801b039091169080612032858a8a87876120e8565b9150915083821115611fd85761204984838761228d565b611fd88583856120c8565b6000807fe09ca27c98c7039e0ebb504afcf592a1c02936970c7b5952890c3a3eea53d63c9050600081846040516020016119739291906124ea565b60408051808201909152606081526000602082015260006120af836122bd565b6040805180820190915293845260208401525090919050565b8082106120d457600080fd5b6001600160801b031660809190911b179055565b600080826121385760405162461bcd60e51b815260206004820152600d60248201527f756e696e697469616c697a65640000000000000000000000000000000000000060448201526064016103b7565b8585111561214557600080fd5b82841061215157600080fd5b600061215e60018561274e565b90508460005b8282146122025760006002612179858561255a565b61218490600161255a565b61218e9190612598565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b8214156121d0579296509194506122839350505050565b8b8210156121ec578a8210156121e4578293505b8294506121fa565b6121f760018461274e565b95505b505050612164565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a8211156122795760405162461bcd60e51b815260206004820152600e60248201527f536561726368204661696c75726500000000000000000000000000000000000060448201526064016103b7565b9195509093505050505b9550959350505050565b8183111561229a57600080fd5b60018101835b838110156122b6576000828201556001016122a0565b5050505050565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a9050600081846040516020016119739291906124ea565b80356001600160a01b038116811461171157600080fd5b80356001600160801b038116811461171157600080fd5b600060208284031215612337578081fd5b611ace826122f8565b60008060408385031215612352578081fd5b61235b836122f8565b9150612369602084016122f8565b90509250929050565b60008060008060008060c0878903121561238a578182fd5b612393876122f8565b95506123a16020880161230f565b94506123af6040880161230f565b93506123bd6060880161230f565b92506123cb6080880161230f565b91506123d960a088016122f8565b90509295509295509295565b600080604083850312156123f7578182fd5b612400836122f8565b946020939093013593505050565b60008060008060608587031215612423578384fd5b61242c856122f8565b935060208501359250604085013567ffffffffffffffff8082111561244f578384fd5b818701915087601f830112612462578384fd5b813581811115612470578485fd5b886020828501011115612481578485fd5b95989497505060200194505050565b6000602082840312156124a1578081fd5b81518015158114611ace578182fd5b6000602082840312156124c1578081fd5b5035919050565b600080604083850312156124da578182fd5b82359150612369602084016122f8565b60008382528251815b8181101561250f576020818601810151858301820152016124f3565b818111156125205782602083860101525b50919091016020019392505050565b60006001600160801b0380831681851680830382111561255157612551612765565b01949350505050565b6000821982111561256d5761256d612765565b500190565b60006001600160801b038084168061258c5761258c612794565b92169190910492915050565b6000826125a7576125a7612794565b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff818413828413858304851182821616156125eb576125eb612765565b7f80000000000000000000000000000000000000000000000000000000000000008487128682058812818416161561262557612625612765565b85871292508782058712848416161561264057612640612765565b8785058712818416161561265657612656612765565b505050929093029392505050565b60006001600160801b038083168185168183048111821515161561268a5761268a612765565b02949350505050565b60008160001904831182151516156126ad576126ad612765565b500290565b6000808312837f8000000000000000000000000000000000000000000000000000000000000000018312811516156126ec576126ec612765565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01831381161561272057612720612765565b50500390565b60006001600160801b038381169083168181101561274657612746612765565b039392505050565b60008282101561276057612760612765565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220c5cfe66608972b5185a660fdd5dac85b36aef78bcb7408abb2fb6bbf48dab3e064736f6c63430008030033";

export class VestingVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VestingVault> {
    return super.deploy(
      _token,
      _stale,
      overrides || {}
    ) as Promise<VestingVault>;
  }
  getDeployTransaction(
    _token: string,
    _stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _stale, overrides || {});
  }
  attach(address: string): VestingVault {
    return super.attach(address) as VestingVault;
  }
  connect(signer: Signer): VestingVault__factory {
    return super.connect(signer) as VestingVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingVaultInterface {
    return new utils.Interface(_abi) as VestingVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VestingVault {
    return new Contract(address, _abi, signerOrProvider) as VestingVault;
  }
}
