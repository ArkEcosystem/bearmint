[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / Vote

# Class: Vote

[types](../modules/types.md).Vote

Vote represents a prevote, precommit, or commit vote from validators for
consensus.

**`Generated`**

from message tendermint.types.Vote

## Hierarchy

- [`Message`](Message.md)<[`Vote`](types.Vote.md)\>

  ↳ **`Vote`**

## Table of contents

### Constructors

- [constructor](types.Vote.md#constructor)

### Properties

- [blockId](types.Vote.md#blockid)
- [height](types.Vote.md#height)
- [round](types.Vote.md#round)
- [signature](types.Vote.md#signature)
- [timestamp](types.Vote.md#timestamp)
- [type](types.Vote.md#type)
- [validatorAddress](types.Vote.md#validatoraddress)
- [validatorIndex](types.Vote.md#validatorindex)
- [fields](types.Vote.md#fields)
- [runtime](types.Vote.md#runtime)
- [typeName](types.Vote.md#typename)

### Methods

- [clone](types.Vote.md#clone)
- [equals](types.Vote.md#equals)
- [fromBinary](types.Vote.md#frombinary)
- [fromJson](types.Vote.md#fromjson)
- [fromJsonString](types.Vote.md#fromjsonstring)
- [getType](types.Vote.md#gettype)
- [toBinary](types.Vote.md#tobinary)
- [toJson](types.Vote.md#tojson)
- [toJsonString](types.Vote.md#tojsonstring)
- [equals](types.Vote.md#equals-1)
- [fromBinary](types.Vote.md#frombinary-1)
- [fromJson](types.Vote.md#fromjson-1)
- [fromJsonString](types.Vote.md#fromjsonstring-1)

## Constructors

### constructor

• **new Vote**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Vote`](types.Vote.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:460](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L460)

## Properties

### blockId

• `Optional` **blockId**: [`BlockID`](types.BlockID.md)

zero if vote is nil.

**`Generated`**

from field: tendermint.types.BlockID block_id = 4;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:438](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L438)

___

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:426](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L426)

___

### round

• **round**: `number` = `0`

**`Generated`**

from field: int32 round = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:431](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L431)

___

### signature

• **signature**: `Uint8Array`

**`Generated`**

from field: bytes signature = 8;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:458](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L458)

___

### timestamp

• `Optional` **timestamp**: `Timestamp`

**`Generated`**

from field: google.protobuf.Timestamp timestamp = 5;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:443](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L443)

___

### type

• **type**: [`SignedMsgType`](../enums/types.SignedMsgType.md) = `SignedMsgType.UNKNOWN`

**`Generated`**

from field: tendermint.types.SignedMsgType type = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:421](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L421)

___

### validatorAddress

• **validatorAddress**: `Uint8Array`

**`Generated`**

from field: bytes validator_address = 6;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:448](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L448)

___

### validatorIndex

• **validatorIndex**: `number` = `0`

**`Generated`**

from field: int32 validator_index = 7;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:453](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L453)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:467](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L467)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:465](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L465)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.Vote"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:466](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L466)

## Methods

### clone

▸ **clone**(): [`Vote`](types.Vote.md)

Create a deep copy.

#### Returns

[`Vote`](types.Vote.md)

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
| `other` | `undefined` \| ``null`` \| [`Vote`](types.Vote.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Vote`](types.Vote.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Vote`](types.Vote.md)

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

[`Vote`](types.Vote.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Vote`](types.Vote.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Vote`](types.Vote.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Vote`](types.Vote.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Vote`](types.Vote.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Vote`](types.Vote.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Vote`](types.Vote.md)\>

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
| `a` | `undefined` \| [`Vote`](types.Vote.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Vote`](types.Vote.md)\> |
| `b` | `undefined` \| [`Vote`](types.Vote.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Vote`](types.Vote.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:490](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L490)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Vote`](types.Vote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Vote`](types.Vote.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:478](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L478)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Vote`](types.Vote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Vote`](types.Vote.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:482](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L482)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Vote`](types.Vote.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Vote`](types.Vote.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:486](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L486)
