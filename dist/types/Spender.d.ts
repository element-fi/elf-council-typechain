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

interface SpenderInterface extends ethers.utils.Interface {
  functions: {
    "authorize(address)": FunctionFragment;
    "authorized(address)": FunctionFragment;
    "blockExpenditure(uint256)": FunctionFragment;
    "deauthorize(address)": FunctionFragment;
    "highSpendLimit()": FunctionFragment;
    "isAuthorized(address)": FunctionFragment;
    "largeSpend(uint256,address)": FunctionFragment;
    "mediumSpend(uint256,address)": FunctionFragment;
    "mediumSpendLimit()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeToken(uint256,address)": FunctionFragment;
    "setLimits(uint256[])": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "smallSpend(uint256,address)": FunctionFragment;
    "smallSpendLimit()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authorize", values: [string]): string;
  encodeFunctionData(functionFragment: "authorized", values: [string]): string;
  encodeFunctionData(
    functionFragment: "blockExpenditure",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "deauthorize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "highSpendLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "largeSpend",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mediumSpend",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mediumSpendLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeToken",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLimits",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "smallSpend",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "smallSpendLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockExpenditure",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deauthorize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "highSpendLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "largeSpend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mediumSpend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mediumSpendLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLimits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "smallSpend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "smallSpendLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class Spender extends BaseContract {
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

  interface: SpenderInterface;

  functions: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    blockExpenditure(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    highSpendLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<[boolean]>;

    largeSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mediumSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mediumSpendLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeToken(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLimits(
      limits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    smallSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    smallSpendLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  authorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  blockExpenditure(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deauthorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  highSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

  isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

  largeSpend(
    amount: BigNumberish,
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mediumSpend(
    amount: BigNumberish,
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mediumSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeToken(
    amount: BigNumberish,
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLimits(
    limits: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  smallSpend(
    amount: BigNumberish,
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  smallSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    authorize(who: string, overrides?: CallOverrides): Promise<void>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    blockExpenditure(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deauthorize(who: string, overrides?: CallOverrides): Promise<void>;

    highSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

    largeSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mediumSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mediumSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeToken(
      amount: BigNumberish,
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLimits(limits: BigNumberish[], overrides?: CallOverrides): Promise<void>;

    setOwner(who: string, overrides?: CallOverrides): Promise<void>;

    smallSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    smallSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    blockExpenditure(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    highSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    largeSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mediumSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mediumSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeToken(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLimits(
      limits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    smallSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    smallSpendLimit(overrides?: CallOverrides): Promise<BigNumber>;

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

    blockExpenditure(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    highSpendLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAuthorized(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    largeSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mediumSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mediumSpendLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeToken(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLimits(
      limits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    smallSpend(
      amount: BigNumberish,
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    smallSpendLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
