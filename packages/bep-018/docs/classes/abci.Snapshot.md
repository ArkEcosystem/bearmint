[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / Snapshot

# Class: Snapshot

[abci](../modules/abci.md).Snapshot

**`Generated`**

from message tendermint.abci.Snapshot

## Hierarchy

- [`Message`](Message.md)<[`Snapshot`](abci.Snapshot.md)\>

  ↳ **`Snapshot`**

## Table of contents

### Constructors

- [constructor](abci.Snapshot.md#constructor)

### Properties

- [chunks](abci.Snapshot.md#chunks)
- [format](abci.Snapshot.md#format)
- [hash](abci.Snapshot.md#hash)
- [height](abci.Snapshot.md#height)
- [metadata](abci.Snapshot.md#metadata)
- [fields](abci.Snapshot.md#fields)
- [runtime](abci.Snapshot.md#runtime)
- [typeName](abci.Snapshot.md#typename)

### Methods

- [clone](abci.Snapshot.md#clone)
- [equals](abci.Snapshot.md#equals)
- [fromBinary](abci.Snapshot.md#frombinary)
- [fromJson](abci.Snapshot.md#fromjson)
- [fromJsonString](abci.Snapshot.md#fromjsonstring)
- [getType](abci.Snapshot.md#gettype)
- [toBinary](abci.Snapshot.md#tobinary)
- [toJson](abci.Snapshot.md#tojson)
- [toJsonString](abci.Snapshot.md#tojsonstring)
- [equals](abci.Snapshot.md#equals-1)
- [fromBinary](abci.Snapshot.md#frombinary-1)
- [fromJson](abci.Snapshot.md#fromjson-1)
- [fromJsonString](abci.Snapshot.md#fromjsonstring-1)

## Constructors

### constructor

• **new Snapshot**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Snapshot`](abci.Snapshot.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2719](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2719)

## Properties

### chunks

• **chunks**: `number` = `0`

Number of chunks in the snapshot

**`Generated`**

from field: uint32 chunks = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2703](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2703)

___

### format

• **format**: `number` = `0`

The application-specific snapshot format

**`Generated`**

from field: uint32 format = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2696](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2696)

___

### hash

• **hash**: `Uint8Array`

Arbitrary snapshot hash, equal only if identical

**`Generated`**

from field: bytes hash = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2710](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2710)

___

### height

• **height**: `bigint` = `protoInt64.zero`

The height at which the snapshot was taken

**`Generated`**

from field: uint64 height = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2689](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2689)

___

### metadata

• **metadata**: `Uint8Array`

Arbitrary application metadata

**`Generated`**

from field: bytes metadata = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2717](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2717)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2726](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2726)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2724](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2724)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.Snapshot"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2725](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2725)

## Methods

### clone

▸ **clone**(): [`Snapshot`](abci.Snapshot.md)

Create a deep copy.

#### Returns

[`Snapshot`](abci.Snapshot.md)

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
| `other` | `undefined` \| ``null`` \| [`Snapshot`](abci.Snapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Snapshot`](abci.Snapshot.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Snapshot`](abci.Snapshot.md)

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

[`Snapshot`](abci.Snapshot.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Snapshot`](abci.Snapshot.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Snapshot`](abci.Snapshot.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Snapshot`](abci.Snapshot.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Snapshot`](abci.Snapshot.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Snapshot`](abci.Snapshot.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Snapshot`](abci.Snapshot.md)\>

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
| `a` | `undefined` \| [`Snapshot`](abci.Snapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Snapshot`](abci.Snapshot.md)\> |
| `b` | `undefined` \| [`Snapshot`](abci.Snapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Snapshot`](abci.Snapshot.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2746](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2746)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Snapshot`](abci.Snapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Snapshot`](abci.Snapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2734](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2734)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Snapshot`](abci.Snapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Snapshot`](abci.Snapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2738](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2738)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Snapshot`](abci.Snapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Snapshot`](abci.Snapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2742](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2742)
