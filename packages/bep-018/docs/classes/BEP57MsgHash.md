[@bearmint/bep-018 - v0.0.0](../README.md) / BEP57MsgHash

# Class: BEP57MsgHash

**`Generated`**

from message BEP57MsgHash

## Hierarchy

- [`Message`](Message.md)<[`BEP57MsgHash`](BEP57MsgHash.md)\>

  ↳ **`BEP57MsgHash`**

## Table of contents

### Constructors

- [constructor](BEP57MsgHash.md#constructor)

### Properties

- [memo](BEP57MsgHash.md#memo)
- [moniker](BEP57MsgHash.md#moniker)
- [fields](BEP57MsgHash.md#fields)
- [runtime](BEP57MsgHash.md#runtime)
- [typeName](BEP57MsgHash.md#typename)

### Methods

- [clone](BEP57MsgHash.md#clone)
- [equals](BEP57MsgHash.md#equals)
- [fromBinary](BEP57MsgHash.md#frombinary)
- [fromJson](BEP57MsgHash.md#fromjson)
- [fromJsonString](BEP57MsgHash.md#fromjsonstring)
- [getType](BEP57MsgHash.md#gettype)
- [toBinary](BEP57MsgHash.md#tobinary)
- [toJson](BEP57MsgHash.md#tojson)
- [toJsonString](BEP57MsgHash.md#tojsonstring)
- [equals](BEP57MsgHash.md#equals-1)
- [fromBinary](BEP57MsgHash.md#frombinary-1)
- [fromJson](BEP57MsgHash.md#fromjson-1)
- [fromJsonString](BEP57MsgHash.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP57MsgHash**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP57MsgHash`](BEP57MsgHash.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:623](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L623)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:621](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L621)

___

### moniker

• **moniker**: `string` = `""`

**`Generated`**

from field: string moniker = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:616](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L616)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:630](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L630)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:628](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L628)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP57MsgHash"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:629](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L629)

## Methods

### clone

▸ **clone**(): [`BEP57MsgHash`](BEP57MsgHash.md)

Create a deep copy.

#### Returns

[`BEP57MsgHash`](BEP57MsgHash.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP57MsgHash`](BEP57MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP57MsgHash`](BEP57MsgHash.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP57MsgHash`](BEP57MsgHash.md)

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

[`BEP57MsgHash`](BEP57MsgHash.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP57MsgHash`](BEP57MsgHash.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP57MsgHash`](BEP57MsgHash.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP57MsgHash`](BEP57MsgHash.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP57MsgHash`](BEP57MsgHash.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP57MsgHash`](BEP57MsgHash.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP57MsgHash`](BEP57MsgHash.md)\>

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
| `a` | `undefined` \| [`BEP57MsgHash`](BEP57MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP57MsgHash`](BEP57MsgHash.md)\> |
| `b` | `undefined` \| [`BEP57MsgHash`](BEP57MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP57MsgHash`](BEP57MsgHash.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:647](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L647)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP57MsgHash`](BEP57MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP57MsgHash`](BEP57MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:635](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L635)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP57MsgHash`](BEP57MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP57MsgHash`](BEP57MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:639](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L639)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP57MsgHash`](BEP57MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP57MsgHash`](BEP57MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:643](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L643)
