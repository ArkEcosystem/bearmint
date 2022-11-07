[@bearmint/bep-018 - v0.0.0](../README.md) / BEP137MsgOp

# Class: BEP137MsgOp

NAT Mint Tx

**`Generated`**

from message BEP137MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP137MsgOp`](BEP137MsgOp.md)\>

  ↳ **`BEP137MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP137MsgOp.md#constructor)

### Properties

- [amount](BEP137MsgOp.md#amount)
- [hash](BEP137MsgOp.md#hash)
- [memo](BEP137MsgOp.md#memo)
- [fields](BEP137MsgOp.md#fields)
- [runtime](BEP137MsgOp.md#runtime)
- [typeName](BEP137MsgOp.md#typename)

### Methods

- [clone](BEP137MsgOp.md#clone)
- [equals](BEP137MsgOp.md#equals)
- [fromBinary](BEP137MsgOp.md#frombinary)
- [fromJson](BEP137MsgOp.md#fromjson)
- [fromJsonString](BEP137MsgOp.md#fromjsonstring)
- [getType](BEP137MsgOp.md#gettype)
- [toBinary](BEP137MsgOp.md#tobinary)
- [toJson](BEP137MsgOp.md#tojson)
- [toJsonString](BEP137MsgOp.md#tojsonstring)
- [equals](BEP137MsgOp.md#equals-1)
- [fromBinary](BEP137MsgOp.md#frombinary-1)
- [fromJson](BEP137MsgOp.md#fromjson-1)
- [fromJsonString](BEP137MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP137MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP137MsgOp`](BEP137MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3138](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3138)

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 amount = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3131](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3131)

___

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3126](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3126)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3136](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3136)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3145](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3145)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3143](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3143)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP137MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:3144](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3144)

## Methods

### clone

▸ **clone**(): [`BEP137MsgOp`](BEP137MsgOp.md)

Create a deep copy.

#### Returns

[`BEP137MsgOp`](BEP137MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP137MsgOp`](BEP137MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP137MsgOp`](BEP137MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP137MsgOp`](BEP137MsgOp.md)

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

[`BEP137MsgOp`](BEP137MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP137MsgOp`](BEP137MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP137MsgOp`](BEP137MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP137MsgOp`](BEP137MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP137MsgOp`](BEP137MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP137MsgOp`](BEP137MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP137MsgOp`](BEP137MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP137MsgOp`](BEP137MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP137MsgOp`](BEP137MsgOp.md)\> |
| `b` | `undefined` \| [`BEP137MsgOp`](BEP137MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP137MsgOp`](BEP137MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3163](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3163)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP137MsgOp`](BEP137MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP137MsgOp`](BEP137MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3151](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3151)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP137MsgOp`](BEP137MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP137MsgOp`](BEP137MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3155](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3155)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP137MsgOp`](BEP137MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP137MsgOp`](BEP137MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3159](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3159)
