[@bearmint/bep-018 - v0.0.0](../README.md) / BEP136Msg

# Class: BEP136Msg

**`Generated`**

from message BEP136Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP136Msg`](BEP136Msg.md)\>

  ↳ **`BEP136Msg`**

## Table of contents

### Constructors

- [constructor](BEP136Msg.md#constructor)

### Properties

- [memo](BEP136Msg.md#memo)
- [ops](BEP136Msg.md#ops)
- [fields](BEP136Msg.md#fields)
- [runtime](BEP136Msg.md#runtime)
- [typeName](BEP136Msg.md#typename)

### Methods

- [clone](BEP136Msg.md#clone)
- [equals](BEP136Msg.md#equals)
- [fromBinary](BEP136Msg.md#frombinary)
- [fromJson](BEP136Msg.md#fromjson)
- [fromJsonString](BEP136Msg.md#fromjsonstring)
- [getType](BEP136Msg.md#gettype)
- [toBinary](BEP136Msg.md#tobinary)
- [toJson](BEP136Msg.md#tojson)
- [toJsonString](BEP136Msg.md#tojsonstring)
- [equals](BEP136Msg.md#equals-1)
- [fromBinary](BEP136Msg.md#frombinary-1)
- [fromJson](BEP136Msg.md#fromjson-1)
- [fromJsonString](BEP136Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP136Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP136Msg`](BEP136Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3088](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3088)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3086](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3086)

___

### ops

• **ops**: [`BEP136MsgOp`](BEP136MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP136MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3081](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3081)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3095](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3095)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3093](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3093)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP136Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:3094](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3094)

## Methods

### clone

▸ **clone**(): [`BEP136Msg`](BEP136Msg.md)

Create a deep copy.

#### Returns

[`BEP136Msg`](BEP136Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP136Msg`](BEP136Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP136Msg`](BEP136Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP136Msg`](BEP136Msg.md)

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

[`BEP136Msg`](BEP136Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP136Msg`](BEP136Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP136Msg`](BEP136Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP136Msg`](BEP136Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP136Msg`](BEP136Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP136Msg`](BEP136Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP136Msg`](BEP136Msg.md)\>

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
| `a` | `undefined` \| [`BEP136Msg`](BEP136Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP136Msg`](BEP136Msg.md)\> |
| `b` | `undefined` \| [`BEP136Msg`](BEP136Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP136Msg`](BEP136Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3112](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3112)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP136Msg`](BEP136Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP136Msg`](BEP136Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3100](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3100)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP136Msg`](BEP136Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP136Msg`](BEP136Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3104](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3104)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP136Msg`](BEP136Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP136Msg`](BEP136Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3108](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3108)
