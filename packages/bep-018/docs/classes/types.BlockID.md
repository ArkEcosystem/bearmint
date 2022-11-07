[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / BlockID

# Class: BlockID

[types](../modules/types.md).BlockID

BlockID

**`Generated`**

from message tendermint.types.BlockID

## Hierarchy

- [`Message`](Message.md)<[`BlockID`](types.BlockID.md)\>

  ↳ **`BlockID`**

## Table of contents

### Constructors

- [constructor](types.BlockID.md#constructor)

### Properties

- [hash](types.BlockID.md#hash)
- [partSetHeader](types.BlockID.md#partsetheader)
- [fields](types.BlockID.md#fields)
- [runtime](types.BlockID.md#runtime)
- [typeName](types.BlockID.md#typename)

### Methods

- [clone](types.BlockID.md#clone)
- [equals](types.BlockID.md#equals)
- [fromBinary](types.BlockID.md#frombinary)
- [fromJson](types.BlockID.md#fromjson)
- [fromJsonString](types.BlockID.md#fromjsonstring)
- [getType](types.BlockID.md#gettype)
- [toBinary](types.BlockID.md#tobinary)
- [toJson](types.BlockID.md#tojson)
- [toJsonString](types.BlockID.md#tojsonstring)
- [equals](types.BlockID.md#equals-1)
- [fromBinary](types.BlockID.md#frombinary-1)
- [fromJson](types.BlockID.md#fromjson-1)
- [fromJsonString](types.BlockID.md#fromjsonstring-1)

## Constructors

### constructor

• **new BlockID**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BlockID`](types.BlockID.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:194](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L194)

## Properties

### hash

• **hash**: `Uint8Array`

**`Generated`**

from field: bytes hash = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:187](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L187)

___

### partSetHeader

• `Optional` **partSetHeader**: [`PartSetHeader`](types.PartSetHeader.md)

**`Generated`**

from field: tendermint.types.PartSetHeader part_set_header = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:192](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L192)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:201](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L201)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:199](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L199)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.BlockID"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:200](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L200)

## Methods

### clone

▸ **clone**(): [`BlockID`](types.BlockID.md)

Create a deep copy.

#### Returns

[`BlockID`](types.BlockID.md)

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
| `other` | `undefined` \| ``null`` \| [`BlockID`](types.BlockID.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockID`](types.BlockID.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BlockID`](types.BlockID.md)

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

[`BlockID`](types.BlockID.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BlockID`](types.BlockID.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockID`](types.BlockID.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BlockID`](types.BlockID.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockID`](types.BlockID.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BlockID`](types.BlockID.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BlockID`](types.BlockID.md)\>

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
| `a` | `undefined` \| [`BlockID`](types.BlockID.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockID`](types.BlockID.md)\> |
| `b` | `undefined` \| [`BlockID`](types.BlockID.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BlockID`](types.BlockID.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:218](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L218)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BlockID`](types.BlockID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BlockID`](types.BlockID.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:206](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L206)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BlockID`](types.BlockID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockID`](types.BlockID.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:210](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L210)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BlockID`](types.BlockID.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BlockID`](types.BlockID.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:214](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L214)
