[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / PartSetHeader

# Class: PartSetHeader

[types](../modules/types.md).PartSetHeader

PartsetHeader

**`Generated`**

from message tendermint.types.PartSetHeader

## Hierarchy

- [`Message`](Message.md)<[`PartSetHeader`](types.PartSetHeader.md)\>

  ↳ **`PartSetHeader`**

## Table of contents

### Constructors

- [constructor](types.PartSetHeader.md#constructor)

### Properties

- [hash](types.PartSetHeader.md#hash)
- [total](types.PartSetHeader.md#total)
- [fields](types.PartSetHeader.md#fields)
- [runtime](types.PartSetHeader.md#runtime)
- [typeName](types.PartSetHeader.md#typename)

### Methods

- [clone](types.PartSetHeader.md#clone)
- [equals](types.PartSetHeader.md#equals)
- [fromBinary](types.PartSetHeader.md#frombinary)
- [fromJson](types.PartSetHeader.md#fromjson)
- [fromJsonString](types.PartSetHeader.md#fromjsonstring)
- [getType](types.PartSetHeader.md#gettype)
- [toBinary](types.PartSetHeader.md#tobinary)
- [toJson](types.PartSetHeader.md#tojson)
- [toJsonString](types.PartSetHeader.md#tojsonstring)
- [equals](types.PartSetHeader.md#equals-1)
- [fromBinary](types.PartSetHeader.md#frombinary-1)
- [fromJson](types.PartSetHeader.md#fromjson-1)
- [fromJsonString](types.PartSetHeader.md#fromjsonstring-1)

## Constructors

### constructor

• **new PartSetHeader**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`PartSetHeader`](types.PartSetHeader.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:100](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L100)

## Properties

### hash

• **hash**: `Uint8Array`

**`Generated`**

from field: bytes hash = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:98](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L98)

___

### total

• **total**: `number` = `0`

**`Generated`**

from field: uint32 total = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:93](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L93)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:107](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L107)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:105](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L105)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.PartSetHeader"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:106](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L106)

## Methods

### clone

▸ **clone**(): [`PartSetHeader`](types.PartSetHeader.md)

Create a deep copy.

#### Returns

[`PartSetHeader`](types.PartSetHeader.md)

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
| `other` | `undefined` \| ``null`` \| [`PartSetHeader`](types.PartSetHeader.md) \| [`PlainMessage`](../README.md#plainmessage)<[`PartSetHeader`](types.PartSetHeader.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PartSetHeader`](types.PartSetHeader.md)

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

[`PartSetHeader`](types.PartSetHeader.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PartSetHeader`](types.PartSetHeader.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PartSetHeader`](types.PartSetHeader.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PartSetHeader`](types.PartSetHeader.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PartSetHeader`](types.PartSetHeader.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PartSetHeader`](types.PartSetHeader.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PartSetHeader`](types.PartSetHeader.md)\>

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
| `a` | `undefined` \| [`PartSetHeader`](types.PartSetHeader.md) \| [`PlainMessage`](../README.md#plainmessage)<[`PartSetHeader`](types.PartSetHeader.md)\> |
| `b` | `undefined` \| [`PartSetHeader`](types.PartSetHeader.md) \| [`PlainMessage`](../README.md#plainmessage)<[`PartSetHeader`](types.PartSetHeader.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:124](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L124)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PartSetHeader`](types.PartSetHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PartSetHeader`](types.PartSetHeader.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:112](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L112)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PartSetHeader`](types.PartSetHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PartSetHeader`](types.PartSetHeader.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:116](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L116)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PartSetHeader`](types.PartSetHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PartSetHeader`](types.PartSetHeader.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:120](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L120)
