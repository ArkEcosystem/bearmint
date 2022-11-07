[@bearmint/bep-018 - v0.0.0](../README.md) / BEP118File

# Class: BEP118File

**`Generated`**

from message BEP118File

## Hierarchy

- [`Message`](Message.md)<[`BEP118File`](BEP118File.md)\>

  ↳ **`BEP118File`**

## Table of contents

### Constructors

- [constructor](BEP118File.md#constructor)

### Properties

- [count](BEP118File.md#count)
- [records](BEP118File.md#records)
- [fields](BEP118File.md#fields)
- [runtime](BEP118File.md#runtime)
- [typeName](BEP118File.md#typename)

### Methods

- [clone](BEP118File.md#clone)
- [equals](BEP118File.md#equals)
- [fromBinary](BEP118File.md#frombinary)
- [fromJson](BEP118File.md#fromjson)
- [fromJsonString](BEP118File.md#fromjsonstring)
- [getType](BEP118File.md#gettype)
- [toBinary](BEP118File.md#tobinary)
- [toJson](BEP118File.md#tojson)
- [toJsonString](BEP118File.md#tojsonstring)
- [equals](BEP118File.md#equals-1)
- [fromBinary](BEP118File.md#frombinary-1)
- [fromJson](BEP118File.md#fromjson-1)
- [fromJsonString](BEP118File.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP118File**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP118File`](BEP118File.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:319](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L319)

## Properties

### count

• **count**: `number` = `0`

**`Generated`**

from field: uint32 count = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:312](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L312)

___

### records

• **records**: [`BEP118Record`](BEP118Record.md)[] = `[]`

**`Generated`**

from field: repeated BEP118Record records = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:317](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L317)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:326](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L326)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:324](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L324)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP118File"``

#### Defined in

[packages/bep-018/source/account_pb.ts:325](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L325)

## Methods

### clone

▸ **clone**(): [`BEP118File`](BEP118File.md)

Create a deep copy.

#### Returns

[`BEP118File`](BEP118File.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP118File`](BEP118File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118File`](BEP118File.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP118File`](BEP118File.md)

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

[`BEP118File`](BEP118File.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP118File`](BEP118File.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118File`](BEP118File.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP118File`](BEP118File.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118File`](BEP118File.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP118File`](BEP118File.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP118File`](BEP118File.md)\>

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
| `a` | `undefined` \| [`BEP118File`](BEP118File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118File`](BEP118File.md)\> |
| `b` | `undefined` \| [`BEP118File`](BEP118File.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118File`](BEP118File.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:343](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L343)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP118File`](BEP118File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP118File`](BEP118File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:331](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L331)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP118File`](BEP118File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118File`](BEP118File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:335](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L335)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP118File`](BEP118File.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118File`](BEP118File.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:339](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L339)
