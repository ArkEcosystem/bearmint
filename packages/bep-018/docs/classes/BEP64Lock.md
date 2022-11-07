[@bearmint/bep-018 - v0.0.0](../README.md) / BEP64Lock

# Class: BEP64Lock

**`Generated`**

from message BEP64Lock

## Hierarchy

- [`Message`](Message.md)<[`BEP64Lock`](BEP64Lock.md)\>

  ↳ **`BEP64Lock`**

## Table of contents

### Constructors

- [constructor](BEP64Lock.md#constructor)

### Properties

- [hash](BEP64Lock.md#hash)
- [index](BEP64Lock.md#index)
- [fields](BEP64Lock.md#fields)
- [runtime](BEP64Lock.md#runtime)
- [typeName](BEP64Lock.md#typename)

### Methods

- [clone](BEP64Lock.md#clone)
- [equals](BEP64Lock.md#equals)
- [fromBinary](BEP64Lock.md#frombinary)
- [fromJson](BEP64Lock.md#fromjson)
- [fromJsonString](BEP64Lock.md#fromjsonstring)
- [getType](BEP64Lock.md#gettype)
- [toBinary](BEP64Lock.md#tobinary)
- [toJson](BEP64Lock.md#tojson)
- [toJsonString](BEP64Lock.md#tojsonstring)
- [equals](BEP64Lock.md#equals-1)
- [fromBinary](BEP64Lock.md#frombinary-1)
- [fromJson](BEP64Lock.md#fromjson-1)
- [fromJsonString](BEP64Lock.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP64Lock**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP64Lock`](BEP64Lock.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1021](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1021)

## Properties

### hash

• **hash**: `string` = `""`

**`Generated`**

from field: string hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1014](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1014)

___

### index

• **index**: `number` = `0`

**`Generated`**

from field: uint32 index = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1019](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1019)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1028](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1028)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1026](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1026)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP64Lock"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1027](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1027)

## Methods

### clone

▸ **clone**(): [`BEP64Lock`](BEP64Lock.md)

Create a deep copy.

#### Returns

[`BEP64Lock`](BEP64Lock.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP64Lock`](BEP64Lock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64Lock`](BEP64Lock.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP64Lock`](BEP64Lock.md)

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

[`BEP64Lock`](BEP64Lock.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP64Lock`](BEP64Lock.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64Lock`](BEP64Lock.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP64Lock`](BEP64Lock.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64Lock`](BEP64Lock.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP64Lock`](BEP64Lock.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP64Lock`](BEP64Lock.md)\>

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
| `a` | `undefined` \| [`BEP64Lock`](BEP64Lock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64Lock`](BEP64Lock.md)\> |
| `b` | `undefined` \| [`BEP64Lock`](BEP64Lock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP64Lock`](BEP64Lock.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1045](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1045)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP64Lock`](BEP64Lock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP64Lock`](BEP64Lock.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1033](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1033)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP64Lock`](BEP64Lock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64Lock`](BEP64Lock.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1037](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1037)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP64Lock`](BEP64Lock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP64Lock`](BEP64Lock.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1041](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1041)
