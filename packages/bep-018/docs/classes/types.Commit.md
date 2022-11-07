[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / Commit

# Class: Commit

[types](../modules/types.md).Commit

Commit contains the evidence that a block was committed by a set of validators.

**`Generated`**

from message tendermint.types.Commit

## Hierarchy

- [`Message`](Message.md)<[`Commit`](types.Commit.md)\>

  ↳ **`Commit`**

## Table of contents

### Constructors

- [constructor](types.Commit.md#constructor)

### Properties

- [blockId](types.Commit.md#blockid)
- [height](types.Commit.md#height)
- [round](types.Commit.md#round)
- [signatures](types.Commit.md#signatures)
- [fields](types.Commit.md#fields)
- [runtime](types.Commit.md#runtime)
- [typeName](types.Commit.md#typename)

### Methods

- [clone](types.Commit.md#clone)
- [equals](types.Commit.md#equals)
- [fromBinary](types.Commit.md#frombinary)
- [fromJson](types.Commit.md#fromjson)
- [fromJsonString](types.Commit.md#fromjsonstring)
- [getType](types.Commit.md#gettype)
- [toBinary](types.Commit.md#tobinary)
- [toJson](types.Commit.md#tojson)
- [toJsonString](types.Commit.md#tojsonstring)
- [equals](types.Commit.md#equals-1)
- [fromBinary](types.Commit.md#frombinary-1)
- [fromJson](types.Commit.md#fromjson-1)
- [fromJsonString](types.Commit.md#fromjsonstring-1)

## Constructors

### constructor

• **new Commit**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Commit`](types.Commit.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:521](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L521)

## Properties

### blockId

• `Optional` **blockId**: [`BlockID`](types.BlockID.md)

**`Generated`**

from field: tendermint.types.BlockID block_id = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:514](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L514)

___

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:504](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L504)

___

### round

• **round**: `number` = `0`

**`Generated`**

from field: int32 round = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:509](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L509)

___

### signatures

• **signatures**: [`CommitSig`](types.CommitSig.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.types.CommitSig signatures = 4;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:519](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L519)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:528](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L528)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:526](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L526)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.Commit"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:527](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L527)

## Methods

### clone

▸ **clone**(): [`Commit`](types.Commit.md)

Create a deep copy.

#### Returns

[`Commit`](types.Commit.md)

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
| `other` | `undefined` \| ``null`` \| [`Commit`](types.Commit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Commit`](types.Commit.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Commit`](types.Commit.md)

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

[`Commit`](types.Commit.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Commit`](types.Commit.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Commit`](types.Commit.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Commit`](types.Commit.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Commit`](types.Commit.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Commit`](types.Commit.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Commit`](types.Commit.md)\>

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
| `a` | `undefined` \| [`Commit`](types.Commit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Commit`](types.Commit.md)\> |
| `b` | `undefined` \| [`Commit`](types.Commit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Commit`](types.Commit.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:547](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L547)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Commit`](types.Commit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Commit`](types.Commit.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:535](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L535)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Commit`](types.Commit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Commit`](types.Commit.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:539](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L539)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Commit`](types.Commit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Commit`](types.Commit.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:543](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L543)
