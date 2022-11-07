[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseProcessProposal

# Class: ResponseProcessProposal

[abci](../modules/abci.md).ResponseProcessProposal

**`Generated`**

from message tendermint.abci.ResponseProcessProposal

## Hierarchy

- [`Message`](Message.md)<[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)\>

  ↳ **`ResponseProcessProposal`**

## Table of contents

### Constructors

- [constructor](abci.ResponseProcessProposal.md#constructor)

### Properties

- [status](abci.ResponseProcessProposal.md#status)
- [fields](abci.ResponseProcessProposal.md#fields)
- [runtime](abci.ResponseProcessProposal.md#runtime)
- [typeName](abci.ResponseProcessProposal.md#typename)

### Methods

- [clone](abci.ResponseProcessProposal.md#clone)
- [equals](abci.ResponseProcessProposal.md#equals)
- [fromBinary](abci.ResponseProcessProposal.md#frombinary)
- [fromJson](abci.ResponseProcessProposal.md#fromjson)
- [fromJsonString](abci.ResponseProcessProposal.md#fromjsonstring)
- [getType](abci.ResponseProcessProposal.md#gettype)
- [toBinary](abci.ResponseProcessProposal.md#tobinary)
- [toJson](abci.ResponseProcessProposal.md#tojson)
- [toJsonString](abci.ResponseProcessProposal.md#tojsonstring)
- [equals](abci.ResponseProcessProposal.md#equals-1)
- [fromBinary](abci.ResponseProcessProposal.md#frombinary-1)
- [fromJson](abci.ResponseProcessProposal.md#fromjson-1)
- [fromJsonString](abci.ResponseProcessProposal.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseProcessProposal**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2113](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2113)

## Properties

### status

• **status**: [`ResponseProcessProposal_ProposalStatus`](../enums/abci.ResponseProcessProposal_ProposalStatus.md) = `ResponseProcessProposal_ProposalStatus.UNKNOWN`

**`Generated`**

from field: tendermint.abci.ResponseProcessProposal.ProposalStatus status = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2111](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2111)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2120](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2120)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2118](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2118)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseProcessProposal"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2119](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2119)

## Methods

### clone

▸ **clone**(): [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

Create a deep copy.

#### Returns

[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseProcessProposal`](abci.ResponseProcessProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

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

[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)\>

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
| `a` | `undefined` \| [`ResponseProcessProposal`](abci.ResponseProcessProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)\> |
| `b` | `undefined` \| [`ResponseProcessProposal`](abci.ResponseProcessProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2136](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2136)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2124](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2124)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2128](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2128)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2132](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2132)
