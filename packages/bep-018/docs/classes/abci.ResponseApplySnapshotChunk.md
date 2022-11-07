[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseApplySnapshotChunk

# Class: ResponseApplySnapshotChunk

[abci](../modules/abci.md).ResponseApplySnapshotChunk

**`Generated`**

from message tendermint.abci.ResponseApplySnapshotChunk

## Hierarchy

- [`Message`](Message.md)<[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)\>

  ↳ **`ResponseApplySnapshotChunk`**

## Table of contents

### Constructors

- [constructor](abci.ResponseApplySnapshotChunk.md#constructor)

### Properties

- [refetchChunks](abci.ResponseApplySnapshotChunk.md#refetchchunks)
- [rejectSenders](abci.ResponseApplySnapshotChunk.md#rejectsenders)
- [result](abci.ResponseApplySnapshotChunk.md#result)
- [fields](abci.ResponseApplySnapshotChunk.md#fields)
- [runtime](abci.ResponseApplySnapshotChunk.md#runtime)
- [typeName](abci.ResponseApplySnapshotChunk.md#typename)

### Methods

- [clone](abci.ResponseApplySnapshotChunk.md#clone)
- [equals](abci.ResponseApplySnapshotChunk.md#equals)
- [fromBinary](abci.ResponseApplySnapshotChunk.md#frombinary)
- [fromJson](abci.ResponseApplySnapshotChunk.md#fromjson)
- [fromJsonString](abci.ResponseApplySnapshotChunk.md#fromjsonstring)
- [getType](abci.ResponseApplySnapshotChunk.md#gettype)
- [toBinary](abci.ResponseApplySnapshotChunk.md#tobinary)
- [toJson](abci.ResponseApplySnapshotChunk.md#tojson)
- [toJsonString](abci.ResponseApplySnapshotChunk.md#tojsonstring)
- [equals](abci.ResponseApplySnapshotChunk.md#equals-1)
- [fromBinary](abci.ResponseApplySnapshotChunk.md#frombinary-1)
- [fromJson](abci.ResponseApplySnapshotChunk.md#fromjson-1)
- [fromJsonString](abci.ResponseApplySnapshotChunk.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseApplySnapshotChunk**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1981](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1981)

## Properties

### refetchChunks

• **refetchChunks**: `number`[] = `[]`

Chunks to refetch and reapply

**`Generated`**

from field: repeated uint32 refetch_chunks = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1972](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1972)

___

### rejectSenders

• **rejectSenders**: `string`[] = `[]`

Chunk senders to reject and ban

**`Generated`**

from field: repeated string reject_senders = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1979](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1979)

___

### result

• **result**: [`ResponseApplySnapshotChunk_Result`](../enums/abci.ResponseApplySnapshotChunk_Result.md) = `ResponseApplySnapshotChunk_Result.UNKNOWN`

**`Generated`**

from field: tendermint.abci.ResponseApplySnapshotChunk.Result result = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1965](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1965)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1988](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1988)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1986](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1986)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseApplySnapshotChunk"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1987](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1987)

## Methods

### clone

▸ **clone**(): [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

Create a deep copy.

#### Returns

[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

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

[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)\>

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
| `a` | `undefined` \| [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)\> |
| `b` | `undefined` \| [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2006](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2006)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1994](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1994)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1998](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1998)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2002](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2002)
