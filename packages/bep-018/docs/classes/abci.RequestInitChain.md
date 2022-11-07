[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestInitChain

# Class: RequestInitChain

[abci](../modules/abci.md).RequestInitChain

**`Generated`**

from message tendermint.abci.RequestInitChain

## Hierarchy

- [`Message`](Message.md)<[`RequestInitChain`](abci.RequestInitChain.md)\>

  ↳ **`RequestInitChain`**

## Table of contents

### Constructors

- [constructor](abci.RequestInitChain.md#constructor)

### Properties

- [appStateBytes](abci.RequestInitChain.md#appstatebytes)
- [chainId](abci.RequestInitChain.md#chainid)
- [consensusParams](abci.RequestInitChain.md#consensusparams)
- [initialHeight](abci.RequestInitChain.md#initialheight)
- [time](abci.RequestInitChain.md#time)
- [validators](abci.RequestInitChain.md#validators)
- [fields](abci.RequestInitChain.md#fields)
- [runtime](abci.RequestInitChain.md#runtime)
- [typeName](abci.RequestInitChain.md#typename)

### Methods

- [clone](abci.RequestInitChain.md#clone)
- [equals](abci.RequestInitChain.md#equals)
- [fromBinary](abci.RequestInitChain.md#frombinary)
- [fromJson](abci.RequestInitChain.md#fromjson)
- [fromJsonString](abci.RequestInitChain.md#fromjsonstring)
- [getType](abci.RequestInitChain.md#gettype)
- [toBinary](abci.RequestInitChain.md#tobinary)
- [toJson](abci.RequestInitChain.md#tojson)
- [toJsonString](abci.RequestInitChain.md#tojsonstring)
- [equals](abci.RequestInitChain.md#equals-1)
- [fromBinary](abci.RequestInitChain.md#frombinary-1)
- [fromJson](abci.RequestInitChain.md#fromjson-1)
- [fromJsonString](abci.RequestInitChain.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestInitChain**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestInitChain`](abci.RequestInitChain.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:364](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L364)

## Properties

### appStateBytes

• **appStateBytes**: `Uint8Array`

**`Generated`**

from field: bytes app_state_bytes = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:357](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L357)

___

### chainId

• **chainId**: `string` = `""`

**`Generated`**

from field: string chain_id = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:342](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L342)

___

### consensusParams

• `Optional` **consensusParams**: [`ConsensusParams`](params.ConsensusParams.md)

**`Generated`**

from field: tendermint.types.ConsensusParams consensus_params = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:347](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L347)

___

### initialHeight

• **initialHeight**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 initial_height = 6;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:362](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L362)

___

### time

• `Optional` **time**: `Timestamp`

**`Generated`**

from field: google.protobuf.Timestamp time = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:337](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L337)

___

### validators

• **validators**: [`ValidatorUpdate`](abci.ValidatorUpdate.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.ValidatorUpdate validators = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:352](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L352)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:371](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L371)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:369](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L369)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestInitChain"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:370](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L370)

## Methods

### clone

▸ **clone**(): [`RequestInitChain`](abci.RequestInitChain.md)

Create a deep copy.

#### Returns

[`RequestInitChain`](abci.RequestInitChain.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestInitChain`](abci.RequestInitChain.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestInitChain`](abci.RequestInitChain.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestInitChain`](abci.RequestInitChain.md)

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

[`RequestInitChain`](abci.RequestInitChain.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestInitChain`](abci.RequestInitChain.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestInitChain`](abci.RequestInitChain.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestInitChain`](abci.RequestInitChain.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestInitChain`](abci.RequestInitChain.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestInitChain`](abci.RequestInitChain.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestInitChain`](abci.RequestInitChain.md)\>

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
| `a` | `undefined` \| [`RequestInitChain`](abci.RequestInitChain.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestInitChain`](abci.RequestInitChain.md)\> |
| `b` | `undefined` \| [`RequestInitChain`](abci.RequestInitChain.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestInitChain`](abci.RequestInitChain.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:392](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L392)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestInitChain`](abci.RequestInitChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestInitChain`](abci.RequestInitChain.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:380](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L380)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestInitChain`](abci.RequestInitChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestInitChain`](abci.RequestInitChain.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:384](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L384)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestInitChain`](abci.RequestInitChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestInitChain`](abci.RequestInitChain.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:388](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L388)
