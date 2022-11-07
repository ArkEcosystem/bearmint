[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / VoteInfo

# Class: VoteInfo

[abci](../modules/abci.md).VoteInfo

VoteInfo

**`Generated`**

from message tendermint.abci.VoteInfo

## Hierarchy

- [`Message`](Message.md)<[`VoteInfo`](abci.VoteInfo.md)\>

  ↳ **`VoteInfo`**

## Table of contents

### Constructors

- [constructor](abci.VoteInfo.md#constructor)

### Properties

- [signedLastBlock](abci.VoteInfo.md#signedlastblock)
- [validator](abci.VoteInfo.md#validator)
- [fields](abci.VoteInfo.md#fields)
- [runtime](abci.VoteInfo.md#runtime)
- [typeName](abci.VoteInfo.md#typename)

### Methods

- [clone](abci.VoteInfo.md#clone)
- [equals](abci.VoteInfo.md#equals)
- [fromBinary](abci.VoteInfo.md#frombinary)
- [fromJson](abci.VoteInfo.md#fromjson)
- [fromJsonString](abci.VoteInfo.md#fromjsonstring)
- [getType](abci.VoteInfo.md#gettype)
- [toBinary](abci.VoteInfo.md#tobinary)
- [toJson](abci.VoteInfo.md#tojson)
- [toJsonString](abci.VoteInfo.md#tojsonstring)
- [equals](abci.VoteInfo.md#equals-1)
- [fromBinary](abci.VoteInfo.md#frombinary-1)
- [fromJson](abci.VoteInfo.md#fromjson-1)
- [fromJsonString](abci.VoteInfo.md#fromjsonstring-1)

## Constructors

### constructor

• **new VoteInfo**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`VoteInfo`](abci.VoteInfo.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2529](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2529)

## Properties

### signedLastBlock

• **signedLastBlock**: `boolean` = `false`

**`Generated`**

from field: bool signed_last_block = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2527](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2527)

___

### validator

• `Optional` **validator**: [`Validator`](abci.Validator.md)

**`Generated`**

from field: tendermint.abci.Validator validator = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2522](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2522)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2536](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2536)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2534](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2534)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.VoteInfo"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2535](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2535)

## Methods

### clone

▸ **clone**(): [`VoteInfo`](abci.VoteInfo.md)

Create a deep copy.

#### Returns

[`VoteInfo`](abci.VoteInfo.md)

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
| `other` | `undefined` \| ``null`` \| [`VoteInfo`](abci.VoteInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`VoteInfo`](abci.VoteInfo.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VoteInfo`](abci.VoteInfo.md)

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

[`VoteInfo`](abci.VoteInfo.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VoteInfo`](abci.VoteInfo.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VoteInfo`](abci.VoteInfo.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VoteInfo`](abci.VoteInfo.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VoteInfo`](abci.VoteInfo.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`VoteInfo`](abci.VoteInfo.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`VoteInfo`](abci.VoteInfo.md)\>

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
| `a` | `undefined` \| [`VoteInfo`](abci.VoteInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`VoteInfo`](abci.VoteInfo.md)\> |
| `b` | `undefined` \| [`VoteInfo`](abci.VoteInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`VoteInfo`](abci.VoteInfo.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2553](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2553)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`VoteInfo`](abci.VoteInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`VoteInfo`](abci.VoteInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2541](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2541)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`VoteInfo`](abci.VoteInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VoteInfo`](abci.VoteInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2545](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2545)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`VoteInfo`](abci.VoteInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VoteInfo`](abci.VoteInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2549](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2549)
