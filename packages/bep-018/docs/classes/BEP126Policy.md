[@bearmint/bep-018 - v0.0.0](../README.md) / BEP126Policy

# Class: BEP126Policy

**`Generated`**

from message BEP126Policy

## Hierarchy

- [`Message`](Message.md)<[`BEP126Policy`](BEP126Policy.md)\>

  ↳ **`BEP126Policy`**

## Table of contents

### Constructors

- [constructor](BEP126Policy.md#constructor)

### Properties

- [args](BEP126Policy.md#args)
- [name](BEP126Policy.md#name)
- [type](BEP126Policy.md#type)
- [fields](BEP126Policy.md#fields)
- [runtime](BEP126Policy.md#runtime)
- [typeName](BEP126Policy.md#typename)

### Methods

- [clone](BEP126Policy.md#clone)
- [equals](BEP126Policy.md#equals)
- [fromBinary](BEP126Policy.md#frombinary)
- [fromJson](BEP126Policy.md#fromjson)
- [fromJsonString](BEP126Policy.md#fromjsonstring)
- [getType](BEP126Policy.md#gettype)
- [toBinary](BEP126Policy.md#tobinary)
- [toJson](BEP126Policy.md#tojson)
- [toJsonString](BEP126Policy.md#tojsonstring)
- [equals](BEP126Policy.md#equals-1)
- [fromBinary](BEP126Policy.md#frombinary-1)
- [fromJson](BEP126Policy.md#fromjson-1)
- [fromJsonString](BEP126Policy.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP126Policy**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP126Policy`](BEP126Policy.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1723](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1723)

## Properties

### args

• **args**: `string` = `""`

**`Generated`**

from field: string args = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1721](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1721)

___

### name

• **name**: `string` = `""`

**`Generated`**

from field: string name = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1716](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1716)

___

### type

• **type**: `number` = `0`

**`Generated`**

from field: uint32 type = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1711](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1711)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1730](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1730)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1728](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1728)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP126Policy"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1729](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1729)

## Methods

### clone

▸ **clone**(): [`BEP126Policy`](BEP126Policy.md)

Create a deep copy.

#### Returns

[`BEP126Policy`](BEP126Policy.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP126Policy`](BEP126Policy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Policy`](BEP126Policy.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP126Policy`](BEP126Policy.md)

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

[`BEP126Policy`](BEP126Policy.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP126Policy`](BEP126Policy.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Policy`](BEP126Policy.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP126Policy`](BEP126Policy.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Policy`](BEP126Policy.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP126Policy`](BEP126Policy.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP126Policy`](BEP126Policy.md)\>

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
| `a` | `undefined` \| [`BEP126Policy`](BEP126Policy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Policy`](BEP126Policy.md)\> |
| `b` | `undefined` \| [`BEP126Policy`](BEP126Policy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Policy`](BEP126Policy.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1748](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1748)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP126Policy`](BEP126Policy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP126Policy`](BEP126Policy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1736](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1736)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP126Policy`](BEP126Policy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Policy`](BEP126Policy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1740](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1740)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP126Policy`](BEP126Policy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Policy`](BEP126Policy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1744](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1744)
