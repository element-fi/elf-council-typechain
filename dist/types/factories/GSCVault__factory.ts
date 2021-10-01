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
import type { GSCVault, GSCVaultInterface } from "../GSCVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICoreVoting",
        name: "_coreVoting",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_votingPowerBound",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
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
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "Kicked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256",
      },
    ],
    name: "MembershipProved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "coreVoting",
    outputs: [
      {
        internalType: "contract ICoreVoting",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "getUserVaults",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "idleDuration",
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
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "extraData",
        type: "bytes[]",
      },
    ],
    name: "kick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "members",
    outputs: [
      {
        internalType: "uint256",
        name: "joined",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "votingVaults",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "extraData",
        type: "bytes[]",
      },
    ],
    name: "proveMembership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryVotingPower",
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
        internalType: "contract ICoreVoting",
        name: "_newVoting",
        type: "address",
      },
    ],
    name: "setCoreVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idleDuration",
        type: "uint256",
      },
    ],
    name: "setIdleDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newBound",
        type: "uint256",
      },
    ],
    name: "setVotePowerBound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingPowerBound",
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
];

const _bytecode =
  "0x6080604052620546006005553480156200001857600080fd5b5060405162001507380380620015078339810160408190526200003b91620000f1565b60008054336001600160a01b031991821617909155600380549091166001600160a01b038516179055600482905562000074816200007d565b50505062000151565b6000546001600160a01b03163314620000cf5760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008060006060848603121562000106578283fd5b8351620001138162000138565b6020850151604086015191945092506200012d8162000138565b809150509250925092565b6001600160a01b03811681146200014e57600080fd5b50565b6113a680620001616000396000f3fe608060405234801561001057600080fd5b506004361061011a5760003560e01c80633eba045b116100b2578063ae4b362811610081578063b918161111610066578063b918161114610252578063e7f3c69c14610285578063fe9fbb80146102a55761011a565b8063ae4b36281461022c578063b6a5d7de1461023f5761011a565b80633eba045b146101d25780637e280246146101e55780638da5cb5b146101f8578063ad292ff8146102235761011a565b806320397be9116100ee57806320397be91461019057806322905a6c146101a357806327c97fa5146101b657806338e02bf7146101c95761011a565b8062fe809c1461011f57806308ae4b0c1461013457806309960f001461016a57806313af40351461017d575b600080fd5b61013261012d366004611199565b6102d1565b005b610157610142366004611016565b60026020526000908152604090206001015481565b6040519081526020015b60405180910390f35b610132610178366004611110565b610335565b61013261018b366004611016565b6107eb565b61015761019e36600461108c565b61087f565b6101326101b1366004611039565b61090b565b6101326101c4366004611016565b610c0d565b61015760045481565b6101326101e0366004611199565b610ca6565b6101326101f3366004611016565b610d05565b60005461020b906001600160a01b031681565b6040516001600160a01b039091168152602001610161565b61015760055481565b60035461020b906001600160a01b031681565b61013261024d366004611016565b610d99565b610275610260366004611016565b60016020526000908152604090205460ff1681565b6040519015158152602001610161565b610298610293366004611016565b610e3f565b604051610161919061122d565b6102756102b3366004611016565b6001600160a01b031660009081526001602052604090205460ff1690565b6000546001600160a01b031633146103305760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600555565b8261035057634e487b7160e01b600052600160045260246000fd5b60005b8381101561058a5760006103688260016112dd565b90505b8481101561044f5785858281811061039357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906103a89190611016565b6001600160a01b03168686848181106103d157634e487b7160e01b600052603260045260246000fd5b90506020020160208101906103e69190611016565b6001600160a01b0316141561043d5760405162461bcd60e51b815260206004820152600f60248201527f6475706c6963617465207661756c7400000000000000000000000000000000006044820152606401610327565b806104478161130c565b91505061036b565b506003546000906001600160a01b031663af7a060c87878581811061048457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906104999190611016565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b03909116600482015260240160206040518083038186803b1580156104f057600080fd5b505afa158015610504573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105289190611179565b9050806105775760405162461bcd60e51b815260206004820152601960248201527f566f74696e67207661756c74206e6f7420617070726f766564000000000000006044820152606401610327565b50806105828161130c565b915050610353565b506000805b848110156106ad5760008686838181106105b957634e487b7160e01b600052603260045260246000fd5b90506020020160208101906105ce9190611016565b6001600160a01b031663e91f3235336105e86001436112f5565b88888781811061060857634e487b7160e01b600052603260045260246000fd5b905060200281019061061a919061127a565b6040518563ffffffff1660e01b815260040161063994939291906111c9565b602060405180830381600087803b15801561065357600080fd5b505af1158015610667573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068b91906111b1565b905061069781846112dd565b92505080806106a59061130c565b91505061058f565b506004548110156107005760405162461bcd60e51b815260206004820152601060248201527f4e6f7420656e6f75676820766f746573000000000000000000000000000000006044820152606401610327565b336000908152600260205260409020600101541561073857336000908152600260205260409020610732908686610eb5565b506107ae565b6040518060400160405280868680806020026020016040519081016040528093929190818152602001838360200280828437600092018290525093855250504260209384015250338152600282526040902082518051919261079f92849290910190610f30565b50602082015181600101559050505b60405142815233907ff1e092311eefceee7206049c87d17464c34a7b92b85779b0b835ddb292a42e70906020015b60405180910390a25050505050565b6000546001600160a01b031633146108455760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610327565b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600080546001600160a01b03868116911614156108a05750620186a0610903565b6001600160a01b038516600090815260026020526040902060010154158015906108f257506005546001600160a01b03861660009081526002602052604090206001015442916108ef916112dd565b11155b156108ff57506001610903565b5060005b949350505050565b6001600160a01b03831660009081526002602090815260408083208054825181850281018501909352808352919290919083018282801561097557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610957575b505050505090506000805b8251811015610b535760035483516001600160a01b039091169063af7a060c908590849081106109c057634e487b7160e01b600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016109f391906001600160a01b0391909116815260200190565b60206040518083038186803b158015610a0b57600080fd5b505afa158015610a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a439190611179565b15610b41576000838281518110610a6a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663e91f323588600143610a8e91906112f5565b898987818110610aae57634e487b7160e01b600052603260045260246000fd5b9050602002810190610ac0919061127a565b6040518563ffffffff1660e01b8152600401610adf94939291906111c9565b602060405180830381600087803b158015610af957600080fd5b505af1158015610b0d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3191906111b1565b9050610b3d81846112dd565b9250505b80610b4b8161130c565b915050610980565b506004548110610ba55760405162461bcd60e51b815260206004820152600d60248201527f4e6f74206b69636b2d61626c65000000000000000000000000000000000000006044820152606401610327565b6001600160a01b038516600090815260026020526040812090610bc88282610f9d565b60018201600090555050846001600160a01b03167f8684348ed72cd103be12fcb99e9c5917294a8092ccd4808d1cd7b19daf982991436040516107dc91815260200190565b6000546001600160a01b03163314610c675760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610327565b6001600160a01b0316600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6000546001600160a01b03163314610d005760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610327565b600455565b6000546001600160a01b03163314610d5f5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610327565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610df35760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610327565b610e3c816001600160a01b0316600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b6001600160a01b038116600090815260026020908152604091829020805483518184028101840190945280845260609392830182828015610ea957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610e8b575b50505050509050919050565b828054828255906000526020600020908101928215610f20579160200282015b82811115610f205781547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03843516178255602090920191600190910190610ed5565b50610f2c929150610fb7565b5090565b828054828255906000526020600020908101928215610f20579160200282015b82811115610f2057825182547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03909116178255602090920191600190910190610f50565b5080546000825590600052602060002090810190610e3c91905b5b80821115610f2c5760008155600101610fb8565b60008083601f840112610fdd578182fd5b50813567ffffffffffffffff811115610ff4578182fd5b6020830191508360208260051b850101111561100f57600080fd5b9250929050565b600060208284031215611027578081fd5b81356110328161135b565b9392505050565b60008060006040848603121561104d578182fd5b83356110588161135b565b9250602084013567ffffffffffffffff811115611073578283fd5b61107f86828701610fcc565b9497909650939450505050565b600080600080606085870312156110a1578081fd5b84356110ac8161135b565b935060208501359250604085013567ffffffffffffffff808211156110cf578283fd5b818701915087601f8301126110e2578283fd5b8135818111156110f0578384fd5b886020828501011115611101578384fd5b95989497505060200194505050565b60008060008060408587031215611125578384fd5b843567ffffffffffffffff8082111561113c578586fd5b61114888838901610fcc565b90965094506020870135915080821115611160578384fd5b5061116d87828801610fcc565b95989497509550505050565b60006020828403121561118a578081fd5b81518015158114611032578182fd5b6000602082840312156111aa578081fd5b5035919050565b6000602082840312156111c2578081fd5b5051919050565b60006001600160a01b03861682528460208301526060604083015282606083015282846080840137818301608090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01601019392505050565b6020808252825182820181905260009190848201906040850190845b8181101561126e5783516001600160a01b031683529284019291840191600101611249565b50909695505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126112ae578283fd5b83018035915067ffffffffffffffff8211156112c8578283fd5b60200191503681900382131561100f57600080fd5b600082198211156112f0576112f0611345565b500190565b60008282101561130757611307611345565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561133e5761133e611345565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610e3c57600080fdfea264697066735822122081ce9f2f9a6aa777a9d43c1bd4d8f0f18947c654b856543ddc5bc520a57b1d0264736f6c63430008030033";

export class GSCVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _coreVoting: string,
    _votingPowerBound: BigNumberish,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GSCVault> {
    return super.deploy(
      _coreVoting,
      _votingPowerBound,
      _owner,
      overrides || {}
    ) as Promise<GSCVault>;
  }
  getDeployTransaction(
    _coreVoting: string,
    _votingPowerBound: BigNumberish,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _coreVoting,
      _votingPowerBound,
      _owner,
      overrides || {}
    );
  }
  attach(address: string): GSCVault {
    return super.attach(address) as GSCVault;
  }
  connect(signer: Signer): GSCVault__factory {
    return super.connect(signer) as GSCVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GSCVaultInterface {
    return new utils.Interface(_abi) as GSCVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GSCVault {
    return new Contract(address, _abi, signerOrProvider) as GSCVault;
  }
}