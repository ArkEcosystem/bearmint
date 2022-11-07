[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseListSnapshots

# Class: ResponseListSnapshots

[abci](../modules/abci.md).ResponseListSnapshots

**`Generated`**

from message tendermint.abci.ResponseListSnapshots

## Hierarchy

- [`Message`](Message.md)<[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)\>

  ↳ **`ResponseListSnapshots`**

## Table of contents

### Constructors

- [constructor](abci.ResponseListSnapshots.md#constructor)

### Properties

- [snapshots](abci.ResponseListSnapshots.md#snapshots)
- [fields](abci.ResponseListSnapshots.md#fields)
- [runtime](abci.ResponseListSnapshots.md#runtime)
- [typeName](abci.ResponseListSnapshots.md#typename)

### Methods

- [clone](abci.ResponseListSnapshots.md#clone)
- [equals](abci.ResponseListSnapshots.md#equals)
- [fromBinary](abci.ResponseListSnapshots.md#frombinary)
- [fromJson](abci.ResponseListSnapshots.md#fromjson)
- [fromJsonString](abci.ResponseListSnapshots.md#fromjsonstring)
- [getType](abci.ResponseListSnapshots.md#gettype)
- [toBinary](abci.ResponseListSnapshots.md#tobinary)
- [toJson](abci.ResponseListSnapshots.md#tojson)
- [toJsonString](abci.ResponseListSnapshots.md#tojsonstring)
- [equals](abci.ResponseListSnapshots.md#equals-1)
- [fromBinary](abci.ResponseListSnapshots.md#frombinary-1)
- [fromJson](abci.ResponseListSnapshots.md#fromjson-1)
- [fromJsonString](abci.ResponseListSnapshots.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseListSnapshots**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1800](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1800)

## Properties

### snapshots

• **snapshots**: [`Snapshot`](abci.Snapshot.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.Snapshot snapshots = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1798](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1798)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1807](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1807)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1805](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1805)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseListSnapshots"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1806](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1806)

## Methods

### clone

▸ **clone**(): [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

Create a deep copy.

#### Returns

[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseListSnapshots`](abci.ResponseListSnapshots.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

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

[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)\>

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
| `a` | `undefined` \| [`ResponseListSnapshots`](abci.ResponseListSnapshots.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)\> |
| `b` | `undefined` \| [`ResponseListSnapshots`](abci.ResponseListSnapshots.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1823](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1823)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1811](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1811)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1815](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1815)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1819](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1819)
