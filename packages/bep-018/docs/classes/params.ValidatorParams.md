[@bearmint/bep-018 - v0.0.0](../README.md) / [params](../modules/params.md) / ValidatorParams

# Class: ValidatorParams

[params](../modules/params.md).ValidatorParams

ValidatorParams restrict the public key types validators can use.
NOTE: uses ABCI pubkey naming, not Amino names.

**`Generated`**

from message tendermint.types.ValidatorParams

## Hierarchy

- [`Message`](Message.md)<[`ValidatorParams`](params.ValidatorParams.md)\>

  ↳ **`ValidatorParams`**

## Table of contents

### Constructors

- [constructor](params.ValidatorParams.md#constructor)

### Properties

- [pubKeyTypes](params.ValidatorParams.md#pubkeytypes)
- [fields](params.ValidatorParams.md#fields)
- [runtime](params.ValidatorParams.md#runtime)
- [typeName](params.ValidatorParams.md#typename)

### Methods

- [clone](params.ValidatorParams.md#clone)
- [equals](params.ValidatorParams.md#equals)
- [fromBinary](params.ValidatorParams.md#frombinary)
- [fromJson](params.ValidatorParams.md#fromjson)
- [fromJsonString](params.ValidatorParams.md#fromjsonstring)
- [getType](params.ValidatorParams.md#gettype)
- [toBinary](params.ValidatorParams.md#tobinary)
- [toJson](params.ValidatorParams.md#tojson)
- [toJsonString](params.ValidatorParams.md#tojsonstring)
- [equals](params.ValidatorParams.md#equals-1)
- [fromBinary](params.ValidatorParams.md#frombinary-1)
- [fromJson](params.ValidatorParams.md#fromjson-1)
- [fromJsonString](params.ValidatorParams.md#fromjsonstring-1)

## Constructors

### constructor

• **new ValidatorParams**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ValidatorParams`](params.ValidatorParams.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:196](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L196)

## Properties

### pubKeyTypes

• **pubKeyTypes**: `string`[] = `[]`

**`Generated`**

from field: repeated string pub_key_types = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:194](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L194)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:203](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L203)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:201](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L201)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.ValidatorParams"``

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:202](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L202)

## Methods

### clone

▸ **clone**(): [`ValidatorParams`](params.ValidatorParams.md)

Create a deep copy.

#### Returns

[`ValidatorParams`](params.ValidatorParams.md)

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
| `other` | `undefined` \| ``null`` \| [`ValidatorParams`](params.ValidatorParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ValidatorParams`](params.ValidatorParams.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ValidatorParams`](params.ValidatorParams.md)

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

[`ValidatorParams`](params.ValidatorParams.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ValidatorParams`](params.ValidatorParams.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ValidatorParams`](params.ValidatorParams.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ValidatorParams`](params.ValidatorParams.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ValidatorParams`](params.ValidatorParams.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ValidatorParams`](params.ValidatorParams.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ValidatorParams`](params.ValidatorParams.md)\>

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
| `a` | `undefined` \| [`ValidatorParams`](params.ValidatorParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ValidatorParams`](params.ValidatorParams.md)\> |
| `b` | `undefined` \| [`ValidatorParams`](params.ValidatorParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ValidatorParams`](params.ValidatorParams.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:219](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L219)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ValidatorParams`](params.ValidatorParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ValidatorParams`](params.ValidatorParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:207](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L207)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ValidatorParams`](params.ValidatorParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ValidatorParams`](params.ValidatorParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:211](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L211)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ValidatorParams`](params.ValidatorParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ValidatorParams`](params.ValidatorParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:215](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L215)
