[@bearmint/bep-018 - v0.0.0](../README.md) / BEP58Msg

# Class: BEP58Msg

Validator Resignation Tx

**`Generated`**

from message BEP58Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP58Msg`](BEP58Msg.md)\>

  ↳ **`BEP58Msg`**

## Table of contents

### Constructors

- [constructor](BEP58Msg.md#constructor)

### Properties

- [memo](BEP58Msg.md#memo)
- [signature](BEP58Msg.md#signature)
- [fields](BEP58Msg.md#fields)
- [runtime](BEP58Msg.md#runtime)
- [typeName](BEP58Msg.md#typename)

### Methods

- [clone](BEP58Msg.md#clone)
- [equals](BEP58Msg.md#equals)
- [fromBinary](BEP58Msg.md#frombinary)
- [fromJson](BEP58Msg.md#fromjson)
- [fromJsonString](BEP58Msg.md#fromjsonstring)
- [getType](BEP58Msg.md#gettype)
- [toBinary](BEP58Msg.md#tobinary)
- [toJson](BEP58Msg.md#tojson)
- [toJsonString](BEP58Msg.md#tojsonstring)
- [equals](BEP58Msg.md#equals-1)
- [fromBinary](BEP58Msg.md#frombinary-1)
- [fromJson](BEP58Msg.md#fromjson-1)
- [fromJsonString](BEP58Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP58Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP58Msg`](BEP58Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:668](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L668)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:666](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L666)

___

### signature

• **signature**: `Uint8Array`

**`Generated`**

from field: bytes signature = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:661](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L661)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:675](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L675)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:673](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L673)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP58Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:674](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L674)

## Methods

### clone

▸ **clone**(): [`BEP58Msg`](BEP58Msg.md)

Create a deep copy.

#### Returns

[`BEP58Msg`](BEP58Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP58Msg`](BEP58Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP58Msg`](BEP58Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP58Msg`](BEP58Msg.md)

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

[`BEP58Msg`](BEP58Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP58Msg`](BEP58Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP58Msg`](BEP58Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP58Msg`](BEP58Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP58Msg`](BEP58Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP58Msg`](BEP58Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP58Msg`](BEP58Msg.md)\>

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
| `a` | `undefined` \| [`BEP58Msg`](BEP58Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP58Msg`](BEP58Msg.md)\> |
| `b` | `undefined` \| [`BEP58Msg`](BEP58Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP58Msg`](BEP58Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:692](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L692)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP58Msg`](BEP58Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP58Msg`](BEP58Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:680](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L680)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP58Msg`](BEP58Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP58Msg`](BEP58Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:684](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L684)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP58Msg`](BEP58Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP58Msg`](BEP58Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:688](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L688)
