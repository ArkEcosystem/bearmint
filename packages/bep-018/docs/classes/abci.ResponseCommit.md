[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseCommit

# Class: ResponseCommit

[abci](../modules/abci.md).ResponseCommit

**`Generated`**

from message tendermint.abci.ResponseCommit

## Hierarchy

- [`Message`](Message.md)<[`ResponseCommit`](abci.ResponseCommit.md)\>

  ↳ **`ResponseCommit`**

## Table of contents

### Constructors

- [constructor](abci.ResponseCommit.md#constructor)

### Properties

- [data](abci.ResponseCommit.md#data)
- [retainHeight](abci.ResponseCommit.md#retainheight)
- [fields](abci.ResponseCommit.md#fields)
- [runtime](abci.ResponseCommit.md#runtime)
- [typeName](abci.ResponseCommit.md#typename)

### Methods

- [clone](abci.ResponseCommit.md#clone)
- [equals](abci.ResponseCommit.md#equals)
- [fromBinary](abci.ResponseCommit.md#frombinary)
- [fromJson](abci.ResponseCommit.md#fromjson)
- [fromJsonString](abci.ResponseCommit.md#fromjsonstring)
- [getType](abci.ResponseCommit.md#gettype)
- [toBinary](abci.ResponseCommit.md#tobinary)
- [toJson](abci.ResponseCommit.md#tojson)
- [toJsonString](abci.ResponseCommit.md#tojsonstring)
- [equals](abci.ResponseCommit.md#equals-1)
- [fromBinary](abci.ResponseCommit.md#frombinary-1)
- [fromJson](abci.ResponseCommit.md#fromjson-1)
- [fromJsonString](abci.ResponseCommit.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseCommit**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseCommit`](abci.ResponseCommit.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1762](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1762)

## Properties

### data

• **data**: `Uint8Array`

reserve 1

**`Generated`**

from field: bytes data = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1755](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1755)

___

### retainHeight

• **retainHeight**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 retain_height = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1760](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1760)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1769](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1769)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1767](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1767)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseCommit"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1768](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1768)

## Methods

### clone

▸ **clone**(): [`ResponseCommit`](abci.ResponseCommit.md)

Create a deep copy.

#### Returns

[`ResponseCommit`](abci.ResponseCommit.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseCommit`](abci.ResponseCommit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseCommit`](abci.ResponseCommit.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseCommit`](abci.ResponseCommit.md)

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

[`ResponseCommit`](abci.ResponseCommit.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseCommit`](abci.ResponseCommit.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseCommit`](abci.ResponseCommit.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseCommit`](abci.ResponseCommit.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseCommit`](abci.ResponseCommit.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseCommit`](abci.ResponseCommit.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseCommit`](abci.ResponseCommit.md)\>

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
| `a` | `undefined` \| [`ResponseCommit`](abci.ResponseCommit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseCommit`](abci.ResponseCommit.md)\> |
| `b` | `undefined` \| [`ResponseCommit`](abci.ResponseCommit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseCommit`](abci.ResponseCommit.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1786](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1786)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseCommit`](abci.ResponseCommit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseCommit`](abci.ResponseCommit.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1774](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1774)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseCommit`](abci.ResponseCommit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseCommit`](abci.ResponseCommit.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1778](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1778)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseCommit`](abci.ResponseCommit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseCommit`](abci.ResponseCommit.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1782](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1782)
