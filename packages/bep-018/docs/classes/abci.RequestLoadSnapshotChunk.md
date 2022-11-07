[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestLoadSnapshotChunk

# Class: RequestLoadSnapshotChunk

[abci](../modules/abci.md).RequestLoadSnapshotChunk

loads a snapshot chunk

**`Generated`**

from message tendermint.abci.RequestLoadSnapshotChunk

## Hierarchy

- [`Message`](Message.md)<[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)\>

  ↳ **`RequestLoadSnapshotChunk`**

## Table of contents

### Constructors

- [constructor](abci.RequestLoadSnapshotChunk.md#constructor)

### Properties

- [chunk](abci.RequestLoadSnapshotChunk.md#chunk)
- [format](abci.RequestLoadSnapshotChunk.md#format)
- [height](abci.RequestLoadSnapshotChunk.md#height)
- [fields](abci.RequestLoadSnapshotChunk.md#fields)
- [runtime](abci.RequestLoadSnapshotChunk.md#runtime)
- [typeName](abci.RequestLoadSnapshotChunk.md#typename)

### Methods

- [clone](abci.RequestLoadSnapshotChunk.md#clone)
- [equals](abci.RequestLoadSnapshotChunk.md#equals)
- [fromBinary](abci.RequestLoadSnapshotChunk.md#frombinary)
- [fromJson](abci.RequestLoadSnapshotChunk.md#fromjson)
- [fromJsonString](abci.RequestLoadSnapshotChunk.md#fromjsonstring)
- [getType](abci.RequestLoadSnapshotChunk.md#gettype)
- [toBinary](abci.RequestLoadSnapshotChunk.md#tobinary)
- [toJson](abci.RequestLoadSnapshotChunk.md#tojson)
- [toJsonString](abci.RequestLoadSnapshotChunk.md#tojsonstring)
- [equals](abci.RequestLoadSnapshotChunk.md#equals-1)
- [fromBinary](abci.RequestLoadSnapshotChunk.md#frombinary-1)
- [fromJson](abci.RequestLoadSnapshotChunk.md#fromjson-1)
- [fromJsonString](abci.RequestLoadSnapshotChunk.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestLoadSnapshotChunk**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:758](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L758)

## Properties

### chunk

• **chunk**: `number` = `0`

**`Generated`**

from field: uint32 chunk = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:756](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L756)

___

### format

• **format**: `number` = `0`

**`Generated`**

from field: uint32 format = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:751](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L751)

___

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 height = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:746](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L746)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:765](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L765)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:763](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L763)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestLoadSnapshotChunk"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:764](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L764)

## Methods

### clone

▸ **clone**(): [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

Create a deep copy.

#### Returns

[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

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

[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)\>

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
| `a` | `undefined` \| [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)\> |
| `b` | `undefined` \| [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:783](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L783)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:771](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L771)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:775](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L775)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:779](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L779)
