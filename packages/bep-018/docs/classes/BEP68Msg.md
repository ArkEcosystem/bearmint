[@bearmint/bep-018 - v0.0.0](../README.md) / BEP68Msg

# Class: BEP68Msg

**`Generated`**

from message BEP68Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP68Msg`](BEP68Msg.md)\>

  ↳ **`BEP68Msg`**

## Table of contents

### Constructors

- [constructor](BEP68Msg.md#constructor)

### Properties

- [memo](BEP68Msg.md#memo)
- [ops](BEP68Msg.md#ops)
- [fields](BEP68Msg.md#fields)
- [runtime](BEP68Msg.md#runtime)
- [typeName](BEP68Msg.md#typename)

### Methods

- [clone](BEP68Msg.md#clone)
- [equals](BEP68Msg.md#equals)
- [fromBinary](BEP68Msg.md#frombinary)
- [fromJson](BEP68Msg.md#fromjson)
- [fromJsonString](BEP68Msg.md#fromjsonstring)
- [getType](BEP68Msg.md#gettype)
- [toBinary](BEP68Msg.md#tobinary)
- [toJson](BEP68Msg.md#tojson)
- [toJsonString](BEP68Msg.md#tojsonstring)
- [equals](BEP68Msg.md#equals-1)
- [fromBinary](BEP68Msg.md#frombinary-1)
- [fromJson](BEP68Msg.md#fromjson-1)
- [fromJsonString](BEP68Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP68Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP68Msg`](BEP68Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1397](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1397)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1395](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1395)

___

### ops

• **ops**: [`BEP68MsgOp`](BEP68MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP68MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1390](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1390)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1404](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1404)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1402](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1402)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP68Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1403](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1403)

## Methods

### clone

▸ **clone**(): [`BEP68Msg`](BEP68Msg.md)

Create a deep copy.

#### Returns

[`BEP68Msg`](BEP68Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP68Msg`](BEP68Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP68Msg`](BEP68Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP68Msg`](BEP68Msg.md)

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

[`BEP68Msg`](BEP68Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP68Msg`](BEP68Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP68Msg`](BEP68Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP68Msg`](BEP68Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP68Msg`](BEP68Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP68Msg`](BEP68Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP68Msg`](BEP68Msg.md)\>

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
| `a` | `undefined` \| [`BEP68Msg`](BEP68Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP68Msg`](BEP68Msg.md)\> |
| `b` | `undefined` \| [`BEP68Msg`](BEP68Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP68Msg`](BEP68Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1421](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1421)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP68Msg`](BEP68Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP68Msg`](BEP68Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1409](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1409)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP68Msg`](BEP68Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP68Msg`](BEP68Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1413](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1413)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP68Msg`](BEP68Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP68Msg`](BEP68Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1417](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1417)
