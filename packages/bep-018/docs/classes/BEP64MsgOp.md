[@bearmint/bep-018 - v0.0.0](../README.md) / BEP64MsgOp

# Class: BEP64MsgOp

HTLC Lock Tx

**`Generated`**

from message BEP64MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP64MsgOp`](BEP64MsgOp.md)\>

  ↳ **`BEP64MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP64MsgOp.md#constructor)

### Properties

- [amount](BEP64MsgOp.md#amount)
- [denomination](BEP64MsgOp.md#denomination)
- [expiration](BEP64MsgOp.md#expiration)
- [memo](BEP64MsgOp.md#memo)
- [recipient](BEP64MsgOp.md#recipient)
- [secret](BEP64MsgOp.md#secret)
- [secretAlgorithm](BEP64MsgOp.md#secretalgorithm)
- [fields](BEP64MsgOp.md#fields)
- [runtime](BEP64MsgOp.md#runtime)
- [typeName](BEP64MsgOp.md#typename)

### Methods

- [clone](BEP64MsgOp.md#clone)
- [equals](BEP64MsgOp.md#equals)
- [fromBinary](BEP64MsgOp.md#frombinary)
- [fromJson](BEP64MsgOp.md#fromjson)
- [fromJsonString](BEP64MsgOp.md#fromjsonstring)
- [getType](BEP64MsgOp.md#gettype)
- [toBinary](BEP64MsgOp.md#tobinary)
- [toJson](BEP64MsgOp.md#tojson)
- [toJsonString](BEP64MsgOp.md#tojsonstring)
- [equals](BEP64MsgOp.md#equals-1)
- [fromBinary](BEP64MsgOp.md#frombinary-1)
- [fromJson](BEP64MsgOp.md#fromjson-1)
- [fromJsonString](BEP64MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP64MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP64MsgOp`](BEP64MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:930](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L930)

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 amount = 5;

#### Defined in

[packages/bep-018/source/tx_pb.ts:918](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L918)

___

### denomination

• **denomination**: `string` = `""`

**`Generated`**

from field: string denomination = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:913](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L913)

___

### expiration

• **expiration**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 expiration = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:908](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L908)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 7;

#### Defined in

[packages/bep-018/source/tx_pb.ts:928](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L928)

___

### recipient

• **recipient**: `string` = `""`

**`Generated`**

from field: string recipient = 6;

#### Defined in

[packages/bep-018/source/tx_pb.ts:923](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L923)

___

### secret

• **secret**: `Uint8Array`

**`Generated`**

from field: bytes secret = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:898](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L898)

___

### secretAlgorithm

• **secretAlgorithm**: `string` = `""`

**`Generated`**

from field: string secret_algorithm = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:903](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L903)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:937](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L937)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:935](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L935)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP64MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:936](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L936)

## Methods

### clone

▸ **clone**(): [`BEP64MsgOp`](BEP64MsgOp.md)

Create a deep copy.

#### Returns

[`BEP64MsgOp`](BEP64MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP64MsgOp`](BEP64MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64MsgOp`](BEP64MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP64MsgOp`](BEP64MsgOp.md)

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

[`BEP64MsgOp`](BEP64MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP64MsgOp`](BEP64MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64MsgOp`](BEP64MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP64MsgOp`](BEP64MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64MsgOp`](BEP64MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP64MsgOp`](BEP64MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP64MsgOp`](BEP64MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP64MsgOp`](BEP64MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64MsgOp`](BEP64MsgOp.md)\> |
| `b` | `undefined` \| [`BEP64MsgOp`](BEP64MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64MsgOp`](BEP64MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:959](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L959)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP64MsgOp`](BEP64MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP64MsgOp`](BEP64MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:947](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L947)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP64MsgOp`](BEP64MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64MsgOp`](BEP64MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:951](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L951)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP64MsgOp`](BEP64MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64MsgOp`](BEP64MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:955](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L955)
