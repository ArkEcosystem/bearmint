[@bearmint/bep-018 - v0.0.0](../README.md) / BEP135Msg

# Class: BEP135Msg

**`Generated`**

from message BEP135Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP135Msg`](BEP135Msg.md)\>

  ↳ **`BEP135Msg`**

## Table of contents

### Constructors

- [constructor](BEP135Msg.md#constructor)

### Properties

- [memo](BEP135Msg.md#memo)
- [ops](BEP135Msg.md#ops)
- [fields](BEP135Msg.md#fields)
- [runtime](BEP135Msg.md#runtime)
- [typeName](BEP135Msg.md#typename)

### Methods

- [clone](BEP135Msg.md#clone)
- [equals](BEP135Msg.md#equals)
- [fromBinary](BEP135Msg.md#frombinary)
- [fromJson](BEP135Msg.md#fromjson)
- [fromJsonString](BEP135Msg.md#fromjsonstring)
- [getType](BEP135Msg.md#gettype)
- [toBinary](BEP135Msg.md#tobinary)
- [toJson](BEP135Msg.md#tojson)
- [toJsonString](BEP135Msg.md#tojsonstring)
- [equals](BEP135Msg.md#equals-1)
- [fromBinary](BEP135Msg.md#frombinary-1)
- [fromJson](BEP135Msg.md#fromjson-1)
- [fromJsonString](BEP135Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP135Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP135Msg`](BEP135Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3000](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3000)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2998](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2998)

___

### ops

• **ops**: [`BEP135MsgOp`](BEP135MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP135MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2993](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2993)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3007](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3007)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3005](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3005)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP135Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:3006](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3006)

## Methods

### clone

▸ **clone**(): [`BEP135Msg`](BEP135Msg.md)

Create a deep copy.

#### Returns

[`BEP135Msg`](BEP135Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP135Msg`](BEP135Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP135Msg`](BEP135Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP135Msg`](BEP135Msg.md)

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

[`BEP135Msg`](BEP135Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP135Msg`](BEP135Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP135Msg`](BEP135Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP135Msg`](BEP135Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP135Msg`](BEP135Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP135Msg`](BEP135Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP135Msg`](BEP135Msg.md)\>

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
| `a` | `undefined` \| [`BEP135Msg`](BEP135Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP135Msg`](BEP135Msg.md)\> |
| `b` | `undefined` \| [`BEP135Msg`](BEP135Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP135Msg`](BEP135Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3024](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3024)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP135Msg`](BEP135Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP135Msg`](BEP135Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3012](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3012)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP135Msg`](BEP135Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP135Msg`](BEP135Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3016](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3016)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP135Msg`](BEP135Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP135Msg`](BEP135Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3020](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3020)
