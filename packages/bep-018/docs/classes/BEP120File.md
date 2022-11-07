[@bearmint/bep-018 - v0.0.0](../README.md) / BEP120File

# Class: BEP120File

**`Generated`**

from message BEP120File

## Hierarchy

- [`Message`](Message.md)<[`BEP120File`](BEP120File.md)\>

  ↳ **`BEP120File`**

## Table of contents

### Constructors

- [constructor](BEP120File.md#constructor)

### Properties

- [count](BEP120File.md#count)
- [jailed](BEP120File.md#jailed)
- [records](BEP120File.md#records)
- [fields](BEP120File.md#fields)
- [runtime](BEP120File.md#runtime)
- [typeName](BEP120File.md#typename)

### Methods

- [clone](BEP120File.md#clone)
- [equals](BEP120File.md#equals)
- [fromBinary](BEP120File.md#frombinary)
- [fromJson](BEP120File.md#fromjson)
- [fromJsonString](BEP120File.md#fromjsonstring)
- [getType](BEP120File.md#gettype)
- [toBinary](BEP120File.md#tobinary)
- [toJson](BEP120File.md#tojson)
- [toJsonString](BEP120File.md#tojsonstring)
- [equals](BEP120File.md#equals-1)
- [fromBinary](BEP120File.md#frombinary-1)
- [fromJson](BEP120File.md#fromjson-1)
- [fromJsonString](BEP120File.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP120File**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP120File`](BEP120File.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:586](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L586)

## Properties

### count

• **count**: `number` = `0`

**`Generated`**

from field: uint32 count = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:574](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L574)

___

### jailed

• **jailed**: `boolean` = `false`

**`Generated`**

from field: bool jailed = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:579](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L579)

___

### records

• **records**: [`BEP120Record`](BEP120Record.md)[] = `[]`

**`Generated`**

from field: repeated BEP120Record records = 3;

#### Defined in

[packages/bep-018/source/account_pb.ts:584](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L584)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:593](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L593)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:591](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L591)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP120File"``

#### Defined in

[packages/bep-018/source/account_pb.ts:592](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L592)

## Methods

### clone

▸ **clone**(): [`BEP120File`](BEP120File.md)

Create a deep copy.

#### Returns

[`BEP120File`](BEP120File.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP120File`](BEP120File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120File`](BEP120File.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP120File`](BEP120File.md)

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

[`BEP120File`](BEP120File.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP120File`](BEP120File.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120File`](BEP120File.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP120File`](BEP120File.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120File`](BEP120File.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP120File`](BEP120File.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP120File`](BEP120File.md)\>

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
| `a` | `undefined` \| [`BEP120File`](BEP120File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120File`](BEP120File.md)\> |
| `b` | `undefined` \| [`BEP120File`](BEP120File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120File`](BEP120File.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:611](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L611)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP120File`](BEP120File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP120File`](BEP120File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:599](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L599)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP120File`](BEP120File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120File`](BEP120File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:603](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L603)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP120File`](BEP120File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120File`](BEP120File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:607](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L607)
