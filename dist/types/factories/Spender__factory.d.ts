import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Spender, SpenderInterface } from "../Spender";
export declare class Spender__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_owner: string, _spender: string, _token: string, _smallSpendLimit: BigNumberish, _mediumSpendLimit: BigNumberish, _highSpendLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Spender>;
    getDeployTransaction(_owner: string, _spender: string, _token: string, _smallSpendLimit: BigNumberish, _mediumSpendLimit: BigNumberish, _highSpendLimit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Spender;
    connect(signer: Signer): Spender__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051610ed3380380610ed383398101604081905261002f9161010f565b600080546001600160a01b0319163317905561006c856001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6100758661009c565b60609390931b6001600160601b0319166080526003919091556004556005555061018f9050565b6000546001600160a01b031633146100ed5760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008060008060008060c08789031215610127578182fd5b865161013281610177565b602088015190965061014381610177565b604088015190955061015481610177565b80945050606087015192506080870151915060a087015190509295509295509295565b6001600160a01b038116811461018c57600080fd5b50565b60805160601c610d116101c26000396000818161026a0152818161058a015281816106680152610a4e0152610d116000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638da5cb5b11610097578063d6343f1411610066578063d6343f141461023c578063ec36ca8c14610245578063fc0c546a14610265578063fe9fbb801461028c57610100565b80638da5cb5b146101a85780639c19fa81146101ed578063b6a5d7de146101f6578063b91816111461020957610100565b806327c97fa5116100d357806327c97fa51461015c57806333fe56761461016f5780633d5e6b07146101825780635919ffb21461019557610100565b806303e41d20146101055780630d9460a01461011a57806313af40351461012d578063157e664a14610140575b600080fd5b610118610113366004610c44565b61029f565b005b610118610128366004610c44565b61030a565b61011861013b366004610af5565b61036c565b61014960035481565b6040519081526020015b60405180910390f35b61011861016a366004610af5565b61041a565b61011861017d366004610c44565b6104cd565b610118610190366004610c44565b6106e9565b6101186101a3366004610b16565b61074b565b6000546101c89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610153565b61014960045481565b610118610204366004610af5565b61088d565b61022c610217366004610af5565b60016020526000908152604090205460ff1681565b6040519015158152602001610153565b61014960055481565b610149610253366004610c14565b60026020526000908152604090205481565b6101c87f000000000000000000000000000000000000000000000000000000000000000081565b61022c61029a366004610af5565b61094d565b6102a83361094d565b6102f95760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064015b60405180910390fd5b610306828260045461097c565b5050565b6103133361094d565b61035f5760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064016102f0565b610306828260035461097c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103d35760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104815760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105345760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561061c576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b1580156105e157600080fd5b505afa1580156105f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106199190610c2c565b91505b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8281166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156106ac57600080fd5b505af11580156106c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e49190610bf4565b505050565b6106f23361094d565b61073e5760405162461bcd60e51b815260206004820152601560248201527f53656e646572206e6f7420417574686f72697a6564000000000000000000000060448201526064016102f0565b610306828260055461097c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107b25760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b806000815181106107ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160038190555080600181518110610834577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516004819055508060028151811061087c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160058190555050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108f45760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016102f0565b61094a8173ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b43600090815260026020526040902054816109978286610c6f565b11156109e55760405162461bcd60e51b815260206004820152601460248201527f5370656e64204c696d697420457863656564656400000000000000000000000060448201526064016102f0565b6109ef8185610c6f565b436000908152600260205260409081902091909155517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018690527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b158015610a9257600080fd5b505af1158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca9190610bf4565b5050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461097757600080fd5b600060208284031215610b06578081fd5b610b0f82610ad1565b9392505050565b60006020808385031215610b28578182fd5b823567ffffffffffffffff80821115610b3f578384fd5b818501915085601f830112610b52578384fd5b813581811115610b6457610b64610cac565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610ba757610ba7610cac565b604052828152858101935084860182860187018a1015610bc5578788fd5b8795505b83861015610be7578035855260019590950194938601938601610bc9565b5098975050505050505050565b600060208284031215610c05578081fd5b81518015158114610b0f578182fd5b600060208284031215610c25578081fd5b5035919050565b600060208284031215610c3d578081fd5b5051919050565b60008060408385031215610c56578081fd5b82359150610c6660208401610ad1565b90509250929050565b60008219821115610ca7577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212204aed55af00b0b34ebc7888c30826b3061e2ed621b5fac4b9e33893f0f7f8adf564736f6c63430008030033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): SpenderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Spender;
}
