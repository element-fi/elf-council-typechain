"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VestingVault__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
        inputs: [],
        name: "acceptGrant",
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
                    {
                        internalType: "uint256[2]",
                        name: "range",
                        type: "uint256[2]",
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
var _bytecode = "0x60c06040523480156200001157600080fd5b5060405162002e7f38038062002e7f833981016040819052620000349162000050565b60609190911b6001600160601b03191660805260a0526200008a565b6000806040838503121562000063578182fd5b82516001600160a01b03811681146200007a578283fd5b6020939093015192949293505050565b60805160601c60a051612d9b620000e46000396000818161028d0152611bb90152600081816102f5015281816104340152818161072d01528181610a4c01528181610b0c01528181610f4301526118c70152612d9b6000f3fe608060405234801561001057600080fd5b506004361061016b5760003560e01c8063b6b55f25116100cd578063d0ebdbe711610081578063e7d2028311610066578063e7d20283146102ca578063e91f3235146102dd578063fc0c546a146102f05761016b565b8063d0ebdbe7146102af578063d33219b4146102c25761016b565b8063bf31dbf4116100b2578063bf31dbf414610252578063c1006f4f14610272578063c2c94b88146102885761016b565b8063b6b55f251461022c578063bdacb3031461023f5761016b565b8063485cc955116101245780635c19a95c116101095780635c19a95c146101f35780635f389a9d14610206578063747c1255146102195761016b565b8063485cc955146101d85780634e71d92d146101eb5761016b565b8063267406cb11610155578063267406cb146101985780633e0bdaf7146101ab578063481c6a75146101b35761016b565b8062f714ce146101705780632168034d14610185575b600080fd5b61018361017e3660046129bf565b610317565b005b6101836101933660046129a7565b6104b6565b6101836101a636600461281d565b6105b0565b610183610974565b6101bb610c21565b6040516001600160a01b0390911681526020015b60405180910390f35b6101836101e6366004612837565b610c31565b610183610e37565b61018361020136600461281d565b61108b565b610183610214366004612869565b611388565b61018361022736600461281d565b6117d8565b61018361023a3660046129a7565b611807565b61018361024d36600461281d565b61194b565b61026561026036600461281d565b6119ec565b6040516101cf9190612a49565b61027a611acb565b6040519081526020016101cf565b61027a7f000000000000000000000000000000000000000000000000000000000000000081565b6101836102bd36600461281d565b611ad5565b6101bb611b76565b61027a6102d83660046128dc565b611b80565b61027a6102eb366004612905565b611ba2565b6101bb7f000000000000000000000000000000000000000000000000000000000000000081565b61031f611bf1565b516001600160a01b0316331461037c5760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000610386611c5b565b905082816000015410156103dc5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610373565b828160000160008282546103f09190612cf0565b90915550506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561047857600080fd5b505af115801561048c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b09190612987565b50505050565b6104be611ca0565b516001600160a01b031633146105165760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610373565b60648111156105675760405162461bcd60e51b815260206004820152600a60248201527f41626f76652031303025000000000000000000000000000000000000000000006044820152606401610373565b6105ad6105a86040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611ced565b829055565b50565b6105b8611bf1565b516001600160a01b031633146106105760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610373565b600061061a611d66565b6001600160a01b0383811660009081526020928352604080822081516101008101835281546001600160801b038082168352700100000000000000000000000000000000918290048116978301979097526001830154808816838601528190048716606083015260028084015480891660808501529190910490961660a0820152600382015490941660c085015281518083019283905290955091936106eb9392869260e0850192600485019182845b8154815260200190600101908083116106ca57505050505081525050611da6565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b15801561077357600080fd5b505af1158015610787573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ab9190612987565b5060006107b6611c5b565b83549091506000906107e690849070010000000000000000000000000000000090046001600160801b0316612afc565b84546107fb91906001600160801b0316612cf0565b9050808260000160008282546108119190612afc565b9091555060009050610821611e8a565b60038601549091506000906108409083906001600160a01b0316611edd565b6003870154600288015491925061088c916001600160a01b03909116906108849070010000000000000000000000000000000090046001600160801b031684612cf0565b849190611f68565b600386015460028701546001600160a01b038981169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e0906108ef9070010000000000000000000000000000000090046001600160801b0316600019612b4e565b60405190815260200160405180910390a3610908611d66565b6001600160a01b0397909716600090815260209790975250506040852085815560018101869055600281018690556003810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055600481018690556005019490945550505050565b600061097e611d66565b3360009081526020919091526040812080549092506109bc906001600160801b03700100000000000000000000000000000000820481169116612cc8565b6001600160801b0316905060008111610a175760405162461bcd60e51b815260206004820152601260248201527f6e6f206772616e7420617661696c61626c6500000000000000000000000000006044820152606401610373565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610a9857600080fd5b505af1158015610aac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad09190612987565b506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b158015610b5857600080fd5b505af1158015610b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b909190612987565b506000610b9b612077565b516040805180820190915281815290915060208101610bba8484612afc565b9052610bcc9060048501906002612733565b50610c1c610c0e6040518060400160405280600581526020017f626f756e64000000000000000000000000000000000000000000000000000000815250611ced565b610c188484612afc565b9055565b505050565b6000610c2b611bf1565b51905090565b610c6f6040518060400160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250611ced565b5415610cbd5760405162461bcd60e51b815260206004820152600b60248201527f696e697469616c697a65640000000000000000000000000000000000000000006044820152606401610373565b610d04610cfe6040518060400160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250611ced565b60019055565b610d78610d456040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120d8565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038516179055565b610dec610db96040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120d8565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416179055565b610e33610e2d6040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611ced565b60649055565b5050565b6000610e41611d66565b3360009081526020918252604080822081516101008101835281546001600160801b03808216835270010000000000000000000000000000000091829004811683880152600184015480821684870152829004811660608401526002808501548083166080860152929092041660a083015260038301546001600160a01b031660c083015283518085019485905260048401805482529397509495610f0b959294889460e0870194939092909190600587019085018083116106ca57505050505081525050611da6565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610f8f57600080fd5b505af1158015610fa3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc79190612987565b50815481908390601090610ff990849070010000000000000000000000000000000090046001600160801b0316612ad1565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060008260040160016002811061105c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01541115611081578060048301600101600082825461107b9190612cf0565b90915550505b610e333383612113565b6000611095611d66565b3360009081526020919091526040902060038101549091506001600160a01b03838116911614156111085760405162461bcd60e51b815260206004820152601160248201527f416c72656164792064656c6567617465640000000000000000000000000000006044820152606401610373565b6000611112611e8a565b60038301549091506000906111319083906001600160a01b0316611edd565b604080516101008101825285546001600160801b0380821683527001000000000000000000000000000000009182900481166020840152600188015480821684860152829004811660608401526002808901548083166080860152929092041660a083015260038701546001600160a01b031660c08301528251808401938490529394506000936111ee93889260e08501929160048501919082845b8154815260200190600101908083116111cd5750505050508152505061230a565b6003850154600286015491925061123a916001600160a01b03909116906112329070010000000000000000000000000000000090046001600160801b031685612cf0565b859190611f68565b6003840154600285015433916001600160a01b0316907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09061129b9070010000000000000000000000000000000090046001600160801b0316600019612b4e565b60405190815260200160405180910390a360006112b88487611edd565b9050336001600160a01b0316866001600160a01b03167f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e0846040516112ff91815260200190565b60405180910390a361131d866113158484612afc565b869190611f68565b506002840180546001600160801b03928316700100000000000000000000000000000000029216919091179055505060030180546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055565b611390611bf1565b516001600160a01b031633146113e85760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610373565b826001600160801b0316826001600160801b03161115801561141c5750826001600160801b0316846001600160801b031611155b6114685760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420636f6e66696775726174696f6e00000000000000000000006044820152606401610373565b6001600160801b03841661147a574393505b6000611484611c5b565b9050600061149061237b565b9050866001600160801b0316826000015410156114ef5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610373565b60006114f9611d66565b6001600160a01b038a1660009081526020919091526040902080549091506001600160801b03161561156d5760405162461bcd60e51b815260206004820152600960248201527f486173204772616e7400000000000000000000000000000000000000000000006044820152606401610373565b6001600160a01b038416156115825783611584565b885b93506000606483600001518a61159a9190612c06565b6115a49190612b14565b90506040518061010001604052808a6001600160801b0316815260200160006001600160801b03168152602001896001600160801b03168152602001886001600160801b03168152602001876001600160801b03168152602001826001600160801b03168152602001866001600160a01b03168152602001604051806040016040528060008152602001600081525081525061163e611d66565b6001600160a01b038c8116600090815260209283526040908190208451938501516001600160801b0394851670010000000000000000000000000000000091861682021782559185015160608601519085169085168302176001820155608085015160a086015190851694169091029290921760028084019190915560c08401516003840180547fffffffffffffffffffffffff000000000000000000000000000000000000000016919093161790915560e083015161170391600484019190612733565b50905050886001600160801b03168460000160008282546117249190612cf0565b9091555060009050611734611e8a565b60038401549091506000906117539083906001600160a01b0316611edd565b600385015490915061177b906001600160a01b03166108846001600160801b03861684612afc565b60038401546040516001600160801b03851681526001600160a01b038e81169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3505050505050505050505050565b60006117e2611d66565b6001600160a01b0383166000908152602091909152604090209050610e338282612113565b61180f611bf1565b516001600160a01b031633146118675760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610373565b6000611871611c5b565b9050818160000160008282546118879190612afc565b90915550506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561191357600080fd5b505af1158015611927573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1c9190612987565b611953611ca0565b516001600160a01b031633146119ab5760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610373565b6105ad610db96040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120d8565b6119f4612771565b6119fc611d66565b6001600160a01b038381166000908152602092835260409081902081516101008101835281546001600160801b038082168352700100000000000000000000000000000000918290048116968301969096526001830154808716838601528190048616606083015260028084015480881660808501529190910490951660a0820152600382015490931660c08401528151808301928390529293909260e08501929091600485019182845b815481526020019060010190808311611aa75750505050508152505090505b919050565b6000610c2b61237b565b611add611ca0565b516001600160a01b03163314611b355760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610373565b6105ad610db96040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120d8565b6000610c2b611ca0565b600080611b8b611e8a565b9050611b988185856123c8565b9150505b92915050565b600080611bad611e8a565b9050611be78686611bde7f000000000000000000000000000000000000000000000000000000000000000043612cf0565b84929190612421565b9695505050505050565b604080516020810190915260008152611c3e6040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120d8565b604080516020810190915290546001600160a01b03168152905090565b6000611c9b6040518060400160405280600a81526020017f756e61737369676e656400000000000000000000000000000000000000000000815250611ced565b905090565b604080516020810190915260008152611c3e6040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120d8565b6000807fec13d6d12b88433319b64e1065a96ea19cd330ef6603f5f6fb685dde3959a320905060008184604051602001611d28929190612a04565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b6000611c9b6040518060400160405280600681526020017f6772616e7473000000000000000000000000000000000000000000000000000081525061248f565b600081608001516001600160801b0316431080611dcf575081604001516001600160801b031643105b15611ddc57506000611ac6565b81606001516001600160801b03164310611e115760208201518251611e019190612cc8565b6001600160801b03169050611ac6565b600082604001518360600151611e279190612cc8565b6001600160801b031683604001516001600160801b031643611e499190612cf0565b8451611e5e91906001600160801b0316612c35565b611e689190612b3a565b905082602001516001600160801b031681611e839190612cf0565b9392505050565b604080518082019091526060815260006020820152611c9b6040518060400160405280600b81526020017f766f74696e67506f7765720000000000000000000000000000000000000000008152506124ca565b600080611eeb846020015190565b6001600160a01b03841660009081526020919091526040902080549091506001600160801b031680611f2257600092505050611b9c565b6000611f5d83611f33600185612cf0565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b979650505050505050565b77ffffffffffffffffffffffffffffffffffffffffffffffff811115611fd05760405162461bcd60e51b815260206004820152600360248201527f4f6f4200000000000000000000000000000000000000000000000000000000006044820152606401610373565b6000611fdd846020015190565b6001600160a01b03841660009081526020829052604081208054929350914360c01b9185831791608081901c916001600160801b0390911690811561202f5761202b86611f33600185612cf0565b5090505b814382141561204657612043600184612cf0565b90505b848160018901015543821461206a5761206a8785612065866001612afc565b612503565b5050505050505050505050565b6040805160208101909152600081526120c46040518060400160405280600581526020017f626f756e64000000000000000000000000000000000000000000000000000000815250611ced565b604080516020810190915290548152905090565b6000807f421683f821a0574472445355be6d2b769119e8515f8376a1d7878523dfdecf7b905060008184604051602001611d28929190612a04565b600061211d611e8a565b600383015490915060009061213c9083906001600160a01b0316611edd565b604080516101008101825285546001600160801b0380821683527001000000000000000000000000000000009182900481166020840152600188015480821684860152829004811660608401526002808901548083166080860152929092041660a083015260038701546001600160a01b031660c083015282518084019093529293506000926121fd92879160e08401919060048401908282826020028201918154815260200190600101908083116111cd5750505050508152505061230a565b600285015490915060009061222f9070010000000000000000000000000000000090046001600160801b031683612c54565b90508061223f5750505050610e33565b6000811315612269576003850154612264906001600160a01b03166113158386612afc565b612291565b6003850154612291906001600160a01b031661228783600019612b4e565b6113159086612cf0565b60038501546040518281526001600160a01b038881169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3506002840180546001600160801b0392831670010000000000000000000000000000000002921691909117905550505050565b60008061231683611da6565b9050600083602001516001600160801b0316826123339190612afc565b845161234891906001600160801b0316612cf0565b9050606461235461237b565b5161235f9083612c35565b6123699190612b3a565b6123739083612afc565b949350505050565b6040805160208101909152600081526120c46040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611ced565b6000806123d6856020015190565b6001600160a01b0385166000908152602082905260408120805492935091608081901c916001600160801b03909116906124138488838686612523565b9a9950505050505050505050565b60008061242f866020015190565b6001600160a01b0386166000908152602082905260408120805492935091608081901c916001600160801b03909116908061246d858a8a8787612523565b9150915083821115612413576124848483876126c8565b612413858385612503565b6000807fe09ca27c98c7039e0ebb504afcf592a1c02936970c7b5952890c3a3eea53d63c905060008184604051602001611d28929190612a04565b60408051808201909152606081526000602082015260006124ea836126f8565b6040805180820190915293845260208401525090919050565b80821061250f57600080fd5b6001600160801b031660809190911b179055565b600080826125735760405162461bcd60e51b815260206004820152600d60248201527f756e696e697469616c697a6564000000000000000000000000000000000000006044820152606401610373565b8585111561258057600080fd5b82841061258c57600080fd5b6000612599600185612cf0565b90508460005b82821461263d57600060026125b48585612afc565b6125bf906001612afc565b6125c99190612b3a565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b82141561260b579296509194506126be9350505050565b8b821015612627578a82101561261f578293505b829450612635565b612632600184612cf0565b95505b50505061259f565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a8211156126b45760405162461bcd60e51b815260206004820152600e60248201527f536561726368204661696c7572650000000000000000000000000000000000006044820152606401610373565b9195509093505050505b9550959350505050565b818311156126d557600080fd5b60018101835b838110156126f1576000828201556001016126db565b5050505050565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a905060008184604051602001611d28929190612a04565b8260028101928215612761579160200282015b82811115612761578251825591602001919060010190612746565b5061276d9291506127bc565b5090565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260e081016127b76127d1565b905290565b5b8082111561276d57600081556001016127bd565b60405180604001604052806002906020820280368337509192915050565b80356001600160a01b0381168114611ac657600080fd5b80356001600160801b0381168114611ac657600080fd5b60006020828403121561282e578081fd5b611e83826127ef565b60008060408385031215612849578081fd5b612852836127ef565b9150612860602084016127ef565b90509250929050565b60008060008060008060c08789031215612881578182fd5b61288a876127ef565b955061289860208801612806565b94506128a660408801612806565b93506128b460608801612806565b92506128c260808801612806565b91506128d060a088016127ef565b90509295509295509295565b600080604083850312156128ee578182fd5b6128f7836127ef565b946020939093013593505050565b6000806000806060858703121561291a578384fd5b612923856127ef565b935060208501359250604085013567ffffffffffffffff80821115612946578384fd5b818701915087601f830112612959578384fd5b813581811115612967578485fd5b886020828501011115612978578485fd5b95989497505060200194505050565b600060208284031215612998578081fd5b81518015158114611e83578182fd5b6000602082840312156129b8578081fd5b5035919050565b600080604083850312156129d1578182fd5b82359150612860602084016127ef565b8060005b60028110156104b05781518452602093840193909101906001016129e5565b60008382528251815b81811015612a2957602081860181015185830182015201612a0d565b81811115612a3a5782602083860101525b50919091016020019392505050565b6000610120820190506001600160801b038084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401525060c0830151612ab760c08401826001600160a01b03169052565b5060e0830151612aca60e08401826129e1565b5092915050565b60006001600160801b03808316818516808303821115612af357612af3612d07565b01949350505050565b60008219821115612b0f57612b0f612d07565b500190565b60006001600160801b0380841680612b2e57612b2e612d36565b92169190910492915050565b600082612b4957612b49612d36565b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81841382841385830485118282161615612b8d57612b8d612d07565b7f800000000000000000000000000000000000000000000000000000000000000084871286820588128184161615612bc757612bc7612d07565b858712925087820587128484161615612be257612be2612d07565b87850587128184161615612bf857612bf8612d07565b505050929093029392505050565b60006001600160801b0380831681851681830481118215151615612c2c57612c2c612d07565b02949350505050565b6000816000190483118215151615612c4f57612c4f612d07565b500290565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615612c8e57612c8e612d07565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615612cc257612cc2612d07565b50500390565b60006001600160801b0383811690831681811015612ce857612ce8612d07565b039392505050565b600082821015612d0257612d02612d07565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea264697066735822122051ae3faab8e5fd36c25f9c2989e56efea4bd562cdb68db919b4765df9ad88f1a64736f6c63430008030033";
var VestingVault__factory = /** @class */ (function (_super) {
    __extends(VestingVault__factory, _super);
    function VestingVault__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    VestingVault__factory.prototype.deploy = function (_token, _stale, overrides) {
        return _super.prototype.deploy.call(this, _token, _stale, overrides || {});
    };
    VestingVault__factory.prototype.getDeployTransaction = function (_token, _stale, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _token, _stale, overrides || {});
    };
    VestingVault__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    VestingVault__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    VestingVault__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    VestingVault__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    VestingVault__factory.bytecode = _bytecode;
    VestingVault__factory.abi = _abi;
    return VestingVault__factory;
}(ethers_1.ContractFactory));
exports.VestingVault__factory = VestingVault__factory;
