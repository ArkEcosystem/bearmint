// @generated by protoc-gen-es v0.2.0 with parameter "target=ts"
// @generated from file tendermint/mempool/types.proto (package tendermint.mempool, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message as Message$1, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message tendermint.mempool.Txs
 */
export class Txs extends Message$1<Txs> {
  /**
   * @generated from field: repeated bytes txs = 1;
   */
  txs: Uint8Array[] = [];

  constructor(data?: PartialMessage<Txs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.mempool.Txs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "txs", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Txs {
    return new Txs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Txs {
    return new Txs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Txs {
    return new Txs().fromJsonString(jsonString, options);
  }

  static equals(a: Txs | PlainMessage<Txs> | undefined, b: Txs | PlainMessage<Txs> | undefined): boolean {
    return proto3.util.equals(Txs, a, b);
  }
}

/**
 * @generated from message tendermint.mempool.Message
 */
export class Message extends Message$1<Message> {
  /**
   * @generated from oneof tendermint.mempool.Message.sum
   */
  sum: {
    /**
     * @generated from field: tendermint.mempool.Txs txs = 1;
     */
    value: Txs;
    case: "txs";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Message>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "tendermint.mempool.Message";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "txs", kind: "message", T: Txs, oneof: "sum" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message {
    return new Message().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJsonString(jsonString, options);
  }

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean {
    return proto3.util.equals(Message, a, b);
  }
}

