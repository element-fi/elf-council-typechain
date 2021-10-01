import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoreVoting, CoreVotingInterface } from "../CoreVoting";
export declare class CoreVoting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_timelock: string, _baseQuorum: BigNumberish, _minProposalPower: BigNumberish, _gsc: string, votingVaults: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CoreVoting>;
    getDeployTransaction(_timelock: string, _baseQuorum: BigNumberish, _minProposalPower: BigNumberish, _gsc: string, votingVaults: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CoreVoting;
    connect(signer: Signer): CoreVoting__factory;
    static readonly bytecode = "0x60806040526200001361196060036200026d565b6004556200002561196060056200026d565b6005553480156200003557600080fd5b50604051620028d7380380620028d783398101604081905262000058916200015d565b600080546001600160a01b03191633178155600385905560068490555b8151811015620000ed57600160096000848481518110620000a657634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000e4816200028f565b91505062000075565b50600080546001600160a01b0319166001600160a01b03871617905562000135826001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b5050505050620002d9565b80516001600160a01b03811681146200015857600080fd5b919050565b600080600080600060a0868803121562000175578081fd5b620001808662000140565b94506020808701519450604087015193506200019f6060880162000140565b60808801519093506001600160401b0380821115620001bc578384fd5b818901915089601f830112620001d0578384fd5b815181811115620001e557620001e5620002c3565b8060051b604051601f19603f830116810181811085821117156200020d576200020d620002c3565b604052828152858101935084860182860187018e10156200022c578788fd5b8795505b838610156200025957620002448162000140565b85526001959095019493860193860162000230565b508096505050505050509295509295909350565b60008160001904831182151516156200028a576200028a620002ad565b500290565b6000600019821415620002a657620002a6620002ad565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6125ee80620002e96000396000f3fe608060405234801561001057600080fd5b50600436106101975760003560e01c80638da5cb5b116100e3578063bd9c75a51161008c578063da35c66411610066578063da35c66414610418578063f131e5eb14610421578063fe9fbb801461042a57610197565b8063bd9c75a5146103e9578063d1b67627146103fc578063d4b875671461040f57610197565b8063af7a060c116100bd578063af7a060c14610380578063b6a5d7de146103b3578063b9181611146103c657610197565b80638da5cb5b1461031f578063a4c9507714610364578063aa35fb511461036d57610197565b806327c97fa5116101455780634eb665af1161011f5780634eb665af146102e6578063771a5323146102f95780637d5709eb1461030c57610197565b806327c97fa5146102ad578063341a7b42146102c05780634392b99c146102d357610197565b806313af40351161017657806313af40351461027e57806315126a3d146102915780631c39c96c146102a457610197565b806214d11d1461019c578063013cf08b146101b15780630455444314610267575b600080fd5b6101af6101aa3660046120af565b61043d565b005b61021b6101bf3660046120af565b600a60205260009081526040902080546001820154600283015460059093015491926fffffffffffffffffffffffffffffffff808316937001000000000000000000000000000000009384900482169383831693048216911686565b604080519687526fffffffffffffffffffffffffffffffff9586166020880152938516938601939093529083166060850152821660808401521660a082015260c0015b60405180910390f35b61027060045481565b60405190815260200161025e565b6101af61028c366004611e9b565b6104ae565b6101af61029f3660046120df565b61055c565b61027060035481565b6101af6102bb366004611e9b565b610b06565b6101af6102ce366004611eb5565b610b9b565b6101af6102e1366004611f21565b610c3a565b6101af6102f43660046120af565b610cf7565b610270610307366004611eef565b610d63565b6101af61031a3660046120af565b610dce565b60005461033f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161025e565b61027060055481565b61027061037b366004612034565b610e3a565b6103a361038e366004611e9b565b60096020526000908152604090205460ff1681565b604051901515815260200161025e565b6101af6103c1366004611e9b565b611490565b6103a36103d4366004611e9b565b60016020526000908152604090205460ff1681565b6101af6103f7366004611f5c565b611532565b6101af61040a3660046120af565b611b11565b61027060065481565b61027060075481565b61027061196081565b6103a3610438366004611e9b565b611b7d565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104a95760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600555565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105155760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104a0565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60025460ff16156105af5760405162461bcd60e51b815260206004820152600a60248201527f5265656e7472616e63790000000000000000000000000000000000000000000060448201526064016104a0565b6002805460ff191660019081179091556000848152600a6020526040902001546fffffffffffffffffffffffffffffffff700100000000000000000000000000000000909104164310156106455760405162461bcd60e51b815260206004820152600c60248201527f6e6f7420756e6c6f636b6564000000000000000000000000000000000000000060448201526064016104a0565b6000838152600a602052604090206001015470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff166106c95760405162461bcd60e51b815260206004820152601360248201527f50726576696f75736c792065786563757465640000000000000000000000000060448201526064016104a0565b6000838152600a60205260409020600501546fffffffffffffffffffffffffffffffff16431061073b5760405162461bcd60e51b815260206004820152601860248201527f70617374206c6173742063616c6c2074696d657374616d70000000000000000060448201526064016104a0565b6000838152600a602090815260409182902054915161075e91859185910161231b565b60405160208183030381529060405280519060200120146107c15760405162461bcd60e51b815260206004820152600d60248201527f68617368206d69736d617463680000000000000000000000000000000000000060448201526064016104a0565b6000838152600a60205260408082208151606081019283905291600391820191908285855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f010492830192600103820291508084116107e6575050506000888152600a60209081526040808320600201549087015191870151875197985092967001000000000000000000000000000000009091046fffffffffffffffffffffffffffffffff1695509093506108959250612482565b61089f9190612482565b6fffffffffffffffffffffffffffffffff1610159050600082600160200201516fffffffffffffffffffffffffffffffff1683600060200201516fffffffffffffffffffffffffffffffff161190508180156108f85750805b6109445760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74206578656375746500000000000000000000000000000000000060448201526064016104a0565b60005b8551811015610a6b57600086828151811061097257634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168683815181106109b057634e487b7160e01b600052603260045260246000fd5b60200260200101516040516109c5919061219f565b6000604051808303816000865af19150503d8060008114610a02576040519150601f19603f3d011682016040523d82523d6000602084013e610a07565b606091505b5050905080610a585760405162461bcd60e51b815260206004820152600b60248201527f43616c6c206661696c656400000000000000000000000000000000000000000060448201526064016104a0565b5080610a6381612553565b915050610947565b506040518681527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f9060200160405180910390a150505060009283525050600a6020526040812081815560018101829055600280820183905560038201839055600482019290925560050180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055805460ff19169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b6d5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104a0565b73ffffffffffffffffffffffffffffffffffffffff166000908152600160205260409020805460ff19169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c025760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104a0565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600960205260409020805460ff1916911515919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ca15760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104a0565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526008602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000090941683529290522055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d5e5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104a0565b600455565b73ffffffffffffffffffffffffffffffffffffffff821660009081526008602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008516845290915281205480610dc5575050600354610dc8565b90505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e355760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104a0565b600355565b6000828152600a60205260408120600201546fffffffffffffffffffffffffffffffff16431115610ead5760405162461bcd60e51b815260206004820152600760248201527f457870697265640000000000000000000000000000000000000000000000000060448201526064016104a0565b6000805b8651811015611181576000610ec78260016124b6565b90505b8751811015610faf57878181518110610ef357634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16888381518110610f3157634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415610f9d5760405162461bcd60e51b815260206004820152600f60248201527f6475706c6963617465207661756c74000000000000000000000000000000000060448201526064016104a0565b80610fa781612553565b915050610eca565b5060096000888381518110610fd457634e487b7160e01b600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff166110545760405162461bcd60e51b815260206004820152601060248201527f756e7665726966696564207661756c740000000000000000000000000000000060448201526064016104a0565b86818151811061107457634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663e91f323533600a600089815260200190815260200160002060010160009054906101000a90046fffffffffffffffffffffffffffffffff168985815181106110eb57634e487b7160e01b600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b8152600401611111939291906121bb565b602060405180830381600087803b15801561112b57600080fd5b505af115801561113f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116391906120c7565b61116d9083612482565b91508061117981612553565b915050610eb1565b50336000908152600b602090815260408083208784529091529020546fffffffffffffffffffffffffffffffff16156112b457336000908152600b6020908152604080832087845280835281842054600a845291909320929091526fffffffffffffffffffffffffffffffff81169160030190700100000000000000000000000000000000900460ff16600281111561122a57634e487b7160e01b600052602160045260246000fd5b6003811061124857634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff1661127d91906124ce565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b6040518060400160405280826fffffffffffffffffffffffffffffffff1681526020018460028111156112f757634e487b7160e01b600052602160045260246000fd5b9052336000908152600b602090815260408083208884528252909120825181546fffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffffffffffff0000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffffffffffff000000000000000000000000000000000016177001000000000000000000000000000000008360028111156113af57634e487b7160e01b600052602160045260246000fd5b021790555050506000848152600a6020526040902081906003018460028111156113e957634e487b7160e01b600052602160045260246000fd5b6003811061140757634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff1661143c9190612482565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550806fffffffffffffffffffffffffffffffff16915050949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146114f75760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104a0565b61152f8173ffffffffffffffffffffffffffffffffffffffff166000908152600160208190526040909120805460ff19169091179055565b50565b8483146115815760405162461bcd60e51b815260206004820152601560248201527f6172726179206c656e677468206d69736d61746368000000000000000000000060448201526064016104a0565b846115ce5760405162461bcd60e51b815260206004820152600e60248201527f656d7074792070726f706f73616c00000000000000000000000000000000000060448201526064016104a0565b6000868686866040516020016115e7949392919061220b565b60408051601f19818403018152919052805160209091012090506000805b8781101561174657600061167e88888481811061163257634e487b7160e01b600052603260045260246000fd5b905060200281019061164491906123ca565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611bac92505050565b90506000600860008c8c868181106116a657634e487b7160e01b600052603260045260246000fd5b90506020020160208101906116bb9190611e9b565b73ffffffffffffffffffffffffffffffffffffffff168152602080820192909252604090810160009081207fffffffff00000000000000000000000000000000000000000000000000000000861682529092529020549050801561171f5780611723565b6003545b905083811115611731578093505b5050808061173e90612553565b915050611605565b5060055460045461175790436124b6565b61176191906124b6565b84116117af5760405162461bcd60e51b815260206004820152601a60248201527f65787069726573206265666f726520766f74696e6720656e647300000000000060448201526064016104a0565b6040518060e001604052808381526020016001436117cd91906124ff565b6fffffffffffffffffffffffffffffffff168152602001600454436117f291906124b6565b6fffffffffffffffffffffffffffffffff1681526020016005546004544361181a91906124b6565b61182491906124b6565b6fffffffffffffffffffffffffffffffff168152602001826fffffffffffffffffffffffffffffffff168152602001600a600060075481526020019081526020016000206003016003806020026040519081016040528092919082600380156118e6576020028201916000905b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f010492830192600103820291508084116118915790505b50505091835250506fffffffffffffffffffffffffffffffff8681166020928301526007546000908152600a835260409081902084518155928401519084015190821670010000000000000000000000000000000091831682021760018401556060840151608085015190831692160217600282015560a08201516119719060038084019190611bd5565b5060c08201518160050160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509050506000611a028d8d808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506119f992508e91508f9050612516565b60075487610e3a565b90506000600654831115611a1857600654611a1a565b825b9050611a2533611b7d565b611a795780821015611a795760405162461bcd60e51b815260206004820152601960248201527f696e73756666696369656e7420766f74696e6720706f7765720000000000000060448201526064016104a0565b7fafbd5d299242bf861d198949ad835672e2e35b2e1838cee606a0b5aec2b4fa426007544360045443611aac91906124b6565b600554600454611abc90436124b6565b611ac691906124b6565b60408051948552602085019390935291830152606082015260800160405180910390a1600160076000828254611afc91906124b6565b90915550505050505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b785760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016104a0565b600655565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b602001517ffffffffff00000000000000000000000000000000000000000000000000000001690565b600283019183908215611c855791602002820160005b83821115611c4757835183826101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509260200192601001602081600f01049283019260010302611beb565b8015611c835782816101000a8154906fffffffffffffffffffffffffffffffff0219169055601001602081600f01049283019260010302611c47565b505b50611c91929150611c95565b5090565b5b80821115611c915760008155600101611c96565b6000611cbd611cb88461245e565b61242d565b83815290506020808201908360005b86811015611d4c5781358601601f8981830112611ce857600080fd5b813567ffffffffffffffff811115611d0257611d026125a2565b611d1386601f19848401160161242d565b91508082528a86828501011115611d2957600080fd5b808684018784013760009082018601528552509282019290820190600101611ccc565b505050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ba757600080fd5b60008083601f840112611d8c578182fd5b50813567ffffffffffffffff811115611da3578182fd5b6020830191508360208260051b8501011115611dbe57600080fd5b9250929050565b600082601f830112611dd5578081fd5b81356020611de5611cb88361245e565b80838252828201915082860187848660051b8901011115611e04578586fd5b855b85811015611e2957611e1782611d57565b84529284019290840190600101611e06565b5090979650505050505050565b600082601f830112611e46578081fd5b611e5583833560208501611caa565b9392505050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114611ba757600080fd5b803560038110611ba757600080fd5b600060208284031215611eac578081fd5b611e5582611d57565b60008060408385031215611ec7578081fd5b611ed083611d57565b915060208301358015158114611ee4578182fd5b809150509250929050565b60008060408385031215611f01578182fd5b611f0a83611d57565b9150611f1860208401611e5c565b90509250929050565b600080600060608486031215611f35578081fd5b611f3e84611d57565b9250611f4c60208501611e5c565b9150604084013590509250925092565b60008060008060008060008060008060c08b8d031215611f7a578586fd5b8a3567ffffffffffffffff80821115611f91578788fd5b611f9d8e838f01611d7b565b909c509a5060208d0135915080821115611fb5578788fd5b611fc18e838f01611d7b565b909a50985060408d0135915080821115611fd9578788fd5b611fe58e838f01611d7b565b909850965060608d0135915080821115611ffd578586fd5b5061200a8d828e01611d7b565b90955093505060808b0135915061202360a08c01611e8c565b90509295989b9194979a5092959850565b60008060008060808587031215612049578384fd5b843567ffffffffffffffff80821115612060578586fd5b61206c88838901611dc5565b95506020870135915080821115612081578485fd5b5061208e87828801611e36565b935050604085013591506120a460608601611e8c565b905092959194509250565b6000602082840312156120c0578081fd5b5035919050565b6000602082840312156120d8578081fd5b5051919050565b6000806000606084860312156120f3578081fd5b83359250602084013567ffffffffffffffff80821115612111578283fd5b61211d87838801611dc5565b93506040860135915080821115612132578283fd5b5061213f86828701611e36565b9150509250925092565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000815180845261218b816020860160208601612523565b601f01601f19169290920160200192915050565b600082516121b1818460208701612523565b9190910192915050565b600073ffffffffffffffffffffffffffffffffffffffff851682526fffffffffffffffffffffffffffffffff84166020830152606060408301526122026060830184612173565b95945050505050565b6040808252810184905260008560608301825b87811015612262576122518261223385611d57565b73ffffffffffffffffffffffffffffffffffffffff16815260200190565b60209390930192915060010161221e565b506020915083810382850152808582528282019050828660051b83010187855b8881101561230b57601f1985840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b36030181126122c4578788fd5b8a01803567ffffffffffffffff8111156122dc578889fd5b8036038c13156122ea578889fd5b6122f785828a8501612149565b958801959450505090850190600101612282565b50909a9950505050505050505050565b604080825283519082018190526000906020906060840190828701845b8281101561236c57815173ffffffffffffffffffffffffffffffffffffffff16845260208401935090840190600101612338565b50505083810382850152845180825282820190600581901b83018401878501865b838110156123bb57601f198684030185526123a9838351612173565b9487019492509086019060010161238d565b50909998505050505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123fe578283fd5b83018035915067ffffffffffffffff821115612418578283fd5b602001915036819003821315611dbe57600080fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612456576124566125a2565b604052919050565b600067ffffffffffffffff821115612478576124786125a2565b5060051b60200190565b60006fffffffffffffffffffffffffffffffff8083168185168083038211156124ad576124ad61258c565b01949350505050565b600082198211156124c9576124c961258c565b500190565b60006fffffffffffffffffffffffffffffffff838116908316818110156124f7576124f761258c565b039392505050565b6000828210156125115761251161258c565b500390565b6000611e55368484611caa565b60005b8381101561253e578181015183820152602001612526565b8381111561254d576000848401525b50505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156125855761258561258c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c0101e077fe9d735b69f731858f2be9beff203a68efbb537c37a88a0a68837ee64736f6c63430008030033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): CoreVotingInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CoreVoting;
}
