[@bearmint/bep-018 - v0.0.0](../README.md) / BEP134Token

# Class: BEP134Token

**`Generated`**

from message BEP134Token

## Hierarchy

- [`Message`](Message.md)<[`BEP134Token`](BEP134Token.md)\>

  ↳ **`BEP134Token`**

## Table of contents

### Constructors

- [constructor](BEP134Token.md#constructor)

### Properties

- [currentOwner](BEP134Token.md#currentowner)
- [decimals](BEP134Token.md#decimals)
- [denomination](BEP134Token.md#denomination)
- [id](BEP134Token.md#id)
- [initialOwner](BEP134Token.md#initialowner)
- [initialSupply](BEP134Token.md#initialsupply)
- [name](BEP134Token.md#name)
- [policies](BEP134Token.md#policies)
- [fields](BEP134Token.md#fields)
- [runtime](BEP134Token.md#runtime)
- [typeName](BEP134Token.md#typename)

### Methods

- [clone](BEP134Token.md#clone)
- [equals](BEP134Token.md#equals)
- [fromBinary](BEP134Token.md#frombinary)
- [fromJson](BEP134Token.md#fromjson)
- [fromJsonString](BEP134Token.md#fromjsonstring)
- [getType](BEP134Token.md#gettype)
- [toBinary](BEP134Token.md#tobinary)
- [toJson](BEP134Token.md#tojson)
- [toJsonString](BEP134Token.md#tojsonstring)
- [equals](BEP134Token.md#equals-1)
- [fromBinary](BEP134Token.md#frombinary-1)
- [fromJson](BEP134Token.md#fromjson-1)
- [fromJsonString](BEP134Token.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP134Token**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP134Token`](BEP134Token.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2790](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2790)

## Properties

### currentOwner

• **currentOwner**: `string` = `""`

**`Generated`**

from field: string current_owner = 7;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2783](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2783)

___

### decimals

• **decimals**: `number` = `0`

**`Generated`**

from field: uint32 decimals = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2768](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2768)

___

### denomination

• **denomination**: `string` = `""`

**`Generated`**

from field: string denomination = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2763](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2763)

___

### id

• **id**: `string` = `""`

**`Generated`**

from field: string id = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2753](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2753)

___

### initialOwner

• **initialOwner**: `string` = `""`

**`Generated`**

from field: string initial_owner = 8;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2788](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2788)

___

### initialSupply

• **initialSupply**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 initial_supply = 5;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2773](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2773)

___

### name

• **name**: `string` = `""`

**`Generated`**

from field: string name = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2758](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2758)

___

### policies

• **policies**: [`BEP134Policy`](BEP134Policy.md)[] = `[]`

**`Generated`**

from field: repeated BEP134Policy policies = 6;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2778](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2778)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2797](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2797)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2795](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2795)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP134Token"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2796](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2796)

## Methods

### clone

▸ **clone**(): [`BEP134Token`](BEP134Token.md)

Create a deep copy.

#### Returns

[`BEP134Token`](BEP134Token.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP134Token`](BEP134Token.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Token`](BEP134Token.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP134Token`](BEP134Token.md)

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

[`BEP134Token`](BEP134Token.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP134Token`](BEP134Token.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Token`](BEP134Token.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP134Token`](BEP134Token.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Token`](BEP134Token.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP134Token`](BEP134Token.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP134Token`](BEP134Token.md)\>

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
| `a` | `undefined` \| [`BEP134Token`](BEP134Token.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Token`](BEP134Token.md)\> |
| `b` | `undefined` \| [`BEP134Token`](BEP134Token.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Token`](BEP134Token.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2820](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2820)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP134Token`](BEP134Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP134Token`](BEP134Token.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2808](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2808)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP134Token`](BEP134Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Token`](BEP134Token.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2812](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2812)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP134Token`](BEP134Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Token`](BEP134Token.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2816](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2816)
