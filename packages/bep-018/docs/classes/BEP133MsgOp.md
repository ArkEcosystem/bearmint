[@bearmint/bep-018 - v0.0.0](../README.md) / BEP133MsgOp

# Class: BEP133MsgOp

NFT Burn Tx

**`Generated`**

from message BEP133MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP133MsgOp`](BEP133MsgOp.md)\>

  ↳ **`BEP133MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP133MsgOp.md#constructor)

### Properties

- [hash](BEP133MsgOp.md#hash)
- [memo](BEP133MsgOp.md#memo)
- [fields](BEP133MsgOp.md#fields)
- [runtime](BEP133MsgOp.md#runtime)
- [typeName](BEP133MsgOp.md#typename)

### Methods

- [clone](BEP133MsgOp.md#clone)
- [equals](BEP133MsgOp.md#equals)
- [fromBinary](BEP133MsgOp.md#frombinary)
- [fromJson](BEP133MsgOp.md#fromjson)
- [fromJsonString](BEP133MsgOp.md#fromjsonstring)
- [getType](BEP133MsgOp.md#gettype)
- [toBinary](BEP133MsgOp.md#tobinary)
- [toJson](BEP133MsgOp.md#tojson)
- [toJsonString](BEP133MsgOp.md#tojsonstring)
- [equals](BEP133MsgOp.md#equals-1)
- [fromBinary](BEP133MsgOp.md#frombinary-1)
- [fromJson](BEP133MsgOp.md#fromjson-1)
- [fromJsonString](BEP133MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP133MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP133MsgOp`](BEP133MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2623](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2623)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2616](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2616)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2621](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2621)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2630](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2630)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2628](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2628)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP133MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2629](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2629)

## Methods

### clone

▸ **clone**(): [`BEP133MsgOp`](BEP133MsgOp.md)

Create a deep copy.

#### Returns

[`BEP133MsgOp`](BEP133MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP133MsgOp`](BEP133MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP133MsgOp`](BEP133MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP133MsgOp`](BEP133MsgOp.md)

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

[`BEP133MsgOp`](BEP133MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP133MsgOp`](BEP133MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP133MsgOp`](BEP133MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP133MsgOp`](BEP133MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP133MsgOp`](BEP133MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP133MsgOp`](BEP133MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP133MsgOp`](BEP133MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP133MsgOp`](BEP133MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP133MsgOp`](BEP133MsgOp.md)\> |
| `b` | `undefined` \| [`BEP133MsgOp`](BEP133MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP133MsgOp`](BEP133MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2647](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2647)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP133MsgOp`](BEP133MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP133MsgOp`](BEP133MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2635](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2635)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP133MsgOp`](BEP133MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP133MsgOp`](BEP133MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2639](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2639)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP133MsgOp`](BEP133MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP133MsgOp`](BEP133MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2643](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2643)
