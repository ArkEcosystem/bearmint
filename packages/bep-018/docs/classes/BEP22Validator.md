[@bearmint/bep-018 - v0.0.0](../README.md) / BEP22Validator

# Class: BEP22Validator

**`Generated`**

from message BEP22Validator

## Hierarchy

- [`Message`](Message.md)<[`BEP22Validator`](BEP22Validator.md)\>

  ↳ **`BEP22Validator`**

## Table of contents

### Constructors

- [constructor](BEP22Validator.md#constructor)

### Properties

- [address](BEP22Validator.md#address)
- [delegators](BEP22Validator.md#delegators)
- [power](BEP22Validator.md#power)
- [publicKey](BEP22Validator.md#publickey)
- [fields](BEP22Validator.md#fields)
- [runtime](BEP22Validator.md#runtime)
- [typeName](BEP22Validator.md#typename)

### Methods

- [clone](BEP22Validator.md#clone)
- [equals](BEP22Validator.md#equals)
- [fromBinary](BEP22Validator.md#frombinary)
- [fromJson](BEP22Validator.md#fromjson)
- [fromJsonString](BEP22Validator.md#fromjsonstring)
- [getType](BEP22Validator.md#gettype)
- [toBinary](BEP22Validator.md#tobinary)
- [toJson](BEP22Validator.md#tojson)
- [toJsonString](BEP22Validator.md#tojsonstring)
- [equals](BEP22Validator.md#equals-1)
- [fromBinary](BEP22Validator.md#frombinary-1)
- [fromJson](BEP22Validator.md#fromjson-1)
- [fromJsonString](BEP22Validator.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP22Validator**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP22Validator`](BEP22Validator.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L50)

## Properties

### address

• **address**: `string` = `""`

**`Generated`**

from field: string address = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L33)

___

### delegators

• **delegators**: `Object` = `{}`

**`Generated`**

from field: map<string, uint64> delegators = 4;

#### Index signature

▪ [key: `string`]: `bigint`

#### Defined in

[packages/bep-018/source/account_pb.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L48)

___

### power

• **power**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 power = 3;

#### Defined in

[packages/bep-018/source/account_pb.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L43)

___

### publicKey

• **publicKey**: `string` = `""`

**`Generated`**

from field: string public_key = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L38)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:57](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L57)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:55](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L55)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP22Validator"``

#### Defined in

[packages/bep-018/source/account_pb.ts:56](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L56)

## Methods

### clone

▸ **clone**(): [`BEP22Validator`](BEP22Validator.md)

Create a deep copy.

#### Returns

[`BEP22Validator`](BEP22Validator.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP22Validator`](BEP22Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP22Validator`](BEP22Validator.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP22Validator`](BEP22Validator.md)

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

[`BEP22Validator`](BEP22Validator.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP22Validator`](BEP22Validator.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP22Validator`](BEP22Validator.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP22Validator`](BEP22Validator.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP22Validator`](BEP22Validator.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP22Validator`](BEP22Validator.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP22Validator`](BEP22Validator.md)\>

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
| `a` | `undefined` \| [`BEP22Validator`](BEP22Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP22Validator`](BEP22Validator.md)\> |
| `b` | `undefined` \| [`BEP22Validator`](BEP22Validator.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP22Validator`](BEP22Validator.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:76](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L76)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP22Validator`](BEP22Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP22Validator`](BEP22Validator.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:64](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L64)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP22Validator`](BEP22Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP22Validator`](BEP22Validator.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:68](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L68)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP22Validator`](BEP22Validator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP22Validator`](BEP22Validator.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:72](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L72)
