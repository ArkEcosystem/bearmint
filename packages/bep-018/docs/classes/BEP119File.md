[@bearmint/bep-018 - v0.0.0](../README.md) / BEP119File

# Class: BEP119File

**`Generated`**

from message BEP119File

## Hierarchy

- [`Message`](Message.md)<[`BEP119File`](BEP119File.md)\>

  ↳ **`BEP119File`**

## Table of contents

### Constructors

- [constructor](BEP119File.md#constructor)

### Properties

- [count](BEP119File.md#count)
- [records](BEP119File.md#records)
- [fields](BEP119File.md#fields)
- [runtime](BEP119File.md#runtime)
- [typeName](BEP119File.md#typename)

### Methods

- [clone](BEP119File.md#clone)
- [equals](BEP119File.md#equals)
- [fromBinary](BEP119File.md#frombinary)
- [fromJson](BEP119File.md#fromjson)
- [fromJsonString](BEP119File.md#fromjsonstring)
- [getType](BEP119File.md#gettype)
- [toBinary](BEP119File.md#tobinary)
- [toJson](BEP119File.md#tojson)
- [toJsonString](BEP119File.md#tojsonstring)
- [equals](BEP119File.md#equals-1)
- [fromBinary](BEP119File.md#frombinary-1)
- [fromJson](BEP119File.md#fromjson-1)
- [fromJsonString](BEP119File.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP119File**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP119File`](BEP119File.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:450](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L450)

## Properties

### count

• **count**: `number` = `0`

**`Generated`**

from field: uint32 count = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:443](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L443)

___

### records

• **records**: [`BEP119Record`](BEP119Record.md)[] = `[]`

**`Generated`**

from field: repeated BEP119Record records = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:448](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L448)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:457](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L457)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:455](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L455)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP119File"``

#### Defined in

[packages/bep-018/source/account_pb.ts:456](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L456)

## Methods

### clone

▸ **clone**(): [`BEP119File`](BEP119File.md)

Create a deep copy.

#### Returns

[`BEP119File`](BEP119File.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP119File`](BEP119File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119File`](BEP119File.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP119File`](BEP119File.md)

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

[`BEP119File`](BEP119File.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP119File`](BEP119File.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119File`](BEP119File.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP119File`](BEP119File.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119File`](BEP119File.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP119File`](BEP119File.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP119File`](BEP119File.md)\>

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
| `a` | `undefined` \| [`BEP119File`](BEP119File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119File`](BEP119File.md)\> |
| `b` | `undefined` \| [`BEP119File`](BEP119File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119File`](BEP119File.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:474](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L474)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP119File`](BEP119File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP119File`](BEP119File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:462](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L462)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP119File`](BEP119File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119File`](BEP119File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:466](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L466)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP119File`](BEP119File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119File`](BEP119File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:470](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L470)
