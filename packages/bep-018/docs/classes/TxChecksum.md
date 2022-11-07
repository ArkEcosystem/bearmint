[@bearmint/bep-018 - v0.0.0](../README.md) / TxChecksum

# Class: TxChecksum

Basics

**`Generated`**

from message TxChecksum

## Hierarchy

- [`Message`](Message.md)<[`TxChecksum`](TxChecksum.md)\>

  ↳ **`TxChecksum`**

## Table of contents

### Constructors

- [constructor](TxChecksum.md#constructor)

### Properties

- [handler](TxChecksum.md#handler)
- [network](TxChecksum.md#network)
- [version](TxChecksum.md#version)
- [fields](TxChecksum.md#fields)
- [runtime](TxChecksum.md#runtime)
- [typeName](TxChecksum.md#typename)

### Methods

- [clone](TxChecksum.md#clone)
- [equals](TxChecksum.md#equals)
- [fromBinary](TxChecksum.md#frombinary)
- [fromJson](TxChecksum.md#fromjson)
- [fromJsonString](TxChecksum.md#fromjsonstring)
- [getType](TxChecksum.md#gettype)
- [toBinary](TxChecksum.md#tobinary)
- [toJson](TxChecksum.md#tojson)
- [toJsonString](TxChecksum.md#tojsonstring)
- [equals](TxChecksum.md#equals-1)
- [fromBinary](TxChecksum.md#frombinary-1)
- [fromJson](TxChecksum.md#fromjson-1)
- [fromJsonString](TxChecksum.md#fromjsonstring-1)

## Constructors

### constructor

• **new TxChecksum**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`TxChecksum`](TxChecksum.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L47)

## Properties

### handler

• **handler**: `string` = `""`

**`Generated`**

from field: string handler = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L35)

___

### network

• **network**: `string` = `""`

**`Generated`**

from field: string network = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L45)

___

### version

• **version**: `string` = `""`

**`Generated`**

from field: string version = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L40)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:54](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L54)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:52](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L52)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"TxChecksum"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L53)

## Methods

### clone

▸ **clone**(): [`TxChecksum`](TxChecksum.md)

Create a deep copy.

#### Returns

[`TxChecksum`](TxChecksum.md)

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
| `other` | `undefined` \| ``null`` \| [`TxChecksum`](TxChecksum.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxChecksum`](TxChecksum.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TxChecksum`](TxChecksum.md)

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

[`TxChecksum`](TxChecksum.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TxChecksum`](TxChecksum.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxChecksum`](TxChecksum.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TxChecksum`](TxChecksum.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxChecksum`](TxChecksum.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TxChecksum`](TxChecksum.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TxChecksum`](TxChecksum.md)\>

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
| `a` | `undefined` \| [`TxChecksum`](TxChecksum.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxChecksum`](TxChecksum.md)\> |
| `b` | `undefined` \| [`TxChecksum`](TxChecksum.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxChecksum`](TxChecksum.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:72](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L72)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TxChecksum`](TxChecksum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TxChecksum`](TxChecksum.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:60](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L60)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TxChecksum`](TxChecksum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxChecksum`](TxChecksum.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:64](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L64)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TxChecksum`](TxChecksum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxChecksum`](TxChecksum.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:68](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L68)
