[@bearmint/bep-018 - v0.0.0](../README.md) / BEP64Msg

# Class: BEP64Msg

**`Generated`**

from message BEP64Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP64Msg`](BEP64Msg.md)\>

  ↳ **`BEP64Msg`**

## Table of contents

### Constructors

- [constructor](BEP64Msg.md#constructor)

### Properties

- [memo](BEP64Msg.md#memo)
- [ops](BEP64Msg.md#ops)
- [fields](BEP64Msg.md#fields)
- [runtime](BEP64Msg.md#runtime)
- [typeName](BEP64Msg.md#typename)

### Methods

- [clone](BEP64Msg.md#clone)
- [equals](BEP64Msg.md#equals)
- [fromBinary](BEP64Msg.md#frombinary)
- [fromJson](BEP64Msg.md#fromjson)
- [fromJsonString](BEP64Msg.md#fromjsonstring)
- [getType](BEP64Msg.md#gettype)
- [toBinary](BEP64Msg.md#tobinary)
- [toJson](BEP64Msg.md#tojson)
- [toJsonString](BEP64Msg.md#tojsonstring)
- [equals](BEP64Msg.md#equals-1)
- [fromBinary](BEP64Msg.md#frombinary-1)
- [fromJson](BEP64Msg.md#fromjson-1)
- [fromJsonString](BEP64Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP64Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP64Msg`](BEP64Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:978](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L978)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:976](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L976)

___

### ops

• **ops**: [`BEP64MsgOp`](BEP64MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP64MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:971](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L971)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:985](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L985)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:983](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L983)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP64Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:984](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L984)

## Methods

### clone

▸ **clone**(): [`BEP64Msg`](BEP64Msg.md)

Create a deep copy.

#### Returns

[`BEP64Msg`](BEP64Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP64Msg`](BEP64Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64Msg`](BEP64Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP64Msg`](BEP64Msg.md)

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

[`BEP64Msg`](BEP64Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP64Msg`](BEP64Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64Msg`](BEP64Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP64Msg`](BEP64Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64Msg`](BEP64Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP64Msg`](BEP64Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP64Msg`](BEP64Msg.md)\>

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
| `a` | `undefined` \| [`BEP64Msg`](BEP64Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64Msg`](BEP64Msg.md)\> |
| `b` | `undefined` \| [`BEP64Msg`](BEP64Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64Msg`](BEP64Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1002](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1002)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP64Msg`](BEP64Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP64Msg`](BEP64Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:990](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L990)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP64Msg`](BEP64Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64Msg`](BEP64Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:994](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L994)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP64Msg`](BEP64Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64Msg`](BEP64Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:998](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L998)
