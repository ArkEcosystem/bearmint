[@bearmint/bep-018 - v0.0.0](../README.md) / SignedTx

# Class: SignedTx

**`Generated`**

from message SignedTx

## Hierarchy

- [`Message`](Message.md)<[`SignedTx`](SignedTx.md)\>

  ↳ **`SignedTx`**

## Table of contents

### Constructors

- [constructor](SignedTx.md#constructor)

### Properties

- [gas](SignedTx.md#gas)
- [message](SignedTx.md#message)
- [nonce](SignedTx.md#nonce)
- [recipient](SignedTx.md#recipient)
- [sender](SignedTx.md#sender)
- [signature](SignedTx.md#signature)
- [version](SignedTx.md#version)
- [fields](SignedTx.md#fields)
- [runtime](SignedTx.md#runtime)
- [typeName](SignedTx.md#typename)

### Methods

- [clone](SignedTx.md#clone)
- [equals](SignedTx.md#equals)
- [fromBinary](SignedTx.md#frombinary)
- [fromJson](SignedTx.md#fromjson)
- [fromJsonString](SignedTx.md#fromjsonstring)
- [getType](SignedTx.md#gettype)
- [toBinary](SignedTx.md#tobinary)
- [toJson](SignedTx.md#tojson)
- [toJsonString](SignedTx.md#tojsonstring)
- [equals](SignedTx.md#equals-1)
- [fromBinary](SignedTx.md#frombinary-1)
- [fromJson](SignedTx.md#fromjson-1)
- [fromJsonString](SignedTx.md#fromjsonstring-1)

## Constructors

### constructor

• **new SignedTx**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`SignedTx`](SignedTx.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:238](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L238)

## Properties

### gas

• **gas**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 gas = 5;

#### Defined in

[packages/bep-018/source/tx_pb.ts:226](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L226)

___

### message

• `Optional` **message**: [`TxMsg`](TxMsg.md)

**`Generated`**

from field: TxMsg message = 6;

#### Defined in

[packages/bep-018/source/tx_pb.ts:231](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L231)

___

### nonce

• **nonce**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 nonce = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:221](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L221)

___

### recipient

• **recipient**: `string` = `""`

**`Generated`**

from field: string recipient = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:216](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L216)

___

### sender

• **sender**: `string` = `""`

**`Generated`**

from field: string sender = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:211](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L211)

___

### signature

• **signature**: `Uint8Array`

**`Generated`**

from field: bytes signature = 7;

#### Defined in

[packages/bep-018/source/tx_pb.ts:236](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L236)

___

### version

• **version**: `string` = `""`

**`Generated`**

from field: string version = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:206](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L206)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:245](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L245)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:243](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L243)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"SignedTx"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:244](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L244)

## Methods

### clone

▸ **clone**(): [`SignedTx`](SignedTx.md)

Create a deep copy.

#### Returns

[`SignedTx`](SignedTx.md)

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
| `other` | `undefined` \| ``null`` \| [`SignedTx`](SignedTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`SignedTx`](SignedTx.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SignedTx`](SignedTx.md)

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

[`SignedTx`](SignedTx.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SignedTx`](SignedTx.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SignedTx`](SignedTx.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SignedTx`](SignedTx.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SignedTx`](SignedTx.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SignedTx`](SignedTx.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SignedTx`](SignedTx.md)\>

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
| `a` | `undefined` \| [`SignedTx`](SignedTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`SignedTx`](SignedTx.md)\> |
| `b` | `undefined` \| [`SignedTx`](SignedTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`SignedTx`](SignedTx.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:267](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L267)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SignedTx`](SignedTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SignedTx`](SignedTx.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:255](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L255)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SignedTx`](SignedTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SignedTx`](SignedTx.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:259](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L259)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SignedTx`](SignedTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SignedTx`](SignedTx.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:263](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L263)
