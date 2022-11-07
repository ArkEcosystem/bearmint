[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponsePrepareProposal

# Class: ResponsePrepareProposal

[abci](../modules/abci.md).ResponsePrepareProposal

**`Generated`**

from message tendermint.abci.ResponsePrepareProposal

## Hierarchy

- [`Message`](Message.md)<[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)\>

  ↳ **`ResponsePrepareProposal`**

## Table of contents

### Constructors

- [constructor](abci.ResponsePrepareProposal.md#constructor)

### Properties

- [txs](abci.ResponsePrepareProposal.md#txs)
- [fields](abci.ResponsePrepareProposal.md#fields)
- [runtime](abci.ResponsePrepareProposal.md#runtime)
- [typeName](abci.ResponsePrepareProposal.md#typename)

### Methods

- [clone](abci.ResponsePrepareProposal.md#clone)
- [equals](abci.ResponsePrepareProposal.md#equals)
- [fromBinary](abci.ResponsePrepareProposal.md#frombinary)
- [fromJson](abci.ResponsePrepareProposal.md#fromjson)
- [fromJsonString](abci.ResponsePrepareProposal.md#fromjsonstring)
- [getType](abci.ResponsePrepareProposal.md#gettype)
- [toBinary](abci.ResponsePrepareProposal.md#tobinary)
- [toJson](abci.ResponsePrepareProposal.md#tojson)
- [toJsonString](abci.ResponsePrepareProposal.md#tojsonstring)
- [equals](abci.ResponsePrepareProposal.md#equals-1)
- [fromBinary](abci.ResponsePrepareProposal.md#frombinary-1)
- [fromJson](abci.ResponsePrepareProposal.md#fromjson-1)
- [fromJsonString](abci.ResponsePrepareProposal.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponsePrepareProposal**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2076](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2076)

## Properties

### txs

• **txs**: `Uint8Array`[] = `[]`

**`Generated`**

from field: repeated bytes txs = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2074](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2074)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2083](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2083)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2081](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2081)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponsePrepareProposal"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2082](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2082)

## Methods

### clone

▸ **clone**(): [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

Create a deep copy.

#### Returns

[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

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

[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)\>

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
| `a` | `undefined` \| [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)\> |
| `b` | `undefined` \| [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2099](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2099)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2087](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2087)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2091](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2091)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2095](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2095)
