[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestCommit

# Class: RequestCommit

[abci](../modules/abci.md).RequestCommit

**`Generated`**

from message tendermint.abci.RequestCommit

## Hierarchy

- [`Message`](Message.md)<[`RequestCommit`](abci.RequestCommit.md)\>

  ↳ **`RequestCommit`**

## Table of contents

### Constructors

- [constructor](abci.RequestCommit.md#constructor)

### Properties

- [fields](abci.RequestCommit.md#fields)
- [runtime](abci.RequestCommit.md#runtime)
- [typeName](abci.RequestCommit.md#typename)

### Methods

- [clone](abci.RequestCommit.md#clone)
- [equals](abci.RequestCommit.md#equals)
- [fromBinary](abci.RequestCommit.md#frombinary)
- [fromJson](abci.RequestCommit.md#fromjson)
- [fromJsonString](abci.RequestCommit.md#fromjsonstring)
- [getType](abci.RequestCommit.md#gettype)
- [toBinary](abci.RequestCommit.md#tobinary)
- [toJson](abci.RequestCommit.md#tojson)
- [toJsonString](abci.RequestCommit.md#tojsonstring)
- [equals](abci.RequestCommit.md#equals-1)
- [fromBinary](abci.RequestCommit.md#frombinary-1)
- [fromJson](abci.RequestCommit.md#fromjson-1)
- [fromJsonString](abci.RequestCommit.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestCommit**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestCommit`](abci.RequestCommit.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:628](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L628)

## Properties

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:635](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L635)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:633](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L633)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestCommit"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:634](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L634)

## Methods

### clone

▸ **clone**(): [`RequestCommit`](abci.RequestCommit.md)

Create a deep copy.

#### Returns

[`RequestCommit`](abci.RequestCommit.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestCommit`](abci.RequestCommit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestCommit`](abci.RequestCommit.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestCommit`](abci.RequestCommit.md)

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

[`RequestCommit`](abci.RequestCommit.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestCommit`](abci.RequestCommit.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestCommit`](abci.RequestCommit.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestCommit`](abci.RequestCommit.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestCommit`](abci.RequestCommit.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestCommit`](abci.RequestCommit.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestCommit`](abci.RequestCommit.md)\>

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
| `a` | `undefined` \| [`RequestCommit`](abci.RequestCommit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestCommit`](abci.RequestCommit.md)\> |
| `b` | `undefined` \| [`RequestCommit`](abci.RequestCommit.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestCommit`](abci.RequestCommit.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:650](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L650)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestCommit`](abci.RequestCommit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestCommit`](abci.RequestCommit.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:638](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L638)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestCommit`](abci.RequestCommit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestCommit`](abci.RequestCommit.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:642](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L642)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestCommit`](abci.RequestCommit.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestCommit`](abci.RequestCommit.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:646](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L646)
