[@bearmint/bep-018 - v0.0.0](../README.md) / BEP66Msg

# Class: BEP66Msg

**`Generated`**

from message BEP66Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP66Msg`](BEP66Msg.md)\>

  ↳ **`BEP66Msg`**

## Table of contents

### Constructors

- [constructor](BEP66Msg.md#constructor)

### Properties

- [memo](BEP66Msg.md#memo)
- [ops](BEP66Msg.md#ops)
- [fields](BEP66Msg.md#fields)
- [runtime](BEP66Msg.md#runtime)
- [typeName](BEP66Msg.md#typename)

### Methods

- [clone](BEP66Msg.md#clone)
- [equals](BEP66Msg.md#equals)
- [fromBinary](BEP66Msg.md#frombinary)
- [fromJson](BEP66Msg.md#fromjson)
- [fromJsonString](BEP66Msg.md#fromjsonstring)
- [getType](BEP66Msg.md#gettype)
- [toBinary](BEP66Msg.md#tobinary)
- [toJson](BEP66Msg.md#tojson)
- [toJsonString](BEP66Msg.md#tojsonstring)
- [equals](BEP66Msg.md#equals-1)
- [fromBinary](BEP66Msg.md#frombinary-1)
- [fromJson](BEP66Msg.md#fromjson-1)
- [fromJsonString](BEP66Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP66Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP66Msg`](BEP66Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1209](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1209)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1207](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1207)

___

### ops

• **ops**: [`BEP66MsgOp`](BEP66MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP66MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1202](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1202)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1216](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1216)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1214](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1214)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP66Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1215](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1215)

## Methods

### clone

▸ **clone**(): [`BEP66Msg`](BEP66Msg.md)

Create a deep copy.

#### Returns

[`BEP66Msg`](BEP66Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP66Msg`](BEP66Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP66Msg`](BEP66Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP66Msg`](BEP66Msg.md)

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

[`BEP66Msg`](BEP66Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP66Msg`](BEP66Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP66Msg`](BEP66Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP66Msg`](BEP66Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP66Msg`](BEP66Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP66Msg`](BEP66Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP66Msg`](BEP66Msg.md)\>

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
| `a` | `undefined` \| [`BEP66Msg`](BEP66Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP66Msg`](BEP66Msg.md)\> |
| `b` | `undefined` \| [`BEP66Msg`](BEP66Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP66Msg`](BEP66Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1233](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1233)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP66Msg`](BEP66Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP66Msg`](BEP66Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1221](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1221)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP66Msg`](BEP66Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP66Msg`](BEP66Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1225](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1225)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP66Msg`](BEP66Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP66Msg`](BEP66Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1229](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1229)
