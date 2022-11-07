[@bearmint/bep-018 - v0.0.0](../README.md) / BEP136MsgOp

# Class: BEP136MsgOp

NAT Ownership Resignation Tx

**`Generated`**

from message BEP136MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP136MsgOp`](BEP136MsgOp.md)\>

  ↳ **`BEP136MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP136MsgOp.md#constructor)

### Properties

- [hash](BEP136MsgOp.md#hash)
- [memo](BEP136MsgOp.md#memo)
- [fields](BEP136MsgOp.md#fields)
- [runtime](BEP136MsgOp.md#runtime)
- [typeName](BEP136MsgOp.md#typename)

### Methods

- [clone](BEP136MsgOp.md#clone)
- [equals](BEP136MsgOp.md#equals)
- [fromBinary](BEP136MsgOp.md#frombinary)
- [fromJson](BEP136MsgOp.md#fromjson)
- [fromJsonString](BEP136MsgOp.md#fromjsonstring)
- [getType](BEP136MsgOp.md#gettype)
- [toBinary](BEP136MsgOp.md#tobinary)
- [toJson](BEP136MsgOp.md#tojson)
- [toJsonString](BEP136MsgOp.md#tojsonstring)
- [equals](BEP136MsgOp.md#equals-1)
- [fromBinary](BEP136MsgOp.md#frombinary-1)
- [fromJson](BEP136MsgOp.md#fromjson-1)
- [fromJsonString](BEP136MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP136MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP136MsgOp`](BEP136MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3045](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3045)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3038](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3038)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:3043](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3043)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3052](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3052)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3050](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3050)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP136MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:3051](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3051)

## Methods

### clone

▸ **clone**(): [`BEP136MsgOp`](BEP136MsgOp.md)

Create a deep copy.

#### Returns

[`BEP136MsgOp`](BEP136MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP136MsgOp`](BEP136MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP136MsgOp`](BEP136MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP136MsgOp`](BEP136MsgOp.md)

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

[`BEP136MsgOp`](BEP136MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP136MsgOp`](BEP136MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP136MsgOp`](BEP136MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP136MsgOp`](BEP136MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP136MsgOp`](BEP136MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP136MsgOp`](BEP136MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP136MsgOp`](BEP136MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP136MsgOp`](BEP136MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP136MsgOp`](BEP136MsgOp.md)\> |
| `b` | `undefined` \| [`BEP136MsgOp`](BEP136MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP136MsgOp`](BEP136MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:3069](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3069)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP136MsgOp`](BEP136MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP136MsgOp`](BEP136MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3057](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3057)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP136MsgOp`](BEP136MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP136MsgOp`](BEP136MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3061](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3061)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP136MsgOp`](BEP136MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP136MsgOp`](BEP136MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:3065](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L3065)
