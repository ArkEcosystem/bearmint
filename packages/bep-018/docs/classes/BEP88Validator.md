[@bearmint/bep-018 - v0.0.0](../README.md) / BEP88Validator

# Class: BEP88Validator

BEP88

**`Generated`**

from message BEP88Validator

## Hierarchy

- [`Message`](Message.md)<[`BEP88Validator`](BEP88Validator.md)\>

  ↳ **`BEP88Validator`**

## Table of contents

### Constructors

- [constructor](BEP88Validator.md#constructor)

### Properties

- [delegators](BEP88Validator.md#delegators)
- [fields](BEP88Validator.md#fields)
- [runtime](BEP88Validator.md#runtime)
- [typeName](BEP88Validator.md#typename)

### Methods

- [clone](BEP88Validator.md#clone)
- [equals](BEP88Validator.md#equals)
- [fromBinary](BEP88Validator.md#frombinary)
- [fromJson](BEP88Validator.md#fromjson)
- [fromJsonString](BEP88Validator.md#fromjsonstring)
- [getType](BEP88Validator.md#gettype)
- [toBinary](BEP88Validator.md#tobinary)
- [toJson](BEP88Validator.md#tojson)
- [toJsonString](BEP88Validator.md#tojsonstring)
- [equals](BEP88Validator.md#equals-1)
- [fromBinary](BEP88Validator.md#frombinary-1)
- [fromJson](BEP88Validator.md#fromjson-1)
- [fromJsonString](BEP88Validator.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP88Validator**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP88Validator`](BEP88Validator.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:627](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L627)

## Properties

### delegators

• **delegators**: `Object` = `{}`

**`Generated`**

from field: map<string, uint64> delegators = 1;

#### Index signature

▪ [key: `string`]: `bigint`

#### Defined in

[packages/bep-018/source/account_pb.ts:625](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L625)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:634](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L634)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:632](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L632)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP88Validator"``

#### Defined in

[packages/bep-018/source/account_pb.ts:633](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L633)

## Methods

### clone

▸ **clone**(): [`BEP88Validator`](BEP88Validator.md)

Create a deep copy.

#### Returns

[`BEP88Validator`](BEP88Validator.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP88Validator`](BEP88Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP88Validator`](BEP88Validator.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP88Validator`](BEP88Validator.md)

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

[`BEP88Validator`](BEP88Validator.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP88Validator`](BEP88Validator.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP88Validator`](BEP88Validator.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP88Validator`](BEP88Validator.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP88Validator`](BEP88Validator.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP88Validator`](BEP88Validator.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP88Validator`](BEP88Validator.md)\>

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
| `a` | `undefined` \| [`BEP88Validator`](BEP88Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP88Validator`](BEP88Validator.md)\> |
| `b` | `undefined` \| [`BEP88Validator`](BEP88Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP88Validator`](BEP88Validator.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:650](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L650)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP88Validator`](BEP88Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP88Validator`](BEP88Validator.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:638](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L638)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP88Validator`](BEP88Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP88Validator`](BEP88Validator.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:642](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L642)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP88Validator`](BEP88Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP88Validator`](BEP88Validator.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:646](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L646)
