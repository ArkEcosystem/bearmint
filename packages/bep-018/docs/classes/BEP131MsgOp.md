[@bearmint/bep-018 - v0.0.0](../README.md) / BEP131MsgOp

# Class: BEP131MsgOp

NFT Mint Tx

**`Generated`**

from message BEP131MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP131MsgOp`](BEP131MsgOp.md)\>

  ↳ **`BEP131MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP131MsgOp.md#constructor)

### Properties

- [hash](BEP131MsgOp.md#hash)
- [memo](BEP131MsgOp.md#memo)
- [recipient](BEP131MsgOp.md#recipient)
- [fields](BEP131MsgOp.md#fields)
- [runtime](BEP131MsgOp.md#runtime)
- [typeName](BEP131MsgOp.md#typename)

### Methods

- [clone](BEP131MsgOp.md#clone)
- [equals](BEP131MsgOp.md#equals)
- [fromBinary](BEP131MsgOp.md#frombinary)
- [fromJson](BEP131MsgOp.md#fromjson)
- [fromJsonString](BEP131MsgOp.md#fromjsonstring)
- [getType](BEP131MsgOp.md#gettype)
- [toBinary](BEP131MsgOp.md#tobinary)
- [toJson](BEP131MsgOp.md#tojson)
- [toJsonString](BEP131MsgOp.md#tojsonstring)
- [equals](BEP131MsgOp.md#equals-1)
- [fromBinary](BEP131MsgOp.md#frombinary-1)
- [fromJson](BEP131MsgOp.md#fromjson-1)
- [fromJsonString](BEP131MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP131MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP131MsgOp`](BEP131MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2377](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2377)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2365](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2365)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2375](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2375)

___

### recipient

• **recipient**: `string` = `""`

**`Generated`**

from field: string recipient = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2370](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2370)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2384](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2384)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2382](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2382)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP131MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2383](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2383)

## Methods

### clone

▸ **clone**(): [`BEP131MsgOp`](BEP131MsgOp.md)

Create a deep copy.

#### Returns

[`BEP131MsgOp`](BEP131MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP131MsgOp`](BEP131MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131MsgOp`](BEP131MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP131MsgOp`](BEP131MsgOp.md)

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

[`BEP131MsgOp`](BEP131MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP131MsgOp`](BEP131MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131MsgOp`](BEP131MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP131MsgOp`](BEP131MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131MsgOp`](BEP131MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP131MsgOp`](BEP131MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP131MsgOp`](BEP131MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP131MsgOp`](BEP131MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131MsgOp`](BEP131MsgOp.md)\> |
| `b` | `undefined` \| [`BEP131MsgOp`](BEP131MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131MsgOp`](BEP131MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2402](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2402)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP131MsgOp`](BEP131MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP131MsgOp`](BEP131MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2390](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2390)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP131MsgOp`](BEP131MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131MsgOp`](BEP131MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2394](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2394)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP131MsgOp`](BEP131MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131MsgOp`](BEP131MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2398](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2398)
