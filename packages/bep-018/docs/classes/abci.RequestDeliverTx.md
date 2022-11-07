[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestDeliverTx

# Class: RequestDeliverTx

[abci](../modules/abci.md).RequestDeliverTx

**`Generated`**

from message tendermint.abci.RequestDeliverTx

## Hierarchy

- [`Message`](Message.md)<[`RequestDeliverTx`](abci.RequestDeliverTx.md)\>

  ↳ **`RequestDeliverTx`**

## Table of contents

### Constructors

- [constructor](abci.RequestDeliverTx.md#constructor)

### Properties

- [tx](abci.RequestDeliverTx.md#tx)
- [fields](abci.RequestDeliverTx.md#fields)
- [runtime](abci.RequestDeliverTx.md#runtime)
- [typeName](abci.RequestDeliverTx.md#typename)

### Methods

- [clone](abci.RequestDeliverTx.md#clone)
- [equals](abci.RequestDeliverTx.md#equals)
- [fromBinary](abci.RequestDeliverTx.md#frombinary)
- [fromJson](abci.RequestDeliverTx.md#fromjson)
- [fromJsonString](abci.RequestDeliverTx.md#fromjsonstring)
- [getType](abci.RequestDeliverTx.md#gettype)
- [toBinary](abci.RequestDeliverTx.md#tobinary)
- [toJson](abci.RequestDeliverTx.md#tojson)
- [toJsonString](abci.RequestDeliverTx.md#tojsonstring)
- [equals](abci.RequestDeliverTx.md#equals-1)
- [fromBinary](abci.RequestDeliverTx.md#frombinary-1)
- [fromJson](abci.RequestDeliverTx.md#fromjson-1)
- [fromJsonString](abci.RequestDeliverTx.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestDeliverTx**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestDeliverTx`](abci.RequestDeliverTx.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:559](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L559)

## Properties

### tx

• **tx**: `Uint8Array`

**`Generated`**

from field: bytes tx = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:557](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L557)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:566](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L566)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:564](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L564)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestDeliverTx"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:565](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L565)

## Methods

### clone

▸ **clone**(): [`RequestDeliverTx`](abci.RequestDeliverTx.md)

Create a deep copy.

#### Returns

[`RequestDeliverTx`](abci.RequestDeliverTx.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestDeliverTx`](abci.RequestDeliverTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestDeliverTx`](abci.RequestDeliverTx.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestDeliverTx`](abci.RequestDeliverTx.md)

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

[`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestDeliverTx`](abci.RequestDeliverTx.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestDeliverTx`](abci.RequestDeliverTx.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestDeliverTx`](abci.RequestDeliverTx.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestDeliverTx`](abci.RequestDeliverTx.md)\>

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
| `a` | `undefined` \| [`RequestDeliverTx`](abci.RequestDeliverTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestDeliverTx`](abci.RequestDeliverTx.md)\> |
| `b` | `undefined` \| [`RequestDeliverTx`](abci.RequestDeliverTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestDeliverTx`](abci.RequestDeliverTx.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:582](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L582)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:570](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L570)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:574](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L574)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestDeliverTx`](abci.RequestDeliverTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:578](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L578)
