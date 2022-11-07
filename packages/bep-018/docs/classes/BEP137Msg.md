[@bearmint/bep-018 - v0.0.0](../README.md) / BEP137Msg

# Class: BEP137Msg

**`Generated`**

from message BEP137Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP137Msg`](BEP137Msg.md)\>

  ↳ **`BEP137Msg`**

## Table of contents

### Constructors

- [constructor](BEP137Msg.md#constructor)

### Properties

- [memo](BEP137Msg.md#memo)
- [ops](BEP137Msg.md#ops)
- [fields](BEP137Msg.md#fields)
- [runtime](BEP137Msg.md#runtime)
- [typeName](BEP137Msg.md#typename)

### Methods

- [clone](BEP137Msg.md#clone)
- [equals](BEP137Msg.md#equals)
- [fromBinary](BEP137Msg.md#frombinary)
- [fromJson](BEP137Msg.md#fromjson)
- [fromJsonString](BEP137Msg.md#fromjsonstring)
- [getType](BEP137Msg.md#gettype)
- [toBinary](BEP137Msg.md#tobinary)
- [toJson](BEP137Msg.md#tojson)
- [toJsonString](BEP137Msg.md#tojsonstring)
- [equals](BEP137Msg.md#equals-1)
- [fromBinary](BEP137Msg.md#frombinary-1)
- [fromJson](BEP137Msg.md#fromjson-1)
- [fromJsonString](BEP137Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP137Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP137Msg`](BEP137Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3182](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3182)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3180](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3180)

___

### ops

• **ops**: [`BEP137MsgOp`](BEP137MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP137MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3175](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3175)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3189](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3189)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3187](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3187)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP137Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:3188](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3188)

## Methods

### clone

▸ **clone**(): [`BEP137Msg`](BEP137Msg.md)

Create a deep copy.

#### Returns

[`BEP137Msg`](BEP137Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP137Msg`](BEP137Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP137Msg`](BEP137Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP137Msg`](BEP137Msg.md)

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

[`BEP137Msg`](BEP137Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP137Msg`](BEP137Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP137Msg`](BEP137Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP137Msg`](BEP137Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP137Msg`](BEP137Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP137Msg`](BEP137Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP137Msg`](BEP137Msg.md)\>

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
| `a` | `undefined` \| [`BEP137Msg`](BEP137Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP137Msg`](BEP137Msg.md)\> |
| `b` | `undefined` \| [`BEP137Msg`](BEP137Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP137Msg`](BEP137Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3206](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3206)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP137Msg`](BEP137Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP137Msg`](BEP137Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3194](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3194)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP137Msg`](BEP137Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP137Msg`](BEP137Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3198](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3198)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP137Msg`](BEP137Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP137Msg`](BEP137Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3202](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3202)
