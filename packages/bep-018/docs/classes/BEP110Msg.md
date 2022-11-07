[@bearmint/bep-018 - v0.0.0](../README.md) / BEP110Msg

# Class: BEP110Msg

Name Registration Tx

**`Generated`**

from message BEP110Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP110Msg`](BEP110Msg.md)\>

  ↳ **`BEP110Msg`**

## Table of contents

### Constructors

- [constructor](BEP110Msg.md#constructor)

### Properties

- [memo](BEP110Msg.md#memo)
- [moniker](BEP110Msg.md#moniker)
- [fields](BEP110Msg.md#fields)
- [runtime](BEP110Msg.md#runtime)
- [typeName](BEP110Msg.md#typename)

### Methods

- [clone](BEP110Msg.md#clone)
- [equals](BEP110Msg.md#equals)
- [fromBinary](BEP110Msg.md#frombinary)
- [fromJson](BEP110Msg.md#fromjson)
- [fromJsonString](BEP110Msg.md#fromjsonstring)
- [getType](BEP110Msg.md#gettype)
- [toBinary](BEP110Msg.md#tobinary)
- [toJson](BEP110Msg.md#tojson)
- [toJsonString](BEP110Msg.md#tojsonstring)
- [equals](BEP110Msg.md#equals-1)
- [fromBinary](BEP110Msg.md#frombinary-1)
- [fromJson](BEP110Msg.md#fromjson-1)
- [fromJsonString](BEP110Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP110Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP110Msg`](BEP110Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1536](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1536)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1534](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1534)

___

### moniker

• **moniker**: `string` = `""`

**`Generated`**

from field: string moniker = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1529](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1529)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1543](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1543)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1541](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1541)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP110Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1542](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1542)

## Methods

### clone

▸ **clone**(): [`BEP110Msg`](BEP110Msg.md)

Create a deep copy.

#### Returns

[`BEP110Msg`](BEP110Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP110Msg`](BEP110Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP110Msg`](BEP110Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP110Msg`](BEP110Msg.md)

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

[`BEP110Msg`](BEP110Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP110Msg`](BEP110Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP110Msg`](BEP110Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP110Msg`](BEP110Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP110Msg`](BEP110Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP110Msg`](BEP110Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP110Msg`](BEP110Msg.md)\>

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
| `a` | `undefined` \| [`BEP110Msg`](BEP110Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP110Msg`](BEP110Msg.md)\> |
| `b` | `undefined` \| [`BEP110Msg`](BEP110Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP110Msg`](BEP110Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1560](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1560)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP110Msg`](BEP110Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP110Msg`](BEP110Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1548](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1548)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP110Msg`](BEP110Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP110Msg`](BEP110Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1552](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1552)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP110Msg`](BEP110Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP110Msg`](BEP110Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1556](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1556)
