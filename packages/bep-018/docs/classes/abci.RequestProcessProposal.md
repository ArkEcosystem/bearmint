[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestProcessProposal

# Class: RequestProcessProposal

[abci](../modules/abci.md).RequestProcessProposal

**`Generated`**

from message tendermint.abci.RequestProcessProposal

## Hierarchy

- [`Message`](Message.md)<[`RequestProcessProposal`](abci.RequestProcessProposal.md)\>

  ↳ **`RequestProcessProposal`**

## Table of contents

### Constructors

- [constructor](abci.RequestProcessProposal.md#constructor)

### Properties

- [hash](abci.RequestProcessProposal.md#hash)
- [height](abci.RequestProcessProposal.md#height)
- [misbehavior](abci.RequestProcessProposal.md#misbehavior)
- [nextValidatorsHash](abci.RequestProcessProposal.md#nextvalidatorshash)
- [proposedLastCommit](abci.RequestProcessProposal.md#proposedlastcommit)
- [proposerAddress](abci.RequestProcessProposal.md#proposeraddress)
- [time](abci.RequestProcessProposal.md#time)
- [txs](abci.RequestProcessProposal.md#txs)
- [fields](abci.RequestProcessProposal.md#fields)
- [runtime](abci.RequestProcessProposal.md#runtime)
- [typeName](abci.RequestProcessProposal.md#typename)

### Methods

- [clone](abci.RequestProcessProposal.md#clone)
- [equals](abci.RequestProcessProposal.md#equals)
- [fromBinary](abci.RequestProcessProposal.md#frombinary)
- [fromJson](abci.RequestProcessProposal.md#fromjson)
- [fromJsonString](abci.RequestProcessProposal.md#fromjsonstring)
- [getType](abci.RequestProcessProposal.md#gettype)
- [toBinary](abci.RequestProcessProposal.md#tobinary)
- [toJson](abci.RequestProcessProposal.md#tojson)
- [toJsonString](abci.RequestProcessProposal.md#tojsonstring)
- [equals](abci.RequestProcessProposal.md#equals-1)
- [fromBinary](abci.RequestProcessProposal.md#frombinary-1)
- [fromJson](abci.RequestProcessProposal.md#fromjson-1)
- [fromJsonString](abci.RequestProcessProposal.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestProcessProposal**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestProcessProposal`](abci.RequestProcessProposal.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:973](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L973)

## Properties

### hash

• **hash**: `Uint8Array`

hash is the merkle root hash of the fields of the proposed block.

**`Generated`**

from field: bytes hash = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:949](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L949)

___

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:954](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L954)

___

### misbehavior

• **misbehavior**: [`Misbehavior`](abci.Misbehavior.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.Misbehavior misbehavior = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:942](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L942)

___

### nextValidatorsHash

• **nextValidatorsHash**: `Uint8Array`

**`Generated`**

from field: bytes next_validators_hash = 7;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:964](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L964)

___

### proposedLastCommit

• `Optional` **proposedLastCommit**: [`CommitInfo`](abci.CommitInfo.md)

**`Generated`**

from field: tendermint.abci.CommitInfo proposed_last_commit = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:937](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L937)

___

### proposerAddress

• **proposerAddress**: `Uint8Array`

address of the public key of the original proposer of the block.

**`Generated`**

from field: bytes proposer_address = 8;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:971](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L971)

___

### time

• `Optional` **time**: `Timestamp`

**`Generated`**

from field: google.protobuf.Timestamp time = 6;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:959](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L959)

___

### txs

• **txs**: `Uint8Array`[] = `[]`

**`Generated`**

from field: repeated bytes txs = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:932](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L932)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:980](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L980)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:978](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L978)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestProcessProposal"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:979](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L979)

## Methods

### clone

▸ **clone**(): [`RequestProcessProposal`](abci.RequestProcessProposal.md)

Create a deep copy.

#### Returns

[`RequestProcessProposal`](abci.RequestProcessProposal.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestProcessProposal`](abci.RequestProcessProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestProcessProposal`](abci.RequestProcessProposal.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestProcessProposal`](abci.RequestProcessProposal.md)

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

[`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestProcessProposal`](abci.RequestProcessProposal.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestProcessProposal`](abci.RequestProcessProposal.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestProcessProposal`](abci.RequestProcessProposal.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestProcessProposal`](abci.RequestProcessProposal.md)\>

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
| `a` | `undefined` \| [`RequestProcessProposal`](abci.RequestProcessProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestProcessProposal`](abci.RequestProcessProposal.md)\> |
| `b` | `undefined` \| [`RequestProcessProposal`](abci.RequestProcessProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestProcessProposal`](abci.RequestProcessProposal.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1003](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1003)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:991](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L991)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:995](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L995)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestProcessProposal`](abci.RequestProcessProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:999](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L999)
