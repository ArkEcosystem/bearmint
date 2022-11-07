[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestFlush

# Class: RequestFlush

[abci](../modules/abci.md).RequestFlush

**`Generated`**

from message tendermint.abci.RequestFlush

## Hierarchy

- [`Message`](Message.md)<[`RequestFlush`](abci.RequestFlush.md)\>

  ↳ **`RequestFlush`**

## Table of contents

### Constructors

- [constructor](abci.RequestFlush.md#constructor)

### Properties

- [fields](abci.RequestFlush.md#fields)
- [runtime](abci.RequestFlush.md#runtime)
- [typeName](abci.RequestFlush.md#typename)

### Methods

- [clone](abci.RequestFlush.md#clone)
- [equals](abci.RequestFlush.md#equals)
- [fromBinary](abci.RequestFlush.md#frombinary)
- [fromJson](abci.RequestFlush.md#fromjson)
- [fromJsonString](abci.RequestFlush.md#fromjsonstring)
- [getType](abci.RequestFlush.md#gettype)
- [toBinary](abci.RequestFlush.md#tobinary)
- [toJson](abci.RequestFlush.md#tojson)
- [toJsonString](abci.RequestFlush.md#tojsonstring)
- [equals](abci.RequestFlush.md#equals-1)
- [fromBinary](abci.RequestFlush.md#frombinary-1)
- [fromJson](abci.RequestFlush.md#fromjson-1)
- [fromJsonString](abci.RequestFlush.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestFlush**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestFlush`](abci.RequestFlush.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:248](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L248)

## Properties

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:255](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L255)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:253](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L253)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestFlush"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:254](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L254)

## Methods

### clone

▸ **clone**(): [`RequestFlush`](abci.RequestFlush.md)

Create a deep copy.

#### Returns

[`RequestFlush`](abci.RequestFlush.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestFlush`](abci.RequestFlush.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestFlush`](abci.RequestFlush.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestFlush`](abci.RequestFlush.md)

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

[`RequestFlush`](abci.RequestFlush.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestFlush`](abci.RequestFlush.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestFlush`](abci.RequestFlush.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestFlush`](abci.RequestFlush.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestFlush`](abci.RequestFlush.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestFlush`](abci.RequestFlush.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestFlush`](abci.RequestFlush.md)\>

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
| `a` | `undefined` \| [`RequestFlush`](abci.RequestFlush.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestFlush`](abci.RequestFlush.md)\> |
| `b` | `undefined` \| [`RequestFlush`](abci.RequestFlush.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestFlush`](abci.RequestFlush.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:270](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L270)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestFlush`](abci.RequestFlush.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestFlush`](abci.RequestFlush.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:258](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L258)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestFlush`](abci.RequestFlush.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestFlush`](abci.RequestFlush.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:262](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L262)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestFlush`](abci.RequestFlush.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestFlush`](abci.RequestFlush.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:266](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L266)
