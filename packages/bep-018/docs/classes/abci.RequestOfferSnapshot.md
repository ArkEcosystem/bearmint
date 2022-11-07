[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestOfferSnapshot

# Class: RequestOfferSnapshot

[abci](../modules/abci.md).RequestOfferSnapshot

offers a snapshot to the application

**`Generated`**

from message tendermint.abci.RequestOfferSnapshot

## Hierarchy

- [`Message`](Message.md)<[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)\>

  ↳ **`RequestOfferSnapshot`**

## Table of contents

### Constructors

- [constructor](abci.RequestOfferSnapshot.md#constructor)

### Properties

- [appHash](abci.RequestOfferSnapshot.md#apphash)
- [snapshot](abci.RequestOfferSnapshot.md#snapshot)
- [fields](abci.RequestOfferSnapshot.md#fields)
- [runtime](abci.RequestOfferSnapshot.md#runtime)
- [typeName](abci.RequestOfferSnapshot.md#typename)

### Methods

- [clone](abci.RequestOfferSnapshot.md#clone)
- [equals](abci.RequestOfferSnapshot.md#equals)
- [fromBinary](abci.RequestOfferSnapshot.md#frombinary)
- [fromJson](abci.RequestOfferSnapshot.md#fromjson)
- [fromJsonString](abci.RequestOfferSnapshot.md#fromjsonstring)
- [getType](abci.RequestOfferSnapshot.md#gettype)
- [toBinary](abci.RequestOfferSnapshot.md#tobinary)
- [toJson](abci.RequestOfferSnapshot.md#tojson)
- [toJsonString](abci.RequestOfferSnapshot.md#tojsonstring)
- [equals](abci.RequestOfferSnapshot.md#equals-1)
- [fromBinary](abci.RequestOfferSnapshot.md#frombinary-1)
- [fromJson](abci.RequestOfferSnapshot.md#fromjson-1)
- [fromJsonString](abci.RequestOfferSnapshot.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestOfferSnapshot**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:708](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L708)

## Properties

### appHash

• **appHash**: `Uint8Array`

light client-verified app hash for snapshot height

**`Generated`**

from field: bytes app_hash = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:706](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L706)

___

### snapshot

• `Optional` **snapshot**: [`Snapshot`](abci.Snapshot.md)

snapshot offered by peers

**`Generated`**

from field: tendermint.abci.Snapshot snapshot = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:699](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L699)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:715](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L715)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:713](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L713)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestOfferSnapshot"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:714](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L714)

## Methods

### clone

▸ **clone**(): [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

Create a deep copy.

#### Returns

[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

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

[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)\>

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
| `a` | `undefined` \| [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)\> |
| `b` | `undefined` \| [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:732](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L732)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:720](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L720)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:724](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L724)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:728](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L728)
