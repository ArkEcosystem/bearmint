[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseLoadSnapshotChunk

# Class: ResponseLoadSnapshotChunk

[abci](../modules/abci.md).ResponseLoadSnapshotChunk

**`Generated`**

from message tendermint.abci.ResponseLoadSnapshotChunk

## Hierarchy

- [`Message`](Message.md)<[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)\>

  ↳ **`ResponseLoadSnapshotChunk`**

## Table of contents

### Constructors

- [constructor](abci.ResponseLoadSnapshotChunk.md#constructor)

### Properties

- [chunk](abci.ResponseLoadSnapshotChunk.md#chunk)
- [fields](abci.ResponseLoadSnapshotChunk.md#fields)
- [runtime](abci.ResponseLoadSnapshotChunk.md#runtime)
- [typeName](abci.ResponseLoadSnapshotChunk.md#typename)

### Methods

- [clone](abci.ResponseLoadSnapshotChunk.md#clone)
- [equals](abci.ResponseLoadSnapshotChunk.md#equals)
- [fromBinary](abci.ResponseLoadSnapshotChunk.md#frombinary)
- [fromJson](abci.ResponseLoadSnapshotChunk.md#fromjson)
- [fromJsonString](abci.ResponseLoadSnapshotChunk.md#fromjsonstring)
- [getType](abci.ResponseLoadSnapshotChunk.md#gettype)
- [toBinary](abci.ResponseLoadSnapshotChunk.md#tobinary)
- [toJson](abci.ResponseLoadSnapshotChunk.md#tojson)
- [toJsonString](abci.ResponseLoadSnapshotChunk.md#tojsonstring)
- [equals](abci.ResponseLoadSnapshotChunk.md#equals-1)
- [fromBinary](abci.ResponseLoadSnapshotChunk.md#frombinary-1)
- [fromJson](abci.ResponseLoadSnapshotChunk.md#fromjson-1)
- [fromJsonString](abci.ResponseLoadSnapshotChunk.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseLoadSnapshotChunk**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1930](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1930)

## Properties

### chunk

• **chunk**: `Uint8Array`

**`Generated`**

from field: bytes chunk = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1928](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1928)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1937](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1937)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1935](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1935)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseLoadSnapshotChunk"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1936](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1936)

## Methods

### clone

▸ **clone**(): [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

Create a deep copy.

#### Returns

[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

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

[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)\>

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
| `a` | `undefined` \| [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)\> |
| `b` | `undefined` \| [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1953](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1953)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1941](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1941)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1945](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1945)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1949](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1949)
