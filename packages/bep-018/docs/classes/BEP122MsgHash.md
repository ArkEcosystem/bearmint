[@bearmint/bep-018 - v0.0.0](../README.md) / BEP122MsgHash

# Class: BEP122MsgHash

**`Generated`**

from message BEP122MsgHash

## Hierarchy

- [`Message`](Message.md)<[`BEP122MsgHash`](BEP122MsgHash.md)\>

  ↳ **`BEP122MsgHash`**

## Table of contents

### Constructors

- [constructor](BEP122MsgHash.md#constructor)

### Properties

- [memo](BEP122MsgHash.md#memo)
- [moniker](BEP122MsgHash.md#moniker)
- [fields](BEP122MsgHash.md#fields)
- [runtime](BEP122MsgHash.md#runtime)
- [typeName](BEP122MsgHash.md#typename)

### Methods

- [clone](BEP122MsgHash.md#clone)
- [equals](BEP122MsgHash.md#equals)
- [fromBinary](BEP122MsgHash.md#frombinary)
- [fromJson](BEP122MsgHash.md#fromjson)
- [fromJsonString](BEP122MsgHash.md#fromjsonstring)
- [getType](BEP122MsgHash.md#gettype)
- [toBinary](BEP122MsgHash.md#tobinary)
- [toJson](BEP122MsgHash.md#tojson)
- [toJsonString](BEP122MsgHash.md#tojsonstring)
- [equals](BEP122MsgHash.md#equals-1)
- [fromBinary](BEP122MsgHash.md#frombinary-1)
- [fromJson](BEP122MsgHash.md#fromjson-1)
- [fromJsonString](BEP122MsgHash.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP122MsgHash**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP122MsgHash`](BEP122MsgHash.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1630](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1630)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1628](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1628)

___

### moniker

• **moniker**: `string` = `""`

**`Generated`**

from field: string moniker = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1623](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1623)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1637](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1637)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1635](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1635)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP122MsgHash"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1636](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1636)

## Methods

### clone

▸ **clone**(): [`BEP122MsgHash`](BEP122MsgHash.md)

Create a deep copy.

#### Returns

[`BEP122MsgHash`](BEP122MsgHash.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP122MsgHash`](BEP122MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP122MsgHash`](BEP122MsgHash.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP122MsgHash`](BEP122MsgHash.md)

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

[`BEP122MsgHash`](BEP122MsgHash.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP122MsgHash`](BEP122MsgHash.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP122MsgHash`](BEP122MsgHash.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP122MsgHash`](BEP122MsgHash.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP122MsgHash`](BEP122MsgHash.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP122MsgHash`](BEP122MsgHash.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP122MsgHash`](BEP122MsgHash.md)\>

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
| `a` | `undefined` \| [`BEP122MsgHash`](BEP122MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP122MsgHash`](BEP122MsgHash.md)\> |
| `b` | `undefined` \| [`BEP122MsgHash`](BEP122MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP122MsgHash`](BEP122MsgHash.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1654](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1654)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP122MsgHash`](BEP122MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP122MsgHash`](BEP122MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1642](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1642)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP122MsgHash`](BEP122MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP122MsgHash`](BEP122MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1646](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1646)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP122MsgHash`](BEP122MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP122MsgHash`](BEP122MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1650](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1650)
