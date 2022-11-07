[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / BlockMeta

# Class: BlockMeta

[types](../modules/types.md).BlockMeta

**`Generated`**

from message tendermint.types.BlockMeta

## Hierarchy

- [`Message`](Message.md)<[`BlockMeta`](types.BlockMeta.md)\>

  ↳ **`BlockMeta`**

## Table of contents

### Constructors

- [constructor](types.BlockMeta.md#constructor)

### Properties

- [blockId](types.BlockMeta.md#blockid)
- [blockSize](types.BlockMeta.md#blocksize)
- [header](types.BlockMeta.md#header)
- [numTxs](types.BlockMeta.md#numtxs)
- [fields](types.BlockMeta.md#fields)
- [runtime](types.BlockMeta.md#runtime)
- [typeName](types.BlockMeta.md#typename)

### Methods

- [clone](types.BlockMeta.md#clone)
- [equals](types.BlockMeta.md#equals)
- [fromBinary](types.BlockMeta.md#frombinary)
- [fromJson](types.BlockMeta.md#fromjson)
- [fromJsonString](types.BlockMeta.md#fromjsonstring)
- [getType](types.BlockMeta.md#gettype)
- [toBinary](types.BlockMeta.md#tobinary)
- [toJson](types.BlockMeta.md#tojson)
- [toJsonString](types.BlockMeta.md#tojsonstring)
- [equals](types.BlockMeta.md#equals-1)
- [fromBinary](types.BlockMeta.md#frombinary-1)
- [fromJson](types.BlockMeta.md#fromjson-1)
- [fromJsonString](types.BlockMeta.md#fromjsonstring-1)

## Constructors

### constructor

• **new BlockMeta**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BlockMeta`](types.BlockMeta.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:792](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L792)

## Properties

### blockId

• `Optional` **blockId**: [`BlockID`](types.BlockID.md)

**`Generated`**

from field: tendermint.types.BlockID block_id = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:775](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L775)

___

### blockSize

• **blockSize**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 block_size = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:780](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L780)

___

### header

• `Optional` **header**: [`Header`](types.Header.md)

**`Generated`**

from field: tendermint.types.Header header = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:785](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L785)

___

### numTxs

• **numTxs**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 num_txs = 4;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:790](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L790)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:799](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L799)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:797](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L797)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.BlockMeta"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:798](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L798)

## Methods

### clone

▸ **clone**(): [`BlockMeta`](types.BlockMeta.md)

Create a deep copy.

#### Returns

[`BlockMeta`](types.BlockMeta.md)

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
| `other` | `undefined` \| ``null`` \| [`BlockMeta`](types.BlockMeta.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockMeta`](types.BlockMeta.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BlockMeta`](types.BlockMeta.md)

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

[`BlockMeta`](types.BlockMeta.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BlockMeta`](types.BlockMeta.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockMeta`](types.BlockMeta.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BlockMeta`](types.BlockMeta.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockMeta`](types.BlockMeta.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BlockMeta`](types.BlockMeta.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BlockMeta`](types.BlockMeta.md)\>

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
| `a` | `undefined` \| [`BlockMeta`](types.BlockMeta.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockMeta`](types.BlockMeta.md)\> |
| `b` | `undefined` \| [`BlockMeta`](types.BlockMeta.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockMeta`](types.BlockMeta.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:818](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L818)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BlockMeta`](types.BlockMeta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BlockMeta`](types.BlockMeta.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:806](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L806)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BlockMeta`](types.BlockMeta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockMeta`](types.BlockMeta.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:810](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L810)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BlockMeta`](types.BlockMeta.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockMeta`](types.BlockMeta.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:814](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L814)
