[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ExtendedVoteInfo

# Class: ExtendedVoteInfo

[abci](../modules/abci.md).ExtendedVoteInfo

**`Generated`**

from message tendermint.abci.ExtendedVoteInfo

## Hierarchy

- [`Message`](Message.md)<[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)\>

  ↳ **`ExtendedVoteInfo`**

## Table of contents

### Constructors

- [constructor](abci.ExtendedVoteInfo.md#constructor)

### Properties

- [signedLastBlock](abci.ExtendedVoteInfo.md#signedlastblock)
- [validator](abci.ExtendedVoteInfo.md#validator)
- [voteExtension](abci.ExtendedVoteInfo.md#voteextension)
- [fields](abci.ExtendedVoteInfo.md#fields)
- [runtime](abci.ExtendedVoteInfo.md#runtime)
- [typeName](abci.ExtendedVoteInfo.md#typename)

### Methods

- [clone](abci.ExtendedVoteInfo.md#clone)
- [equals](abci.ExtendedVoteInfo.md#equals)
- [fromBinary](abci.ExtendedVoteInfo.md#frombinary)
- [fromJson](abci.ExtendedVoteInfo.md#fromjson)
- [fromJsonString](abci.ExtendedVoteInfo.md#fromjsonstring)
- [getType](abci.ExtendedVoteInfo.md#gettype)
- [toBinary](abci.ExtendedVoteInfo.md#tobinary)
- [toJson](abci.ExtendedVoteInfo.md#tojson)
- [toJsonString](abci.ExtendedVoteInfo.md#tojsonstring)
- [equals](abci.ExtendedVoteInfo.md#equals-1)
- [fromBinary](abci.ExtendedVoteInfo.md#frombinary-1)
- [fromJson](abci.ExtendedVoteInfo.md#fromjson-1)
- [fromJsonString](abci.ExtendedVoteInfo.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExtendedVoteInfo**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2579](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2579)

## Properties

### signedLastBlock

• **signedLastBlock**: `boolean` = `false`

**`Generated`**

from field: bool signed_last_block = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2570](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2570)

___

### validator

• `Optional` **validator**: [`Validator`](abci.Validator.md)

**`Generated`**

from field: tendermint.abci.Validator validator = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2565](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2565)

___

### voteExtension

• **voteExtension**: `Uint8Array`

Reserved for future use

**`Generated`**

from field: bytes vote_extension = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2577](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2577)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2586](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2586)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2584](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2584)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ExtendedVoteInfo"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2585](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2585)

## Methods

### clone

▸ **clone**(): [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

Create a deep copy.

#### Returns

[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

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
| `other` | `undefined` \| ``null`` \| [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

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

[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)\>

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
| `a` | `undefined` \| [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)\> |
| `b` | `undefined` \| [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2604](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2604)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2592](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2592)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2596](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2596)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2600](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2600)
