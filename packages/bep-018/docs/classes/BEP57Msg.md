[@bearmint/bep-018 - v0.0.0](../README.md) / BEP57Msg

# Class: BEP57Msg

Validation Registration Tx

**`Generated`**

from message BEP57Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP57Msg`](BEP57Msg.md)\>

  ↳ **`BEP57Msg`**

## Table of contents

### Constructors

- [constructor](BEP57Msg.md#constructor)

### Properties

- [memo](BEP57Msg.md#memo)
- [publicKey](BEP57Msg.md#publickey)
- [signature](BEP57Msg.md#signature)
- [fields](BEP57Msg.md#fields)
- [runtime](BEP57Msg.md#runtime)
- [typeName](BEP57Msg.md#typename)

### Methods

- [clone](BEP57Msg.md#clone)
- [equals](BEP57Msg.md#equals)
- [fromBinary](BEP57Msg.md#frombinary)
- [fromJson](BEP57Msg.md#fromjson)
- [fromJsonString](BEP57Msg.md#fromjsonstring)
- [getType](BEP57Msg.md#gettype)
- [toBinary](BEP57Msg.md#tobinary)
- [toJson](BEP57Msg.md#tojson)
- [toJsonString](BEP57Msg.md#tojsonstring)
- [equals](BEP57Msg.md#equals-1)
- [fromBinary](BEP57Msg.md#frombinary-1)
- [fromJson](BEP57Msg.md#fromjson-1)
- [fromJsonString](BEP57Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP57Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP57Msg`](BEP57Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:579](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L579)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:577](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L577)

___

### publicKey

• **publicKey**: `Uint8Array`

**`Generated`**

from field: bytes public_key = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:567](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L567)

___

### signature

• **signature**: `Uint8Array`

**`Generated`**

from field: bytes signature = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:572](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L572)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:586](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L586)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:584](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L584)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP57Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:585](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L585)

## Methods

### clone

▸ **clone**(): [`BEP57Msg`](BEP57Msg.md)

Create a deep copy.

#### Returns

[`BEP57Msg`](BEP57Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP57Msg`](BEP57Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP57Msg`](BEP57Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP57Msg`](BEP57Msg.md)

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

[`BEP57Msg`](BEP57Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP57Msg`](BEP57Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP57Msg`](BEP57Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP57Msg`](BEP57Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP57Msg`](BEP57Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP57Msg`](BEP57Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP57Msg`](BEP57Msg.md)\>

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
| `a` | `undefined` \| [`BEP57Msg`](BEP57Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP57Msg`](BEP57Msg.md)\> |
| `b` | `undefined` \| [`BEP57Msg`](BEP57Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP57Msg`](BEP57Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:604](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L604)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP57Msg`](BEP57Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP57Msg`](BEP57Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:592](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L592)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP57Msg`](BEP57Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP57Msg`](BEP57Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:596](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L596)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP57Msg`](BEP57Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP57Msg`](BEP57Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:600](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L600)
