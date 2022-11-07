[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / CommitSig

# Class: CommitSig

[types](../modules/types.md).CommitSig

CommitSig is a part of the Vote included in a Commit.

**`Generated`**

from message tendermint.types.CommitSig

## Hierarchy

- [`Message`](Message.md)<[`CommitSig`](types.CommitSig.md)\>

  ↳ **`CommitSig`**

## Table of contents

### Constructors

- [constructor](types.CommitSig.md#constructor)

### Properties

- [blockIdFlag](types.CommitSig.md#blockidflag)
- [signature](types.CommitSig.md#signature)
- [timestamp](types.CommitSig.md#timestamp)
- [validatorAddress](types.CommitSig.md#validatoraddress)
- [fields](types.CommitSig.md#fields)
- [runtime](types.CommitSig.md#runtime)
- [typeName](types.CommitSig.md#typename)

### Methods

- [clone](types.CommitSig.md#clone)
- [equals](types.CommitSig.md#equals)
- [fromBinary](types.CommitSig.md#frombinary)
- [fromJson](types.CommitSig.md#fromjson)
- [fromJsonString](types.CommitSig.md#fromjsonstring)
- [getType](types.CommitSig.md#gettype)
- [toBinary](types.CommitSig.md#tobinary)
- [toJson](types.CommitSig.md#tojson)
- [toJsonString](types.CommitSig.md#tojsonstring)
- [equals](types.CommitSig.md#equals-1)
- [fromBinary](types.CommitSig.md#frombinary-1)
- [fromJson](types.CommitSig.md#fromjson-1)
- [fromJsonString](types.CommitSig.md#fromjsonstring-1)

## Constructors

### constructor

• **new CommitSig**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`CommitSig`](types.CommitSig.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:578](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L578)

## Properties

### blockIdFlag

• **blockIdFlag**: [`BlockIDFlag`](../enums/types.BlockIDFlag.md) = `BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN`

**`Generated`**

from field: tendermint.types.BlockIDFlag block_id_flag = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:561](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L561)

___

### signature

• **signature**: `Uint8Array`

**`Generated`**

from field: bytes signature = 4;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:576](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L576)

___

### timestamp

• `Optional` **timestamp**: `Timestamp`

**`Generated`**

from field: google.protobuf.Timestamp timestamp = 3;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:571](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L571)

___

### validatorAddress

• **validatorAddress**: `Uint8Array`

**`Generated`**

from field: bytes validator_address = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:566](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L566)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:585](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L585)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:583](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L583)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.CommitSig"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:584](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L584)

## Methods

### clone

▸ **clone**(): [`CommitSig`](types.CommitSig.md)

Create a deep copy.

#### Returns

[`CommitSig`](types.CommitSig.md)

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
| `other` | `undefined` \| ``null`` \| [`CommitSig`](types.CommitSig.md) \| [`PlainMessage`](../README.md#plainmessage)<[`CommitSig`](types.CommitSig.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CommitSig`](types.CommitSig.md)

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

[`CommitSig`](types.CommitSig.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CommitSig`](types.CommitSig.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CommitSig`](types.CommitSig.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CommitSig`](types.CommitSig.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CommitSig`](types.CommitSig.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`CommitSig`](types.CommitSig.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`CommitSig`](types.CommitSig.md)\>

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
| `a` | `undefined` \| [`CommitSig`](types.CommitSig.md) \| [`PlainMessage`](../README.md#plainmessage)<[`CommitSig`](types.CommitSig.md)\> |
| `b` | `undefined` \| [`CommitSig`](types.CommitSig.md) \| [`PlainMessage`](../README.md#plainmessage)<[`CommitSig`](types.CommitSig.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:604](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L604)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`CommitSig`](types.CommitSig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`CommitSig`](types.CommitSig.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:592](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L592)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`CommitSig`](types.CommitSig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CommitSig`](types.CommitSig.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:596](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L596)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`CommitSig`](types.CommitSig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`CommitSig`](types.CommitSig.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:600](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L600)
