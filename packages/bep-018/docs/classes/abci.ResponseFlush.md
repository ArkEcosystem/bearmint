[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseFlush

# Class: ResponseFlush

[abci](../modules/abci.md).ResponseFlush

**`Generated`**

from message tendermint.abci.ResponseFlush

## Hierarchy

- [`Message`](Message.md)<[`ResponseFlush`](abci.ResponseFlush.md)\>

  ↳ **`ResponseFlush`**

## Table of contents

### Constructors

- [constructor](abci.ResponseFlush.md#constructor)

### Properties

- [fields](abci.ResponseFlush.md#fields)
- [runtime](abci.ResponseFlush.md#runtime)
- [typeName](abci.ResponseFlush.md#typename)

### Methods

- [clone](abci.ResponseFlush.md#clone)
- [equals](abci.ResponseFlush.md#equals)
- [fromBinary](abci.ResponseFlush.md#frombinary)
- [fromJson](abci.ResponseFlush.md#fromjson)
- [fromJsonString](abci.ResponseFlush.md#fromjsonstring)
- [getType](abci.ResponseFlush.md#gettype)
- [toBinary](abci.ResponseFlush.md#tobinary)
- [toJson](abci.ResponseFlush.md#tojson)
- [toJsonString](abci.ResponseFlush.md#tojsonstring)
- [equals](abci.ResponseFlush.md#equals-1)
- [fromBinary](abci.ResponseFlush.md#frombinary-1)
- [fromJson](abci.ResponseFlush.md#fromjson-1)
- [fromJsonString](abci.ResponseFlush.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseFlush**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseFlush`](abci.ResponseFlush.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1243](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1243)

## Properties

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1250](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1250)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1248](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1248)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseFlush"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1249](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1249)

## Methods

### clone

▸ **clone**(): [`ResponseFlush`](abci.ResponseFlush.md)

Create a deep copy.

#### Returns

[`ResponseFlush`](abci.ResponseFlush.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseFlush`](abci.ResponseFlush.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseFlush`](abci.ResponseFlush.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseFlush`](abci.ResponseFlush.md)

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

[`ResponseFlush`](abci.ResponseFlush.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseFlush`](abci.ResponseFlush.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseFlush`](abci.ResponseFlush.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseFlush`](abci.ResponseFlush.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseFlush`](abci.ResponseFlush.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseFlush`](abci.ResponseFlush.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseFlush`](abci.ResponseFlush.md)\>

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
| `a` | `undefined` \| [`ResponseFlush`](abci.ResponseFlush.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseFlush`](abci.ResponseFlush.md)\> |
| `b` | `undefined` \| [`ResponseFlush`](abci.ResponseFlush.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseFlush`](abci.ResponseFlush.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1265](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1265)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseFlush`](abci.ResponseFlush.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseFlush`](abci.ResponseFlush.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1253](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1253)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseFlush`](abci.ResponseFlush.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseFlush`](abci.ResponseFlush.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1257](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1257)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseFlush`](abci.ResponseFlush.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseFlush`](abci.ResponseFlush.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1261](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1261)
