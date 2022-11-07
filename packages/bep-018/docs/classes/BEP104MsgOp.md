[@bearmint/bep-018 - v0.0.0](../README.md) / BEP104MsgOp

# Class: BEP104MsgOp

Stake Tx

**`Generated`**

from message BEP104MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP104MsgOp`](BEP104MsgOp.md)\>

  ↳ **`BEP104MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP104MsgOp.md#constructor)

### Properties

- [memo](BEP104MsgOp.md#memo)
- [moniker](BEP104MsgOp.md#moniker)
- [stake](BEP104MsgOp.md#stake)
- [fields](BEP104MsgOp.md#fields)
- [runtime](BEP104MsgOp.md#runtime)
- [typeName](BEP104MsgOp.md#typename)

### Methods

- [clone](BEP104MsgOp.md#clone)
- [equals](BEP104MsgOp.md#equals)
- [fromBinary](BEP104MsgOp.md#frombinary)
- [fromJson](BEP104MsgOp.md#fromjson)
- [fromJsonString](BEP104MsgOp.md#fromjsonstring)
- [getType](BEP104MsgOp.md#gettype)
- [toBinary](BEP104MsgOp.md#tobinary)
- [toJson](BEP104MsgOp.md#tojson)
- [toJsonString](BEP104MsgOp.md#tojsonstring)
- [equals](BEP104MsgOp.md#equals-1)
- [fromBinary](BEP104MsgOp.md#frombinary-1)
- [fromJson](BEP104MsgOp.md#fromjson-1)
- [fromJsonString](BEP104MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP104MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP104MsgOp`](BEP104MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1447](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1447)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1445](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1445)

___

### moniker

• **moniker**: `string` = `""`

**`Generated`**

from field: string moniker = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1435](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1435)

___

### stake

• **stake**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 stake = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1440](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1440)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1454](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1454)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1452](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1452)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP104MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1453](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1453)

## Methods

### clone

▸ **clone**(): [`BEP104MsgOp`](BEP104MsgOp.md)

Create a deep copy.

#### Returns

[`BEP104MsgOp`](BEP104MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP104MsgOp`](BEP104MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP104MsgOp`](BEP104MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP104MsgOp`](BEP104MsgOp.md)

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

[`BEP104MsgOp`](BEP104MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP104MsgOp`](BEP104MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP104MsgOp`](BEP104MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP104MsgOp`](BEP104MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP104MsgOp`](BEP104MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP104MsgOp`](BEP104MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP104MsgOp`](BEP104MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP104MsgOp`](BEP104MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP104MsgOp`](BEP104MsgOp.md)\> |
| `b` | `undefined` \| [`BEP104MsgOp`](BEP104MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP104MsgOp`](BEP104MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1472](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1472)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP104MsgOp`](BEP104MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP104MsgOp`](BEP104MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1460](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1460)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP104MsgOp`](BEP104MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP104MsgOp`](BEP104MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1464](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1464)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP104MsgOp`](BEP104MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP104MsgOp`](BEP104MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1468](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1468)
