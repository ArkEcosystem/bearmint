[@bearmint/bep-018 - v0.0.0](../README.md) / BEP129Msg

# Class: BEP129Msg

**`Generated`**

from message BEP129Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP129Msg`](BEP129Msg.md)\>

  ↳ **`BEP129Msg`**

## Table of contents

### Constructors

- [constructor](BEP129Msg.md#constructor)

### Properties

- [memo](BEP129Msg.md#memo)
- [ops](BEP129Msg.md#ops)
- [fields](BEP129Msg.md#fields)
- [runtime](BEP129Msg.md#runtime)
- [typeName](BEP129Msg.md#typename)

### Methods

- [clone](BEP129Msg.md#clone)
- [equals](BEP129Msg.md#equals)
- [fromBinary](BEP129Msg.md#frombinary)
- [fromJson](BEP129Msg.md#fromjson)
- [fromJsonString](BEP129Msg.md#fromjsonstring)
- [getType](BEP129Msg.md#gettype)
- [toBinary](BEP129Msg.md#tobinary)
- [toJson](BEP129Msg.md#tojson)
- [toJsonString](BEP129Msg.md#tojsonstring)
- [equals](BEP129Msg.md#equals-1)
- [fromBinary](BEP129Msg.md#frombinary-1)
- [fromJson](BEP129Msg.md#fromjson-1)
- [fromJsonString](BEP129Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP129Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP129Msg`](BEP129Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2227](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2227)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2225](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2225)

___

### ops

• **ops**: [`BEP129MsgOp`](BEP129MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP129MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2220](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2220)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2234](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2234)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2232](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2232)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP129Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2233](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2233)

## Methods

### clone

▸ **clone**(): [`BEP129Msg`](BEP129Msg.md)

Create a deep copy.

#### Returns

[`BEP129Msg`](BEP129Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP129Msg`](BEP129Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP129Msg`](BEP129Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP129Msg`](BEP129Msg.md)

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

[`BEP129Msg`](BEP129Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP129Msg`](BEP129Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP129Msg`](BEP129Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP129Msg`](BEP129Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP129Msg`](BEP129Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP129Msg`](BEP129Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP129Msg`](BEP129Msg.md)\>

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
| `a` | `undefined` \| [`BEP129Msg`](BEP129Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP129Msg`](BEP129Msg.md)\> |
| `b` | `undefined` \| [`BEP129Msg`](BEP129Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP129Msg`](BEP129Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2251](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2251)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP129Msg`](BEP129Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP129Msg`](BEP129Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2239](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2239)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP129Msg`](BEP129Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP129Msg`](BEP129Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2243](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2243)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP129Msg`](BEP129Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP129Msg`](BEP129Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2247](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2247)
