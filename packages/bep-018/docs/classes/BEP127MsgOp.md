[@bearmint/bep-018 - v0.0.0](../README.md) / BEP127MsgOp

# Class: BEP127MsgOp

NFT Collection Ownership Transfer Tx

**`Generated`**

from message BEP127MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP127MsgOp`](BEP127MsgOp.md)\>

  ↳ **`BEP127MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP127MsgOp.md#constructor)

### Properties

- [hash](BEP127MsgOp.md#hash)
- [memo](BEP127MsgOp.md#memo)
- [recipient](BEP127MsgOp.md#recipient)
- [fields](BEP127MsgOp.md#fields)
- [runtime](BEP127MsgOp.md#runtime)
- [typeName](BEP127MsgOp.md#typename)

### Methods

- [clone](BEP127MsgOp.md#clone)
- [equals](BEP127MsgOp.md#equals)
- [fromBinary](BEP127MsgOp.md#frombinary)
- [fromJson](BEP127MsgOp.md#fromjson)
- [fromJsonString](BEP127MsgOp.md#fromjsonstring)
- [getType](BEP127MsgOp.md#gettype)
- [toBinary](BEP127MsgOp.md#tobinary)
- [toJson](BEP127MsgOp.md#tojson)
- [toJsonString](BEP127MsgOp.md#tojsonstring)
- [equals](BEP127MsgOp.md#equals-1)
- [fromBinary](BEP127MsgOp.md#frombinary-1)
- [fromJson](BEP127MsgOp.md#fromjson-1)
- [fromJsonString](BEP127MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP127MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP127MsgOp`](BEP127MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1995](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1995)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1983](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1983)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1993](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1993)

___

### recipient

• **recipient**: `string` = `""`

**`Generated`**

from field: string recipient = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1988](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1988)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2002](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2002)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2000](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2000)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP127MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2001](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2001)

## Methods

### clone

▸ **clone**(): [`BEP127MsgOp`](BEP127MsgOp.md)

Create a deep copy.

#### Returns

[`BEP127MsgOp`](BEP127MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP127MsgOp`](BEP127MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP127MsgOp`](BEP127MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP127MsgOp`](BEP127MsgOp.md)

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

[`BEP127MsgOp`](BEP127MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP127MsgOp`](BEP127MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP127MsgOp`](BEP127MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP127MsgOp`](BEP127MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP127MsgOp`](BEP127MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP127MsgOp`](BEP127MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP127MsgOp`](BEP127MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP127MsgOp`](BEP127MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP127MsgOp`](BEP127MsgOp.md)\> |
| `b` | `undefined` \| [`BEP127MsgOp`](BEP127MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP127MsgOp`](BEP127MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2020](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2020)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP127MsgOp`](BEP127MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP127MsgOp`](BEP127MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2008](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2008)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP127MsgOp`](BEP127MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP127MsgOp`](BEP127MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2012](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2012)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP127MsgOp`](BEP127MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP127MsgOp`](BEP127MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2016](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2016)
