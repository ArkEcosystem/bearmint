[@bearmint/bep-018 - v0.0.0](../README.md) / BEP55Msg

# Class: BEP55Msg

**`Generated`**

from message BEP55Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP55Msg`](BEP55Msg.md)\>

  ↳ **`BEP55Msg`**

## Table of contents

### Constructors

- [constructor](BEP55Msg.md#constructor)

### Properties

- [memo](BEP55Msg.md#memo)
- [ops](BEP55Msg.md#ops)
- [fields](BEP55Msg.md#fields)
- [runtime](BEP55Msg.md#runtime)
- [typeName](BEP55Msg.md#typename)

### Methods

- [clone](BEP55Msg.md#clone)
- [equals](BEP55Msg.md#equals)
- [fromBinary](BEP55Msg.md#frombinary)
- [fromJson](BEP55Msg.md#fromjson)
- [fromJsonString](BEP55Msg.md#fromjsonstring)
- [getType](BEP55Msg.md#gettype)
- [toBinary](BEP55Msg.md#tobinary)
- [toJson](BEP55Msg.md#tojson)
- [toJsonString](BEP55Msg.md#tojsonstring)
- [equals](BEP55Msg.md#equals-1)
- [fromBinary](BEP55Msg.md#frombinary-1)
- [fromJson](BEP55Msg.md#fromjson-1)
- [fromJsonString](BEP55Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP55Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP55Msg`](BEP55Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:435](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L435)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:433](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L433)

___

### ops

• **ops**: [`BEP55MsgOp`](BEP55MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP55MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:428](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L428)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:442](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L442)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:440](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L440)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP55Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:441](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L441)

## Methods

### clone

▸ **clone**(): [`BEP55Msg`](BEP55Msg.md)

Create a deep copy.

#### Returns

[`BEP55Msg`](BEP55Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP55Msg`](BEP55Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP55Msg`](BEP55Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP55Msg`](BEP55Msg.md)

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

[`BEP55Msg`](BEP55Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP55Msg`](BEP55Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP55Msg`](BEP55Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP55Msg`](BEP55Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP55Msg`](BEP55Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP55Msg`](BEP55Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP55Msg`](BEP55Msg.md)\>

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
| `a` | `undefined` \| [`BEP55Msg`](BEP55Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP55Msg`](BEP55Msg.md)\> |
| `b` | `undefined` \| [`BEP55Msg`](BEP55Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP55Msg`](BEP55Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:459](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L459)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP55Msg`](BEP55Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP55Msg`](BEP55Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:447](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L447)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP55Msg`](BEP55Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP55Msg`](BEP55Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:451](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L451)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP55Msg`](BEP55Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP55Msg`](BEP55Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:455](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L455)
