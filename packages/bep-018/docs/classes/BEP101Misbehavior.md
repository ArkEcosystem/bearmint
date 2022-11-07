[@bearmint/bep-018 - v0.0.0](../README.md) / BEP101Misbehavior

# Class: BEP101Misbehavior

Slashing

**`Generated`**

from message BEP101Misbehavior

## Hierarchy

- [`Message`](Message.md)<[`BEP101Misbehavior`](BEP101Misbehavior.md)\>

  ↳ **`BEP101Misbehavior`**

## Table of contents

### Constructors

- [constructor](BEP101Misbehavior.md#constructor)

### Properties

- [height](BEP101Misbehavior.md#height)
- [totalVotingPower](BEP101Misbehavior.md#totalvotingpower)
- [type](BEP101Misbehavior.md#type)
- [fields](BEP101Misbehavior.md#fields)
- [runtime](BEP101Misbehavior.md#runtime)
- [typeName](BEP101Misbehavior.md#typename)

### Methods

- [clone](BEP101Misbehavior.md#clone)
- [equals](BEP101Misbehavior.md#equals)
- [fromBinary](BEP101Misbehavior.md#frombinary)
- [fromJson](BEP101Misbehavior.md#fromjson)
- [fromJsonString](BEP101Misbehavior.md#fromjsonstring)
- [getType](BEP101Misbehavior.md#gettype)
- [toBinary](BEP101Misbehavior.md#tobinary)
- [toJson](BEP101Misbehavior.md#tojson)
- [toJsonString](BEP101Misbehavior.md#tojsonstring)
- [equals](BEP101Misbehavior.md#equals-1)
- [fromBinary](BEP101Misbehavior.md#frombinary-1)
- [fromJson](BEP101Misbehavior.md#fromjson-1)
- [fromJsonString](BEP101Misbehavior.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP101Misbehavior**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP101Misbehavior`](BEP101Misbehavior.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:187](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L187)

## Properties

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 height = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:180](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L180)

___

### totalVotingPower

• **totalVotingPower**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 total_voting_power = 3;

#### Defined in

[packages/bep-018/source/account_pb.ts:185](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L185)

___

### type

• **type**: `number` = `0`

**`Generated`**

from field: uint32 type = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:175](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L175)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:194](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L194)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:192](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L192)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP101Misbehavior"``

#### Defined in

[packages/bep-018/source/account_pb.ts:193](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L193)

## Methods

### clone

▸ **clone**(): [`BEP101Misbehavior`](BEP101Misbehavior.md)

Create a deep copy.

#### Returns

[`BEP101Misbehavior`](BEP101Misbehavior.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP101Misbehavior`](BEP101Misbehavior.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP101Misbehavior`](BEP101Misbehavior.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP101Misbehavior`](BEP101Misbehavior.md)

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

[`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP101Misbehavior`](BEP101Misbehavior.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP101Misbehavior`](BEP101Misbehavior.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP101Misbehavior`](BEP101Misbehavior.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP101Misbehavior`](BEP101Misbehavior.md)\>

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
| `a` | `undefined` \| [`BEP101Misbehavior`](BEP101Misbehavior.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP101Misbehavior`](BEP101Misbehavior.md)\> |
| `b` | `undefined` \| [`BEP101Misbehavior`](BEP101Misbehavior.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP101Misbehavior`](BEP101Misbehavior.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:212](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L212)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:200](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L200)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:204](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L204)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP101Misbehavior`](BEP101Misbehavior.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:208](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L208)
