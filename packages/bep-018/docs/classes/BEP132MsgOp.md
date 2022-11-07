[@bearmint/bep-018 - v0.0.0](../README.md) / BEP132MsgOp

# Class: BEP132MsgOp

NFT Transfer Tx

**`Generated`**

from message BEP132MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP132MsgOp`](BEP132MsgOp.md)\>

  ↳ **`BEP132MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP132MsgOp.md#constructor)

### Properties

- [hash](BEP132MsgOp.md#hash)
- [memo](BEP132MsgOp.md#memo)
- [recipient](BEP132MsgOp.md#recipient)
- [fields](BEP132MsgOp.md#fields)
- [runtime](BEP132MsgOp.md#runtime)
- [typeName](BEP132MsgOp.md#typename)

### Methods

- [clone](BEP132MsgOp.md#clone)
- [equals](BEP132MsgOp.md#equals)
- [fromBinary](BEP132MsgOp.md#frombinary)
- [fromJson](BEP132MsgOp.md#fromjson)
- [fromJsonString](BEP132MsgOp.md#fromjsonstring)
- [getType](BEP132MsgOp.md#gettype)
- [toBinary](BEP132MsgOp.md#tobinary)
- [toJson](BEP132MsgOp.md#tojson)
- [toJsonString](BEP132MsgOp.md#tojsonstring)
- [equals](BEP132MsgOp.md#equals-1)
- [fromBinary](BEP132MsgOp.md#frombinary-1)
- [fromJson](BEP132MsgOp.md#fromjson-1)
- [fromJsonString](BEP132MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP132MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP132MsgOp`](BEP132MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2534](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2534)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2522](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2522)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2532](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2532)

___

### recipient

• **recipient**: `string` = `""`

**`Generated`**

from field: string recipient = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2527](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2527)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2541](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2541)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2539](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2539)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP132MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2540](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2540)

## Methods

### clone

▸ **clone**(): [`BEP132MsgOp`](BEP132MsgOp.md)

Create a deep copy.

#### Returns

[`BEP132MsgOp`](BEP132MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP132MsgOp`](BEP132MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP132MsgOp`](BEP132MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP132MsgOp`](BEP132MsgOp.md)

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

[`BEP132MsgOp`](BEP132MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP132MsgOp`](BEP132MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP132MsgOp`](BEP132MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP132MsgOp`](BEP132MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP132MsgOp`](BEP132MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP132MsgOp`](BEP132MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP132MsgOp`](BEP132MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP132MsgOp`](BEP132MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP132MsgOp`](BEP132MsgOp.md)\> |
| `b` | `undefined` \| [`BEP132MsgOp`](BEP132MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP132MsgOp`](BEP132MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2559](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2559)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP132MsgOp`](BEP132MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP132MsgOp`](BEP132MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2547](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2547)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP132MsgOp`](BEP132MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP132MsgOp`](BEP132MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2551](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2551)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP132MsgOp`](BEP132MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP132MsgOp`](BEP132MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2555](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2555)
