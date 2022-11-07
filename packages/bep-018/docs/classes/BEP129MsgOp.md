[@bearmint/bep-018 - v0.0.0](../README.md) / BEP129MsgOp

# Class: BEP129MsgOp

NFT Collection Permission Grant Tx

**`Generated`**

from message BEP129MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP129MsgOp`](BEP129MsgOp.md)\>

  ↳ **`BEP129MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP129MsgOp.md#constructor)

### Properties

- [hash](BEP129MsgOp.md#hash)
- [memo](BEP129MsgOp.md#memo)
- [permissions](BEP129MsgOp.md#permissions)
- [steward](BEP129MsgOp.md#steward)
- [fields](BEP129MsgOp.md#fields)
- [runtime](BEP129MsgOp.md#runtime)
- [typeName](BEP129MsgOp.md#typename)

### Methods

- [clone](BEP129MsgOp.md#clone)
- [equals](BEP129MsgOp.md#equals)
- [fromBinary](BEP129MsgOp.md#frombinary)
- [fromJson](BEP129MsgOp.md#fromjson)
- [fromJsonString](BEP129MsgOp.md#fromjsonstring)
- [getType](BEP129MsgOp.md#gettype)
- [toBinary](BEP129MsgOp.md#tobinary)
- [toJson](BEP129MsgOp.md#tojson)
- [toJsonString](BEP129MsgOp.md#tojsonstring)
- [equals](BEP129MsgOp.md#equals-1)
- [fromBinary](BEP129MsgOp.md#frombinary-1)
- [fromJson](BEP129MsgOp.md#fromjson-1)
- [fromJsonString](BEP129MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP129MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP129MsgOp`](BEP129MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2182](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2182)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2165](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2165)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2180](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2180)

___

### permissions

• **permissions**: `number`[] = `[]`

**`Generated`**

from field: repeated uint32 permissions = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2175](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2175)

___

### steward

• **steward**: `string` = `""`

**`Generated`**

from field: string steward = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2170](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2170)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2189](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2189)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2187](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2187)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP129MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2188](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2188)

## Methods

### clone

▸ **clone**(): [`BEP129MsgOp`](BEP129MsgOp.md)

Create a deep copy.

#### Returns

[`BEP129MsgOp`](BEP129MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP129MsgOp`](BEP129MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP129MsgOp`](BEP129MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP129MsgOp`](BEP129MsgOp.md)

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

[`BEP129MsgOp`](BEP129MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP129MsgOp`](BEP129MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP129MsgOp`](BEP129MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP129MsgOp`](BEP129MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP129MsgOp`](BEP129MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP129MsgOp`](BEP129MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP129MsgOp`](BEP129MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP129MsgOp`](BEP129MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP129MsgOp`](BEP129MsgOp.md)\> |
| `b` | `undefined` \| [`BEP129MsgOp`](BEP129MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP129MsgOp`](BEP129MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2208](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2208)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP129MsgOp`](BEP129MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP129MsgOp`](BEP129MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2196](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2196)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP129MsgOp`](BEP129MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP129MsgOp`](BEP129MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2200](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2200)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP129MsgOp`](BEP129MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP129MsgOp`](BEP129MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2204](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2204)
