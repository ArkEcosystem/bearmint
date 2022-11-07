[@bearmint/bep-018 - v0.0.0](../README.md) / [params](../modules/params.md) / ConsensusParams

# Class: ConsensusParams

[params](../modules/params.md).ConsensusParams

ConsensusParams contains consensus critical parameters that determine the
validity of blocks.

**`Generated`**

from message tendermint.types.ConsensusParams

## Hierarchy

- [`Message`](Message.md)<[`ConsensusParams`](params.ConsensusParams.md)\>

  ↳ **`ConsensusParams`**

## Table of contents

### Constructors

- [constructor](params.ConsensusParams.md#constructor)

### Properties

- [block](params.ConsensusParams.md#block)
- [evidence](params.ConsensusParams.md#evidence)
- [validator](params.ConsensusParams.md#validator)
- [version](params.ConsensusParams.md#version)
- [fields](params.ConsensusParams.md#fields)
- [runtime](params.ConsensusParams.md#runtime)
- [typeName](params.ConsensusParams.md#typename)

### Methods

- [clone](params.ConsensusParams.md#clone)
- [equals](params.ConsensusParams.md#equals)
- [fromBinary](params.ConsensusParams.md#frombinary)
- [fromJson](params.ConsensusParams.md#fromjson)
- [fromJsonString](params.ConsensusParams.md#fromjsonstring)
- [getType](params.ConsensusParams.md#gettype)
- [toBinary](params.ConsensusParams.md#tobinary)
- [toJson](params.ConsensusParams.md#tojson)
- [toJsonString](params.ConsensusParams.md#tojsonstring)
- [equals](params.ConsensusParams.md#equals-1)
- [fromBinary](params.ConsensusParams.md#frombinary-1)
- [fromJson](params.ConsensusParams.md#fromjson-1)
- [fromJsonString](params.ConsensusParams.md#fromjsonstring-1)

## Constructors

### constructor

• **new ConsensusParams**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ConsensusParams`](params.ConsensusParams.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L36)

## Properties

### block

• `Optional` **block**: [`BlockParams`](params.BlockParams.md)

**`Generated`**

from field: tendermint.types.BlockParams block = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L19)

___

### evidence

• `Optional` **evidence**: [`EvidenceParams`](params.EvidenceParams.md)

**`Generated`**

from field: tendermint.types.EvidenceParams evidence = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L24)

___

### validator

• `Optional` **validator**: [`ValidatorParams`](params.ValidatorParams.md)

**`Generated`**

from field: tendermint.types.ValidatorParams validator = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L29)

___

### version

• `Optional` **version**: [`VersionParams`](params.VersionParams.md)

**`Generated`**

from field: tendermint.types.VersionParams version = 4;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L34)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L43)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L41)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.ConsensusParams"``

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L42)

## Methods

### clone

▸ **clone**(): [`ConsensusParams`](params.ConsensusParams.md)

Create a deep copy.

#### Returns

[`ConsensusParams`](params.ConsensusParams.md)

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
| `other` | `undefined` \| ``null`` \| [`ConsensusParams`](params.ConsensusParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ConsensusParams`](params.ConsensusParams.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ConsensusParams`](params.ConsensusParams.md)

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

[`ConsensusParams`](params.ConsensusParams.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ConsensusParams`](params.ConsensusParams.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ConsensusParams`](params.ConsensusParams.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ConsensusParams`](params.ConsensusParams.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ConsensusParams`](params.ConsensusParams.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ConsensusParams`](params.ConsensusParams.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ConsensusParams`](params.ConsensusParams.md)\>

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
| `a` | `undefined` \| [`ConsensusParams`](params.ConsensusParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ConsensusParams`](params.ConsensusParams.md)\> |
| `b` | `undefined` \| [`ConsensusParams`](params.ConsensusParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ConsensusParams`](params.ConsensusParams.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:62](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L62)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ConsensusParams`](params.ConsensusParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ConsensusParams`](params.ConsensusParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L50)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ConsensusParams`](params.ConsensusParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ConsensusParams`](params.ConsensusParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:54](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L54)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ConsensusParams`](params.ConsensusParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ConsensusParams`](params.ConsensusParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:58](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L58)
