[@bearmint/bep-018 - v0.0.0](../README.md) / BEP65Msg

# Class: BEP65Msg

**`Generated`**

from message BEP65Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP65Msg`](BEP65Msg.md)\>

  ↳ **`BEP65Msg`**

## Table of contents

### Constructors

- [constructor](BEP65Msg.md#constructor)

### Properties

- [memo](BEP65Msg.md#memo)
- [ops](BEP65Msg.md#ops)
- [fields](BEP65Msg.md#fields)
- [runtime](BEP65Msg.md#runtime)
- [typeName](BEP65Msg.md#typename)

### Methods

- [clone](BEP65Msg.md#clone)
- [equals](BEP65Msg.md#equals)
- [fromBinary](BEP65Msg.md#frombinary)
- [fromJson](BEP65Msg.md#fromjson)
- [fromJsonString](BEP65Msg.md#fromjsonstring)
- [getType](BEP65Msg.md#gettype)
- [toBinary](BEP65Msg.md#tobinary)
- [toJson](BEP65Msg.md#tojson)
- [toJsonString](BEP65Msg.md#tojsonstring)
- [equals](BEP65Msg.md#equals-1)
- [fromBinary](BEP65Msg.md#frombinary-1)
- [fromJson](BEP65Msg.md#fromjson-1)
- [fromJsonString](BEP65Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP65Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP65Msg`](BEP65Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1115](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1115)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1113](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1113)

___

### ops

• **ops**: [`BEP65MsgOp`](BEP65MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP65MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1108](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1108)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1122](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1122)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1120](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1120)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP65Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1121](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1121)

## Methods

### clone

▸ **clone**(): [`BEP65Msg`](BEP65Msg.md)

Create a deep copy.

#### Returns

[`BEP65Msg`](BEP65Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP65Msg`](BEP65Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP65Msg`](BEP65Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP65Msg`](BEP65Msg.md)

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

[`BEP65Msg`](BEP65Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP65Msg`](BEP65Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP65Msg`](BEP65Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP65Msg`](BEP65Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP65Msg`](BEP65Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP65Msg`](BEP65Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP65Msg`](BEP65Msg.md)\>

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
| `a` | `undefined` \| [`BEP65Msg`](BEP65Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP65Msg`](BEP65Msg.md)\> |
| `b` | `undefined` \| [`BEP65Msg`](BEP65Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP65Msg`](BEP65Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1139](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1139)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP65Msg`](BEP65Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP65Msg`](BEP65Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1127](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1127)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP65Msg`](BEP65Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP65Msg`](BEP65Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1131](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1131)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP65Msg`](BEP65Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP65Msg`](BEP65Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1135](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1135)
