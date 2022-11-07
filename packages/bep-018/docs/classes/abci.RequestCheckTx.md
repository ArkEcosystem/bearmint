[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestCheckTx

# Class: RequestCheckTx

[abci](../modules/abci.md).RequestCheckTx

**`Generated`**

from message tendermint.abci.RequestCheckTx

## Hierarchy

- [`Message`](Message.md)<[`RequestCheckTx`](abci.RequestCheckTx.md)\>

  ↳ **`RequestCheckTx`**

## Table of contents

### Constructors

- [constructor](abci.RequestCheckTx.md#constructor)

### Properties

- [tx](abci.RequestCheckTx.md#tx)
- [type](abci.RequestCheckTx.md#type)
- [fields](abci.RequestCheckTx.md#fields)
- [runtime](abci.RequestCheckTx.md#runtime)
- [typeName](abci.RequestCheckTx.md#typename)

### Methods

- [clone](abci.RequestCheckTx.md#clone)
- [equals](abci.RequestCheckTx.md#equals)
- [fromBinary](abci.RequestCheckTx.md#frombinary)
- [fromJson](abci.RequestCheckTx.md#fromjson)
- [fromJsonString](abci.RequestCheckTx.md#fromjsonstring)
- [getType](abci.RequestCheckTx.md#gettype)
- [toBinary](abci.RequestCheckTx.md#tobinary)
- [toJson](abci.RequestCheckTx.md#tojson)
- [toJsonString](abci.RequestCheckTx.md#tojsonstring)
- [equals](abci.RequestCheckTx.md#equals-1)
- [fromBinary](abci.RequestCheckTx.md#frombinary-1)
- [fromJson](abci.RequestCheckTx.md#fromjson-1)
- [fromJsonString](abci.RequestCheckTx.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestCheckTx**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestCheckTx`](abci.RequestCheckTx.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:521](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L521)

## Properties

### tx

• **tx**: `Uint8Array`

**`Generated`**

from field: bytes tx = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:514](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L514)

___

### type

• **type**: [`CheckTxType`](../enums/abci.CheckTxType.md) = `CheckTxType.NEW`

**`Generated`**

from field: tendermint.abci.CheckTxType type = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:519](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L519)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:528](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L528)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:526](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L526)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestCheckTx"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:527](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L527)

## Methods

### clone

▸ **clone**(): [`RequestCheckTx`](abci.RequestCheckTx.md)

Create a deep copy.

#### Returns

[`RequestCheckTx`](abci.RequestCheckTx.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestCheckTx`](abci.RequestCheckTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestCheckTx`](abci.RequestCheckTx.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestCheckTx`](abci.RequestCheckTx.md)

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

[`RequestCheckTx`](abci.RequestCheckTx.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestCheckTx`](abci.RequestCheckTx.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestCheckTx`](abci.RequestCheckTx.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestCheckTx`](abci.RequestCheckTx.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestCheckTx`](abci.RequestCheckTx.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestCheckTx`](abci.RequestCheckTx.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestCheckTx`](abci.RequestCheckTx.md)\>

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
| `a` | `undefined` \| [`RequestCheckTx`](abci.RequestCheckTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestCheckTx`](abci.RequestCheckTx.md)\> |
| `b` | `undefined` \| [`RequestCheckTx`](abci.RequestCheckTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestCheckTx`](abci.RequestCheckTx.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:545](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L545)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestCheckTx`](abci.RequestCheckTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestCheckTx`](abci.RequestCheckTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:533](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L533)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestCheckTx`](abci.RequestCheckTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestCheckTx`](abci.RequestCheckTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:537](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L537)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestCheckTx`](abci.RequestCheckTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestCheckTx`](abci.RequestCheckTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:541](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L541)
