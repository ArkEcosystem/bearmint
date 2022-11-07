[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestBeginBlock

# Class: RequestBeginBlock

[abci](../modules/abci.md).RequestBeginBlock

**`Generated`**

from message tendermint.abci.RequestBeginBlock

## Hierarchy

- [`Message`](Message.md)<[`RequestBeginBlock`](abci.RequestBeginBlock.md)\>

  ↳ **`RequestBeginBlock`**

## Table of contents

### Constructors

- [constructor](abci.RequestBeginBlock.md#constructor)

### Properties

- [byzantineValidators](abci.RequestBeginBlock.md#byzantinevalidators)
- [hash](abci.RequestBeginBlock.md#hash)
- [header](abci.RequestBeginBlock.md#header)
- [lastCommitInfo](abci.RequestBeginBlock.md#lastcommitinfo)
- [fields](abci.RequestBeginBlock.md#fields)
- [runtime](abci.RequestBeginBlock.md#runtime)
- [typeName](abci.RequestBeginBlock.md#typename)

### Methods

- [clone](abci.RequestBeginBlock.md#clone)
- [equals](abci.RequestBeginBlock.md#equals)
- [fromBinary](abci.RequestBeginBlock.md#frombinary)
- [fromJson](abci.RequestBeginBlock.md#fromjson)
- [fromJsonString](abci.RequestBeginBlock.md#fromjsonstring)
- [getType](abci.RequestBeginBlock.md#gettype)
- [toBinary](abci.RequestBeginBlock.md#tobinary)
- [toJson](abci.RequestBeginBlock.md#tojson)
- [toJsonString](abci.RequestBeginBlock.md#tojsonstring)
- [equals](abci.RequestBeginBlock.md#equals-1)
- [fromBinary](abci.RequestBeginBlock.md#frombinary-1)
- [fromJson](abci.RequestBeginBlock.md#fromjson-1)
- [fromJsonString](abci.RequestBeginBlock.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestBeginBlock**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestBeginBlock`](abci.RequestBeginBlock.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:476](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L476)

## Properties

### byzantineValidators

• **byzantineValidators**: [`Misbehavior`](abci.Misbehavior.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.Misbehavior byzantine_validators = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:474](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L474)

___

### hash

• **hash**: `Uint8Array`

**`Generated`**

from field: bytes hash = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:459](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L459)

___

### header

• `Optional` **header**: [`Header`](types.Header.md)

**`Generated`**

from field: tendermint.types.Header header = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:464](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L464)

___

### lastCommitInfo

• `Optional` **lastCommitInfo**: [`CommitInfo`](abci.CommitInfo.md)

**`Generated`**

from field: tendermint.abci.CommitInfo last_commit_info = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:469](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L469)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:483](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L483)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:481](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L481)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestBeginBlock"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:482](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L482)

## Methods

### clone

▸ **clone**(): [`RequestBeginBlock`](abci.RequestBeginBlock.md)

Create a deep copy.

#### Returns

[`RequestBeginBlock`](abci.RequestBeginBlock.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestBeginBlock`](abci.RequestBeginBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestBeginBlock`](abci.RequestBeginBlock.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestBeginBlock`](abci.RequestBeginBlock.md)

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

[`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestBeginBlock`](abci.RequestBeginBlock.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestBeginBlock`](abci.RequestBeginBlock.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestBeginBlock`](abci.RequestBeginBlock.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestBeginBlock`](abci.RequestBeginBlock.md)\>

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
| `a` | `undefined` \| [`RequestBeginBlock`](abci.RequestBeginBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestBeginBlock`](abci.RequestBeginBlock.md)\> |
| `b` | `undefined` \| [`RequestBeginBlock`](abci.RequestBeginBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestBeginBlock`](abci.RequestBeginBlock.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:502](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L502)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:490](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L490)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:494](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L494)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestBeginBlock`](abci.RequestBeginBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:498](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L498)
