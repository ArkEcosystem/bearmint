[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / TxProof

# Class: TxProof

[types](../modules/types.md).TxProof

TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree.

**`Generated`**

from message tendermint.types.TxProof

## Hierarchy

- [`Message`](Message.md)<[`TxProof`](types.TxProof.md)\>

  ↳ **`TxProof`**

## Table of contents

### Constructors

- [constructor](types.TxProof.md#constructor)

### Properties

- [data](types.TxProof.md#data)
- [proof](types.TxProof.md#proof)
- [rootHash](types.TxProof.md#roothash)
- [fields](types.TxProof.md#fields)
- [runtime](types.TxProof.md#runtime)
- [typeName](types.TxProof.md#typename)

### Methods

- [clone](types.TxProof.md#clone)
- [equals](types.TxProof.md#equals)
- [fromBinary](types.TxProof.md#frombinary)
- [fromJson](types.TxProof.md#fromjson)
- [fromJsonString](types.TxProof.md#fromjsonstring)
- [getType](types.TxProof.md#gettype)
- [toBinary](types.TxProof.md#tobinary)
- [toJson](types.TxProof.md#tojson)
- [toJsonString](types.TxProof.md#tojsonstring)
- [equals](types.TxProof.md#equals-1)
- [fromBinary](types.TxProof.md#frombinary-1)
- [fromJson](types.TxProof.md#fromjson-1)
- [fromJsonString](types.TxProof.md#fromjsonstring-1)

## Constructors

### constructor

• **new TxProof**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`TxProof`](types.TxProof.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:844](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L844)

## Properties

### data

• **data**: `Uint8Array`

**`Generated`**

from field: bytes data = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:837](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L837)

___

### proof

• `Optional` **proof**: `Proof`

**`Generated`**

from field: tendermint.crypto.Proof proof = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:842](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L842)

___

### rootHash

• **rootHash**: `Uint8Array`

**`Generated`**

from field: bytes root_hash = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:832](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L832)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:851](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L851)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:849](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L849)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.TxProof"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:850](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L850)

## Methods

### clone

▸ **clone**(): [`TxProof`](types.TxProof.md)

Create a deep copy.

#### Returns

[`TxProof`](types.TxProof.md)

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
| `other` | `undefined` \| ``null`` \| [`TxProof`](types.TxProof.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxProof`](types.TxProof.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TxProof`](types.TxProof.md)

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

[`TxProof`](types.TxProof.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TxProof`](types.TxProof.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxProof`](types.TxProof.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TxProof`](types.TxProof.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxProof`](types.TxProof.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TxProof`](types.TxProof.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TxProof`](types.TxProof.md)\>

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
| `a` | `undefined` \| [`TxProof`](types.TxProof.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxProof`](types.TxProof.md)\> |
| `b` | `undefined` \| [`TxProof`](types.TxProof.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxProof`](types.TxProof.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:869](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L869)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TxProof`](types.TxProof.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TxProof`](types.TxProof.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:857](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L857)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TxProof`](types.TxProof.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxProof`](types.TxProof.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:861](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L861)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TxProof`](types.TxProof.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxProof`](types.TxProof.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:865](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L865)
