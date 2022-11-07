[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ExtendedCommitInfo

# Class: ExtendedCommitInfo

[abci](../modules/abci.md).ExtendedCommitInfo

**`Generated`**

from message tendermint.abci.ExtendedCommitInfo

## Hierarchy

- [`Message`](Message.md)<[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)\>

  ↳ **`ExtendedCommitInfo`**

## Table of contents

### Constructors

- [constructor](abci.ExtendedCommitInfo.md#constructor)

### Properties

- [round](abci.ExtendedCommitInfo.md#round)
- [votes](abci.ExtendedCommitInfo.md#votes)
- [fields](abci.ExtendedCommitInfo.md#fields)
- [runtime](abci.ExtendedCommitInfo.md#runtime)
- [typeName](abci.ExtendedCommitInfo.md#typename)

### Methods

- [clone](abci.ExtendedCommitInfo.md#clone)
- [equals](abci.ExtendedCommitInfo.md#equals)
- [fromBinary](abci.ExtendedCommitInfo.md#frombinary)
- [fromJson](abci.ExtendedCommitInfo.md#fromjson)
- [fromJsonString](abci.ExtendedCommitInfo.md#fromjsonstring)
- [getType](abci.ExtendedCommitInfo.md#gettype)
- [toBinary](abci.ExtendedCommitInfo.md#tobinary)
- [toJson](abci.ExtendedCommitInfo.md#tojson)
- [toJsonString](abci.ExtendedCommitInfo.md#tojsonstring)
- [equals](abci.ExtendedCommitInfo.md#equals-1)
- [fromBinary](abci.ExtendedCommitInfo.md#frombinary-1)
- [fromJson](abci.ExtendedCommitInfo.md#fromjson-1)
- [fromJsonString](abci.ExtendedCommitInfo.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExtendedCommitInfo**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2229](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2229)

## Properties

### round

• **round**: `number` = `0`

The round at which the block proposer decided in the previous height.

**`Generated`**

from field: int32 round = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2219](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2219)

___

### votes

• **votes**: [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)[] = `[]`

List of validators' addresses in the last validator set with their voting
information, including vote extensions.

**`Generated`**

from field: repeated tendermint.abci.ExtendedVoteInfo votes = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2227](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2227)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2236](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2236)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2234](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2234)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ExtendedCommitInfo"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2235](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2235)

## Methods

### clone

▸ **clone**(): [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

Create a deep copy.

#### Returns

[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

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
| `other` | `undefined` \| ``null`` \| [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

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

[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)\>

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
| `a` | `undefined` \| [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)\> |
| `b` | `undefined` \| [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2253](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2253)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2241](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2241)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2245](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2245)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2249](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2249)
