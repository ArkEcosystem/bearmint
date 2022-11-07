[@bearmint/bep-018 - v0.0.0](../README.md) / BEP128MsgOp

# Class: BEP128MsgOp

NFT Collection Ownership Resignation Tx

**`Generated`**

from message BEP128MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP128MsgOp`](BEP128MsgOp.md)\>

  ↳ **`BEP128MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP128MsgOp.md#constructor)

### Properties

- [hash](BEP128MsgOp.md#hash)
- [memo](BEP128MsgOp.md#memo)
- [fields](BEP128MsgOp.md#fields)
- [runtime](BEP128MsgOp.md#runtime)
- [typeName](BEP128MsgOp.md#typename)

### Methods

- [clone](BEP128MsgOp.md#clone)
- [equals](BEP128MsgOp.md#equals)
- [fromBinary](BEP128MsgOp.md#frombinary)
- [fromJson](BEP128MsgOp.md#fromjson)
- [fromJsonString](BEP128MsgOp.md#fromjsonstring)
- [getType](BEP128MsgOp.md#gettype)
- [toBinary](BEP128MsgOp.md#tobinary)
- [toJson](BEP128MsgOp.md#tojson)
- [toJsonString](BEP128MsgOp.md#tojsonstring)
- [equals](BEP128MsgOp.md#equals-1)
- [fromBinary](BEP128MsgOp.md#frombinary-1)
- [fromJson](BEP128MsgOp.md#fromjson-1)
- [fromJsonString](BEP128MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP128MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP128MsgOp`](BEP128MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2084](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2084)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2077](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2077)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2082](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2082)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2091](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2091)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2089](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2089)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP128MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2090](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2090)

## Methods

### clone

▸ **clone**(): [`BEP128MsgOp`](BEP128MsgOp.md)

Create a deep copy.

#### Returns

[`BEP128MsgOp`](BEP128MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP128MsgOp`](BEP128MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP128MsgOp`](BEP128MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP128MsgOp`](BEP128MsgOp.md)

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

[`BEP128MsgOp`](BEP128MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP128MsgOp`](BEP128MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP128MsgOp`](BEP128MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP128MsgOp`](BEP128MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP128MsgOp`](BEP128MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP128MsgOp`](BEP128MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP128MsgOp`](BEP128MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP128MsgOp`](BEP128MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP128MsgOp`](BEP128MsgOp.md)\> |
| `b` | `undefined` \| [`BEP128MsgOp`](BEP128MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP128MsgOp`](BEP128MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2108](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2108)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP128MsgOp`](BEP128MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP128MsgOp`](BEP128MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2096](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2096)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP128MsgOp`](BEP128MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP128MsgOp`](BEP128MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2100](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2100)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP128MsgOp`](BEP128MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP128MsgOp`](BEP128MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2104](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2104)
