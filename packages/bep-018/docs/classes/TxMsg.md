[@bearmint/bep-018 - v0.0.0](../README.md) / TxMsg

# Class: TxMsg

**`Generated`**

from message TxMsg

## Hierarchy

- [`Message`](Message.md)<[`TxMsg`](TxMsg.md)\>

  ↳ **`TxMsg`**

## Table of contents

### Constructors

- [constructor](TxMsg.md#constructor)

### Properties

- [content](TxMsg.md#content)
- [handler](TxMsg.md#handler)
- [network](TxMsg.md#network)
- [version](TxMsg.md#version)
- [fields](TxMsg.md#fields)
- [runtime](TxMsg.md#runtime)
- [typeName](TxMsg.md#typename)

### Methods

- [clone](TxMsg.md#clone)
- [equals](TxMsg.md#equals)
- [fromBinary](TxMsg.md#frombinary)
- [fromJson](TxMsg.md#fromjson)
- [fromJsonString](TxMsg.md#fromjsonstring)
- [getType](TxMsg.md#gettype)
- [toBinary](TxMsg.md#tobinary)
- [toJson](TxMsg.md#tojson)
- [toJsonString](TxMsg.md#tojsonstring)
- [equals](TxMsg.md#equals-1)
- [fromBinary](TxMsg.md#frombinary-1)
- [fromJson](TxMsg.md#fromjson-1)
- [fromJsonString](TxMsg.md#fromjsonstring-1)

## Constructors

### constructor

• **new TxMsg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`TxMsg`](TxMsg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:101](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L101)

## Properties

### content

• **content**: `Uint8Array`

**`Generated`**

from field: bytes content = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:99](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L99)

___

### handler

• **handler**: `string` = `""`

**`Generated`**

from field: string handler = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:84](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L84)

___

### network

• **network**: `string` = `""`

**`Generated`**

from field: string network = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L94)

___

### version

• **version**: `string` = `""`

**`Generated`**

from field: string version = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:89](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L89)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:108](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L108)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:106](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L106)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"TxMsg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:107](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L107)

## Methods

### clone

▸ **clone**(): [`TxMsg`](TxMsg.md)

Create a deep copy.

#### Returns

[`TxMsg`](TxMsg.md)

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
| `other` | `undefined` \| ``null`` \| [`TxMsg`](TxMsg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxMsg`](TxMsg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TxMsg`](TxMsg.md)

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

[`TxMsg`](TxMsg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TxMsg`](TxMsg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxMsg`](TxMsg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TxMsg`](TxMsg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxMsg`](TxMsg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TxMsg`](TxMsg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TxMsg`](TxMsg.md)\>

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
| `a` | `undefined` \| [`TxMsg`](TxMsg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxMsg`](TxMsg.md)\> |
| `b` | `undefined` \| [`TxMsg`](TxMsg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxMsg`](TxMsg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:127](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L127)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TxMsg`](TxMsg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TxMsg`](TxMsg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:115](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L115)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TxMsg`](TxMsg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxMsg`](TxMsg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:119](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L119)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TxMsg`](TxMsg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxMsg`](TxMsg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:123](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L123)
