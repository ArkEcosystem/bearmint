[@bearmint/bep-018 - v0.0.0](../README.md) / BEP130MsgOp

# Class: BEP130MsgOp

NFT Collection Permission Revocation Tx

**`Generated`**

from message BEP130MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP130MsgOp`](BEP130MsgOp.md)\>

  ↳ **`BEP130MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP130MsgOp.md#constructor)

### Properties

- [hash](BEP130MsgOp.md#hash)
- [memo](BEP130MsgOp.md#memo)
- [permissions](BEP130MsgOp.md#permissions)
- [steward](BEP130MsgOp.md#steward)
- [fields](BEP130MsgOp.md#fields)
- [runtime](BEP130MsgOp.md#runtime)
- [typeName](BEP130MsgOp.md#typename)

### Methods

- [clone](BEP130MsgOp.md#clone)
- [equals](BEP130MsgOp.md#equals)
- [fromBinary](BEP130MsgOp.md#frombinary)
- [fromJson](BEP130MsgOp.md#fromjson)
- [fromJsonString](BEP130MsgOp.md#fromjsonstring)
- [getType](BEP130MsgOp.md#gettype)
- [toBinary](BEP130MsgOp.md#tobinary)
- [toJson](BEP130MsgOp.md#tojson)
- [toJsonString](BEP130MsgOp.md#tojsonstring)
- [equals](BEP130MsgOp.md#equals-1)
- [fromBinary](BEP130MsgOp.md#frombinary-1)
- [fromJson](BEP130MsgOp.md#fromjson-1)
- [fromJsonString](BEP130MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP130MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP130MsgOp`](BEP130MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2282](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2282)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2265](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2265)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2280](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2280)

___

### permissions

• **permissions**: `number`[] = `[]`

**`Generated`**

from field: repeated uint32 permissions = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2275](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2275)

___

### steward

• **steward**: `string` = `""`

**`Generated`**

from field: string steward = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2270](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2270)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2289](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2289)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2287](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2287)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP130MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2288](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2288)

## Methods

### clone

▸ **clone**(): [`BEP130MsgOp`](BEP130MsgOp.md)

Create a deep copy.

#### Returns

[`BEP130MsgOp`](BEP130MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP130MsgOp`](BEP130MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP130MsgOp`](BEP130MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP130MsgOp`](BEP130MsgOp.md)

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

[`BEP130MsgOp`](BEP130MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP130MsgOp`](BEP130MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP130MsgOp`](BEP130MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP130MsgOp`](BEP130MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP130MsgOp`](BEP130MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP130MsgOp`](BEP130MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP130MsgOp`](BEP130MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP130MsgOp`](BEP130MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP130MsgOp`](BEP130MsgOp.md)\> |
| `b` | `undefined` \| [`BEP130MsgOp`](BEP130MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP130MsgOp`](BEP130MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2308](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2308)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP130MsgOp`](BEP130MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP130MsgOp`](BEP130MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2296](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2296)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP130MsgOp`](BEP130MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP130MsgOp`](BEP130MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2300](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2300)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP130MsgOp`](BEP130MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP130MsgOp`](BEP130MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2304](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2304)
