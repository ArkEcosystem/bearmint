[@bearmint/bep-018 - v0.0.0](../README.md) / BEP119Punishment

# Class: BEP119Punishment

BEP119

**`Generated`**

from message BEP119Punishment

## Hierarchy

- [`Message`](Message.md)<[`BEP119Punishment`](BEP119Punishment.md)\>

  ↳ **`BEP119Punishment`**

## Table of contents

### Constructors

- [constructor](BEP119Punishment.md#constructor)

### Properties

- [denomination](BEP119Punishment.md#denomination)
- [percentage](BEP119Punishment.md#percentage)
- [fields](BEP119Punishment.md#fields)
- [runtime](BEP119Punishment.md#runtime)
- [typeName](BEP119Punishment.md#typename)

### Methods

- [clone](BEP119Punishment.md#clone)
- [equals](BEP119Punishment.md#equals)
- [fromBinary](BEP119Punishment.md#frombinary)
- [fromJson](BEP119Punishment.md#fromjson)
- [fromJsonString](BEP119Punishment.md#fromjsonstring)
- [getType](BEP119Punishment.md#gettype)
- [toBinary](BEP119Punishment.md#tobinary)
- [toJson](BEP119Punishment.md#tojson)
- [toJsonString](BEP119Punishment.md#tojsonstring)
- [equals](BEP119Punishment.md#equals-1)
- [fromBinary](BEP119Punishment.md#frombinary-1)
- [fromJson](BEP119Punishment.md#fromjson-1)
- [fromJsonString](BEP119Punishment.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP119Punishment**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP119Punishment`](BEP119Punishment.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:364](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L364)

## Properties

### denomination

• **denomination**: `string` = `""`

**`Generated`**

from field: string denomination = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:362](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L362)

___

### percentage

• **percentage**: `number` = `0`

**`Generated`**

from field: uint32 percentage = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:357](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L357)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:371](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L371)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:369](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L369)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP119Punishment"``

#### Defined in

[packages/bep-018/source/account_pb.ts:370](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L370)

## Methods

### clone

▸ **clone**(): [`BEP119Punishment`](BEP119Punishment.md)

Create a deep copy.

#### Returns

[`BEP119Punishment`](BEP119Punishment.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP119Punishment`](BEP119Punishment.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119Punishment`](BEP119Punishment.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP119Punishment`](BEP119Punishment.md)

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

[`BEP119Punishment`](BEP119Punishment.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP119Punishment`](BEP119Punishment.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119Punishment`](BEP119Punishment.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP119Punishment`](BEP119Punishment.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119Punishment`](BEP119Punishment.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP119Punishment`](BEP119Punishment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP119Punishment`](BEP119Punishment.md)\>

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
| `a` | `undefined` \| [`BEP119Punishment`](BEP119Punishment.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119Punishment`](BEP119Punishment.md)\> |
| `b` | `undefined` \| [`BEP119Punishment`](BEP119Punishment.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119Punishment`](BEP119Punishment.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:388](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L388)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP119Punishment`](BEP119Punishment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP119Punishment`](BEP119Punishment.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:376](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L376)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP119Punishment`](BEP119Punishment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119Punishment`](BEP119Punishment.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:380](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L380)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP119Punishment`](BEP119Punishment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119Punishment`](BEP119Punishment.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:384](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L384)
