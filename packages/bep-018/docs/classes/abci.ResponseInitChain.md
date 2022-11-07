[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseInitChain

# Class: ResponseInitChain

[abci](../modules/abci.md).ResponseInitChain

**`Generated`**

from message tendermint.abci.ResponseInitChain

## Hierarchy

- [`Message`](Message.md)<[`ResponseInitChain`](abci.ResponseInitChain.md)\>

  ↳ **`ResponseInitChain`**

## Table of contents

### Constructors

- [constructor](abci.ResponseInitChain.md#constructor)

### Properties

- [appHash](abci.ResponseInitChain.md#apphash)
- [consensusParams](abci.ResponseInitChain.md#consensusparams)
- [validators](abci.ResponseInitChain.md#validators)
- [fields](abci.ResponseInitChain.md#fields)
- [runtime](abci.ResponseInitChain.md#runtime)
- [typeName](abci.ResponseInitChain.md#typename)

### Methods

- [clone](abci.ResponseInitChain.md#clone)
- [equals](abci.ResponseInitChain.md#equals)
- [fromBinary](abci.ResponseInitChain.md#frombinary)
- [fromJson](abci.ResponseInitChain.md#fromjson)
- [fromJsonString](abci.ResponseInitChain.md#fromjsonstring)
- [getType](abci.ResponseInitChain.md#gettype)
- [toBinary](abci.ResponseInitChain.md#tobinary)
- [toJson](abci.ResponseInitChain.md#tojson)
- [toJsonString](abci.ResponseInitChain.md#tojsonstring)
- [equals](abci.ResponseInitChain.md#equals-1)
- [fromBinary](abci.ResponseInitChain.md#frombinary-1)
- [fromJson](abci.ResponseInitChain.md#fromjson-1)
- [fromJsonString](abci.ResponseInitChain.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseInitChain**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseInitChain`](abci.ResponseInitChain.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1350](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1350)

## Properties

### appHash

• **appHash**: `Uint8Array`

**`Generated`**

from field: bytes app_hash = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1348](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1348)

___

### consensusParams

• `Optional` **consensusParams**: [`ConsensusParams`](params.ConsensusParams.md)

**`Generated`**

from field: tendermint.types.ConsensusParams consensus_params = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1338](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1338)

___

### validators

• **validators**: [`ValidatorUpdate`](abci.ValidatorUpdate.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.ValidatorUpdate validators = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1343](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1343)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1357](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1357)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1355](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1355)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseInitChain"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1356](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1356)

## Methods

### clone

▸ **clone**(): [`ResponseInitChain`](abci.ResponseInitChain.md)

Create a deep copy.

#### Returns

[`ResponseInitChain`](abci.ResponseInitChain.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseInitChain`](abci.ResponseInitChain.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseInitChain`](abci.ResponseInitChain.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseInitChain`](abci.ResponseInitChain.md)

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

[`ResponseInitChain`](abci.ResponseInitChain.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseInitChain`](abci.ResponseInitChain.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseInitChain`](abci.ResponseInitChain.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseInitChain`](abci.ResponseInitChain.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseInitChain`](abci.ResponseInitChain.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseInitChain`](abci.ResponseInitChain.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseInitChain`](abci.ResponseInitChain.md)\>

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
| `a` | `undefined` \| [`ResponseInitChain`](abci.ResponseInitChain.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseInitChain`](abci.ResponseInitChain.md)\> |
| `b` | `undefined` \| [`ResponseInitChain`](abci.ResponseInitChain.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseInitChain`](abci.ResponseInitChain.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1375](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1375)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseInitChain`](abci.ResponseInitChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseInitChain`](abci.ResponseInitChain.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1363](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1363)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseInitChain`](abci.ResponseInitChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseInitChain`](abci.ResponseInitChain.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1367](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1367)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseInitChain`](abci.ResponseInitChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseInitChain`](abci.ResponseInitChain.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1371](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1371)
