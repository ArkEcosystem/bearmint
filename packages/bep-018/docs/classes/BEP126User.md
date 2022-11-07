[@bearmint/bep-018 - v0.0.0](../README.md) / BEP126User

# Class: BEP126User

NFT Collection Registration Tx

**`Generated`**

from message BEP126User

## Hierarchy

- [`Message`](Message.md)<[`BEP126User`](BEP126User.md)\>

  ↳ **`BEP126User`**

## Table of contents

### Constructors

- [constructor](BEP126User.md#constructor)

### Properties

- [permissions](BEP126User.md#permissions)
- [role](BEP126User.md#role)
- [fields](BEP126User.md#fields)
- [runtime](BEP126User.md#runtime)
- [typeName](BEP126User.md#typename)

### Methods

- [clone](BEP126User.md#clone)
- [equals](BEP126User.md#equals)
- [fromBinary](BEP126User.md#frombinary)
- [fromJson](BEP126User.md#fromjson)
- [fromJsonString](BEP126User.md#fromjsonstring)
- [getType](BEP126User.md#gettype)
- [toBinary](BEP126User.md#tobinary)
- [toJson](BEP126User.md#tojson)
- [toJsonString](BEP126User.md#tojsonstring)
- [equals](BEP126User.md#equals-1)
- [fromBinary](BEP126User.md#frombinary-1)
- [fromJson](BEP126User.md#fromjson-1)
- [fromJsonString](BEP126User.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP126User**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP126User`](BEP126User.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1675](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1675)

## Properties

### permissions

• **permissions**: `number`[] = `[]`

**`Generated`**

from field: repeated uint32 permissions = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1673](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1673)

___

### role

• **role**: `number` = `0`

**`Generated`**

from field: uint32 role = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1668](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1668)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1682](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1682)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1680](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1680)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP126User"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1681](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1681)

## Methods

### clone

▸ **clone**(): [`BEP126User`](BEP126User.md)

Create a deep copy.

#### Returns

[`BEP126User`](BEP126User.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP126User`](BEP126User.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126User`](BEP126User.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP126User`](BEP126User.md)

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

[`BEP126User`](BEP126User.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP126User`](BEP126User.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126User`](BEP126User.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP126User`](BEP126User.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126User`](BEP126User.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP126User`](BEP126User.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP126User`](BEP126User.md)\>

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
| `a` | `undefined` \| [`BEP126User`](BEP126User.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126User`](BEP126User.md)\> |
| `b` | `undefined` \| [`BEP126User`](BEP126User.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126User`](BEP126User.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1699](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1699)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP126User`](BEP126User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP126User`](BEP126User.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1687](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1687)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP126User`](BEP126User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126User`](BEP126User.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1691](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1691)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP126User`](BEP126User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126User`](BEP126User.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1695](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1695)
