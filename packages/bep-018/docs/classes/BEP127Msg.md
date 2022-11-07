[@bearmint/bep-018 - v0.0.0](../README.md) / BEP127Msg

# Class: BEP127Msg

**`Generated`**

from message BEP127Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP127Msg`](BEP127Msg.md)\>

  ↳ **`BEP127Msg`**

## Table of contents

### Constructors

- [constructor](BEP127Msg.md#constructor)

### Properties

- [memo](BEP127Msg.md#memo)
- [ops](BEP127Msg.md#ops)
- [fields](BEP127Msg.md#fields)
- [runtime](BEP127Msg.md#runtime)
- [typeName](BEP127Msg.md#typename)

### Methods

- [clone](BEP127Msg.md#clone)
- [equals](BEP127Msg.md#equals)
- [fromBinary](BEP127Msg.md#frombinary)
- [fromJson](BEP127Msg.md#fromjson)
- [fromJsonString](BEP127Msg.md#fromjsonstring)
- [getType](BEP127Msg.md#gettype)
- [toBinary](BEP127Msg.md#tobinary)
- [toJson](BEP127Msg.md#tojson)
- [toJsonString](BEP127Msg.md#tojsonstring)
- [equals](BEP127Msg.md#equals-1)
- [fromBinary](BEP127Msg.md#frombinary-1)
- [fromJson](BEP127Msg.md#fromjson-1)
- [fromJsonString](BEP127Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP127Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP127Msg`](BEP127Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2039](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2039)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2037](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2037)

___

### ops

• **ops**: [`BEP127MsgOp`](BEP127MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP127MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2032](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2032)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2046](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2046)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2044](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2044)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP127Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2045](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2045)

## Methods

### clone

▸ **clone**(): [`BEP127Msg`](BEP127Msg.md)

Create a deep copy.

#### Returns

[`BEP127Msg`](BEP127Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP127Msg`](BEP127Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP127Msg`](BEP127Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP127Msg`](BEP127Msg.md)

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

[`BEP127Msg`](BEP127Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP127Msg`](BEP127Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP127Msg`](BEP127Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP127Msg`](BEP127Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP127Msg`](BEP127Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP127Msg`](BEP127Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP127Msg`](BEP127Msg.md)\>

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
| `a` | `undefined` \| [`BEP127Msg`](BEP127Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP127Msg`](BEP127Msg.md)\> |
| `b` | `undefined` \| [`BEP127Msg`](BEP127Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP127Msg`](BEP127Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2063](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2063)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP127Msg`](BEP127Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP127Msg`](BEP127Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2051](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2051)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP127Msg`](BEP127Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP127Msg`](BEP127Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2055](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2055)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP127Msg`](BEP127Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP127Msg`](BEP127Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2059](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2059)
