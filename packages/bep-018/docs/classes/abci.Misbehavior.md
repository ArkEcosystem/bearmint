[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / Misbehavior

# Class: Misbehavior

[abci](../modules/abci.md).Misbehavior

**`Generated`**

from message tendermint.abci.Misbehavior

## Hierarchy

- [`Message`](Message.md)<[`Misbehavior`](abci.Misbehavior.md)\>

  ↳ **`Misbehavior`**

## Table of contents

### Constructors

- [constructor](abci.Misbehavior.md#constructor)

### Properties

- [height](abci.Misbehavior.md#height)
- [time](abci.Misbehavior.md#time)
- [totalVotingPower](abci.Misbehavior.md#totalvotingpower)
- [type](abci.Misbehavior.md#type)
- [validator](abci.Misbehavior.md#validator)
- [fields](abci.Misbehavior.md#fields)
- [runtime](abci.Misbehavior.md#runtime)
- [typeName](abci.Misbehavior.md#typename)

### Methods

- [clone](abci.Misbehavior.md#clone)
- [equals](abci.Misbehavior.md#equals)
- [fromBinary](abci.Misbehavior.md#frombinary)
- [fromJson](abci.Misbehavior.md#fromjson)
- [fromJsonString](abci.Misbehavior.md#fromjsonstring)
- [getType](abci.Misbehavior.md#gettype)
- [toBinary](abci.Misbehavior.md#tobinary)
- [toJson](abci.Misbehavior.md#tojson)
- [toJsonString](abci.Misbehavior.md#tojsonstring)
- [equals](abci.Misbehavior.md#equals-1)
- [fromBinary](abci.Misbehavior.md#frombinary-1)
- [fromJson](abci.Misbehavior.md#fromjson-1)
- [fromJsonString](abci.Misbehavior.md#fromjsonstring-1)

## Constructors

### constructor

• **new Misbehavior**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Misbehavior`](abci.Misbehavior.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2648](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2648)

## Properties

### height

• **height**: `bigint` = `protoInt64.zero`

The height when the offense occurred

**`Generated`**

from field: int64 height = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2630](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2630)

___

### time

• `Optional` **time**: `Timestamp`

The corresponding time where the offense occurred

**`Generated`**

from field: google.protobuf.Timestamp time = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2637](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2637)

___

### totalVotingPower

• **totalVotingPower**: `bigint` = `protoInt64.zero`

Total voting power of the validator set in case the ABCI application does
not store historical validators.
https://github.com/tendermint/tendermint/issues/4581

**`Generated`**

from field: int64 total_voting_power = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2646](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2646)

___

### type

• **type**: [`MisbehaviorType`](../enums/abci.MisbehaviorType.md) = `MisbehaviorType.UNKNOWN`

**`Generated`**

from field: tendermint.abci.MisbehaviorType type = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2616](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2616)

___

### validator

• `Optional` **validator**: [`Validator`](abci.Validator.md)

The offending validator

**`Generated`**

from field: tendermint.abci.Validator validator = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2623](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2623)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2655](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2655)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2653](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2653)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.Misbehavior"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2654](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2654)

## Methods

### clone

▸ **clone**(): [`Misbehavior`](abci.Misbehavior.md)

Create a deep copy.

#### Returns

[`Misbehavior`](abci.Misbehavior.md)

#### Inherited from

[Message](Message.md).[clone](Message.md#clone)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:27

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`Misbehavior`](abci.Misbehavior.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Misbehavior`](abci.Misbehavior.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Misbehavior`](abci.Misbehavior.md)

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Misbehavior`](abci.Misbehavior.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Misbehavior`](abci.Misbehavior.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Misbehavior`](abci.Misbehavior.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Misbehavior`](abci.Misbehavior.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Misbehavior`](abci.Misbehavior.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Misbehavior`](abci.Misbehavior.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Misbehavior`](abci.Misbehavior.md)\>

#### Inherited from

[Message](Message.md).[getType](Message.md#gettype)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:64

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

[Message](Message.md).[toBinary](Message.md#tobinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:49

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

[Message](Message.md).[toJson](Message.md#tojson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:54

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

[Message](Message.md).[toJsonString](Message.md#tojsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:58

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`Misbehavior`](abci.Misbehavior.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Misbehavior`](abci.Misbehavior.md)\> |
| `b` | `undefined` \| [`Misbehavior`](abci.Misbehavior.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Misbehavior`](abci.Misbehavior.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2675](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2675)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Misbehavior`](abci.Misbehavior.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Misbehavior`](abci.Misbehavior.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2663](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2663)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Misbehavior`](abci.Misbehavior.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Misbehavior`](abci.Misbehavior.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2667](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2667)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Misbehavior`](abci.Misbehavior.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Misbehavior`](abci.Misbehavior.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2671](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2671)
