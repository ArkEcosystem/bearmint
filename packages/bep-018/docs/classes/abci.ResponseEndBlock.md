[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseEndBlock

# Class: ResponseEndBlock

[abci](../modules/abci.md).ResponseEndBlock

**`Generated`**

from message tendermint.abci.ResponseEndBlock

## Hierarchy

- [`Message`](Message.md)<[`ResponseEndBlock`](abci.ResponseEndBlock.md)\>

  ↳ **`ResponseEndBlock`**

## Table of contents

### Constructors

- [constructor](abci.ResponseEndBlock.md#constructor)

### Properties

- [consensusParamUpdates](abci.ResponseEndBlock.md#consensusparamupdates)
- [events](abci.ResponseEndBlock.md#events)
- [validatorUpdates](abci.ResponseEndBlock.md#validatorupdates)
- [fields](abci.ResponseEndBlock.md#fields)
- [runtime](abci.ResponseEndBlock.md#runtime)
- [typeName](abci.ResponseEndBlock.md#typename)

### Methods

- [clone](abci.ResponseEndBlock.md#clone)
- [equals](abci.ResponseEndBlock.md#equals)
- [fromBinary](abci.ResponseEndBlock.md#frombinary)
- [fromJson](abci.ResponseEndBlock.md#fromjson)
- [fromJsonString](abci.ResponseEndBlock.md#fromjsonstring)
- [getType](abci.ResponseEndBlock.md#gettype)
- [toBinary](abci.ResponseEndBlock.md#tobinary)
- [toJson](abci.ResponseEndBlock.md#tojson)
- [toJsonString](abci.ResponseEndBlock.md#tojsonstring)
- [equals](abci.ResponseEndBlock.md#equals-1)
- [fromBinary](abci.ResponseEndBlock.md#frombinary-1)
- [fromJson](abci.ResponseEndBlock.md#fromjson-1)
- [fromJsonString](abci.ResponseEndBlock.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseEndBlock**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseEndBlock`](abci.ResponseEndBlock.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1716](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1716)

## Properties

### consensusParamUpdates

• `Optional` **consensusParamUpdates**: [`ConsensusParams`](params.ConsensusParams.md)

**`Generated`**

from field: tendermint.types.ConsensusParams consensus_param_updates = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1709](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1709)

___

### events

• **events**: [`Event`](abci.Event.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.Event events = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1714](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1714)

___

### validatorUpdates

• **validatorUpdates**: [`ValidatorUpdate`](abci.ValidatorUpdate.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.ValidatorUpdate validator_updates = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1704](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1704)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1723](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1723)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1721](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1721)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseEndBlock"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1722](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1722)

## Methods

### clone

▸ **clone**(): [`ResponseEndBlock`](abci.ResponseEndBlock.md)

Create a deep copy.

#### Returns

[`ResponseEndBlock`](abci.ResponseEndBlock.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseEndBlock`](abci.ResponseEndBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseEndBlock`](abci.ResponseEndBlock.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseEndBlock`](abci.ResponseEndBlock.md)

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

[`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseEndBlock`](abci.ResponseEndBlock.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseEndBlock`](abci.ResponseEndBlock.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseEndBlock`](abci.ResponseEndBlock.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseEndBlock`](abci.ResponseEndBlock.md)\>

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
| `a` | `undefined` \| [`ResponseEndBlock`](abci.ResponseEndBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseEndBlock`](abci.ResponseEndBlock.md)\> |
| `b` | `undefined` \| [`ResponseEndBlock`](abci.ResponseEndBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseEndBlock`](abci.ResponseEndBlock.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1741](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1741)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1729](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1729)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1733](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1733)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseEndBlock`](abci.ResponseEndBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1737](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1737)
