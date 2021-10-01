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
exports.Reverter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "fail",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
];
var _bytecode = "0x6080604052348015600f57600080fd5b50606b80601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063a9cc471814602d575b600080fd5b60336028565b00fea26469706673582212207dde1aaa311dcf0eb0200351ecd39ca261612edd47b2358dc42029a54ed9dc2964736f6c63430008030033";
var Reverter__factory = /** @class */ (function (_super) {
    __extends(Reverter__factory, _super);
    function Reverter__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Reverter__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    Reverter__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    Reverter__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Reverter__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Reverter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Reverter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Reverter__factory.bytecode = _bytecode;
    Reverter__factory.abi = _abi;
    return Reverter__factory;
}(ethers_1.ContractFactory));
exports.Reverter__factory = Reverter__factory;