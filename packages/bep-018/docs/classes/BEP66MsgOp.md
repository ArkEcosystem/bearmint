[@bearmint/bep-018 - v0.0.0](../README.md) / BEP66MsgOp

# Class: BEP66MsgOp

HTLC Refund Tx

**`Generated`**

from message BEP66MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP66MsgOp`](BEP66MsgOp.md)\>

  ↳ **`BEP66MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP66MsgOp.md#constructor)

### Properties

- [hash](BEP66MsgOp.md#hash)
- [memo](BEP66MsgOp.md#memo)
- [secret](BEP66MsgOp.md#secret)
- [fields](BEP66MsgOp.md#fields)
- [runtime](BEP66MsgOp.md#runtime)
- [typeName](BEP66MsgOp.md#typename)

### Methods

- [clone](BEP66MsgOp.md#clone)
- [equals](BEP66MsgOp.md#equals)
- [fromBinary](BEP66MsgOp.md#frombinary)
- [fromJson](BEP66MsgOp.md#fromjson)
- [fromJsonString](BEP66MsgOp.md#fromjsonstring)
- [getType](BEP66MsgOp.md#gettype)
- [toBinary](BEP66MsgOp.md#tobinary)
- [toJson](BEP66MsgOp.md#tojson)
- [toJsonString](BEP66MsgOp.md#tojsonstring)
- [equals](BEP66MsgOp.md#equals-1)
- [fromBinary](BEP66MsgOp.md#frombinary-1)
- [fromJson](BEP66MsgOp.md#fromjson-1)
- [fromJsonString](BEP66MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP66MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP66MsgOp`](BEP66MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1165](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1165)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1153](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1153)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1163](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1163)

___

### secret

• **secret**: `Uint8Array`

**`Generated`**

from field: bytes secret = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1158](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1158)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1172](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1172)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1170](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1170)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP66MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1171](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1171)

## Methods

### clone

▸ **clone**(): [`BEP66MsgOp`](BEP66MsgOp.md)

Create a deep copy.

#### Returns

[`BEP66MsgOp`](BEP66MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP66MsgOp`](BEP66MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP66MsgOp`](BEP66MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP66MsgOp`](BEP66MsgOp.md)

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

[`BEP66MsgOp`](BEP66MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP66MsgOp`](BEP66MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP66MsgOp`](BEP66MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP66MsgOp`](BEP66MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP66MsgOp`](BEP66MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP66MsgOp`](BEP66MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP66MsgOp`](BEP66MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP66MsgOp`](BEP66MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP66MsgOp`](BEP66MsgOp.md)\> |
| `b` | `undefined` \| [`BEP66MsgOp`](BEP66MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP66MsgOp`](BEP66MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1190](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1190)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP66MsgOp`](BEP66MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP66MsgOp`](BEP66MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1178](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1178)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP66MsgOp`](BEP66MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP66MsgOp`](BEP66MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1182](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1182)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP66MsgOp`](BEP66MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP66MsgOp`](BEP66MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1186](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1186)
