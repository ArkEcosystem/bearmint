[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / TxResult

# Class: TxResult

[abci](../modules/abci.md).TxResult

TxResult contains results of executing the transaction.

One usage is indexing transaction results.

**`Generated`**

from message tendermint.abci.TxResult

## Hierarchy

- [`Message`](Message.md)<[`TxResult`](abci.TxResult.md)\>

  ↳ **`TxResult`**

## Table of contents

### Constructors

- [constructor](abci.TxResult.md#constructor)

### Properties

- [height](abci.TxResult.md#height)
- [index](abci.TxResult.md#index)
- [result](abci.TxResult.md#result)
- [tx](abci.TxResult.md#tx)
- [fields](abci.TxResult.md#fields)
- [runtime](abci.TxResult.md#runtime)
- [typeName](abci.TxResult.md#typename)

### Methods

- [clone](abci.TxResult.md#clone)
- [equals](abci.TxResult.md#equals)
- [fromBinary](abci.TxResult.md#frombinary)
- [fromJson](abci.TxResult.md#fromjson)
- [fromJsonString](abci.TxResult.md#fromjsonstring)
- [getType](abci.TxResult.md#gettype)
- [toBinary](abci.TxResult.md#tobinary)
- [toJson](abci.TxResult.md#tojson)
- [toJsonString](abci.TxResult.md#tojsonstring)
- [equals](abci.TxResult.md#equals-1)
- [fromBinary](abci.TxResult.md#frombinary-1)
- [fromJson](abci.TxResult.md#fromjson-1)
- [fromJsonString](abci.TxResult.md#fromjsonstring-1)

## Constructors

### constructor

• **new TxResult**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`TxResult`](abci.TxResult.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2386](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2386)

## Properties

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2369](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2369)

___

### index

• **index**: `number` = `0`

**`Generated`**

from field: uint32 index = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2374](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2374)

___

### result

• `Optional` **result**: [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

**`Generated`**

from field: tendermint.abci.ResponseDeliverTx result = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2384](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2384)

___

### tx

• **tx**: `Uint8Array`

**`Generated`**

from field: bytes tx = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2379](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2379)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2393](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2393)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2391](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2391)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.TxResult"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2392](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2392)

## Methods

### clone

▸ **clone**(): [`TxResult`](abci.TxResult.md)

Create a deep copy.

#### Returns

[`TxResult`](abci.TxResult.md)

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
| `other` | `undefined` \| ``null`` \| [`TxResult`](abci.TxResult.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxResult`](abci.TxResult.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TxResult`](abci.TxResult.md)

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

[`TxResult`](abci.TxResult.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TxResult`](abci.TxResult.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxResult`](abci.TxResult.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TxResult`](abci.TxResult.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxResult`](abci.TxResult.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TxResult`](abci.TxResult.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TxResult`](abci.TxResult.md)\>

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
| `a` | `undefined` \| [`TxResult`](abci.TxResult.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxResult`](abci.TxResult.md)\> |
| `b` | `undefined` \| [`TxResult`](abci.TxResult.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxResult`](abci.TxResult.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2412](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2412)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TxResult`](abci.TxResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TxResult`](abci.TxResult.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2400](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2400)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TxResult`](abci.TxResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxResult`](abci.TxResult.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2404](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2404)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TxResult`](abci.TxResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxResult`](abci.TxResult.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2408](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2408)
