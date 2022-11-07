[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / Validator

# Class: Validator

[abci](../modules/abci.md).Validator

Validator

**`Generated`**

from message tendermint.abci.Validator

## Hierarchy

- [`Message`](Message.md)<[`Validator`](abci.Validator.md)\>

  ↳ **`Validator`**

## Table of contents

### Constructors

- [constructor](abci.Validator.md#constructor)

### Properties

- [address](abci.Validator.md#address)
- [power](abci.Validator.md#power)
- [fields](abci.Validator.md#fields)
- [runtime](abci.Validator.md#runtime)
- [typeName](abci.Validator.md#typename)

### Methods

- [clone](abci.Validator.md#clone)
- [equals](abci.Validator.md#equals)
- [fromBinary](abci.Validator.md#frombinary)
- [fromJson](abci.Validator.md#fromjson)
- [fromJsonString](abci.Validator.md#fromjsonstring)
- [getType](abci.Validator.md#gettype)
- [toBinary](abci.Validator.md#tobinary)
- [toJson](abci.Validator.md#tojson)
- [toJsonString](abci.Validator.md#tojsonstring)
- [equals](abci.Validator.md#equals-1)
- [fromBinary](abci.Validator.md#frombinary-1)
- [fromJson](abci.Validator.md#fromjson-1)
- [fromJsonString](abci.Validator.md#fromjsonstring-1)

## Constructors

### constructor

• **new Validator**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Validator`](abci.Validator.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2439](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2439)

## Properties

### address

• **address**: `Uint8Array`

The first 20 bytes of SHA256(public key)

**`Generated`**

from field: bytes address = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2428](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2428)

___

### power

• **power**: `bigint` = `protoInt64.zero`

PubKey pub_key = 2 [(gogoproto.nullable)=false];

The voting power

**`Generated`**

from field: int64 power = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2437](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2437)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2446](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2446)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2444](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2444)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.Validator"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2445](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2445)

## Methods

### clone

▸ **clone**(): [`Validator`](abci.Validator.md)

Create a deep copy.

#### Returns

[`Validator`](abci.Validator.md)

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
| `other` | `undefined` \| ``null`` \| [`Validator`](abci.Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Validator`](abci.Validator.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Validator`](abci.Validator.md)

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

[`Validator`](abci.Validator.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Validator`](abci.Validator.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Validator`](abci.Validator.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Validator`](abci.Validator.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Validator`](abci.Validator.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Validator`](abci.Validator.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Validator`](abci.Validator.md)\>

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
| `a` | `undefined` \| [`Validator`](abci.Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Validator`](abci.Validator.md)\> |
| `b` | `undefined` \| [`Validator`](abci.Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Validator`](abci.Validator.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2463](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2463)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Validator`](abci.Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Validator`](abci.Validator.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2451](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2451)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Validator`](abci.Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Validator`](abci.Validator.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2455](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2455)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Validator`](abci.Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Validator`](abci.Validator.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2459](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2459)
