[@bearmint/bep-018 - v0.0.0](../README.md) / BEP104Msg

# Class: BEP104Msg

**`Generated`**

from message BEP104Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP104Msg`](BEP104Msg.md)\>

  ↳ **`BEP104Msg`**

## Table of contents

### Constructors

- [constructor](BEP104Msg.md#constructor)

### Properties

- [memo](BEP104Msg.md#memo)
- [ops](BEP104Msg.md#ops)
- [fields](BEP104Msg.md#fields)
- [runtime](BEP104Msg.md#runtime)
- [typeName](BEP104Msg.md#typename)

### Methods

- [clone](BEP104Msg.md#clone)
- [equals](BEP104Msg.md#equals)
- [fromBinary](BEP104Msg.md#frombinary)
- [fromJson](BEP104Msg.md#fromjson)
- [fromJsonString](BEP104Msg.md#fromjsonstring)
- [getType](BEP104Msg.md#gettype)
- [toBinary](BEP104Msg.md#tobinary)
- [toJson](BEP104Msg.md#tojson)
- [toJsonString](BEP104Msg.md#tojsonstring)
- [equals](BEP104Msg.md#equals-1)
- [fromBinary](BEP104Msg.md#frombinary-1)
- [fromJson](BEP104Msg.md#fromjson-1)
- [fromJsonString](BEP104Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP104Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP104Msg`](BEP104Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1491](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1491)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1489](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1489)

___

### ops

• **ops**: [`BEP104MsgOp`](BEP104MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP104MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1484](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1484)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1498](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1498)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1496](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1496)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP104Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1497](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1497)

## Methods

### clone

▸ **clone**(): [`BEP104Msg`](BEP104Msg.md)

Create a deep copy.

#### Returns

[`BEP104Msg`](BEP104Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP104Msg`](BEP104Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP104Msg`](BEP104Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP104Msg`](BEP104Msg.md)

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

[`BEP104Msg`](BEP104Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP104Msg`](BEP104Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP104Msg`](BEP104Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP104Msg`](BEP104Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP104Msg`](BEP104Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP104Msg`](BEP104Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP104Msg`](BEP104Msg.md)\>

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
| `a` | `undefined` \| [`BEP104Msg`](BEP104Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP104Msg`](BEP104Msg.md)\> |
| `b` | `undefined` \| [`BEP104Msg`](BEP104Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP104Msg`](BEP104Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1515](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1515)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP104Msg`](BEP104Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP104Msg`](BEP104Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1503](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1503)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP104Msg`](BEP104Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP104Msg`](BEP104Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1507](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1507)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP104Msg`](BEP104Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP104Msg`](BEP104Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1511](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1511)
