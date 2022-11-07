[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / SignedHeader

# Class: SignedHeader

[types](../modules/types.md).SignedHeader

**`Generated`**

from message tendermint.types.SignedHeader

## Hierarchy

- [`Message`](Message.md)<[`SignedHeader`](types.SignedHeader.md)\>

  ↳ **`SignedHeader`**

## Table of contents

### Constructors

- [constructor](types.SignedHeader.md#constructor)

### Properties

- [commit](types.SignedHeader.md#commit)
- [header](types.SignedHeader.md#header)
- [fields](types.SignedHeader.md#fields)
- [runtime](types.SignedHeader.md#runtime)
- [typeName](types.SignedHeader.md#typename)

### Methods

- [clone](types.SignedHeader.md#clone)
- [equals](types.SignedHeader.md#equals)
- [fromBinary](types.SignedHeader.md#frombinary)
- [fromJson](types.SignedHeader.md#fromjson)
- [fromJsonString](types.SignedHeader.md#fromjsonstring)
- [getType](types.SignedHeader.md#gettype)
- [toBinary](types.SignedHeader.md#tobinary)
- [toJson](types.SignedHeader.md#tojson)
- [toJsonString](types.SignedHeader.md#tojsonstring)
- [equals](types.SignedHeader.md#equals-1)
- [fromBinary](types.SignedHeader.md#frombinary-1)
- [fromJson](types.SignedHeader.md#fromjson-1)
- [fromJsonString](types.SignedHeader.md#fromjsonstring-1)

## Constructors

### constructor

• **new SignedHeader**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`SignedHeader`](types.SignedHeader.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:696](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L696)

## Properties

### commit

• `Optional` **commit**: [`Commit`](types.Commit.md)

**`Generated`**

from field: tendermint.types.Commit commit = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:694](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L694)

___

### header

• `Optional` **header**: [`Header`](types.Header.md)

**`Generated`**

from field: tendermint.types.Header header = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:689](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L689)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:703](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L703)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:701](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L701)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.SignedHeader"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:702](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L702)

## Methods

### clone

▸ **clone**(): [`SignedHeader`](types.SignedHeader.md)

Create a deep copy.

#### Returns

[`SignedHeader`](types.SignedHeader.md)

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
| `other` | `undefined` \| ``null`` \| [`SignedHeader`](types.SignedHeader.md) \| [`PlainMessage`](../README.md#plainmessage)<[`SignedHeader`](types.SignedHeader.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SignedHeader`](types.SignedHeader.md)

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

[`SignedHeader`](types.SignedHeader.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SignedHeader`](types.SignedHeader.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SignedHeader`](types.SignedHeader.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SignedHeader`](types.SignedHeader.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SignedHeader`](types.SignedHeader.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SignedHeader`](types.SignedHeader.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SignedHeader`](types.SignedHeader.md)\>

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
| `a` | `undefined` \| [`SignedHeader`](types.SignedHeader.md) \| [`PlainMessage`](../README.md#plainmessage)<[`SignedHeader`](types.SignedHeader.md)\> |
| `b` | `undefined` \| [`SignedHeader`](types.SignedHeader.md) \| [`PlainMessage`](../README.md#plainmessage)<[`SignedHeader`](types.SignedHeader.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:720](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L720)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SignedHeader`](types.SignedHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SignedHeader`](types.SignedHeader.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:708](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L708)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SignedHeader`](types.SignedHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SignedHeader`](types.SignedHeader.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:712](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L712)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SignedHeader`](types.SignedHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SignedHeader`](types.SignedHeader.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:716](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L716)
