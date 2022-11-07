[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / CommitInfo

# Class: CommitInfo

[abci](../modules/abci.md).CommitInfo

**`Generated`**

from message tendermint.abci.CommitInfo

## Hierarchy

- [`Message`](Message.md)<[`CommitInfo`](abci.CommitInfo.md)\>

  ↳ **`CommitInfo`**

## Table of contents

### Constructors

- [constructor](abci.CommitInfo.md#constructor)

### Properties

- [round](abci.CommitInfo.md#round)
- [votes](abci.CommitInfo.md#votes)
- [fields](abci.CommitInfo.md#fields)
- [runtime](abci.CommitInfo.md#runtime)
- [typeName](abci.CommitInfo.md#typename)

### Methods

- [clone](abci.CommitInfo.md#clone)
- [equals](abci.CommitInfo.md#equals)
- [fromBinary](abci.CommitInfo.md#frombinary)
- [fromJson](abci.CommitInfo.md#fromjson)
- [fromJsonString](abci.CommitInfo.md#fromjsonstring)
- [getType](abci.CommitInfo.md#gettype)
- [toBinary](abci.CommitInfo.md#tobinary)
- [toJson](abci.CommitInfo.md#tojson)
- [toJsonString](abci.CommitInfo.md#tojsonstring)
- [equals](abci.CommitInfo.md#equals-1)
- [fromBinary](abci.CommitInfo.md#frombinary-1)
- [fromJson](abci.CommitInfo.md#fromjson-1)
- [fromJsonString](abci.CommitInfo.md#fromjsonstring-1)

## Constructors

### constructor

• **new CommitInfo**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`CommitInfo`](abci.CommitInfo.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2181](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2181)

## Properties

### round

• **round**: `number` = `0`

**`Generated`**

from field: int32 round = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2174](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2174)

___

### votes

• **votes**: [`VoteInfo`](abci.VoteInfo.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.VoteInfo votes = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2179](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2179)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2188](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2188)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2186](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2186)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.CommitInfo"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2187](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2187)

## Methods

### clone

▸ **clone**(): [`CommitInfo`](abci.CommitInfo.md)

Create a deep copy.

#### Returns

[`CommitInfo`](abci.CommitInfo.md)

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
| `other` | `undefined` \| ``null`` \| [`CommitInfo`](abci.CommitInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`CommitInfo`](abci.CommitInfo.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CommitInfo`](abci.CommitInfo.md)

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

[`CommitInfo`](abci.CommitInfo.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CommitInfo`](abci.CommitInfo.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CommitInfo`](abci.CommitInfo.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CommitInfo`](abci.CommitInfo.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CommitInfo`](abci.CommitInfo.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CommitInfo`](abci.CommitInfo.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CommitInfo`](abci.CommitInfo.md)\>

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
| `a` | `undefined` \| [`CommitInfo`](abci.CommitInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`CommitInfo`](abci.CommitInfo.md)\> |
| `b` | `undefined` \| [`CommitInfo`](abci.CommitInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`CommitInfo`](abci.CommitInfo.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2205](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2205)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CommitInfo`](abci.CommitInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CommitInfo`](abci.CommitInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2193](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2193)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CommitInfo`](abci.CommitInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CommitInfo`](abci.CommitInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2197](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2197)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CommitInfo`](abci.CommitInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CommitInfo`](abci.CommitInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2201](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2201)
