[@bearmint/bep-018 - v0.0.0](../README.md) / BEP56MsgOp

# Class: BEP56MsgOp

Token Burn Tx

**`Generated`**

from message BEP56MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP56MsgOp`](BEP56MsgOp.md)\>

  ↳ **`BEP56MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP56MsgOp.md#constructor)

### Properties

- [amount](BEP56MsgOp.md#amount)
- [denomination](BEP56MsgOp.md#denomination)
- [memo](BEP56MsgOp.md#memo)
- [fields](BEP56MsgOp.md#fields)
- [runtime](BEP56MsgOp.md#runtime)
- [typeName](BEP56MsgOp.md#typename)

### Methods

- [clone](BEP56MsgOp.md#clone)
- [equals](BEP56MsgOp.md#equals)
- [fromBinary](BEP56MsgOp.md#frombinary)
- [fromJson](BEP56MsgOp.md#fromjson)
- [fromJsonString](BEP56MsgOp.md#fromjsonstring)
- [getType](BEP56MsgOp.md#gettype)
- [toBinary](BEP56MsgOp.md#tobinary)
- [toJson](BEP56MsgOp.md#tojson)
- [toJsonString](BEP56MsgOp.md#tojsonstring)
- [equals](BEP56MsgOp.md#equals-1)
- [fromBinary](BEP56MsgOp.md#frombinary-1)
- [fromJson](BEP56MsgOp.md#fromjson-1)
- [fromJsonString](BEP56MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP56MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP56MsgOp`](BEP56MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:485](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L485)

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 amount = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:478](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L478)

___

### denomination

• **denomination**: `string` = `""`

**`Generated`**

from field: string denomination = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:473](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L473)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:483](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L483)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:492](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L492)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:490](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L490)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP56MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:491](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L491)

## Methods

### clone

▸ **clone**(): [`BEP56MsgOp`](BEP56MsgOp.md)

Create a deep copy.

#### Returns

[`BEP56MsgOp`](BEP56MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP56MsgOp`](BEP56MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP56MsgOp`](BEP56MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP56MsgOp`](BEP56MsgOp.md)

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

[`BEP56MsgOp`](BEP56MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP56MsgOp`](BEP56MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP56MsgOp`](BEP56MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP56MsgOp`](BEP56MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP56MsgOp`](BEP56MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP56MsgOp`](BEP56MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP56MsgOp`](BEP56MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP56MsgOp`](BEP56MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP56MsgOp`](BEP56MsgOp.md)\> |
| `b` | `undefined` \| [`BEP56MsgOp`](BEP56MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP56MsgOp`](BEP56MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:510](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L510)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP56MsgOp`](BEP56MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP56MsgOp`](BEP56MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:498](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L498)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP56MsgOp`](BEP56MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP56MsgOp`](BEP56MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:502](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L502)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP56MsgOp`](BEP56MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP56MsgOp`](BEP56MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:506](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L506)
