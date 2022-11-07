[@bearmint/bep-018 - v0.0.0](../README.md) / [params](../modules/params.md) / BlockParams

# Class: BlockParams

[params](../modules/params.md).BlockParams

BlockParams contains limits on the block size.

**`Generated`**

from message tendermint.types.BlockParams

## Hierarchy

- [`Message`](Message.md)<[`BlockParams`](params.BlockParams.md)\>

  ↳ **`BlockParams`**

## Table of contents

### Constructors

- [constructor](params.BlockParams.md#constructor)

### Properties

- [maxBytes](params.BlockParams.md#maxbytes)
- [maxGas](params.BlockParams.md#maxgas)
- [fields](params.BlockParams.md#fields)
- [runtime](params.BlockParams.md#runtime)
- [typeName](params.BlockParams.md#typename)

### Methods

- [clone](params.BlockParams.md#clone)
- [equals](params.BlockParams.md#equals)
- [fromBinary](params.BlockParams.md#frombinary)
- [fromJson](params.BlockParams.md#fromjson)
- [fromJsonString](params.BlockParams.md#fromjsonstring)
- [getType](params.BlockParams.md#gettype)
- [toBinary](params.BlockParams.md#tobinary)
- [toJson](params.BlockParams.md#tojson)
- [toJsonString](params.BlockParams.md#tojsonstring)
- [equals](params.BlockParams.md#equals-1)
- [fromBinary](params.BlockParams.md#frombinary-1)
- [fromJson](params.BlockParams.md#fromjson-1)
- [fromJsonString](params.BlockParams.md#fromjsonstring-1)

## Constructors

### constructor

• **new BlockParams**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BlockParams`](params.BlockParams.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:89](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L89)

## Properties

### maxBytes

• **maxBytes**: `bigint` = `protoInt64.zero`

Max block size, in bytes.
Note: must be greater than 0

**`Generated`**

from field: int64 max_bytes = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:79](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L79)

___

### maxGas

• **maxGas**: `bigint` = `protoInt64.zero`

Max gas per block.
Note: must be greater or equal to -1

**`Generated`**

from field: int64 max_gas = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:87](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L87)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:96](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L96)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L94)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.BlockParams"``

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:95](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L95)

## Methods

### clone

▸ **clone**(): [`BlockParams`](params.BlockParams.md)

Create a deep copy.

#### Returns

[`BlockParams`](params.BlockParams.md)

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
| `other` | `undefined` \| ``null`` \| [`BlockParams`](params.BlockParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockParams`](params.BlockParams.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BlockParams`](params.BlockParams.md)

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

[`BlockParams`](params.BlockParams.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BlockParams`](params.BlockParams.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockParams`](params.BlockParams.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BlockParams`](params.BlockParams.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockParams`](params.BlockParams.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BlockParams`](params.BlockParams.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BlockParams`](params.BlockParams.md)\>

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
| `a` | `undefined` \| [`BlockParams`](params.BlockParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockParams`](params.BlockParams.md)\> |
| `b` | `undefined` \| [`BlockParams`](params.BlockParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockParams`](params.BlockParams.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:113](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L113)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BlockParams`](params.BlockParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BlockParams`](params.BlockParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:101](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L101)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BlockParams`](params.BlockParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockParams`](params.BlockParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:105](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L105)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BlockParams`](params.BlockParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockParams`](params.BlockParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:109](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L109)
