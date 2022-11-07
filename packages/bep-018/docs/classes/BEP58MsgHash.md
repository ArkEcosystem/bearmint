[@bearmint/bep-018 - v0.0.0](../README.md) / BEP58MsgHash

# Class: BEP58MsgHash

**`Generated`**

from message BEP58MsgHash

## Hierarchy

- [`Message`](Message.md)<[`BEP58MsgHash`](BEP58MsgHash.md)\>

  ↳ **`BEP58MsgHash`**

## Table of contents

### Constructors

- [constructor](BEP58MsgHash.md#constructor)

### Properties

- [memo](BEP58MsgHash.md#memo)
- [moniker](BEP58MsgHash.md#moniker)
- [fields](BEP58MsgHash.md#fields)
- [runtime](BEP58MsgHash.md#runtime)
- [typeName](BEP58MsgHash.md#typename)

### Methods

- [clone](BEP58MsgHash.md#clone)
- [equals](BEP58MsgHash.md#equals)
- [fromBinary](BEP58MsgHash.md#frombinary)
- [fromJson](BEP58MsgHash.md#fromjson)
- [fromJsonString](BEP58MsgHash.md#fromjsonstring)
- [getType](BEP58MsgHash.md#gettype)
- [toBinary](BEP58MsgHash.md#tobinary)
- [toJson](BEP58MsgHash.md#tojson)
- [toJsonString](BEP58MsgHash.md#tojsonstring)
- [equals](BEP58MsgHash.md#equals-1)
- [fromBinary](BEP58MsgHash.md#frombinary-1)
- [fromJson](BEP58MsgHash.md#fromjson-1)
- [fromJsonString](BEP58MsgHash.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP58MsgHash**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP58MsgHash`](BEP58MsgHash.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:711](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L711)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:709](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L709)

___

### moniker

• **moniker**: `string` = `""`

**`Generated`**

from field: string moniker = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:704](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L704)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:718](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L718)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:716](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L716)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP58MsgHash"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:717](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L717)

## Methods

### clone

▸ **clone**(): [`BEP58MsgHash`](BEP58MsgHash.md)

Create a deep copy.

#### Returns

[`BEP58MsgHash`](BEP58MsgHash.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP58MsgHash`](BEP58MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP58MsgHash`](BEP58MsgHash.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP58MsgHash`](BEP58MsgHash.md)

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

[`BEP58MsgHash`](BEP58MsgHash.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP58MsgHash`](BEP58MsgHash.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP58MsgHash`](BEP58MsgHash.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP58MsgHash`](BEP58MsgHash.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP58MsgHash`](BEP58MsgHash.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP58MsgHash`](BEP58MsgHash.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP58MsgHash`](BEP58MsgHash.md)\>

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
| `a` | `undefined` \| [`BEP58MsgHash`](BEP58MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP58MsgHash`](BEP58MsgHash.md)\> |
| `b` | `undefined` \| [`BEP58MsgHash`](BEP58MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP58MsgHash`](BEP58MsgHash.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:735](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L735)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP58MsgHash`](BEP58MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP58MsgHash`](BEP58MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:723](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L723)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP58MsgHash`](BEP58MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP58MsgHash`](BEP58MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:727](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L727)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP58MsgHash`](BEP58MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP58MsgHash`](BEP58MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:731](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L731)
