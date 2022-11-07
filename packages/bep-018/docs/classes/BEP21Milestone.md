[@bearmint/bep-018 - v0.0.0](../README.md) / BEP21Milestone

# Class: BEP21Milestone

**`Generated`**

from message BEP21Milestone

## Hierarchy

- [`Message`](Message.md)<[`BEP21Milestone`](BEP21Milestone.md)\>

  ↳ **`BEP21Milestone`**

## Table of contents

### Constructors

- [constructor](BEP21Milestone.md#constructor)

### Properties

- [blockNumber](BEP21Milestone.md#blocknumber)
- [parameters](BEP21Milestone.md#parameters)
- [fields](BEP21Milestone.md#fields)
- [runtime](BEP21Milestone.md#runtime)
- [typeName](BEP21Milestone.md#typename)

### Methods

- [clone](BEP21Milestone.md#clone)
- [equals](BEP21Milestone.md#equals)
- [fromBinary](BEP21Milestone.md#frombinary)
- [fromJson](BEP21Milestone.md#fromjson)
- [fromJsonString](BEP21Milestone.md#fromjsonstring)
- [getType](BEP21Milestone.md#gettype)
- [toBinary](BEP21Milestone.md#tobinary)
- [toJson](BEP21Milestone.md#tojson)
- [toJsonString](BEP21Milestone.md#tojsonstring)
- [equals](BEP21Milestone.md#equals-1)
- [fromBinary](BEP21Milestone.md#frombinary-1)
- [fromJson](BEP21Milestone.md#fromjson-1)
- [fromJsonString](BEP21Milestone.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP21Milestone**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP21Milestone`](BEP21Milestone.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/state_pb.ts:101](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L101)

## Properties

### blockNumber

• **blockNumber**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 block_number = 1;

#### Defined in

[packages/bep-018/source/state_pb.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L94)

___

### parameters

• `Optional` **parameters**: [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

**`Generated`**

from field: BEP21MilestoneParameters parameters = 2;

#### Defined in

[packages/bep-018/source/state_pb.ts:99](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L99)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/state_pb.ts:108](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L108)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/state_pb.ts:106](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L106)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP21Milestone"``

#### Defined in

[packages/bep-018/source/state_pb.ts:107](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L107)

## Methods

### clone

▸ **clone**(): [`BEP21Milestone`](BEP21Milestone.md)

Create a deep copy.

#### Returns

[`BEP21Milestone`](BEP21Milestone.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP21Milestone`](BEP21Milestone.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP21Milestone`](BEP21Milestone.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP21Milestone`](BEP21Milestone.md)

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

[`BEP21Milestone`](BEP21Milestone.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP21Milestone`](BEP21Milestone.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP21Milestone`](BEP21Milestone.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP21Milestone`](BEP21Milestone.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP21Milestone`](BEP21Milestone.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP21Milestone`](BEP21Milestone.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP21Milestone`](BEP21Milestone.md)\>

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
| `a` | `undefined` \| [`BEP21Milestone`](BEP21Milestone.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP21Milestone`](BEP21Milestone.md)\> |
| `b` | `undefined` \| [`BEP21Milestone`](BEP21Milestone.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP21Milestone`](BEP21Milestone.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/state_pb.ts:125](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L125)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP21Milestone`](BEP21Milestone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP21Milestone`](BEP21Milestone.md)

#### Defined in

[packages/bep-018/source/state_pb.ts:113](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L113)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP21Milestone`](BEP21Milestone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP21Milestone`](BEP21Milestone.md)

#### Defined in

[packages/bep-018/source/state_pb.ts:117](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L117)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP21Milestone`](BEP21Milestone.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP21Milestone`](BEP21Milestone.md)

#### Defined in

[packages/bep-018/source/state_pb.ts:121](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L121)
