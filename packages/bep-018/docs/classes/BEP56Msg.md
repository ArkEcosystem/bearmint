[@bearmint/bep-018 - v0.0.0](../README.md) / BEP56Msg

# Class: BEP56Msg

**`Generated`**

from message BEP56Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP56Msg`](BEP56Msg.md)\>

  ↳ **`BEP56Msg`**

## Table of contents

### Constructors

- [constructor](BEP56Msg.md#constructor)

### Properties

- [memo](BEP56Msg.md#memo)
- [ops](BEP56Msg.md#ops)
- [fields](BEP56Msg.md#fields)
- [runtime](BEP56Msg.md#runtime)
- [typeName](BEP56Msg.md#typename)

### Methods

- [clone](BEP56Msg.md#clone)
- [equals](BEP56Msg.md#equals)
- [fromBinary](BEP56Msg.md#frombinary)
- [fromJson](BEP56Msg.md#fromjson)
- [fromJsonString](BEP56Msg.md#fromjsonstring)
- [getType](BEP56Msg.md#gettype)
- [toBinary](BEP56Msg.md#tobinary)
- [toJson](BEP56Msg.md#tojson)
- [toJsonString](BEP56Msg.md#tojsonstring)
- [equals](BEP56Msg.md#equals-1)
- [fromBinary](BEP56Msg.md#frombinary-1)
- [fromJson](BEP56Msg.md#fromjson-1)
- [fromJsonString](BEP56Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP56Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP56Msg`](BEP56Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:529](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L529)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:527](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L527)

___

### ops

• **ops**: [`BEP56MsgOp`](BEP56MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP56MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:522](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L522)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:536](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L536)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:534](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L534)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP56Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:535](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L535)

## Methods

### clone

▸ **clone**(): [`BEP56Msg`](BEP56Msg.md)

Create a deep copy.

#### Returns

[`BEP56Msg`](BEP56Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP56Msg`](BEP56Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP56Msg`](BEP56Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP56Msg`](BEP56Msg.md)

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

[`BEP56Msg`](BEP56Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP56Msg`](BEP56Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP56Msg`](BEP56Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP56Msg`](BEP56Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP56Msg`](BEP56Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP56Msg`](BEP56Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP56Msg`](BEP56Msg.md)\>

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
| `a` | `undefined` \| [`BEP56Msg`](BEP56Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP56Msg`](BEP56Msg.md)\> |
| `b` | `undefined` \| [`BEP56Msg`](BEP56Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP56Msg`](BEP56Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:553](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L553)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP56Msg`](BEP56Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP56Msg`](BEP56Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:541](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L541)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP56Msg`](BEP56Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP56Msg`](BEP56Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:545](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L545)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP56Msg`](BEP56Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP56Msg`](BEP56Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:549](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L549)
