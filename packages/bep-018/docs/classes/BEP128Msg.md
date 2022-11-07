[@bearmint/bep-018 - v0.0.0](../README.md) / BEP128Msg

# Class: BEP128Msg

**`Generated`**

from message BEP128Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP128Msg`](BEP128Msg.md)\>

  ↳ **`BEP128Msg`**

## Table of contents

### Constructors

- [constructor](BEP128Msg.md#constructor)

### Properties

- [memo](BEP128Msg.md#memo)
- [ops](BEP128Msg.md#ops)
- [fields](BEP128Msg.md#fields)
- [runtime](BEP128Msg.md#runtime)
- [typeName](BEP128Msg.md#typename)

### Methods

- [clone](BEP128Msg.md#clone)
- [equals](BEP128Msg.md#equals)
- [fromBinary](BEP128Msg.md#frombinary)
- [fromJson](BEP128Msg.md#fromjson)
- [fromJsonString](BEP128Msg.md#fromjsonstring)
- [getType](BEP128Msg.md#gettype)
- [toBinary](BEP128Msg.md#tobinary)
- [toJson](BEP128Msg.md#tojson)
- [toJsonString](BEP128Msg.md#tojsonstring)
- [equals](BEP128Msg.md#equals-1)
- [fromBinary](BEP128Msg.md#frombinary-1)
- [fromJson](BEP128Msg.md#fromjson-1)
- [fromJsonString](BEP128Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP128Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP128Msg`](BEP128Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2127](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2127)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2125](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2125)

___

### ops

• **ops**: [`BEP128MsgOp`](BEP128MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP128MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2120](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2120)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2134](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2134)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2132](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2132)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP128Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2133](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2133)

## Methods

### clone

▸ **clone**(): [`BEP128Msg`](BEP128Msg.md)

Create a deep copy.

#### Returns

[`BEP128Msg`](BEP128Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP128Msg`](BEP128Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP128Msg`](BEP128Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP128Msg`](BEP128Msg.md)

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

[`BEP128Msg`](BEP128Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP128Msg`](BEP128Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP128Msg`](BEP128Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP128Msg`](BEP128Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP128Msg`](BEP128Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP128Msg`](BEP128Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP128Msg`](BEP128Msg.md)\>

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
| `a` | `undefined` \| [`BEP128Msg`](BEP128Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP128Msg`](BEP128Msg.md)\> |
| `b` | `undefined` \| [`BEP128Msg`](BEP128Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP128Msg`](BEP128Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2151](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2151)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP128Msg`](BEP128Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP128Msg`](BEP128Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2139](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2139)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP128Msg`](BEP128Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP128Msg`](BEP128Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2143](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2143)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP128Msg`](BEP128Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP128Msg`](BEP128Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2147](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2147)
