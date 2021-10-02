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

interface TreasuryInterface extends ethers.utils.Interface {
  functions: {
    "approve(address,address,uint256)": FunctionFragment;
    "authorize(address)": FunctionFragment;
    "authorized(address)": FunctionFragment;
    "deauthorize(address)": FunctionFragment;
    "genericCall(address,bytes)": FunctionFragment;
    "isAuthorized(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "sendFunds(address,uint256,address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "authorize", values: [string]): string;
  encodeFunctionData(functionFragment: "authorized", values: [string]): string;
  encodeFunctionData(functionFragment: "deauthorize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "genericCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorized",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendFunds",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deauthorize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genericCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendFunds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;

  events: {};
}

export class Treasury extends BaseContract {
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

  interface: TreasuryInterface;

  functions: {
    approve(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    genericCall(
      _target: string,
      _callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    sendFunds(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    _token: string,
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  deauthorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  genericCall(
    _target: string,
    _callData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  sendFunds(
    _token: string,
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    authorize(who: string, overrides?: CallOverrides): Promise<void>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    deauthorize(who: string, overrides?: CallOverrides): Promise<void>;

    genericCall(
      _target: string,
      _callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    sendFunds(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(who: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approve(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    genericCall(
      _target: string,
      _callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    sendFunds(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorized(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    genericCall(
      _target: string,
      _callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAuthorized(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendFunds(
      _token: string,
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
