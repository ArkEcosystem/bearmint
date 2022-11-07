[@bearmint/bep-018 - v0.0.0](../README.md) / BEP134MsgOp

# Class: BEP134MsgOp

**`Generated`**

from message BEP134MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP134MsgOp`](BEP134MsgOp.md)\>

  ↳ **`BEP134MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP134MsgOp.md#constructor)

### Properties

- [decimals](BEP134MsgOp.md#decimals)
- [denomination](BEP134MsgOp.md#denomination)
- [initialSupply](BEP134MsgOp.md#initialsupply)
- [memo](BEP134MsgOp.md#memo)
- [name](BEP134MsgOp.md#name)
- [policies](BEP134MsgOp.md#policies)
- [fields](BEP134MsgOp.md#fields)
- [runtime](BEP134MsgOp.md#runtime)
- [typeName](BEP134MsgOp.md#typename)

### Methods

- [clone](BEP134MsgOp.md#clone)
- [equals](BEP134MsgOp.md#equals)
- [fromBinary](BEP134MsgOp.md#frombinary)
- [fromJson](BEP134MsgOp.md#fromjson)
- [fromJsonString](BEP134MsgOp.md#fromjsonstring)
- [getType](BEP134MsgOp.md#gettype)
- [toBinary](BEP134MsgOp.md#tobinary)
- [toJson](BEP134MsgOp.md#tojson)
- [toJsonString](BEP134MsgOp.md#tojsonstring)
- [equals](BEP134MsgOp.md#equals-1)
- [fromBinary](BEP134MsgOp.md#frombinary-1)
- [fromJson](BEP134MsgOp.md#fromjson-1)
- [fromJsonString](BEP134MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP134MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP134MsgOp`](BEP134MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2859](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2859)

## Properties

### decimals

• **decimals**: `number` = `0`

**`Generated`**

from field: uint32 decimals = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2842](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2842)

___

### denomination

• **denomination**: `string` = `""`

**`Generated`**

from field: string denomination = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2837](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2837)

___

### initialSupply

• **initialSupply**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 initial_supply = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2847](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2847)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 6;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2857](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2857)

___

### name

• **name**: `string` = `""`

**`Generated`**

from field: string name = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2832](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2832)

___

### policies

• **policies**: [`BEP134Policy`](BEP134Policy.md)[] = `[]`

**`Generated`**

from field: repeated BEP134Policy policies = 5;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2852](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2852)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2866](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2866)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2864](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2864)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP134MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2865](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2865)

## Methods

### clone

▸ **clone**(): [`BEP134MsgOp`](BEP134MsgOp.md)

Create a deep copy.

#### Returns

[`BEP134MsgOp`](BEP134MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP134MsgOp`](BEP134MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134MsgOp`](BEP134MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP134MsgOp`](BEP134MsgOp.md)

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

[`BEP134MsgOp`](BEP134MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP134MsgOp`](BEP134MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134MsgOp`](BEP134MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP134MsgOp`](BEP134MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134MsgOp`](BEP134MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP134MsgOp`](BEP134MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP134MsgOp`](BEP134MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP134MsgOp`](BEP134MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134MsgOp`](BEP134MsgOp.md)\> |
| `b` | `undefined` \| [`BEP134MsgOp`](BEP134MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134MsgOp`](BEP134MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2887](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2887)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP134MsgOp`](BEP134MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP134MsgOp`](BEP134MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2875](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2875)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP134MsgOp`](BEP134MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134MsgOp`](BEP134MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2879](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2879)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP134MsgOp`](BEP134MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134MsgOp`](BEP134MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2883](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2883)
