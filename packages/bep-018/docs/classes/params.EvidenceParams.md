[@bearmint/bep-018 - v0.0.0](../README.md) / [params](../modules/params.md) / EvidenceParams

# Class: EvidenceParams

[params](../modules/params.md).EvidenceParams

EvidenceParams determine how we handle evidence of malfeasance.

**`Generated`**

from message tendermint.types.EvidenceParams

## Hierarchy

- [`Message`](Message.md)<[`EvidenceParams`](params.EvidenceParams.md)\>

  ↳ **`EvidenceParams`**

## Table of contents

### Constructors

- [constructor](params.EvidenceParams.md#constructor)

### Properties

- [maxAgeDuration](params.EvidenceParams.md#maxageduration)
- [maxAgeNumBlocks](params.EvidenceParams.md#maxagenumblocks)
- [maxBytes](params.EvidenceParams.md#maxbytes)
- [fields](params.EvidenceParams.md#fields)
- [runtime](params.EvidenceParams.md#runtime)
- [typeName](params.EvidenceParams.md#typename)

### Methods

- [clone](params.EvidenceParams.md#clone)
- [equals](params.EvidenceParams.md#equals)
- [fromBinary](params.EvidenceParams.md#frombinary)
- [fromJson](params.EvidenceParams.md#fromjson)
- [fromJsonString](params.EvidenceParams.md#fromjsonstring)
- [getType](params.EvidenceParams.md#gettype)
- [toBinary](params.EvidenceParams.md#tobinary)
- [toJson](params.EvidenceParams.md#tojson)
- [toJsonString](params.EvidenceParams.md#tojsonstring)
- [equals](params.EvidenceParams.md#equals-1)
- [fromBinary](params.EvidenceParams.md#frombinary-1)
- [fromJson](params.EvidenceParams.md#fromjson-1)
- [fromJsonString](params.EvidenceParams.md#fromjsonstring-1)

## Constructors

### constructor

• **new EvidenceParams**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`EvidenceParams`](params.EvidenceParams.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:154](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L154)

## Properties

### maxAgeDuration

• `Optional` **maxAgeDuration**: `Duration`

Max age of evidence, in time.

It should correspond with an app's "unbonding period" or other similar
mechanism for handling [Nothing-At-Stake
attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).

**`Generated`**

from field: google.protobuf.Duration max_age_duration = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:143](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L143)

___

### maxAgeNumBlocks

• **maxAgeNumBlocks**: `bigint` = `protoInt64.zero`

Max age of evidence, in blocks.

The basic formula for calculating this is: MaxAgeDuration / {average block
time}.

**`Generated`**

from field: int64 max_age_num_blocks = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:132](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L132)

___

### maxBytes

• **maxBytes**: `bigint` = `protoInt64.zero`

This sets the maximum size of total evidence in bytes that can be committed in a single block.
and should fall comfortably under the max block bytes.
Default is 1048576 or 1MB

**`Generated`**

from field: int64 max_bytes = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:152](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L152)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:161](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L161)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:159](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L159)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.EvidenceParams"``

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:160](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L160)

## Methods

### clone

▸ **clone**(): [`EvidenceParams`](params.EvidenceParams.md)

Create a deep copy.

#### Returns

[`EvidenceParams`](params.EvidenceParams.md)

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
| `other` | `undefined` \| ``null`` \| [`EvidenceParams`](params.EvidenceParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`EvidenceParams`](params.EvidenceParams.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EvidenceParams`](params.EvidenceParams.md)

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

[`EvidenceParams`](params.EvidenceParams.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EvidenceParams`](params.EvidenceParams.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EvidenceParams`](params.EvidenceParams.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EvidenceParams`](params.EvidenceParams.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EvidenceParams`](params.EvidenceParams.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EvidenceParams`](params.EvidenceParams.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EvidenceParams`](params.EvidenceParams.md)\>

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
| `a` | `undefined` \| [`EvidenceParams`](params.EvidenceParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`EvidenceParams`](params.EvidenceParams.md)\> |
| `b` | `undefined` \| [`EvidenceParams`](params.EvidenceParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`EvidenceParams`](params.EvidenceParams.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:179](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L179)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EvidenceParams`](params.EvidenceParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EvidenceParams`](params.EvidenceParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:167](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L167)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EvidenceParams`](params.EvidenceParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EvidenceParams`](params.EvidenceParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:171](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L171)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EvidenceParams`](params.EvidenceParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EvidenceParams`](params.EvidenceParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:175](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L175)
