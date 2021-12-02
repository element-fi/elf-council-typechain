/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AirdropInterface extends ethers.utils.Interface {
  functions: {
    "authorize(address)": FunctionFragment;
    "authorized(address)": FunctionFragment;
    "claim(uint256,uint256,bytes32[],address)": FunctionFragment;
    "claimAndDelegate(uint256,address,uint256,bytes32[],address)": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "deauthorize(address)": FunctionFragment;
    "expiration()": FunctionFragment;
    "isAuthorized(address)": FunctionFragment;
    "lockingVault()": FunctionFragment;
    "owner()": FunctionFragment;
    "reclaim(address)": FunctionFragment;
    "rewardsRoot()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authorize", values: [string]): string;
  encodeFunctionData(functionFragment: "authorized", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BigNumberish, BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAndDelegate",
    values: [BigNumberish, string, BigNumberish, BytesLike[], string]
  ): string;
  encodeFunctionData(functionFragment: "claimed", values: [string]): string;
  encodeFunctionData(functionFragment: "deauthorize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "expiration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockingVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "reclaim", values: [string]): string;
  encodeFunctionData(
    functionFragment: "rewardsRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimAndDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deauthorize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "expiration", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockingVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reclaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardsRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class Airdrop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AirdropInterface;

  functions: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    expiration(overrides?: CallOverrides): Promise<[BigNumber]>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<[boolean]>;

    lockingVault(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    reclaim(
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardsRoot(overrides?: CallOverrides): Promise<[string]>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  authorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  claim(
    amount: BigNumberish,
    totalGrant: BigNumberish,
    merkleProof: BytesLike[],
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAndDelegate(
    amount: BigNumberish,
    delegate: string,
    totalGrant: BigNumberish,
    merkleProof: BytesLike[],
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  deauthorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  expiration(overrides?: CallOverrides): Promise<BigNumber>;

  isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

  lockingVault(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  reclaim(
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardsRoot(overrides?: CallOverrides): Promise<string>;

  setOwner(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    authorize(who: string, overrides?: CallOverrides): Promise<void>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deauthorize(who: string, overrides?: CallOverrides): Promise<void>;

    expiration(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

    lockingVault(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    reclaim(destination: string, overrides?: CallOverrides): Promise<void>;

    rewardsRoot(overrides?: CallOverrides): Promise<string>;

    setOwner(who: string, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    expiration(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    lockingVault(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    reclaim(
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardsRoot(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorized(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    expiration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAuthorized(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockingVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reclaim(
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardsRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
