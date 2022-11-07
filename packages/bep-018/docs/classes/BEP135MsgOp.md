[@bearmint/bep-018 - v0.0.0](../README.md) / BEP135MsgOp

# Class: BEP135MsgOp

NAT Ownership Transfer Tx

**`Generated`**

from message BEP135MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP135MsgOp`](BEP135MsgOp.md)\>

  ↳ **`BEP135MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP135MsgOp.md#constructor)

### Properties

- [hash](BEP135MsgOp.md#hash)
- [memo](BEP135MsgOp.md#memo)
- [recipient](BEP135MsgOp.md#recipient)
- [fields](BEP135MsgOp.md#fields)
- [runtime](BEP135MsgOp.md#runtime)
- [typeName](BEP135MsgOp.md#typename)

### Methods

- [clone](BEP135MsgOp.md#clone)
- [equals](BEP135MsgOp.md#equals)
- [fromBinary](BEP135MsgOp.md#frombinary)
- [fromJson](BEP135MsgOp.md#fromjson)
- [fromJsonString](BEP135MsgOp.md#fromjsonstring)
- [getType](BEP135MsgOp.md#gettype)
- [toBinary](BEP135MsgOp.md#tobinary)
- [toJson](BEP135MsgOp.md#tojson)
- [toJsonString](BEP135MsgOp.md#tojsonstring)
- [equals](BEP135MsgOp.md#equals-1)
- [fromBinary](BEP135MsgOp.md#frombinary-1)
- [fromJson](BEP135MsgOp.md#fromjson-1)
- [fromJsonString](BEP135MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP135MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP135MsgOp`](BEP135MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2956](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2956)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2944](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2944)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2954](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2954)

___

### recipient

• **recipient**: `string` = `""`

**`Generated`**

from field: string recipient = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2949](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2949)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2963](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2963)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2961](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2961)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP135MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2962](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2962)

## Methods

### clone

▸ **clone**(): [`BEP135MsgOp`](BEP135MsgOp.md)

Create a deep copy.

#### Returns

[`BEP135MsgOp`](BEP135MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP135MsgOp`](BEP135MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP135MsgOp`](BEP135MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP135MsgOp`](BEP135MsgOp.md)

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

[`BEP135MsgOp`](BEP135MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP135MsgOp`](BEP135MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP135MsgOp`](BEP135MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP135MsgOp`](BEP135MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP135MsgOp`](BEP135MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP135MsgOp`](BEP135MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP135MsgOp`](BEP135MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP135MsgOp`](BEP135MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP135MsgOp`](BEP135MsgOp.md)\> |
| `b` | `undefined` \| [`BEP135MsgOp`](BEP135MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP135MsgOp`](BEP135MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2981](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2981)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP135MsgOp`](BEP135MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP135MsgOp`](BEP135MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2969](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2969)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP135MsgOp`](BEP135MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP135MsgOp`](BEP135MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2973](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2973)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP135MsgOp`](BEP135MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP135MsgOp`](BEP135MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2977](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2977)
