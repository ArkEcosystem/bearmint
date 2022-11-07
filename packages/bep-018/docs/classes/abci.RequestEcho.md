[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestEcho

# Class: RequestEcho

[abci](../modules/abci.md).RequestEcho

**`Generated`**

from message tendermint.abci.RequestEcho

## Hierarchy

- [`Message`](Message.md)<[`RequestEcho`](abci.RequestEcho.md)\>

  ↳ **`RequestEcho`**

## Table of contents

### Constructors

- [constructor](abci.RequestEcho.md#constructor)

### Properties

- [message](abci.RequestEcho.md#message)
- [fields](abci.RequestEcho.md#fields)
- [runtime](abci.RequestEcho.md#runtime)
- [typeName](abci.RequestEcho.md#typename)

### Methods

- [clone](abci.RequestEcho.md#clone)
- [equals](abci.RequestEcho.md#equals)
- [fromBinary](abci.RequestEcho.md#frombinary)
- [fromJson](abci.RequestEcho.md#fromjson)
- [fromJsonString](abci.RequestEcho.md#fromjsonstring)
- [getType](abci.RequestEcho.md#gettype)
- [toBinary](abci.RequestEcho.md#tobinary)
- [toJson](abci.RequestEcho.md#tojson)
- [toJsonString](abci.RequestEcho.md#tojsonstring)
- [equals](abci.RequestEcho.md#equals-1)
- [fromBinary](abci.RequestEcho.md#frombinary-1)
- [fromJson](abci.RequestEcho.md#fromjson-1)
- [fromJsonString](abci.RequestEcho.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestEcho**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestEcho`](abci.RequestEcho.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:216](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L216)

## Properties

### message

• **message**: `string` = `""`

**`Generated`**

from field: string message = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:214](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L214)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:223](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L223)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:221](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L221)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestEcho"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:222](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L222)

## Methods

### clone

▸ **clone**(): [`RequestEcho`](abci.RequestEcho.md)

Create a deep copy.

#### Returns

[`RequestEcho`](abci.RequestEcho.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestEcho`](abci.RequestEcho.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestEcho`](abci.RequestEcho.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestEcho`](abci.RequestEcho.md)

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

[`RequestEcho`](abci.RequestEcho.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestEcho`](abci.RequestEcho.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestEcho`](abci.RequestEcho.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestEcho`](abci.RequestEcho.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestEcho`](abci.RequestEcho.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestEcho`](abci.RequestEcho.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestEcho`](abci.RequestEcho.md)\>

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
| `a` | `undefined` \| [`RequestEcho`](abci.RequestEcho.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestEcho`](abci.RequestEcho.md)\> |
| `b` | `undefined` \| [`RequestEcho`](abci.RequestEcho.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestEcho`](abci.RequestEcho.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:239](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L239)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestEcho`](abci.RequestEcho.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestEcho`](abci.RequestEcho.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:227](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L227)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestEcho`](abci.RequestEcho.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestEcho`](abci.RequestEcho.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:231](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L231)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestEcho`](abci.RequestEcho.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestEcho`](abci.RequestEcho.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:235](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L235)
