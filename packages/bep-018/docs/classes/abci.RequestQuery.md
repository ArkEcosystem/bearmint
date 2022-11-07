[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestQuery

# Class: RequestQuery

[abci](../modules/abci.md).RequestQuery

**`Generated`**

from message tendermint.abci.RequestQuery

## Hierarchy

- [`Message`](Message.md)<[`RequestQuery`](abci.RequestQuery.md)\>

  ↳ **`RequestQuery`**

## Table of contents

### Constructors

- [constructor](abci.RequestQuery.md#constructor)

### Properties

- [data](abci.RequestQuery.md#data)
- [height](abci.RequestQuery.md#height)
- [path](abci.RequestQuery.md#path)
- [prove](abci.RequestQuery.md#prove)
- [fields](abci.RequestQuery.md#fields)
- [runtime](abci.RequestQuery.md#runtime)
- [typeName](abci.RequestQuery.md#typename)

### Methods

- [clone](abci.RequestQuery.md#clone)
- [equals](abci.RequestQuery.md#equals)
- [fromBinary](abci.RequestQuery.md#frombinary)
- [fromJson](abci.RequestQuery.md#fromjson)
- [fromJsonString](abci.RequestQuery.md#fromjsonstring)
- [getType](abci.RequestQuery.md#gettype)
- [toBinary](abci.RequestQuery.md#tobinary)
- [toJson](abci.RequestQuery.md#tojson)
- [toJsonString](abci.RequestQuery.md#tojsonstring)
- [equals](abci.RequestQuery.md#equals-1)
- [fromBinary](abci.RequestQuery.md#frombinary-1)
- [fromJson](abci.RequestQuery.md#fromjson-1)
- [fromJsonString](abci.RequestQuery.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestQuery**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestQuery`](abci.RequestQuery.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:421](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L421)

## Properties

### data

• **data**: `Uint8Array`

**`Generated`**

from field: bytes data = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:404](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L404)

___

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:414](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L414)

___

### path

• **path**: `string` = `""`

**`Generated`**

from field: string path = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:409](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L409)

___

### prove

• **prove**: `boolean` = `false`

**`Generated`**

from field: bool prove = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:419](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L419)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:428](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L428)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:426](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L426)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestQuery"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:427](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L427)

## Methods

### clone

▸ **clone**(): [`RequestQuery`](abci.RequestQuery.md)

Create a deep copy.

#### Returns

[`RequestQuery`](abci.RequestQuery.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestQuery`](abci.RequestQuery.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestQuery`](abci.RequestQuery.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestQuery`](abci.RequestQuery.md)

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

[`RequestQuery`](abci.RequestQuery.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestQuery`](abci.RequestQuery.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestQuery`](abci.RequestQuery.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestQuery`](abci.RequestQuery.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestQuery`](abci.RequestQuery.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestQuery`](abci.RequestQuery.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestQuery`](abci.RequestQuery.md)\>

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
| `a` | `undefined` \| [`RequestQuery`](abci.RequestQuery.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestQuery`](abci.RequestQuery.md)\> |
| `b` | `undefined` \| [`RequestQuery`](abci.RequestQuery.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestQuery`](abci.RequestQuery.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:447](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L447)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestQuery`](abci.RequestQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestQuery`](abci.RequestQuery.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:435](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L435)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestQuery`](abci.RequestQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestQuery`](abci.RequestQuery.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:439](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L439)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestQuery`](abci.RequestQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestQuery`](abci.RequestQuery.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:443](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L443)
