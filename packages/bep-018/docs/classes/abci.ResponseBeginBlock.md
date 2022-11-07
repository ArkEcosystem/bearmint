[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseBeginBlock

# Class: ResponseBeginBlock

[abci](../modules/abci.md).ResponseBeginBlock

**`Generated`**

from message tendermint.abci.ResponseBeginBlock

## Hierarchy

- [`Message`](Message.md)<[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)\>

  ↳ **`ResponseBeginBlock`**

## Table of contents

### Constructors

- [constructor](abci.ResponseBeginBlock.md#constructor)

### Properties

- [events](abci.ResponseBeginBlock.md#events)
- [fields](abci.ResponseBeginBlock.md#fields)
- [runtime](abci.ResponseBeginBlock.md#runtime)
- [typeName](abci.ResponseBeginBlock.md#typename)

### Methods

- [clone](abci.ResponseBeginBlock.md#clone)
- [equals](abci.ResponseBeginBlock.md#equals)
- [fromBinary](abci.ResponseBeginBlock.md#frombinary)
- [fromJson](abci.ResponseBeginBlock.md#fromjson)
- [fromJsonString](abci.ResponseBeginBlock.md#fromjsonstring)
- [getType](abci.ResponseBeginBlock.md#gettype)
- [toBinary](abci.ResponseBeginBlock.md#tobinary)
- [toJson](abci.ResponseBeginBlock.md#tojson)
- [toJsonString](abci.ResponseBeginBlock.md#tojsonstring)
- [equals](abci.ResponseBeginBlock.md#equals-1)
- [fromBinary](abci.ResponseBeginBlock.md#frombinary-1)
- [fromJson](abci.ResponseBeginBlock.md#fromjson-1)
- [fromJsonString](abci.ResponseBeginBlock.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseBeginBlock**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1480](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1480)

## Properties

### events

• **events**: [`Event`](abci.Event.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.Event events = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1478](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1478)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1487](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1487)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1485](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1485)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseBeginBlock"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1486](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1486)

## Methods

### clone

▸ **clone**(): [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

Create a deep copy.

#### Returns

[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseBeginBlock`](abci.ResponseBeginBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

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

[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)\>

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
| `a` | `undefined` \| [`ResponseBeginBlock`](abci.ResponseBeginBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)\> |
| `b` | `undefined` \| [`ResponseBeginBlock`](abci.ResponseBeginBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1503](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1503)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1491](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1491)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1495](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1495)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1499](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1499)
