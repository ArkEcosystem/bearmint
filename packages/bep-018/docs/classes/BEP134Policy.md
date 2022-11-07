[@bearmint/bep-018 - v0.0.0](../README.md) / BEP134Policy

# Class: BEP134Policy

NAT Registration Tx

**`Generated`**

from message BEP134Policy

## Hierarchy

- [`Message`](Message.md)<[`BEP134Policy`](BEP134Policy.md)\>

  ↳ **`BEP134Policy`**

## Table of contents

### Constructors

- [constructor](BEP134Policy.md#constructor)

### Properties

- [args](BEP134Policy.md#args)
- [name](BEP134Policy.md#name)
- [type](BEP134Policy.md#type)
- [fields](BEP134Policy.md#fields)
- [runtime](BEP134Policy.md#runtime)
- [typeName](BEP134Policy.md#typename)

### Methods

- [clone](BEP134Policy.md#clone)
- [equals](BEP134Policy.md#equals)
- [fromBinary](BEP134Policy.md#frombinary)
- [fromJson](BEP134Policy.md#fromjson)
- [fromJsonString](BEP134Policy.md#fromjsonstring)
- [getType](BEP134Policy.md#gettype)
- [toBinary](BEP134Policy.md#tobinary)
- [toJson](BEP134Policy.md#tojson)
- [toJsonString](BEP134Policy.md#tojsonstring)
- [equals](BEP134Policy.md#equals-1)
- [fromBinary](BEP134Policy.md#frombinary-1)
- [fromJson](BEP134Policy.md#fromjson-1)
- [fromJsonString](BEP134Policy.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP134Policy**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP134Policy`](BEP134Policy.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2716](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2716)

## Properties

### args

• **args**: `string` = `""`

**`Generated`**

from field: string args = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2714](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2714)

___

### name

• **name**: `string` = `""`

**`Generated`**

from field: string name = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2709](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2709)

___

### type

• **type**: `number` = `0`

**`Generated`**

from field: uint32 type = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2704](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2704)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2723](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2723)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2721](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2721)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP134Policy"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2722](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2722)

## Methods

### clone

▸ **clone**(): [`BEP134Policy`](BEP134Policy.md)

Create a deep copy.

#### Returns

[`BEP134Policy`](BEP134Policy.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP134Policy`](BEP134Policy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Policy`](BEP134Policy.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP134Policy`](BEP134Policy.md)

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

[`BEP134Policy`](BEP134Policy.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP134Policy`](BEP134Policy.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Policy`](BEP134Policy.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP134Policy`](BEP134Policy.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Policy`](BEP134Policy.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP134Policy`](BEP134Policy.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP134Policy`](BEP134Policy.md)\>

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
| `a` | `undefined` \| [`BEP134Policy`](BEP134Policy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Policy`](BEP134Policy.md)\> |
| `b` | `undefined` \| [`BEP134Policy`](BEP134Policy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Policy`](BEP134Policy.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2741](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2741)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP134Policy`](BEP134Policy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP134Policy`](BEP134Policy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2729](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2729)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP134Policy`](BEP134Policy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Policy`](BEP134Policy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2733](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2733)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP134Policy`](BEP134Policy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Policy`](BEP134Policy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2737](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2737)
