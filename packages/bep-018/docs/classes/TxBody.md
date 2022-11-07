[@bearmint/bep-018 - v0.0.0](../README.md) / TxBody

# Class: TxBody

**`Generated`**

from message TxBody

## Hierarchy

- [`Message`](Message.md)<[`TxBody`](TxBody.md)\>

  ↳ **`TxBody`**

## Table of contents

### Constructors

- [constructor](TxBody.md#constructor)

### Properties

- [gas](TxBody.md#gas)
- [message](TxBody.md#message)
- [nonce](TxBody.md#nonce)
- [recipient](TxBody.md#recipient)
- [sender](TxBody.md#sender)
- [version](TxBody.md#version)
- [fields](TxBody.md#fields)
- [runtime](TxBody.md#runtime)
- [typeName](TxBody.md#typename)

### Methods

- [clone](TxBody.md#clone)
- [equals](TxBody.md#equals)
- [fromBinary](TxBody.md#frombinary)
- [fromJson](TxBody.md#fromjson)
- [fromJsonString](TxBody.md#fromjsonstring)
- [getType](TxBody.md#gettype)
- [toBinary](TxBody.md#tobinary)
- [toJson](TxBody.md#tojson)
- [toJsonString](TxBody.md#tojsonstring)
- [equals](TxBody.md#equals-1)
- [fromBinary](TxBody.md#frombinary-1)
- [fromJson](TxBody.md#fromjson-1)
- [fromJsonString](TxBody.md#fromjsonstring-1)

## Constructors

### constructor

• **new TxBody**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`TxBody`](TxBody.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:166](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L166)

## Properties

### gas

• **gas**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 gas = 5;

#### Defined in

[packages/bep-018/source/tx_pb.ts:159](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L159)

___

### message

• `Optional` **message**: [`TxMsg`](TxMsg.md)

**`Generated`**

from field: TxMsg message = 6;

#### Defined in

[packages/bep-018/source/tx_pb.ts:164](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L164)

___

### nonce

• **nonce**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 nonce = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:154](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L154)

___

### recipient

• **recipient**: `string` = `""`

**`Generated`**

from field: string recipient = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:149](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L149)

___

### sender

• **sender**: `string` = `""`

**`Generated`**

from field: string sender = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:144](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L144)

___

### version

• **version**: `string` = `""`

**`Generated`**

from field: string version = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:139](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L139)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:173](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L173)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:171](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L171)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"TxBody"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:172](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L172)

## Methods

### clone

▸ **clone**(): [`TxBody`](TxBody.md)

Create a deep copy.

#### Returns

[`TxBody`](TxBody.md)

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
| `other` | `undefined` \| ``null`` \| [`TxBody`](TxBody.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxBody`](TxBody.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TxBody`](TxBody.md)

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

[`TxBody`](TxBody.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TxBody`](TxBody.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxBody`](TxBody.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TxBody`](TxBody.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxBody`](TxBody.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TxBody`](TxBody.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TxBody`](TxBody.md)\>

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
| `a` | `undefined` \| [`TxBody`](TxBody.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxBody`](TxBody.md)\> |
| `b` | `undefined` \| [`TxBody`](TxBody.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxBody`](TxBody.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:194](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L194)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TxBody`](TxBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TxBody`](TxBody.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:182](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L182)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TxBody`](TxBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxBody`](TxBody.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:186](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L186)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TxBody`](TxBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxBody`](TxBody.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:190](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L190)
