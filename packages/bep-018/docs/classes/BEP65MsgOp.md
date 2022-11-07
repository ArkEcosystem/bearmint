[@bearmint/bep-018 - v0.0.0](../README.md) / BEP65MsgOp

# Class: BEP65MsgOp

HTLC Claim Tx

**`Generated`**

from message BEP65MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP65MsgOp`](BEP65MsgOp.md)\>

  ↳ **`BEP65MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP65MsgOp.md#constructor)

### Properties

- [hash](BEP65MsgOp.md#hash)
- [memo](BEP65MsgOp.md#memo)
- [secret](BEP65MsgOp.md#secret)
- [fields](BEP65MsgOp.md#fields)
- [runtime](BEP65MsgOp.md#runtime)
- [typeName](BEP65MsgOp.md#typename)

### Methods

- [clone](BEP65MsgOp.md#clone)
- [equals](BEP65MsgOp.md#equals)
- [fromBinary](BEP65MsgOp.md#frombinary)
- [fromJson](BEP65MsgOp.md#fromjson)
- [fromJsonString](BEP65MsgOp.md#fromjsonstring)
- [getType](BEP65MsgOp.md#gettype)
- [toBinary](BEP65MsgOp.md#tobinary)
- [toJson](BEP65MsgOp.md#tojson)
- [toJsonString](BEP65MsgOp.md#tojsonstring)
- [equals](BEP65MsgOp.md#equals-1)
- [fromBinary](BEP65MsgOp.md#frombinary-1)
- [fromJson](BEP65MsgOp.md#fromjson-1)
- [fromJsonString](BEP65MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP65MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP65MsgOp`](BEP65MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1071](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1071)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1059](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1059)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1069](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1069)

___

### secret

• **secret**: `Uint8Array`

**`Generated`**

from field: bytes secret = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1064](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1064)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1078](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1078)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1076](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1076)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP65MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1077](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1077)

## Methods

### clone

▸ **clone**(): [`BEP65MsgOp`](BEP65MsgOp.md)

Create a deep copy.

#### Returns

[`BEP65MsgOp`](BEP65MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP65MsgOp`](BEP65MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP65MsgOp`](BEP65MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP65MsgOp`](BEP65MsgOp.md)

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

[`BEP65MsgOp`](BEP65MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP65MsgOp`](BEP65MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP65MsgOp`](BEP65MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP65MsgOp`](BEP65MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP65MsgOp`](BEP65MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP65MsgOp`](BEP65MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP65MsgOp`](BEP65MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP65MsgOp`](BEP65MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP65MsgOp`](BEP65MsgOp.md)\> |
| `b` | `undefined` \| [`BEP65MsgOp`](BEP65MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP65MsgOp`](BEP65MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1096](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1096)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP65MsgOp`](BEP65MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP65MsgOp`](BEP65MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1084](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1084)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP65MsgOp`](BEP65MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP65MsgOp`](BEP65MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1088](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1088)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP65MsgOp`](BEP65MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP65MsgOp`](BEP65MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1092](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1092)
