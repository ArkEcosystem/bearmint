[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / EventAttribute

# Class: EventAttribute

[abci](../modules/abci.md).EventAttribute

EventAttribute is a single key-value pair, associated with an event.

**`Generated`**

from message tendermint.abci.EventAttribute

## Hierarchy

- [`Message`](Message.md)<[`EventAttribute`](abci.EventAttribute.md)\>

  ↳ **`EventAttribute`**

## Table of contents

### Constructors

- [constructor](abci.EventAttribute.md#constructor)

### Properties

- [index](abci.EventAttribute.md#index)
- [key](abci.EventAttribute.md#key)
- [value](abci.EventAttribute.md#value)
- [fields](abci.EventAttribute.md#fields)
- [runtime](abci.EventAttribute.md#runtime)
- [typeName](abci.EventAttribute.md#typename)

### Methods

- [clone](abci.EventAttribute.md#clone)
- [equals](abci.EventAttribute.md#equals)
- [fromBinary](abci.EventAttribute.md#frombinary)
- [fromJson](abci.EventAttribute.md#fromjson)
- [fromJsonString](abci.EventAttribute.md#fromjsonstring)
- [getType](abci.EventAttribute.md#gettype)
- [toBinary](abci.EventAttribute.md#tobinary)
- [toJson](abci.EventAttribute.md#tojson)
- [toJsonString](abci.EventAttribute.md#tojsonstring)
- [equals](abci.EventAttribute.md#equals-1)
- [fromBinary](abci.EventAttribute.md#frombinary-1)
- [fromJson](abci.EventAttribute.md#fromjson-1)
- [fromJsonString](abci.EventAttribute.md#fromjsonstring-1)

## Constructors

### constructor

• **new EventAttribute**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`EventAttribute`](abci.EventAttribute.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2328](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2328)

## Properties

### index

• **index**: `boolean` = `false`

nondeterministic

**`Generated`**

from field: bool index = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2326](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2326)

___

### key

• **key**: `string` = `""`

**`Generated`**

from field: string key = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2314](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2314)

___

### value

• **value**: `string` = `""`

**`Generated`**

from field: string value = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2319](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2319)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2335](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2335)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2333](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2333)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.EventAttribute"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2334](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2334)

## Methods

### clone

▸ **clone**(): [`EventAttribute`](abci.EventAttribute.md)

Create a deep copy.

#### Returns

[`EventAttribute`](abci.EventAttribute.md)

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
| `other` | `undefined` \| ``null`` \| [`EventAttribute`](abci.EventAttribute.md) \| [`PlainMessage`](../README.md#plainmessage)<[`EventAttribute`](abci.EventAttribute.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EventAttribute`](abci.EventAttribute.md)

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

[`EventAttribute`](abci.EventAttribute.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EventAttribute`](abci.EventAttribute.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EventAttribute`](abci.EventAttribute.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EventAttribute`](abci.EventAttribute.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EventAttribute`](abci.EventAttribute.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EventAttribute`](abci.EventAttribute.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EventAttribute`](abci.EventAttribute.md)\>

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
| `a` | `undefined` \| [`EventAttribute`](abci.EventAttribute.md) \| [`PlainMessage`](../README.md#plainmessage)<[`EventAttribute`](abci.EventAttribute.md)\> |
| `b` | `undefined` \| [`EventAttribute`](abci.EventAttribute.md) \| [`PlainMessage`](../README.md#plainmessage)<[`EventAttribute`](abci.EventAttribute.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2353](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2353)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EventAttribute`](abci.EventAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EventAttribute`](abci.EventAttribute.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2341](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2341)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EventAttribute`](abci.EventAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EventAttribute`](abci.EventAttribute.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2345](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2345)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EventAttribute`](abci.EventAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EventAttribute`](abci.EventAttribute.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2349](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2349)
