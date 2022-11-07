[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ValidatorUpdate

# Class: ValidatorUpdate

[abci](../modules/abci.md).ValidatorUpdate

ValidatorUpdate

**`Generated`**

from message tendermint.abci.ValidatorUpdate

## Hierarchy

- [`Message`](Message.md)<[`ValidatorUpdate`](abci.ValidatorUpdate.md)\>

  ↳ **`ValidatorUpdate`**

## Table of contents

### Constructors

- [constructor](abci.ValidatorUpdate.md#constructor)

### Properties

- [power](abci.ValidatorUpdate.md#power)
- [pubKey](abci.ValidatorUpdate.md#pubkey)
- [fields](abci.ValidatorUpdate.md#fields)
- [runtime](abci.ValidatorUpdate.md#runtime)
- [typeName](abci.ValidatorUpdate.md#typename)

### Methods

- [clone](abci.ValidatorUpdate.md#clone)
- [equals](abci.ValidatorUpdate.md#equals)
- [fromBinary](abci.ValidatorUpdate.md#frombinary)
- [fromJson](abci.ValidatorUpdate.md#fromjson)
- [fromJsonString](abci.ValidatorUpdate.md#fromjsonstring)
- [getType](abci.ValidatorUpdate.md#gettype)
- [toBinary](abci.ValidatorUpdate.md#tobinary)
- [toJson](abci.ValidatorUpdate.md#tojson)
- [toJsonString](abci.ValidatorUpdate.md#tojsonstring)
- [equals](abci.ValidatorUpdate.md#equals-1)
- [fromBinary](abci.ValidatorUpdate.md#frombinary-1)
- [fromJson](abci.ValidatorUpdate.md#fromjson-1)
- [fromJsonString](abci.ValidatorUpdate.md#fromjsonstring-1)

## Constructors

### constructor

• **new ValidatorUpdate**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ValidatorUpdate`](abci.ValidatorUpdate.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2484](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2484)

## Properties

### power

• **power**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 power = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2482](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2482)

___

### pubKey

• `Optional` **pubKey**: [`PublicKey`](crypto.PublicKey.md)

**`Generated`**

from field: tendermint.crypto.PublicKey pub_key = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2477](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2477)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2491](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2491)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2489](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2489)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ValidatorUpdate"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2490](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2490)

## Methods

### clone

▸ **clone**(): [`ValidatorUpdate`](abci.ValidatorUpdate.md)

Create a deep copy.

#### Returns

[`ValidatorUpdate`](abci.ValidatorUpdate.md)

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
| `other` | `undefined` \| ``null`` \| [`ValidatorUpdate`](abci.ValidatorUpdate.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ValidatorUpdate`](abci.ValidatorUpdate.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ValidatorUpdate`](abci.ValidatorUpdate.md)

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

[`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ValidatorUpdate`](abci.ValidatorUpdate.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ValidatorUpdate`](abci.ValidatorUpdate.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ValidatorUpdate`](abci.ValidatorUpdate.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ValidatorUpdate`](abci.ValidatorUpdate.md)\>

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
| `a` | `undefined` \| [`ValidatorUpdate`](abci.ValidatorUpdate.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ValidatorUpdate`](abci.ValidatorUpdate.md)\> |
| `b` | `undefined` \| [`ValidatorUpdate`](abci.ValidatorUpdate.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ValidatorUpdate`](abci.ValidatorUpdate.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2508](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2508)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2496](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2496)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2500](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2500)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ValidatorUpdate`](abci.ValidatorUpdate.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2504](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2504)
