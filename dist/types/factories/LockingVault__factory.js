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
exports.LockingVault__factory = void 0;
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
                name: "_staleBlockLag",
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
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
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
                name: "newDelegate",
                type: "address",
            },
        ],
        name: "changeDelegation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "fundedAccount",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "firstDelegation",
                type: "address",
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
                name: "who",
                type: "address",
            },
        ],
        name: "deposits",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint96",
                name: "",
                type: "uint96",
            },
        ],
        stateMutability: "view",
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
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60c060405234801561001057600080fd5b506040516113b73803806113b783398101604081905261002f9161004a565b60609190911b6001600160601b03191660805260a052610082565b6000806040838503121561005c578182fd5b82516001600160a01b0381168114610072578283fd5b6020939093015192949293505050565b60805160601c60a0516112f96100be6000396000818160ba015261059d01526000818161012d01528181610330015261061001526112f96000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063e91f32351161005b578063e91f323514610102578063f45346dc14610115578063fc0c546a14610128578063fc7e286d1461017457610088565b80632e1a7d4d1461008d5780639f973fd5146100a2578063c2c94b88146100b5578063e7d20283146100ef575b600080fd5b6100a061009b3660046110ba565b6101c0565b005b6100a06100b0366004610f93565b6103c9565b6100dc7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6100dc6100fd366004610fb4565b610564565b6100dc610110366004611018565b610586565b6100a0610123366004610fdd565b6105d5565b61014f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e6565b610187610182366004610f93565b61088d565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526bffffffffffffffffffffffff9091166020830152016100e6565b60006101ca6108f4565b336000908152602091909152604090208054909150829082906014906102179084907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff16611267565b82546bffffffffffffffffffffffff9182166101009390930a928302919092021990911617905550805473ffffffffffffffffffffffffffffffffffffffff166000610261610939565b9050600061026f828461098c565b90506102878361027f8784611250565b849190610a2d565b73ffffffffffffffffffffffffffffffffffffffff8316337f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e06102ea887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611198565b60405190815260200160405180910390a36040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018690527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb90604401602060405180830381600087803b15801561038957600080fd5b505af115801561039d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c1919061109a565b505050505050565b60006103d36108f4565b33600090815260209190915260408120805473ffffffffffffffffffffffffffffffffffffffff8581167fffffffffffffffffffffffff000000000000000000000000000000000000000083161783559193506bffffffffffffffffffffffff7401000000000000000000000000000000000000000082041692911690610458610939565b90506000610466828461098c565b90506104768361027f8684611250565b73ffffffffffffffffffffffffffffffffffffffff8316337f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e06104d9877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611198565b60405190815260200160405180910390a360006104f6838861098c565b905061050e876105068784611117565b859190610a2d565b60405185815273ffffffffffffffffffffffffffffffffffffffff88169033907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a350505050505050565b60008061056f610939565b905061057c818585610b89565b9150505b92915050565b600080610591610939565b90506105cb86866105c27f000000000000000000000000000000000000000000000000000000000000000043611250565b84929190610bf8565b9695505050505050565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd90606401602060405180830381600087803b15801561066957600080fd5b505af115801561067d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a1919061109a565b5060006106ac6108f4565b73ffffffffffffffffffffffffffffffffffffffff808616600090815260209290925260409091208054909250168061078c575080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316178082558290849083906014906107599084907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1661112f565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506107f5565b8154849083906014906107c69084907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1661112f565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055505b60006107ff610939565b9050600061080d828461098c565b90508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e08860405161086e91815260200190565b60405180910390a36108848361027f8884611117565b50505050505050565b600080600061089a6108f4565b73ffffffffffffffffffffffffffffffffffffffff9485166000908152602091909152604090205493841694740100000000000000000000000000000000000000009094046bffffffffffffffffffffffff169392505050565b60006109346040518060400160405280600881526020017f6465706f73697473000000000000000000000000000000000000000000000000815250610c9a565b905090565b6040805180820190915260608152600060208201526109346040518060400160405280600b81526020017f766f74696e67506f776572000000000000000000000000000000000000000000815250610d13565b60008061099a846020015190565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020919091526040902080549091506fffffffffffffffffffffffffffffffff16806109e757600092505050610580565b6000610a22836109f8600185611250565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b979650505050505050565b77ffffffffffffffffffffffffffffffffffffffffffffffff811115610ab4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f4f6f42000000000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000610ac1846020015190565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020829052604081208054929350914360c01b9185831791608081901c916fffffffffffffffffffffffffffffffff909116908115610b2957610b25866109f8600185611250565b5090505b8143821415610b4057610b3d600184611250565b90505b8481600189010155438214610b7c57610b7c8785610b5f866001611117565b6fffffffffffffffffffffffffffffffff1660809190911b179055565b5050505050505050505050565b600080610b97856020015190565b73ffffffffffffffffffffffffffffffffffffffff85166000908152602082905260408120805492935091608081901c916fffffffffffffffffffffffffffffffff90911690610bea8488838686610d51565b9a9950505050505050505050565b600080610c06866020015190565b73ffffffffffffffffffffffffffffffffffffffff86166000908152602082905260408120805492935091608081901c916fffffffffffffffffffffffffffffffff9091169080610c5a858a8a8787610d51565b9150915083821115610bea57610c71848387610f11565b6fffffffffffffffffffffffffffffffff8316608083901b1785559a9950505050505050505050565b6000807f03a912cdb153207069d92d44a2357e3f0ce00f7ee84da3510f1c6851b4cac4ee905060008184604051602001610cd59291906110d2565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b6040805180820190915260608152600060208201526000610d3383610f34565b6040805180820190915284815260208101919091529150505b919050565b60008082610dbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f756e696e697469616c697a6564000000000000000000000000000000000000006044820152606401610aab565b6000610dc8600185611250565b90508460005b828214610e6c5760006002610de38585611117565b610dee906001611117565b610df8919061115f565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b821415610e3a57929650919450610f079350505050565b8b821015610e56578a821015610e4e578293505b829450610e64565b610e61600184611250565b95505b505050610dce565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a821115610efd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f536561726368204661696c7572650000000000000000000000000000000000006044820152606401610aab565b9195509093505050505b9550959350505050565b60018101835b83811015610f2d57600082820155600101610f17565b5050505050565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a905060008184604051602001610cd59291906110d2565b803573ffffffffffffffffffffffffffffffffffffffff81168114610d4c57600080fd5b600060208284031215610fa4578081fd5b610fad82610f6f565b9392505050565b60008060408385031215610fc6578081fd5b610fcf83610f6f565b946020939093013593505050565b600080600060608486031215610ff1578081fd5b610ffa84610f6f565b92506020840135915061100f60408501610f6f565b90509250925092565b6000806000806060858703121561102d578081fd5b61103685610f6f565b935060208501359250604085013567ffffffffffffffff80821115611059578283fd5b818701915087601f83011261106c578283fd5b81358181111561107a578384fd5b88602082850101111561108b578384fd5b95989497505060200194505050565b6000602082840312156110ab578081fd5b81518015158114610fad578182fd5b6000602082840312156110cb578081fd5b5035919050565b60008382528251815b818110156110f7576020818601810151858301820152016110db565b818111156111085782602083860101525b50919091016020019392505050565b6000821982111561112a5761112a611294565b500190565b60006bffffffffffffffffffffffff80831681851680830382111561115657611156611294565b01949350505050565b600082611193577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff818413828413858304851182821616156111d7576111d7611294565b7f80000000000000000000000000000000000000000000000000000000000000008487128682058812818416161561121157611211611294565b85871292508782058712848416161561122c5761122c611294565b8785058712818416161561124257611242611294565b505050929093029392505050565b60008282101561126257611262611294565b500390565b60006bffffffffffffffffffffffff8381169083168181101561128c5761128c611294565b039392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220b3915b9b2f9a5645e7f29ec90a780142465bd1033605baf6603a6414dddefab864736f6c63430008030033";
var LockingVault__factory = /** @class */ (function (_super) {
    __extends(LockingVault__factory, _super);
    function LockingVault__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    LockingVault__factory.prototype.deploy = function (_token, _staleBlockLag, overrides) {
        return _super.prototype.deploy.call(this, _token, _staleBlockLag, overrides || {});
    };
    LockingVault__factory.prototype.getDeployTransaction = function (_token, _staleBlockLag, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _token, _staleBlockLag, overrides || {});
    };
    LockingVault__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LockingVault__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LockingVault__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LockingVault__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LockingVault__factory.bytecode = _bytecode;
    LockingVault__factory.abi = _abi;
    return LockingVault__factory;
}(ethers_1.ContractFactory));
exports.LockingVault__factory = LockingVault__factory;