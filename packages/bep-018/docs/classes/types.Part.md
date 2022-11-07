[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / Part

# Class: Part

[types](../modules/types.md).Part

**`Generated`**

from message tendermint.types.Part

## Hierarchy

- [`Message`](Message.md)<[`Part`](types.Part.md)\>

  ↳ **`Part`**

## Table of contents

### Constructors

- [constructor](types.Part.md#constructor)

### Properties

- [bytes](types.Part.md#bytes)
- [index](types.Part.md#index)
- [proof](types.Part.md#proof)
- [fields](types.Part.md#fields)
- [runtime](types.Part.md#runtime)
- [typeName](types.Part.md#typename)

### Methods

- [clone](types.Part.md#clone)
- [equals](types.Part.md#equals)
- [fromBinary](types.Part.md#frombinary)
- [fromJson](types.Part.md#fromjson)
- [fromJsonString](types.Part.md#fromjsonstring)
- [getType](types.Part.md#gettype)
- [toBinary](types.Part.md#tobinary)
- [toJson](types.Part.md#tojson)
- [toJsonString](types.Part.md#tojsonstring)
- [equals](types.Part.md#equals-1)
- [fromBinary](types.Part.md#frombinary-1)
- [fromJson](types.Part.md#fromjson-1)
- [fromJsonString](types.Part.md#fromjsonstring-1)

## Constructors

### constructor

• **new Part**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Part`](types.Part.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:148](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L148)

## Properties

### bytes

• **bytes**: `Uint8Array`

**`Generated`**

from field: bytes bytes = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:141](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L141)

___

### index

• **index**: `number` = `0`

**`Generated`**

from field: uint32 index = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:136](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L136)

___

### proof

• `Optional` **proof**: `Proof`

**`Generated`**

from field: tendermint.crypto.Proof proof = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:146](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L146)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:155](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L155)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:153](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L153)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.Part"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:154](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L154)

## Methods

### clone

▸ **clone**(): [`Part`](types.Part.md)

Create a deep copy.

#### Returns

[`Part`](types.Part.md)

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
| `other` | `undefined` \| ``null`` \| [`Part`](types.Part.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Part`](types.Part.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Part`](types.Part.md)

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

[`Part`](types.Part.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Part`](types.Part.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Part`](types.Part.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Part`](types.Part.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Part`](types.Part.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Part`](types.Part.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Part`](types.Part.md)\>

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
| `a` | `undefined` \| [`Part`](types.Part.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Part`](types.Part.md)\> |
| `b` | `undefined` \| [`Part`](types.Part.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Part`](types.Part.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:173](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L173)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Part`](types.Part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Part`](types.Part.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:161](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L161)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Part`](types.Part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Part`](types.Part.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:165](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L165)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Part`](types.Part.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Part`](types.Part.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:169](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L169)
