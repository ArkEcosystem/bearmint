[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / Proposal

# Class: Proposal

[types](../modules/types.md).Proposal

**`Generated`**

from message tendermint.types.Proposal

## Hierarchy

- [`Message`](Message.md)<[`Proposal`](types.Proposal.md)\>

  ↳ **`Proposal`**

## Table of contents

### Constructors

- [constructor](types.Proposal.md#constructor)

### Properties

- [blockId](types.Proposal.md#blockid)
- [height](types.Proposal.md#height)
- [polRound](types.Proposal.md#polround)
- [round](types.Proposal.md#round)
- [signature](types.Proposal.md#signature)
- [timestamp](types.Proposal.md#timestamp)
- [type](types.Proposal.md#type)
- [fields](types.Proposal.md#fields)
- [runtime](types.Proposal.md#runtime)
- [typeName](types.Proposal.md#typename)

### Methods

- [clone](types.Proposal.md#clone)
- [equals](types.Proposal.md#equals)
- [fromBinary](types.Proposal.md#frombinary)
- [fromJson](types.Proposal.md#fromjson)
- [fromJsonString](types.Proposal.md#fromjsonstring)
- [getType](types.Proposal.md#gettype)
- [toBinary](types.Proposal.md#tobinary)
- [toJson](types.Proposal.md#tojson)
- [toJsonString](types.Proposal.md#tojsonstring)
- [equals](types.Proposal.md#equals-1)
- [fromBinary](types.Proposal.md#frombinary-1)
- [fromJson](types.Proposal.md#fromjson-1)
- [fromJsonString](types.Proposal.md#fromjsonstring-1)

## Constructors

### constructor

• **new Proposal**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Proposal`](types.Proposal.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:648](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L648)

## Properties

### blockId

• `Optional` **blockId**: [`BlockID`](types.BlockID.md)

**`Generated`**

from field: tendermint.types.BlockID block_id = 5;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:636](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L636)

___

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:621](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L621)

___

### polRound

• **polRound**: `number` = `0`

**`Generated`**

from field: int32 pol_round = 4;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:631](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L631)

___

### round

• **round**: `number` = `0`

**`Generated`**

from field: int32 round = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:626](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L626)

___

### signature

• **signature**: `Uint8Array`

**`Generated`**

from field: bytes signature = 7;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:646](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L646)

___

### timestamp

• `Optional` **timestamp**: `Timestamp`

**`Generated`**

from field: google.protobuf.Timestamp timestamp = 6;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:641](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L641)

___

### type

• **type**: [`SignedMsgType`](../enums/types.SignedMsgType.md) = `SignedMsgType.UNKNOWN`

**`Generated`**

from field: tendermint.types.SignedMsgType type = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:616](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L616)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:655](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L655)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:653](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L653)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.Proposal"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:654](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L654)

## Methods

### clone

▸ **clone**(): [`Proposal`](types.Proposal.md)

Create a deep copy.

#### Returns

[`Proposal`](types.Proposal.md)

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
| `other` | `undefined` \| ``null`` \| [`Proposal`](types.Proposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Proposal`](types.Proposal.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Proposal`](types.Proposal.md)

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

[`Proposal`](types.Proposal.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Proposal`](types.Proposal.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Proposal`](types.Proposal.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Proposal`](types.Proposal.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Proposal`](types.Proposal.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Proposal`](types.Proposal.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Proposal`](types.Proposal.md)\>

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
| `a` | `undefined` \| [`Proposal`](types.Proposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Proposal`](types.Proposal.md)\> |
| `b` | `undefined` \| [`Proposal`](types.Proposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Proposal`](types.Proposal.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:677](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L677)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Proposal`](types.Proposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Proposal`](types.Proposal.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:665](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L665)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Proposal`](types.Proposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Proposal`](types.Proposal.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:669](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L669)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Proposal`](types.Proposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Proposal`](types.Proposal.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:673](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L673)
