[@bearmint/bep-018 - v0.0.0](../README.md) / [crypto](../modules/crypto.md) / PublicKey

# Class: PublicKey

[crypto](../modules/crypto.md).PublicKey

PublicKey defines the keys available for use with Tendermint Validators

**`Generated`**

from message tendermint.crypto.PublicKey

## Hierarchy

- [`Message`](Message.md)<[`PublicKey`](crypto.PublicKey.md)\>

  ↳ **`PublicKey`**

## Table of contents

### Constructors

- [constructor](crypto.PublicKey.md#constructor)

### Properties

- [sum](crypto.PublicKey.md#sum)
- [fields](crypto.PublicKey.md#fields)
- [runtime](crypto.PublicKey.md#runtime)
- [typeName](crypto.PublicKey.md#typename)

### Methods

- [clone](crypto.PublicKey.md#clone)
- [equals](crypto.PublicKey.md#equals)
- [fromBinary](crypto.PublicKey.md#frombinary)
- [fromJson](crypto.PublicKey.md#fromjson)
- [fromJsonString](crypto.PublicKey.md#fromjsonstring)
- [getType](crypto.PublicKey.md#gettype)
- [toBinary](crypto.PublicKey.md#tobinary)
- [toJson](crypto.PublicKey.md#tojson)
- [toJsonString](crypto.PublicKey.md#tojsonstring)
- [equals](crypto.PublicKey.md#equals-1)
- [fromBinary](crypto.PublicKey.md#frombinary-1)
- [fromJson](crypto.PublicKey.md#fromjson-1)
- [fromJsonString](crypto.PublicKey.md#fromjsonstring-1)

## Constructors

### constructor

• **new PublicKey**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`PublicKey`](crypto.PublicKey.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L32)

## Properties

### sum

• **sum**: { `case`: ``"ed25519"`` ; `value`: `Uint8Array`  } \| { `case`: ``"secp256k1"`` ; `value`: `Uint8Array`  } \| { `case`: `undefined` ; `value?`: `undefined`  }

**`Generated`**

from oneof tendermint.crypto.PublicKey.sum

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L18)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L39)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L37)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.crypto.PublicKey"``

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L38)

## Methods

### clone

▸ **clone**(): [`PublicKey`](crypto.PublicKey.md)

Create a deep copy.

#### Returns

[`PublicKey`](crypto.PublicKey.md)

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
| `other` | `undefined` \| ``null`` \| [`PublicKey`](crypto.PublicKey.md) \| [`PlainMessage`](../README.md#plainmessage)<[`PublicKey`](crypto.PublicKey.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PublicKey`](crypto.PublicKey.md)

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

[`PublicKey`](crypto.PublicKey.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PublicKey`](crypto.PublicKey.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PublicKey`](crypto.PublicKey.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PublicKey`](crypto.PublicKey.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PublicKey`](crypto.PublicKey.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PublicKey`](crypto.PublicKey.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PublicKey`](crypto.PublicKey.md)\>

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
| `a` | `undefined` \| [`PublicKey`](crypto.PublicKey.md) \| [`PlainMessage`](../README.md#plainmessage)<[`PublicKey`](crypto.PublicKey.md)\> |
| `b` | `undefined` \| [`PublicKey`](crypto.PublicKey.md) \| [`PlainMessage`](../README.md#plainmessage)<[`PublicKey`](crypto.PublicKey.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:56](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L56)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PublicKey`](crypto.PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PublicKey`](crypto.PublicKey.md)

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L44)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PublicKey`](crypto.PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PublicKey`](crypto.PublicKey.md)

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L48)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PublicKey`](crypto.PublicKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PublicKey`](crypto.PublicKey.md)

#### Defined in

[packages/bep-018/source/tendermint/crypto/keys_pb.ts:52](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/crypto/keys_pb.ts#L52)
