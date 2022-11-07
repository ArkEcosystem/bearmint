[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestPrepareProposal

# Class: RequestPrepareProposal

[abci](../modules/abci.md).RequestPrepareProposal

**`Generated`**

from message tendermint.abci.RequestPrepareProposal

## Hierarchy

- [`Message`](Message.md)<[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)\>

  ↳ **`RequestPrepareProposal`**

## Table of contents

### Constructors

- [constructor](abci.RequestPrepareProposal.md#constructor)

### Properties

- [height](abci.RequestPrepareProposal.md#height)
- [localLastCommit](abci.RequestPrepareProposal.md#locallastcommit)
- [maxTxBytes](abci.RequestPrepareProposal.md#maxtxbytes)
- [misbehavior](abci.RequestPrepareProposal.md#misbehavior)
- [nextValidatorsHash](abci.RequestPrepareProposal.md#nextvalidatorshash)
- [proposerAddress](abci.RequestPrepareProposal.md#proposeraddress)
- [time](abci.RequestPrepareProposal.md#time)
- [txs](abci.RequestPrepareProposal.md#txs)
- [fields](abci.RequestPrepareProposal.md#fields)
- [runtime](abci.RequestPrepareProposal.md#runtime)
- [typeName](abci.RequestPrepareProposal.md#typename)

### Methods

- [clone](abci.RequestPrepareProposal.md#clone)
- [equals](abci.RequestPrepareProposal.md#equals)
- [fromBinary](abci.RequestPrepareProposal.md#frombinary)
- [fromJson](abci.RequestPrepareProposal.md#fromjson)
- [fromJsonString](abci.RequestPrepareProposal.md#fromjsonstring)
- [getType](abci.RequestPrepareProposal.md#gettype)
- [toBinary](abci.RequestPrepareProposal.md#tobinary)
- [toJson](abci.RequestPrepareProposal.md#tojson)
- [toJsonString](abci.RequestPrepareProposal.md#tojsonstring)
- [equals](abci.RequestPrepareProposal.md#equals-1)
- [fromBinary](abci.RequestPrepareProposal.md#frombinary-1)
- [fromJson](abci.RequestPrepareProposal.md#fromjson-1)
- [fromJsonString](abci.RequestPrepareProposal.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestPrepareProposal**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:890](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L890)

## Properties

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:871](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L871)

___

### localLastCommit

• `Optional` **localLastCommit**: [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

**`Generated`**

from field: tendermint.abci.ExtendedCommitInfo local_last_commit = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:861](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L861)

___

### maxTxBytes

• **maxTxBytes**: `bigint` = `protoInt64.zero`

the modified transactions cannot exceed this size.

**`Generated`**

from field: int64 max_tx_bytes = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:848](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L848)

___

### misbehavior

• **misbehavior**: [`Misbehavior`](abci.Misbehavior.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.Misbehavior misbehavior = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:866](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L866)

___

### nextValidatorsHash

• **nextValidatorsHash**: `Uint8Array`

**`Generated`**

from field: bytes next_validators_hash = 7;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:881](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L881)

___

### proposerAddress

• **proposerAddress**: `Uint8Array`

address of the public key of the validator proposing the block.

**`Generated`**

from field: bytes proposer_address = 8;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:888](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L888)

___

### time

• `Optional` **time**: `Timestamp`

**`Generated`**

from field: google.protobuf.Timestamp time = 6;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:876](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L876)

___

### txs

• **txs**: `Uint8Array`[] = `[]`

txs is an array of transactions that will be included in a block,
sent to the app for possible modifications.

**`Generated`**

from field: repeated bytes txs = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:856](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L856)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:897](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L897)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:895](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L895)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestPrepareProposal"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:896](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L896)

## Methods

### clone

▸ **clone**(): [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

Create a deep copy.

#### Returns

[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestPrepareProposal`](abci.RequestPrepareProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

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

[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)\>

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
| `a` | `undefined` \| [`RequestPrepareProposal`](abci.RequestPrepareProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)\> |
| `b` | `undefined` \| [`RequestPrepareProposal`](abci.RequestPrepareProposal.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:920](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L920)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:908](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L908)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:912](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L912)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:916](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L916)
