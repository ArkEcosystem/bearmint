[@bearmint/bep-018 - v0.0.0](../README.md) / BEP22Account

# Class: BEP22Account

**`Generated`**

from message BEP22Account

## Hierarchy

- [`Message`](Message.md)<[`BEP22Account`](BEP22Account.md)\>

  ↳ **`BEP22Account`**

## Table of contents

### Constructors

- [constructor](BEP22Account.md#constructor)

### Properties

- [address](BEP22Account.md#address)
- [balances](BEP22Account.md#balances)
- [lockedBalances](BEP22Account.md#lockedbalances)
- [metadata](BEP22Account.md#metadata)
- [moniker](BEP22Account.md#moniker)
- [nonce](BEP22Account.md#nonce)
- [publicKey](BEP22Account.md#publickey)
- [stakes](BEP22Account.md#stakes)
- [validator](BEP22Account.md#validator)
- [fields](BEP22Account.md#fields)
- [runtime](BEP22Account.md#runtime)
- [typeName](BEP22Account.md#typename)

### Methods

- [clone](BEP22Account.md#clone)
- [equals](BEP22Account.md#equals)
- [fromBinary](BEP22Account.md#frombinary)
- [fromJson](BEP22Account.md#fromjson)
- [fromJsonString](BEP22Account.md#fromjsonstring)
- [getType](BEP22Account.md#gettype)
- [toBinary](BEP22Account.md#tobinary)
- [toJson](BEP22Account.md#tojson)
- [toJsonString](BEP22Account.md#tojsonstring)
- [equals](BEP22Account.md#equals-1)
- [fromBinary](BEP22Account.md#frombinary-1)
- [fromJson](BEP22Account.md#fromjson-1)
- [fromJsonString](BEP22Account.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP22Account**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP22Account`](BEP22Account.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:130](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L130)

## Properties

### address

• **address**: `string` = `""`

**`Generated`**

from field: string address = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:88](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L88)

___

### balances

• **balances**: `Object` = `{}`

**`Generated`**

from field: map<string, uint64> balances = 5;

#### Index signature

▪ [key: `string`]: `bigint`

#### Defined in

[packages/bep-018/source/account_pb.ts:108](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L108)

___

### lockedBalances

• **lockedBalances**: `Object` = `{}`

**`Generated`**

from field: map<string, uint64> locked_balances = 6;

#### Index signature

▪ [key: `string`]: `bigint`

#### Defined in

[packages/bep-018/source/account_pb.ts:113](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L113)

___

### metadata

• `Optional` **metadata**: `Struct`

**`Generated`**

from field: google.protobuf.Struct metadata = 9;

#### Defined in

[packages/bep-018/source/account_pb.ts:128](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L128)

___

### moniker

• `Optional` **moniker**: `string`

**`Generated`**

from field: optional string moniker = 3;

#### Defined in

[packages/bep-018/source/account_pb.ts:98](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L98)

___

### nonce

• **nonce**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 nonce = 4;

#### Defined in

[packages/bep-018/source/account_pb.ts:103](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L103)

___

### publicKey

• `Optional` **publicKey**: `string`

**`Generated`**

from field: optional string public_key = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:93](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L93)

___

### stakes

• **stakes**: `Object` = `{}`

**`Generated`**

from field: map<string, uint64> stakes = 7;

#### Index signature

▪ [key: `string`]: `bigint`

#### Defined in

[packages/bep-018/source/account_pb.ts:118](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L118)

___

### validator

• `Optional` **validator**: [`BEP22Validator`](BEP22Validator.md)

**`Generated`**

from field: optional BEP22Validator validator = 8;

#### Defined in

[packages/bep-018/source/account_pb.ts:123](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L123)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:137](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L137)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:135](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L135)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP22Account"``

#### Defined in

[packages/bep-018/source/account_pb.ts:136](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L136)

## Methods

### clone

▸ **clone**(): [`BEP22Account`](BEP22Account.md)

Create a deep copy.

#### Returns

[`BEP22Account`](BEP22Account.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP22Account`](BEP22Account.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP22Account`](BEP22Account.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP22Account`](BEP22Account.md)

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

[`BEP22Account`](BEP22Account.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP22Account`](BEP22Account.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP22Account`](BEP22Account.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP22Account`](BEP22Account.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP22Account`](BEP22Account.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP22Account`](BEP22Account.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP22Account`](BEP22Account.md)\>

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
| `a` | `undefined` \| [`BEP22Account`](BEP22Account.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP22Account`](BEP22Account.md)\> |
| `b` | `undefined` \| [`BEP22Account`](BEP22Account.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP22Account`](BEP22Account.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:161](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L161)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP22Account`](BEP22Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP22Account`](BEP22Account.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:149](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L149)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP22Account`](BEP22Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP22Account`](BEP22Account.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:153](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L153)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP22Account`](BEP22Account.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP22Account`](BEP22Account.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:157](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L157)
