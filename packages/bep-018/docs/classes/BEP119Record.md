[@bearmint/bep-018 - v0.0.0](../README.md) / BEP119Record

# Class: BEP119Record

**`Generated`**

from message BEP119Record

## Hierarchy

- [`Message`](Message.md)<[`BEP119Record`](BEP119Record.md)\>

  ↳ **`BEP119Record`**

## Table of contents

### Constructors

- [constructor](BEP119Record.md#constructor)

### Properties

- [misbehavior](BEP119Record.md#misbehavior)
- [punishment](BEP119Record.md#punishment)
- [fields](BEP119Record.md#fields)
- [runtime](BEP119Record.md#runtime)
- [typeName](BEP119Record.md#typename)

### Methods

- [clone](BEP119Record.md#clone)
- [equals](BEP119Record.md#equals)
- [fromBinary](BEP119Record.md#frombinary)
- [fromJson](BEP119Record.md#fromjson)
- [fromJsonString](BEP119Record.md#fromjsonstring)
- [getType](BEP119Record.md#gettype)
- [toBinary](BEP119Record.md#tobinary)
- [toJson](BEP119Record.md#tojson)
- [toJsonString](BEP119Record.md#tojsonstring)
- [equals](BEP119Record.md#equals-1)
- [fromBinary](BEP119Record.md#frombinary-1)
- [fromJson](BEP119Record.md#fromjson-1)
- [fromJsonString](BEP119Record.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP119Record**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP119Record`](BEP119Record.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:407](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L407)

## Properties

### misbehavior

• `Optional` **misbehavior**: [`BEP101Misbehavior`](BEP101Misbehavior.md)

**`Generated`**

from field: BEP101Misbehavior misbehavior = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:400](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L400)

___

### punishment

• `Optional` **punishment**: [`BEP119Punishment`](BEP119Punishment.md)

**`Generated`**

from field: BEP119Punishment punishment = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:405](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L405)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:414](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L414)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:412](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L412)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP119Record"``

#### Defined in

[packages/bep-018/source/account_pb.ts:413](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L413)

## Methods

### clone

▸ **clone**(): [`BEP119Record`](BEP119Record.md)

Create a deep copy.

#### Returns

[`BEP119Record`](BEP119Record.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP119Record`](BEP119Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119Record`](BEP119Record.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP119Record`](BEP119Record.md)

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

[`BEP119Record`](BEP119Record.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP119Record`](BEP119Record.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119Record`](BEP119Record.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP119Record`](BEP119Record.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119Record`](BEP119Record.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP119Record`](BEP119Record.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP119Record`](BEP119Record.md)\>

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
| `a` | `undefined` \| [`BEP119Record`](BEP119Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119Record`](BEP119Record.md)\> |
| `b` | `undefined` \| [`BEP119Record`](BEP119Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP119Record`](BEP119Record.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:431](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L431)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP119Record`](BEP119Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP119Record`](BEP119Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:419](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L419)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP119Record`](BEP119Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119Record`](BEP119Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:423](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L423)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP119Record`](BEP119Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP119Record`](BEP119Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:427](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L427)
