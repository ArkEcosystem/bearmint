[@bearmint/bep-018 - v0.0.0](../README.md) / BEP122Msg

# Class: BEP122Msg

Validator "Release from Jail" Tx

**`Generated`**

from message BEP122Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP122Msg`](BEP122Msg.md)\>

  ↳ **`BEP122Msg`**

## Table of contents

### Constructors

- [constructor](BEP122Msg.md#constructor)

### Properties

- [memo](BEP122Msg.md#memo)
- [moniker](BEP122Msg.md#moniker)
- [signature](BEP122Msg.md#signature)
- [fields](BEP122Msg.md#fields)
- [runtime](BEP122Msg.md#runtime)
- [typeName](BEP122Msg.md#typename)

### Methods

- [clone](BEP122Msg.md#clone)
- [equals](BEP122Msg.md#equals)
- [fromBinary](BEP122Msg.md#frombinary)
- [fromJson](BEP122Msg.md#fromjson)
- [fromJsonString](BEP122Msg.md#fromjsonstring)
- [getType](BEP122Msg.md#gettype)
- [toBinary](BEP122Msg.md#tobinary)
- [toJson](BEP122Msg.md#tojson)
- [toJsonString](BEP122Msg.md#tojsonstring)
- [equals](BEP122Msg.md#equals-1)
- [fromBinary](BEP122Msg.md#frombinary-1)
- [fromJson](BEP122Msg.md#fromjson-1)
- [fromJsonString](BEP122Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP122Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP122Msg`](BEP122Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1586](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1586)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1584](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1584)

___

### moniker

• **moniker**: `string` = `""`

**`Generated`**

from field: string moniker = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1574](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1574)

___

### signature

• **signature**: `Uint8Array`

**`Generated`**

from field: bytes signature = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1579](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1579)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1593](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1593)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1591](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1591)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP122Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1592](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1592)

## Methods

### clone

▸ **clone**(): [`BEP122Msg`](BEP122Msg.md)

Create a deep copy.

#### Returns

[`BEP122Msg`](BEP122Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP122Msg`](BEP122Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP122Msg`](BEP122Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP122Msg`](BEP122Msg.md)

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

[`BEP122Msg`](BEP122Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP122Msg`](BEP122Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP122Msg`](BEP122Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP122Msg`](BEP122Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP122Msg`](BEP122Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP122Msg`](BEP122Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP122Msg`](BEP122Msg.md)\>

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
| `a` | `undefined` \| [`BEP122Msg`](BEP122Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP122Msg`](BEP122Msg.md)\> |
| `b` | `undefined` \| [`BEP122Msg`](BEP122Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP122Msg`](BEP122Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1611](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1611)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP122Msg`](BEP122Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP122Msg`](BEP122Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1599](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1599)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP122Msg`](BEP122Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP122Msg`](BEP122Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1603](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1603)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP122Msg`](BEP122Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP122Msg`](BEP122Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1607](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1607)
