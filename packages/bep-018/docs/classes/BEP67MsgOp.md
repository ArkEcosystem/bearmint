[@bearmint/bep-018 - v0.0.0](../README.md) / BEP67MsgOp

# Class: BEP67MsgOp

IPFS Tx

**`Generated`**

from message BEP67MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP67MsgOp`](BEP67MsgOp.md)\>

  ↳ **`BEP67MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP67MsgOp.md#constructor)

### Properties

- [memo](BEP67MsgOp.md#memo)
- [type](BEP67MsgOp.md#type)
- [value](BEP67MsgOp.md#value)
- [fields](BEP67MsgOp.md#fields)
- [runtime](BEP67MsgOp.md#runtime)
- [typeName](BEP67MsgOp.md#typename)

### Methods

- [clone](BEP67MsgOp.md#clone)
- [equals](BEP67MsgOp.md#equals)
- [fromBinary](BEP67MsgOp.md#frombinary)
- [fromJson](BEP67MsgOp.md#fromjson)
- [fromJsonString](BEP67MsgOp.md#fromjsonstring)
- [getType](BEP67MsgOp.md#gettype)
- [toBinary](BEP67MsgOp.md#tobinary)
- [toJson](BEP67MsgOp.md#tojson)
- [toJsonString](BEP67MsgOp.md#tojsonstring)
- [equals](BEP67MsgOp.md#equals-1)
- [fromBinary](BEP67MsgOp.md#frombinary-1)
- [fromJson](BEP67MsgOp.md#fromjson-1)
- [fromJsonString](BEP67MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP67MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP67MsgOp`](BEP67MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1259](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1259)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1257](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1257)

___

### type

• **type**: `string` = `""`

**`Generated`**

from field: string type = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1247](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1247)

___

### value

• **value**: `string` = `""`

**`Generated`**

from field: string value = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1252](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1252)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1266](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1266)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1264](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1264)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP67MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1265](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1265)

## Methods

### clone

▸ **clone**(): [`BEP67MsgOp`](BEP67MsgOp.md)

Create a deep copy.

#### Returns

[`BEP67MsgOp`](BEP67MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP67MsgOp`](BEP67MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP67MsgOp`](BEP67MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP67MsgOp`](BEP67MsgOp.md)

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

[`BEP67MsgOp`](BEP67MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP67MsgOp`](BEP67MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP67MsgOp`](BEP67MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP67MsgOp`](BEP67MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP67MsgOp`](BEP67MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP67MsgOp`](BEP67MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP67MsgOp`](BEP67MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP67MsgOp`](BEP67MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP67MsgOp`](BEP67MsgOp.md)\> |
| `b` | `undefined` \| [`BEP67MsgOp`](BEP67MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP67MsgOp`](BEP67MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1284](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1284)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP67MsgOp`](BEP67MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP67MsgOp`](BEP67MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1272](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1272)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP67MsgOp`](BEP67MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP67MsgOp`](BEP67MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1276](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1276)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP67MsgOp`](BEP67MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP67MsgOp`](BEP67MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1280](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1280)
