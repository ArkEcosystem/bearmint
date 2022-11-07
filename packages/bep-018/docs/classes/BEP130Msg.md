[@bearmint/bep-018 - v0.0.0](../README.md) / BEP130Msg

# Class: BEP130Msg

**`Generated`**

from message BEP130Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP130Msg`](BEP130Msg.md)\>

  ↳ **`BEP130Msg`**

## Table of contents

### Constructors

- [constructor](BEP130Msg.md#constructor)

### Properties

- [memo](BEP130Msg.md#memo)
- [ops](BEP130Msg.md#ops)
- [fields](BEP130Msg.md#fields)
- [runtime](BEP130Msg.md#runtime)
- [typeName](BEP130Msg.md#typename)

### Methods

- [clone](BEP130Msg.md#clone)
- [equals](BEP130Msg.md#equals)
- [fromBinary](BEP130Msg.md#frombinary)
- [fromJson](BEP130Msg.md#fromjson)
- [fromJsonString](BEP130Msg.md#fromjsonstring)
- [getType](BEP130Msg.md#gettype)
- [toBinary](BEP130Msg.md#tobinary)
- [toJson](BEP130Msg.md#tojson)
- [toJsonString](BEP130Msg.md#tojsonstring)
- [equals](BEP130Msg.md#equals-1)
- [fromBinary](BEP130Msg.md#frombinary-1)
- [fromJson](BEP130Msg.md#fromjson-1)
- [fromJsonString](BEP130Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP130Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP130Msg`](BEP130Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2327](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2327)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2325](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2325)

___

### ops

• **ops**: [`BEP130MsgOp`](BEP130MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP130MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2320](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2320)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2334](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2334)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2332](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2332)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP130Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2333](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2333)

## Methods

### clone

▸ **clone**(): [`BEP130Msg`](BEP130Msg.md)

Create a deep copy.

#### Returns

[`BEP130Msg`](BEP130Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP130Msg`](BEP130Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP130Msg`](BEP130Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP130Msg`](BEP130Msg.md)

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

[`BEP130Msg`](BEP130Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP130Msg`](BEP130Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP130Msg`](BEP130Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP130Msg`](BEP130Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP130Msg`](BEP130Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP130Msg`](BEP130Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP130Msg`](BEP130Msg.md)\>

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
| `a` | `undefined` \| [`BEP130Msg`](BEP130Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP130Msg`](BEP130Msg.md)\> |
| `b` | `undefined` \| [`BEP130Msg`](BEP130Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP130Msg`](BEP130Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2351](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2351)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP130Msg`](BEP130Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP130Msg`](BEP130Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2339](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2339)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP130Msg`](BEP130Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP130Msg`](BEP130Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2343](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2343)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP130Msg`](BEP130Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP130Msg`](BEP130Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2347](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2347)
