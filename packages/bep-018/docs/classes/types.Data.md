[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / Data

# Class: Data

[types](../modules/types.md).Data

Data contains the set of transactions included in the block

**`Generated`**

from message tendermint.types.Data

## Hierarchy

- [`Message`](Message.md)<[`Data`](types.Data.md)\>

  ↳ **`Data`**

## Table of contents

### Constructors

- [constructor](types.Data.md#constructor)

### Properties

- [txs](types.Data.md#txs)
- [fields](types.Data.md#fields)
- [runtime](types.Data.md#runtime)
- [typeName](types.Data.md#typename)

### Methods

- [clone](types.Data.md#clone)
- [equals](types.Data.md#equals)
- [fromBinary](types.Data.md#frombinary)
- [fromJson](types.Data.md#fromjson)
- [fromJsonString](types.Data.md#fromjsonstring)
- [getType](types.Data.md#gettype)
- [toBinary](types.Data.md#tobinary)
- [toJson](types.Data.md#tojson)
- [toJsonString](types.Data.md#tojsonstring)
- [equals](types.Data.md#equals-1)
- [fromBinary](types.Data.md#frombinary-1)
- [fromJson](types.Data.md#fromjson-1)
- [fromJsonString](types.Data.md#fromjsonstring-1)

## Constructors

### constructor

• **new Data**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Data`](types.Data.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:383](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L383)

## Properties

### txs

• **txs**: `Uint8Array`[] = `[]`

Txs that will be applied by state @ block.Height+1.
NOTE: not all txs here are valid.  We're just agreeing on the order first.
This means that block.AppHash does not include these txs.

**`Generated`**

from field: repeated bytes txs = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:381](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L381)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:390](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L390)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:388](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L388)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.Data"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:389](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L389)

## Methods

### clone

▸ **clone**(): [`Data`](types.Data.md)

Create a deep copy.

#### Returns

[`Data`](types.Data.md)

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
| `other` | `undefined` \| ``null`` \| [`Data`](types.Data.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Data`](types.Data.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Data`](types.Data.md)

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

[`Data`](types.Data.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Data`](types.Data.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Data`](types.Data.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Data`](types.Data.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Data`](types.Data.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Data`](types.Data.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Data`](types.Data.md)\>

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
| `a` | `undefined` \| [`Data`](types.Data.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Data`](types.Data.md)\> |
| `b` | `undefined` \| [`Data`](types.Data.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Data`](types.Data.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:406](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L406)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Data`](types.Data.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Data`](types.Data.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:394](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L394)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Data`](types.Data.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Data`](types.Data.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:398](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L398)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Data`](types.Data.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Data`](types.Data.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:402](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L402)
