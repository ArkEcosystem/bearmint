// Copyright 2022 ARK Ecosystem SCIC (https://arkscic.com)
// Copyright 2022 Bearmint Mining Company (https://bearmint.com)
//
// Licensed under the Bearmint Prospector Permit, Version 1.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://github.com/bearmint/bearmint/blob/main/LICENSE.md
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
// IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

// @generated by protoc-gen-es v0.2.0 with parameter "target=ts"
// @generated from file account.proto (syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3, protoInt64, Struct} from "@bufbuild/protobuf";

/**
 * @generated from message BEP22Validator
 */
export class BEP22Validator extends Message<BEP22Validator> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: string public_key = 2;
   */
  publicKey = "";

  /**
   * @generated from field: uint64 power = 3;
   */
  power = protoInt64.zero;

  /**
   * @generated from field: map<string, uint64> delegators = 4;
   */
  delegators: { [key: string]: bigint } = {};

  constructor(data?: PartialMessage<BEP22Validator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP22Validator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "public_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "power", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "delegators", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 4 /* ScalarType.UINT64 */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP22Validator {
    return new BEP22Validator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP22Validator {
    return new BEP22Validator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP22Validator {
    return new BEP22Validator().fromJsonString(jsonString, options);
  }

  static equals(a: BEP22Validator | PlainMessage<BEP22Validator> | undefined, b: BEP22Validator | PlainMessage<BEP22Validator> | undefined): boolean {
    return proto3.util.equals(BEP22Validator, a, b);
  }
}

/**
 * @generated from message BEP22Account
 */
export class BEP22Account extends Message<BEP22Account> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: optional string public_key = 2;
   */
  publicKey?: string;

  /**
   * @generated from field: optional string moniker = 3;
   */
  moniker?: string;

  /**
   * @generated from field: uint64 nonce = 4;
   */
  nonce = protoInt64.zero;

  /**
   * @generated from field: map<string, uint64> balances = 5;
   */
  balances: { [key: string]: bigint } = {};

  /**
   * @generated from field: map<string, uint64> locked_balances = 6;
   */
  lockedBalances: { [key: string]: bigint } = {};

  /**
   * @generated from field: map<string, uint64> stakes = 7;
   */
  stakes: { [key: string]: bigint } = {};

  /**
   * @generated from field: optional BEP22Validator validator = 8;
   */
  validator?: BEP22Validator;

  /**
   * @generated from field: google.protobuf.Struct metadata = 9;
   */
  metadata?: Struct;

  constructor(data?: PartialMessage<BEP22Account>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP22Account";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "public_key", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "moniker", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "nonce", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "balances", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 4 /* ScalarType.UINT64 */} },
    { no: 6, name: "locked_balances", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 4 /* ScalarType.UINT64 */} },
    { no: 7, name: "stakes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 4 /* ScalarType.UINT64 */} },
    { no: 8, name: "validator", kind: "message", T: BEP22Validator, opt: true },
    { no: 9, name: "metadata", kind: "message", T: Struct },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP22Account {
    return new BEP22Account().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP22Account {
    return new BEP22Account().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP22Account {
    return new BEP22Account().fromJsonString(jsonString, options);
  }

  static equals(a: BEP22Account | PlainMessage<BEP22Account> | undefined, b: BEP22Account | PlainMessage<BEP22Account> | undefined): boolean {
    return proto3.util.equals(BEP22Account, a, b);
  }
}

/**
 * Slashing
 *
 * @generated from message BEP101Misbehavior
 */
export class BEP101Misbehavior extends Message<BEP101Misbehavior> {
  /**
   * @generated from field: uint32 type = 1;
   */
  type = 0;

  /**
   * @generated from field: uint64 height = 2;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: uint64 total_voting_power = 3;
   */
  totalVotingPower = protoInt64.zero;

  constructor(data?: PartialMessage<BEP101Misbehavior>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP101Misbehavior";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "total_voting_power", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP101Misbehavior {
    return new BEP101Misbehavior().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP101Misbehavior {
    return new BEP101Misbehavior().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP101Misbehavior {
    return new BEP101Misbehavior().fromJsonString(jsonString, options);
  }

  static equals(a: BEP101Misbehavior | PlainMessage<BEP101Misbehavior> | undefined, b: BEP101Misbehavior | PlainMessage<BEP101Misbehavior> | undefined): boolean {
    return proto3.util.equals(BEP101Misbehavior, a, b);
  }
}

/**
 * BEP118
 *
 * @generated from message BEP118Punishment
 */
export class BEP118Punishment extends Message<BEP118Punishment> {
  /**
   * @generated from field: uint32 percentage = 1;
   */
  percentage = 0;

  /**
   * @generated from field: string denomination = 2;
   */
  denomination = "";

  constructor(data?: PartialMessage<BEP118Punishment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP118Punishment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "percentage", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "denomination", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP118Punishment {
    return new BEP118Punishment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP118Punishment {
    return new BEP118Punishment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP118Punishment {
    return new BEP118Punishment().fromJsonString(jsonString, options);
  }

  static equals(a: BEP118Punishment | PlainMessage<BEP118Punishment> | undefined, b: BEP118Punishment | PlainMessage<BEP118Punishment> | undefined): boolean {
    return proto3.util.equals(BEP118Punishment, a, b);
  }
}

/**
 * @generated from message BEP118Record
 */
export class BEP118Record extends Message<BEP118Record> {
  /**
   * @generated from field: BEP101Misbehavior misbehavior = 1;
   */
  misbehavior?: BEP101Misbehavior;

  /**
   * @generated from field: BEP118Punishment punishment = 2;
   */
  punishment?: BEP118Punishment;

  constructor(data?: PartialMessage<BEP118Record>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP118Record";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "misbehavior", kind: "message", T: BEP101Misbehavior },
    { no: 2, name: "punishment", kind: "message", T: BEP118Punishment },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP118Record {
    return new BEP118Record().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP118Record {
    return new BEP118Record().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP118Record {
    return new BEP118Record().fromJsonString(jsonString, options);
  }

  static equals(a: BEP118Record | PlainMessage<BEP118Record> | undefined, b: BEP118Record | PlainMessage<BEP118Record> | undefined): boolean {
    return proto3.util.equals(BEP118Record, a, b);
  }
}

/**
 * @generated from message BEP118File
 */
export class BEP118File extends Message<BEP118File> {
  /**
   * @generated from field: uint32 count = 1;
   */
  count = 0;

  /**
   * @generated from field: repeated BEP118Record records = 2;
   */
  records: BEP118Record[] = [];

  constructor(data?: PartialMessage<BEP118File>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP118File";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "records", kind: "message", T: BEP118Record, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP118File {
    return new BEP118File().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP118File {
    return new BEP118File().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP118File {
    return new BEP118File().fromJsonString(jsonString, options);
  }

  static equals(a: BEP118File | PlainMessage<BEP118File> | undefined, b: BEP118File | PlainMessage<BEP118File> | undefined): boolean {
    return proto3.util.equals(BEP118File, a, b);
  }
}

/**
 * BEP119
 *
 * @generated from message BEP119Punishment
 */
export class BEP119Punishment extends Message<BEP119Punishment> {
  /**
   * @generated from field: uint32 percentage = 1;
   */
  percentage = 0;

  /**
   * @generated from field: string denomination = 2;
   */
  denomination = "";

  constructor(data?: PartialMessage<BEP119Punishment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP119Punishment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "percentage", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "denomination", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP119Punishment {
    return new BEP119Punishment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP119Punishment {
    return new BEP119Punishment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP119Punishment {
    return new BEP119Punishment().fromJsonString(jsonString, options);
  }

  static equals(a: BEP119Punishment | PlainMessage<BEP119Punishment> | undefined, b: BEP119Punishment | PlainMessage<BEP119Punishment> | undefined): boolean {
    return proto3.util.equals(BEP119Punishment, a, b);
  }
}

/**
 * @generated from message BEP119Record
 */
export class BEP119Record extends Message<BEP119Record> {
  /**
   * @generated from field: BEP101Misbehavior misbehavior = 1;
   */
  misbehavior?: BEP101Misbehavior;

  /**
   * @generated from field: BEP119Punishment punishment = 2;
   */
  punishment?: BEP119Punishment;

  constructor(data?: PartialMessage<BEP119Record>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP119Record";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "misbehavior", kind: "message", T: BEP101Misbehavior },
    { no: 2, name: "punishment", kind: "message", T: BEP119Punishment },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP119Record {
    return new BEP119Record().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP119Record {
    return new BEP119Record().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP119Record {
    return new BEP119Record().fromJsonString(jsonString, options);
  }

  static equals(a: BEP119Record | PlainMessage<BEP119Record> | undefined, b: BEP119Record | PlainMessage<BEP119Record> | undefined): boolean {
    return proto3.util.equals(BEP119Record, a, b);
  }
}

/**
 * @generated from message BEP119File
 */
export class BEP119File extends Message<BEP119File> {
  /**
   * @generated from field: uint32 count = 1;
   */
  count = 0;

  /**
   * @generated from field: repeated BEP119Record records = 2;
   */
  records: BEP119Record[] = [];

  constructor(data?: PartialMessage<BEP119File>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP119File";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "records", kind: "message", T: BEP119Record, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP119File {
    return new BEP119File().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP119File {
    return new BEP119File().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP119File {
    return new BEP119File().fromJsonString(jsonString, options);
  }

  static equals(a: BEP119File | PlainMessage<BEP119File> | undefined, b: BEP119File | PlainMessage<BEP119File> | undefined): boolean {
    return proto3.util.equals(BEP119File, a, b);
  }
}

/**
 * BEP120
 *
 * @generated from message BEP120Sentence
 */
export class BEP120Sentence extends Message<BEP120Sentence> {
  /**
   * @generated from field: uint64 start = 1;
   */
  start = protoInt64.zero;

  /**
   * @generated from field: uint64 end = 2;
   */
  end = protoInt64.zero;

  constructor(data?: PartialMessage<BEP120Sentence>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP120Sentence";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "end", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP120Sentence {
    return new BEP120Sentence().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP120Sentence {
    return new BEP120Sentence().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP120Sentence {
    return new BEP120Sentence().fromJsonString(jsonString, options);
  }

  static equals(a: BEP120Sentence | PlainMessage<BEP120Sentence> | undefined, b: BEP120Sentence | PlainMessage<BEP120Sentence> | undefined): boolean {
    return proto3.util.equals(BEP120Sentence, a, b);
  }
}

/**
 * @generated from message BEP120Record
 */
export class BEP120Record extends Message<BEP120Record> {
  /**
   * @generated from field: BEP101Misbehavior misbehavior = 1;
   */
  misbehavior?: BEP101Misbehavior;

  /**
   * @generated from field: BEP120Sentence sentence = 2;
   */
  sentence?: BEP120Sentence;

  constructor(data?: PartialMessage<BEP120Record>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP120Record";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "misbehavior", kind: "message", T: BEP101Misbehavior },
    { no: 2, name: "sentence", kind: "message", T: BEP120Sentence },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP120Record {
    return new BEP120Record().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP120Record {
    return new BEP120Record().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP120Record {
    return new BEP120Record().fromJsonString(jsonString, options);
  }

  static equals(a: BEP120Record | PlainMessage<BEP120Record> | undefined, b: BEP120Record | PlainMessage<BEP120Record> | undefined): boolean {
    return proto3.util.equals(BEP120Record, a, b);
  }
}

/**
 * @generated from message BEP120File
 */
export class BEP120File extends Message<BEP120File> {
  /**
   * @generated from field: uint32 count = 1;
   */
  count = 0;

  /**
   * @generated from field: bool jailed = 2;
   */
  jailed = false;

  /**
   * @generated from field: repeated BEP120Record records = 3;
   */
  records: BEP120Record[] = [];

  constructor(data?: PartialMessage<BEP120File>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP120File";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "jailed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "records", kind: "message", T: BEP120Record, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP120File {
    return new BEP120File().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP120File {
    return new BEP120File().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP120File {
    return new BEP120File().fromJsonString(jsonString, options);
  }

  static equals(a: BEP120File | PlainMessage<BEP120File> | undefined, b: BEP120File | PlainMessage<BEP120File> | undefined): boolean {
    return proto3.util.equals(BEP120File, a, b);
  }
}

/**
 * BEP88
 *
 * @generated from message BEP88Validator
 */
export class BEP88Validator extends Message<BEP88Validator> {
  /**
   * @generated from field: map<string, uint64> delegators = 1;
   */
  delegators: { [key: string]: bigint } = {};

  constructor(data?: PartialMessage<BEP88Validator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "BEP88Validator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegators", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 4 /* ScalarType.UINT64 */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BEP88Validator {
    return new BEP88Validator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BEP88Validator {
    return new BEP88Validator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BEP88Validator {
    return new BEP88Validator().fromJsonString(jsonString, options);
  }

  static equals(a: BEP88Validator | PlainMessage<BEP88Validator> | undefined, b: BEP88Validator | PlainMessage<BEP88Validator> | undefined): boolean {
    return proto3.util.equals(BEP88Validator, a, b);
  }
}
