[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / Header

# Class: Header

[types](../modules/types.md).Header

Header defines the structure of a Tendermint block header.

**`Generated`**

from message tendermint.types.Header

## Hierarchy

- [`Message`](Message.md)<[`Header`](types.Header.md)\>

  ↳ **`Header`**

## Table of contents

### Constructors

- [constructor](types.Header.md#constructor)

### Properties

- [appHash](types.Header.md#apphash)
- [chainId](types.Header.md#chainid)
- [consensusHash](types.Header.md#consensushash)
- [dataHash](types.Header.md#datahash)
- [evidenceHash](types.Header.md#evidencehash)
- [height](types.Header.md#height)
- [lastBlockId](types.Header.md#lastblockid)
- [lastCommitHash](types.Header.md#lastcommithash)
- [lastResultsHash](types.Header.md#lastresultshash)
- [nextValidatorsHash](types.Header.md#nextvalidatorshash)
- [proposerAddress](types.Header.md#proposeraddress)
- [time](types.Header.md#time)
- [validatorsHash](types.Header.md#validatorshash)
- [version](types.Header.md#version)
- [fields](types.Header.md#fields)
- [runtime](types.Header.md#runtime)
- [typeName](types.Header.md#typename)

### Methods

- [clone](types.Header.md#clone)
- [equals](types.Header.md#equals)
- [fromBinary](types.Header.md#frombinary)
- [fromJson](types.Header.md#fromjson)
- [fromJsonString](types.Header.md#fromjsonstring)
- [getType](types.Header.md#gettype)
- [toBinary](types.Header.md#tobinary)
- [toJson](types.Header.md#tojson)
- [toJsonString](types.Header.md#tojsonstring)
- [equals](types.Header.md#equals-1)
- [fromBinary](types.Header.md#frombinary-1)
- [fromJson](types.Header.md#fromjson-1)
- [fromJsonString](types.Header.md#fromjsonstring-1)

## Constructors

### constructor

• **new Header**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Header`](types.Header.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:327](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L327)

## Properties

### appHash

• **appHash**: `Uint8Array`

state after txs from the previous block

**`Generated`**

from field: bytes app_hash = 11;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:302](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L302)

___

### chainId

• **chainId**: `string` = `""`

**`Generated`**

from field: string chain_id = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:239](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L239)

___

### consensusHash

• **consensusHash**: `Uint8Array`

consensus params for current block

**`Generated`**

from field: bytes consensus_hash = 10;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:295](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L295)

___

### dataHash

• **dataHash**: `Uint8Array`

transactions

**`Generated`**

from field: bytes data_hash = 7;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:272](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L272)

___

### evidenceHash

• **evidenceHash**: `Uint8Array`

consensus info

evidence included in the block

**`Generated`**

from field: bytes evidence_hash = 13;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:318](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L318)

___

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:244](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L244)

___

### lastBlockId

• `Optional` **lastBlockId**: [`BlockID`](types.BlockID.md)

prev block info

**`Generated`**

from field: tendermint.types.BlockID last_block_id = 5;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:256](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L256)

___

### lastCommitHash

• **lastCommitHash**: `Uint8Array`

hashes of block data

commit from validators from the last block

**`Generated`**

from field: bytes last_commit_hash = 6;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:265](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L265)

___

### lastResultsHash

• **lastResultsHash**: `Uint8Array`

root hash of all results from the txs from the previous block

**`Generated`**

from field: bytes last_results_hash = 12;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:309](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L309)

___

### nextValidatorsHash

• **nextValidatorsHash**: `Uint8Array`

validators for the next block

**`Generated`**

from field: bytes next_validators_hash = 9;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:288](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L288)

___

### proposerAddress

• **proposerAddress**: `Uint8Array`

original proposer of the block

**`Generated`**

from field: bytes proposer_address = 14;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:325](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L325)

___

### time

• `Optional` **time**: `Timestamp`

**`Generated`**

from field: google.protobuf.Timestamp time = 4;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:249](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L249)

___

### validatorsHash

• **validatorsHash**: `Uint8Array`

hashes from the app output from the prev block

validators for the current block

**`Generated`**

from field: bytes validators_hash = 8;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:281](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L281)

___

### version

• `Optional` **version**: `Consensus`

basic block info

**`Generated`**

from field: tendermint.version.Consensus version = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:234](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L234)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:334](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L334)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:332](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L332)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.Header"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:333](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L333)

## Methods

### clone

▸ **clone**(): [`Header`](types.Header.md)

Create a deep copy.

#### Returns

[`Header`](types.Header.md)

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
| `other` | `undefined` \| ``null`` \| [`Header`](types.Header.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Header`](types.Header.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Header`](types.Header.md)

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

[`Header`](types.Header.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Header`](types.Header.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Header`](types.Header.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Header`](types.Header.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Header`](types.Header.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Header`](types.Header.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Header`](types.Header.md)\>

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
| `a` | `undefined` \| [`Header`](types.Header.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Header`](types.Header.md)\> |
| `b` | `undefined` \| [`Header`](types.Header.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Header`](types.Header.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:363](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L363)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Header`](types.Header.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Header`](types.Header.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:351](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L351)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Header`](types.Header.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Header`](types.Header.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:355](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L355)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Header`](types.Header.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Header`](types.Header.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:359](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L359)
