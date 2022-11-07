[@bearmint/bep-018 - v0.0.0](../README.md) / BEP132Msg

# Class: BEP132Msg

**`Generated`**

from message BEP132Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP132Msg`](BEP132Msg.md)\>

  ↳ **`BEP132Msg`**

## Table of contents

### Constructors

- [constructor](BEP132Msg.md#constructor)

### Properties

- [memo](BEP132Msg.md#memo)
- [ops](BEP132Msg.md#ops)
- [fields](BEP132Msg.md#fields)
- [runtime](BEP132Msg.md#runtime)
- [typeName](BEP132Msg.md#typename)

### Methods

- [clone](BEP132Msg.md#clone)
- [equals](BEP132Msg.md#equals)
- [fromBinary](BEP132Msg.md#frombinary)
- [fromJson](BEP132Msg.md#fromjson)
- [fromJsonString](BEP132Msg.md#fromjsonstring)
- [getType](BEP132Msg.md#gettype)
- [toBinary](BEP132Msg.md#tobinary)
- [toJson](BEP132Msg.md#tojson)
- [toJsonString](BEP132Msg.md#tojsonstring)
- [equals](BEP132Msg.md#equals-1)
- [fromBinary](BEP132Msg.md#frombinary-1)
- [fromJson](BEP132Msg.md#fromjson-1)
- [fromJsonString](BEP132Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP132Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP132Msg`](BEP132Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2578](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2578)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2576](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2576)

___

### ops

• **ops**: [`BEP132MsgOp`](BEP132MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP132MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2571](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2571)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2585](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2585)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2583](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2583)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP132Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2584](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2584)

## Methods

### clone

▸ **clone**(): [`BEP132Msg`](BEP132Msg.md)

Create a deep copy.

#### Returns

[`BEP132Msg`](BEP132Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP132Msg`](BEP132Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP132Msg`](BEP132Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP132Msg`](BEP132Msg.md)

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

[`BEP132Msg`](BEP132Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP132Msg`](BEP132Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP132Msg`](BEP132Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP132Msg`](BEP132Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP132Msg`](BEP132Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP132Msg`](BEP132Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP132Msg`](BEP132Msg.md)\>

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
| `a` | `undefined` \| [`BEP132Msg`](BEP132Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP132Msg`](BEP132Msg.md)\> |
| `b` | `undefined` \| [`BEP132Msg`](BEP132Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP132Msg`](BEP132Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2602](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2602)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP132Msg`](BEP132Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP132Msg`](BEP132Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2590](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2590)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP132Msg`](BEP132Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP132Msg`](BEP132Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2594](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2594)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP132Msg`](BEP132Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP132Msg`](BEP132Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2598](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2598)
