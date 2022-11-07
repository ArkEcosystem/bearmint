[@bearmint/bep-018 - v0.0.0](../README.md) / [params](../modules/params.md) / HashedParams

# Class: HashedParams

[params](../modules/params.md).HashedParams

HashedParams is a subset of ConsensusParams.

It is hashed into the Header.ConsensusHash.

**`Generated`**

from message tendermint.types.HashedParams

## Hierarchy

- [`Message`](Message.md)<[`HashedParams`](params.HashedParams.md)\>

  ↳ **`HashedParams`**

## Table of contents

### Constructors

- [constructor](params.HashedParams.md#constructor)

### Properties

- [blockMaxBytes](params.HashedParams.md#blockmaxbytes)
- [blockMaxGas](params.HashedParams.md#blockmaxgas)
- [fields](params.HashedParams.md#fields)
- [runtime](params.HashedParams.md#runtime)
- [typeName](params.HashedParams.md#typename)

### Methods

- [clone](params.HashedParams.md#clone)
- [equals](params.HashedParams.md#equals)
- [fromBinary](params.HashedParams.md#frombinary)
- [fromJson](params.HashedParams.md#fromjson)
- [fromJsonString](params.HashedParams.md#fromjsonstring)
- [getType](params.HashedParams.md#gettype)
- [toBinary](params.HashedParams.md#tobinary)
- [toJson](params.HashedParams.md#tojson)
- [toJsonString](params.HashedParams.md#tojsonstring)
- [equals](params.HashedParams.md#equals-1)
- [fromBinary](params.HashedParams.md#frombinary-1)
- [fromJson](params.HashedParams.md#fromjson-1)
- [fromJsonString](params.HashedParams.md#fromjsonstring-1)

## Constructors

### constructor

• **new HashedParams**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`HashedParams`](params.HashedParams.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:281](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L281)

## Properties

### blockMaxBytes

• **blockMaxBytes**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 block_max_bytes = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:274](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L274)

___

### blockMaxGas

• **blockMaxGas**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 block_max_gas = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:279](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L279)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:288](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L288)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:286](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L286)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.HashedParams"``

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:287](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L287)

## Methods

### clone

▸ **clone**(): [`HashedParams`](params.HashedParams.md)

Create a deep copy.

#### Returns

[`HashedParams`](params.HashedParams.md)

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
| `other` | `undefined` \| ``null`` \| [`HashedParams`](params.HashedParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`HashedParams`](params.HashedParams.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HashedParams`](params.HashedParams.md)

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

[`HashedParams`](params.HashedParams.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HashedParams`](params.HashedParams.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HashedParams`](params.HashedParams.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HashedParams`](params.HashedParams.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HashedParams`](params.HashedParams.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HashedParams`](params.HashedParams.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HashedParams`](params.HashedParams.md)\>

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
| `a` | `undefined` \| [`HashedParams`](params.HashedParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`HashedParams`](params.HashedParams.md)\> |
| `b` | `undefined` \| [`HashedParams`](params.HashedParams.md) \| [`PlainMessage`](../README.md#plainmessage)<[`HashedParams`](params.HashedParams.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:305](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L305)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HashedParams`](params.HashedParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HashedParams`](params.HashedParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:293](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L293)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HashedParams`](params.HashedParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HashedParams`](params.HashedParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:297](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L297)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HashedParams`](params.HashedParams.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HashedParams`](params.HashedParams.md)

#### Defined in

[packages/bep-018/source/tendermint/types/params_pb.ts:301](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/params_pb.ts#L301)
