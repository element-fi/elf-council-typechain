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
exports.Storage__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "typeString",
                type: "string",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "getPtr",
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
];
var _bytecode = "0x6102b061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806387ec29271461003a575b600080fd5b61004d610048366004610184565b61005f565b60405190815260200160405180910390f35b600080836040516020016100739190610238565b604051602081830303815290604052805190602001209050600081846040516020016100a092919061021e565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152919052805160209091012095945050505050565b600082601f8301126100ef578081fd5b813567ffffffffffffffff8082111561010a5761010a61024b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156101505761015061024b565b81604052838152866020858801011115610168578485fd5b8360208701602083013792830160200193909352509392505050565b60008060408385031215610196578182fd5b823567ffffffffffffffff808211156101ad578384fd5b6101b9868387016100df565b935060208501359150808211156101ce578283fd5b506101db858286016100df565b9150509250929050565b60008151815b8181101561020557602081850181015186830152016101eb565b818111156102135782828601525b509290920192915050565b600083825261023060208301846101e5565b949350505050565b600061024482846101e5565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220af593413992b3d55d5fa2c0d3de4b393b150e33c233cf114605bdd0374c5510564736f6c63430008030033";
var Storage__factory = /** @class */ (function (_super) {
    __extends(Storage__factory, _super);
    function Storage__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Storage__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Storage__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Storage__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Storage__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Storage__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Storage__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Storage__factory.bytecode = _bytecode;
    Storage__factory.abi = _abi;
    return Storage__factory;
}(ethers_1.ContractFactory));
exports.Storage__factory = Storage__factory;