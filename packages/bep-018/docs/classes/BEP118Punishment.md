[@bearmint/bep-018 - v0.0.0](../README.md) / BEP118Punishment

# Class: BEP118Punishment

BEP118

**`Generated`**

from message BEP118Punishment

## Hierarchy

- [`Message`](Message.md)<[`BEP118Punishment`](BEP118Punishment.md)\>

  ↳ **`BEP118Punishment`**

## Table of contents

### Constructors

- [constructor](BEP118Punishment.md#constructor)

### Properties

- [denomination](BEP118Punishment.md#denomination)
- [percentage](BEP118Punishment.md#percentage)
- [fields](BEP118Punishment.md#fields)
- [runtime](BEP118Punishment.md#runtime)
- [typeName](BEP118Punishment.md#typename)

### Methods

- [clone](BEP118Punishment.md#clone)
- [equals](BEP118Punishment.md#equals)
- [fromBinary](BEP118Punishment.md#frombinary)
- [fromJson](BEP118Punishment.md#fromjson)
- [fromJsonString](BEP118Punishment.md#fromjsonstring)
- [getType](BEP118Punishment.md#gettype)
- [toBinary](BEP118Punishment.md#tobinary)
- [toJson](BEP118Punishment.md#tojson)
- [toJsonString](BEP118Punishment.md#tojsonstring)
- [equals](BEP118Punishment.md#equals-1)
- [fromBinary](BEP118Punishment.md#frombinary-1)
- [fromJson](BEP118Punishment.md#fromjson-1)
- [fromJsonString](BEP118Punishment.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP118Punishment**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP118Punishment`](BEP118Punishment.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:233](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L233)

## Properties

### denomination

• **denomination**: `string` = `""`

**`Generated`**

from field: string denomination = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:231](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L231)

___

### percentage

• **percentage**: `number` = `0`

**`Generated`**

from field: uint32 percentage = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:226](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L226)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:240](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L240)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:238](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L238)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP118Punishment"``

#### Defined in

[packages/bep-018/source/account_pb.ts:239](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L239)

## Methods

### clone

▸ **clone**(): [`BEP118Punishment`](BEP118Punishment.md)

Create a deep copy.

#### Returns

[`BEP118Punishment`](BEP118Punishment.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP118Punishment`](BEP118Punishment.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118Punishment`](BEP118Punishment.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP118Punishment`](BEP118Punishment.md)

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

[`BEP118Punishment`](BEP118Punishment.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP118Punishment`](BEP118Punishment.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118Punishment`](BEP118Punishment.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP118Punishment`](BEP118Punishment.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118Punishment`](BEP118Punishment.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP118Punishment`](BEP118Punishment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP118Punishment`](BEP118Punishment.md)\>

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
| `a` | `undefined` \| [`BEP118Punishment`](BEP118Punishment.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118Punishment`](BEP118Punishment.md)\> |
| `b` | `undefined` \| [`BEP118Punishment`](BEP118Punishment.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118Punishment`](BEP118Punishment.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:257](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L257)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP118Punishment`](BEP118Punishment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP118Punishment`](BEP118Punishment.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:245](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L245)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP118Punishment`](BEP118Punishment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118Punishment`](BEP118Punishment.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:249](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L249)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP118Punishment`](BEP118Punishment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118Punishment`](BEP118Punishment.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:253](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L253)
