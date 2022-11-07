[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestEndBlock

# Class: RequestEndBlock

[abci](../modules/abci.md).RequestEndBlock

**`Generated`**

from message tendermint.abci.RequestEndBlock

## Hierarchy

- [`Message`](Message.md)<[`RequestEndBlock`](abci.RequestEndBlock.md)\>

  ↳ **`RequestEndBlock`**

## Table of contents

### Constructors

- [constructor](abci.RequestEndBlock.md#constructor)

### Properties

- [height](abci.RequestEndBlock.md#height)
- [fields](abci.RequestEndBlock.md#fields)
- [runtime](abci.RequestEndBlock.md#runtime)
- [typeName](abci.RequestEndBlock.md#typename)

### Methods

- [clone](abci.RequestEndBlock.md#clone)
- [equals](abci.RequestEndBlock.md#equals)
- [fromBinary](abci.RequestEndBlock.md#frombinary)
- [fromJson](abci.RequestEndBlock.md#fromjson)
- [fromJsonString](abci.RequestEndBlock.md#fromjsonstring)
- [getType](abci.RequestEndBlock.md#gettype)
- [toBinary](abci.RequestEndBlock.md#tobinary)
- [toJson](abci.RequestEndBlock.md#tojson)
- [toJsonString](abci.RequestEndBlock.md#tojsonstring)
- [equals](abci.RequestEndBlock.md#equals-1)
- [fromBinary](abci.RequestEndBlock.md#frombinary-1)
- [fromJson](abci.RequestEndBlock.md#fromjson-1)
- [fromJsonString](abci.RequestEndBlock.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestEndBlock**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestEndBlock`](abci.RequestEndBlock.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:596](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L596)

## Properties

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:594](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L594)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:603](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L603)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:601](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L601)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestEndBlock"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:602](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L602)

## Methods

### clone

▸ **clone**(): [`RequestEndBlock`](abci.RequestEndBlock.md)

Create a deep copy.

#### Returns

[`RequestEndBlock`](abci.RequestEndBlock.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestEndBlock`](abci.RequestEndBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestEndBlock`](abci.RequestEndBlock.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestEndBlock`](abci.RequestEndBlock.md)

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

[`RequestEndBlock`](abci.RequestEndBlock.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestEndBlock`](abci.RequestEndBlock.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestEndBlock`](abci.RequestEndBlock.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestEndBlock`](abci.RequestEndBlock.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestEndBlock`](abci.RequestEndBlock.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestEndBlock`](abci.RequestEndBlock.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestEndBlock`](abci.RequestEndBlock.md)\>

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
| `a` | `undefined` \| [`RequestEndBlock`](abci.RequestEndBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestEndBlock`](abci.RequestEndBlock.md)\> |
| `b` | `undefined` \| [`RequestEndBlock`](abci.RequestEndBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestEndBlock`](abci.RequestEndBlock.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:619](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L619)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestEndBlock`](abci.RequestEndBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestEndBlock`](abci.RequestEndBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:607](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L607)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestEndBlock`](abci.RequestEndBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestEndBlock`](abci.RequestEndBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:611](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L611)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestEndBlock`](abci.RequestEndBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestEndBlock`](abci.RequestEndBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:615](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L615)
