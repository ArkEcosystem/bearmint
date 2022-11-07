[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseException

# Class: ResponseException

[abci](../modules/abci.md).ResponseException

nondeterministic

**`Generated`**

from message tendermint.abci.ResponseException

## Hierarchy

- [`Message`](Message.md)<[`ResponseException`](abci.ResponseException.md)\>

  ↳ **`ResponseException`**

## Table of contents

### Constructors

- [constructor](abci.ResponseException.md#constructor)

### Properties

- [error](abci.ResponseException.md#error)
- [fields](abci.ResponseException.md#fields)
- [runtime](abci.ResponseException.md#runtime)
- [typeName](abci.ResponseException.md#typename)

### Methods

- [clone](abci.ResponseException.md#clone)
- [equals](abci.ResponseException.md#equals)
- [fromBinary](abci.ResponseException.md#frombinary)
- [fromJson](abci.ResponseException.md#fromjson)
- [fromJsonString](abci.ResponseException.md#fromjsonstring)
- [getType](abci.ResponseException.md#gettype)
- [toBinary](abci.ResponseException.md#tobinary)
- [toJson](abci.ResponseException.md#tojson)
- [toJsonString](abci.ResponseException.md#tojsonstring)
- [equals](abci.ResponseException.md#equals-1)
- [fromBinary](abci.ResponseException.md#frombinary-1)
- [fromJson](abci.ResponseException.md#fromjson-1)
- [fromJsonString](abci.ResponseException.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseException**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseException`](abci.ResponseException.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1174](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1174)

## Properties

### error

• **error**: `string` = `""`

**`Generated`**

from field: string error = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1172](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1172)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1181](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1181)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1179](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1179)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseException"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1180](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1180)

## Methods

### clone

▸ **clone**(): [`ResponseException`](abci.ResponseException.md)

Create a deep copy.

#### Returns

[`ResponseException`](abci.ResponseException.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseException`](abci.ResponseException.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseException`](abci.ResponseException.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseException`](abci.ResponseException.md)

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

[`ResponseException`](abci.ResponseException.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseException`](abci.ResponseException.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseException`](abci.ResponseException.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseException`](abci.ResponseException.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseException`](abci.ResponseException.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseException`](abci.ResponseException.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseException`](abci.ResponseException.md)\>

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
| `a` | `undefined` \| [`ResponseException`](abci.ResponseException.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseException`](abci.ResponseException.md)\> |
| `b` | `undefined` \| [`ResponseException`](abci.ResponseException.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseException`](abci.ResponseException.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1197](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1197)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseException`](abci.ResponseException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseException`](abci.ResponseException.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1185](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1185)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseException`](abci.ResponseException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseException`](abci.ResponseException.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1189](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1189)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseException`](abci.ResponseException.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseException`](abci.ResponseException.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1193](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1193)
