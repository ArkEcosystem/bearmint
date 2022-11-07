[@bearmint/bep-018 - v0.0.0](../README.md) / [params](../modules/params.md) / VersionParams

# Class: VersionParams

[params](../modules/params.md).VersionParams

VersionParams contains the ABCI application version.

**`Generated`**

from message tendermint.types.VersionParams

## Hierarchy

- [`Message`](Message.md)<[`VersionParams`](params.VersionParams.md)\>

  ↳ **`VersionParams`**

## Table of contents

### Constructors

- [constructor](params.VersionParams.md#constructor)

### Properties

- [app](params.VersionParams.md#app)
- [fields](params.VersionParams.md#fields)
- [runtime](params.VersionParams.md#runtime)
- [typeName](params.VersionParams.md#typename)

### Methods

- [clone](params.VersionParams.md#clone)
- [equals](params.VersionParams.md#equals)
- [fromBinary](params.VersionParams.md#frombinary)
- [fromJson](params.VersionParams.md#fromjson)
- [fromJsonString](params.VersionParams.md#fromjsonstring)
- [getType](params.VersionParams.md#gettype)
- [toBinary](params.VersionParams.md#tobinary)
- [toJson](params.VersionParams.md#tojson)
- [toJsonString](params.VersionParams.md#tojsonstring)
- [equals](params.VersionParams.md#equals-1)
- [fromBinary](params.VersionParams.md#frombinary-1)
- [fromJson](params.VersionParams.md#fromjson-1)
- [fromJsonString](params.VersionParams.md#fromjsonstring-1)

## Constructors

### constructor

• **new VersionParams**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`VersionParams`](params.VersionParams.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:235](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L235)

## Properties

### app

• **app**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 app = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:233](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L233)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:242](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L242)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:240](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L240)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.VersionParams"``

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:241](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L241)

## Methods

### clone

▸ **clone**(): [`VersionParams`](params.VersionParams.md)

Create a deep copy.

#### Returns

[`VersionParams`](params.VersionParams.md)

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
| `other` | `undefined` \| ``null`` \| [`VersionParams`](params.VersionParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`VersionParams`](params.VersionParams.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VersionParams`](params.VersionParams.md)

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

[`VersionParams`](params.VersionParams.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VersionParams`](params.VersionParams.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VersionParams`](params.VersionParams.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VersionParams`](params.VersionParams.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VersionParams`](params.VersionParams.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`VersionParams`](params.VersionParams.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`VersionParams`](params.VersionParams.md)\>

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
| `a` | `undefined` \| [`VersionParams`](params.VersionParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`VersionParams`](params.VersionParams.md)\> |
| `b` | `undefined` \| [`VersionParams`](params.VersionParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`VersionParams`](params.VersionParams.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:258](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L258)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`VersionParams`](params.VersionParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`VersionParams`](params.VersionParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:246](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L246)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`VersionParams`](params.VersionParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VersionParams`](params.VersionParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:250](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L250)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`VersionParams`](params.VersionParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VersionParams`](params.VersionParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:254](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L254)
