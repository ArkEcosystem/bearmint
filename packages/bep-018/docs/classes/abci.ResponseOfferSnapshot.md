[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseOfferSnapshot

# Class: ResponseOfferSnapshot

[abci](../modules/abci.md).ResponseOfferSnapshot

**`Generated`**

from message tendermint.abci.ResponseOfferSnapshot

## Hierarchy

- [`Message`](Message.md)<[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)\>

  ↳ **`ResponseOfferSnapshot`**

## Table of contents

### Constructors

- [constructor](abci.ResponseOfferSnapshot.md#constructor)

### Properties

- [result](abci.ResponseOfferSnapshot.md#result)
- [fields](abci.ResponseOfferSnapshot.md#fields)
- [runtime](abci.ResponseOfferSnapshot.md#runtime)
- [typeName](abci.ResponseOfferSnapshot.md#typename)

### Methods

- [clone](abci.ResponseOfferSnapshot.md#clone)
- [equals](abci.ResponseOfferSnapshot.md#equals)
- [fromBinary](abci.ResponseOfferSnapshot.md#frombinary)
- [fromJson](abci.ResponseOfferSnapshot.md#fromjson)
- [fromJsonString](abci.ResponseOfferSnapshot.md#fromjsonstring)
- [getType](abci.ResponseOfferSnapshot.md#gettype)
- [toBinary](abci.ResponseOfferSnapshot.md#tobinary)
- [toJson](abci.ResponseOfferSnapshot.md#tojson)
- [toJsonString](abci.ResponseOfferSnapshot.md#tojsonstring)
- [equals](abci.ResponseOfferSnapshot.md#equals-1)
- [fromBinary](abci.ResponseOfferSnapshot.md#frombinary-1)
- [fromJson](abci.ResponseOfferSnapshot.md#fromjson-1)
- [fromJsonString](abci.ResponseOfferSnapshot.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseOfferSnapshot**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1837](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1837)

## Properties

### result

• **result**: [`ResponseOfferSnapshot_Result`](../enums/abci.ResponseOfferSnapshot_Result.md) = `ResponseOfferSnapshot_Result.UNKNOWN`

**`Generated`**

from field: tendermint.abci.ResponseOfferSnapshot.Result result = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1835](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1835)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1844](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1844)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1842](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1842)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseOfferSnapshot"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1843](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1843)

## Methods

### clone

▸ **clone**(): [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

Create a deep copy.

#### Returns

[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

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

[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)\>

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
| `a` | `undefined` \| [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)\> |
| `b` | `undefined` \| [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1860](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1860)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1848](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1848)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1852](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1852)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1856](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1856)
