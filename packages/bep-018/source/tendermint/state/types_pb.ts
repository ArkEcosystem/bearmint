// @generated by protoc-gen-es v0.2.0 with parameter "target=ts"
// @generated from file tendermint/state/types.proto (package tendermint.state, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3, protoInt64, Timestamp} from "@bufbuild/protobuf";
import {ResponseBeginBlock, ResponseDeliverTx, ResponseEndBlock} from "../abci/types_pb.js";
import {ValidatorSet} from "../types/validator_pb.js";
import {ConsensusParams} from "../types/params_pb.js";
import {Consensus} from "../version/types_pb.js";
import {BlockID} from "../types/types_pb.js";

/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 *
 * @generated from message tendermint.state.ABCIResponses
 */
export class ABCIResponses extends Message<ABCIResponses> {
  /**
   * @generated from field: repeated tendermint.abci.ResponseDeliverTx deliver_txs = 1;
   */
  deliverTxs: ResponseDeliverTx[] = [];

  /**
   * @generated from field: tendermint.abci.ResponseEndBlock end_block = 2;
   */
  endBlock?: ResponseEndBlock;

  /**
   * @generated from field: tendermint.abci.ResponseBeginBlock begin_block = 3;
   */
  beginBlock?: ResponseBeginBlock;

  constructor(data?: PartialMessage<ABCIResponses>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.state.ABCIResponses";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "deliver_txs", kind: "message", T: ResponseDeliverTx, repeated: true },
    { no: 2, name: "end_block", kind: "message", T: ResponseEndBlock },
    { no: 3, name: "begin_block", kind: "message", T: ResponseBeginBlock },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIResponses {
    return new ABCIResponses().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIResponses {
    return new ABCIResponses().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIResponses {
    return new ABCIResponses().fromJsonString(jsonString, options);
  }

  static equals(a: ABCIResponses | PlainMessage<ABCIResponses> | undefined, b: ABCIResponses | PlainMessage<ABCIResponses> | undefined): boolean {
    return proto3.util.equals(ABCIResponses, a, b);
  }
}

/**
 * ValidatorsInfo represents the latest validator set, or the last height it changed
 *
 * @generated from message tendermint.state.ValidatorsInfo
 */
export class ValidatorsInfo extends Message<ValidatorsInfo> {
  /**
   * @generated from field: tendermint.types.ValidatorSet validator_set = 1;
   */
  validatorSet?: ValidatorSet;

  /**
   * @generated from field: int64 last_height_changed = 2;
   */
  lastHeightChanged = protoInt64.zero;

  constructor(data?: PartialMessage<ValidatorsInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.state.ValidatorsInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_set", kind: "message", T: ValidatorSet },
    { no: 2, name: "last_height_changed", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorsInfo {
    return new ValidatorsInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorsInfo {
    return new ValidatorsInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorsInfo {
    return new ValidatorsInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ValidatorsInfo | PlainMessage<ValidatorsInfo> | undefined, b: ValidatorsInfo | PlainMessage<ValidatorsInfo> | undefined): boolean {
    return proto3.util.equals(ValidatorsInfo, a, b);
  }
}

/**
 * ConsensusParamsInfo represents the latest consensus params, or the last height it changed
 *
 * @generated from message tendermint.state.ConsensusParamsInfo
 */
export class ConsensusParamsInfo extends Message<ConsensusParamsInfo> {
  /**
   * @generated from field: tendermint.types.ConsensusParams consensus_params = 1;
   */
  consensusParams?: ConsensusParams;

  /**
   * @generated from field: int64 last_height_changed = 2;
   */
  lastHeightChanged = protoInt64.zero;

  constructor(data?: PartialMessage<ConsensusParamsInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.state.ConsensusParamsInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "consensus_params", kind: "message", T: ConsensusParams },
    { no: 2, name: "last_height_changed", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusParamsInfo {
    return new ConsensusParamsInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusParamsInfo {
    return new ConsensusParamsInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusParamsInfo {
    return new ConsensusParamsInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ConsensusParamsInfo | PlainMessage<ConsensusParamsInfo> | undefined, b: ConsensusParamsInfo | PlainMessage<ConsensusParamsInfo> | undefined): boolean {
    return proto3.util.equals(ConsensusParamsInfo, a, b);
  }
}

/**
 * @generated from message tendermint.state.ABCIResponsesInfo
 */
export class ABCIResponsesInfo extends Message<ABCIResponsesInfo> {
  /**
   * @generated from field: tendermint.state.ABCIResponses abci_responses = 1;
   */
  abciResponses?: ABCIResponses;

  /**
   * @generated from field: int64 height = 2;
   */
  height = protoInt64.zero;

  constructor(data?: PartialMessage<ABCIResponsesInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.state.ABCIResponsesInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "abci_responses", kind: "message", T: ABCIResponses },
    { no: 2, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIResponsesInfo {
    return new ABCIResponsesInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIResponsesInfo {
    return new ABCIResponsesInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIResponsesInfo {
    return new ABCIResponsesInfo().fromJsonString(jsonString, options);
  }

  static equals(a: ABCIResponsesInfo | PlainMessage<ABCIResponsesInfo> | undefined, b: ABCIResponsesInfo | PlainMessage<ABCIResponsesInfo> | undefined): boolean {
    return proto3.util.equals(ABCIResponsesInfo, a, b);
  }
}

/**
 * @generated from message tendermint.state.Version
 */
export class Version extends Message<Version> {
  /**
   * @generated from field: tendermint.version.Consensus consensus = 1;
   */
  consensus?: Consensus;

  /**
   * @generated from field: string software = 2;
   */
  software = "";

  constructor(data?: PartialMessage<Version>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.state.Version";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "consensus", kind: "message", T: Consensus },
    { no: 2, name: "software", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Version {
    return new Version().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Version {
    return new Version().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Version {
    return new Version().fromJsonString(jsonString, options);
  }

  static equals(a: Version | PlainMessage<Version> | undefined, b: Version | PlainMessage<Version> | undefined): boolean {
    return proto3.util.equals(Version, a, b);
  }
}

/**
 * @generated from message tendermint.state.State
 */
export class State extends Message<State> {
  /**
   * @generated from field: tendermint.state.Version version = 1;
   */
  version?: Version;

  /**
   * immutable
   *
   * @generated from field: string chain_id = 2;
   */
  chainId = "";

  /**
   * @generated from field: int64 initial_height = 14;
   */
  initialHeight = protoInt64.zero;

  /**
   * LastBlockHeight=0 at genesis (ie. block(H=0) does not exist)
   *
   * @generated from field: int64 last_block_height = 3;
   */
  lastBlockHeight = protoInt64.zero;

  /**
   * @generated from field: tendermint.types.BlockID last_block_id = 4;
   */
  lastBlockId?: BlockID;

  /**
   * @generated from field: google.protobuf.Timestamp last_block_time = 5;
   */
  lastBlockTime?: Timestamp;

  /**
   * LastValidators is used to validate block.LastCommit.
   * Validators are persisted to the database separately every time they change,
   * so we can query for historical validator sets.
   * Note that if s.LastBlockHeight causes a valset change,
   * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
   * Extra +1 due to nextValSet delay.
   *
   * @generated from field: tendermint.types.ValidatorSet next_validators = 6;
   */
  nextValidators?: ValidatorSet;

  /**
   * @generated from field: tendermint.types.ValidatorSet validators = 7;
   */
  validators?: ValidatorSet;

  /**
   * @generated from field: tendermint.types.ValidatorSet last_validators = 8;
   */
  lastValidators?: ValidatorSet;

  /**
   * @generated from field: int64 last_height_validators_changed = 9;
   */
  lastHeightValidatorsChanged = protoInt64.zero;

  /**
   * Consensus parameters used for validating blocks.
   * Changes returned by EndBlock and updated after Commit.
   *
   * @generated from field: tendermint.types.ConsensusParams consensus_params = 10;
   */
  consensusParams?: ConsensusParams;

  /**
   * @generated from field: int64 last_height_consensus_params_changed = 11;
   */
  lastHeightConsensusParamsChanged = protoInt64.zero;

  /**
   * Merkle root of the results from executing prev block
   *
   * @generated from field: bytes last_results_hash = 12;
   */
  lastResultsHash = new Uint8Array(0);

  /**
   * the latest AppHash we've received from calling abci.Commit()
   *
   * @generated from field: bytes app_hash = 13;
   */
  appHash = new Uint8Array(0);

  constructor(data?: PartialMessage<State>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.state.State";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "message", T: Version },
    { no: 2, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "initial_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "last_block_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "last_block_id", kind: "message", T: BlockID },
    { no: 5, name: "last_block_time", kind: "message", T: Timestamp },
    { no: 6, name: "next_validators", kind: "message", T: ValidatorSet },
    { no: 7, name: "validators", kind: "message", T: ValidatorSet },
    { no: 8, name: "last_validators", kind: "message", T: ValidatorSet },
    { no: 9, name: "last_height_validators_changed", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "consensus_params", kind: "message", T: ConsensusParams },
    { no: 11, name: "last_height_consensus_params_changed", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "last_results_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 13, name: "app_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State {
    return new State().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State {
    return new State().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State {
    return new State().fromJsonString(jsonString, options);
  }

  static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean {
    return proto3.util.equals(State, a, b);
  }
}
