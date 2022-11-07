[@bearmint/bep-018 - v0.0.0](../README.md) / BEP120Record

# Class: BEP120Record

**`Generated`**

from message BEP120Record

## Hierarchy

- [`Message`](Message.md)<[`BEP120Record`](BEP120Record.md)\>

  ↳ **`BEP120Record`**

## Table of contents

### Constructors

- [constructor](BEP120Record.md#constructor)

### Properties

- [misbehavior](BEP120Record.md#misbehavior)
- [sentence](BEP120Record.md#sentence)
- [fields](BEP120Record.md#fields)
- [runtime](BEP120Record.md#runtime)
- [typeName](BEP120Record.md#typename)

### Methods

- [clone](BEP120Record.md#clone)
- [equals](BEP120Record.md#equals)
- [fromBinary](BEP120Record.md#frombinary)
- [fromJson](BEP120Record.md#fromjson)
- [fromJsonString](BEP120Record.md#fromjsonstring)
- [getType](BEP120Record.md#gettype)
- [toBinary](BEP120Record.md#tobinary)
- [toJson](BEP120Record.md#tojson)
- [toJsonString](BEP120Record.md#tojsonstring)
- [equals](BEP120Record.md#equals-1)
- [fromBinary](BEP120Record.md#frombinary-1)
- [fromJson](BEP120Record.md#fromjson-1)
- [fromJsonString](BEP120Record.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP120Record**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP120Record`](BEP120Record.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:538](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L538)

## Properties

### misbehavior

• `Optional` **misbehavior**: [`BEP101Misbehavior`](BEP101Misbehavior.md)

**`Generated`**

from field: BEP101Misbehavior misbehavior = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:531](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L531)

___

### sentence

• `Optional` **sentence**: [`BEP120Sentence`](BEP120Sentence.md)

**`Generated`**

from field: BEP120Sentence sentence = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:536](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L536)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:545](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L545)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:543](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L543)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP120Record"``

#### Defined in

[packages/bep-018/source/account_pb.ts:544](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L544)

## Methods

### clone

▸ **clone**(): [`BEP120Record`](BEP120Record.md)

Create a deep copy.

#### Returns

[`BEP120Record`](BEP120Record.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP120Record`](BEP120Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120Record`](BEP120Record.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP120Record`](BEP120Record.md)

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

[`BEP120Record`](BEP120Record.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP120Record`](BEP120Record.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120Record`](BEP120Record.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP120Record`](BEP120Record.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120Record`](BEP120Record.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP120Record`](BEP120Record.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP120Record`](BEP120Record.md)\>

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
| `a` | `undefined` \| [`BEP120Record`](BEP120Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120Record`](BEP120Record.md)\> |
| `b` | `undefined` \| [`BEP120Record`](BEP120Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120Record`](BEP120Record.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:562](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L562)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP120Record`](BEP120Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP120Record`](BEP120Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:550](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L550)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP120Record`](BEP120Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120Record`](BEP120Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:554](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L554)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP120Record`](BEP120Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120Record`](BEP120Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:558](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L558)
