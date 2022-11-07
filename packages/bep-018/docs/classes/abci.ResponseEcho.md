[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseEcho

# Class: ResponseEcho

[abci](../modules/abci.md).ResponseEcho

**`Generated`**

from message tendermint.abci.ResponseEcho

## Hierarchy

- [`Message`](Message.md)<[`ResponseEcho`](abci.ResponseEcho.md)\>

  ↳ **`ResponseEcho`**

## Table of contents

### Constructors

- [constructor](abci.ResponseEcho.md#constructor)

### Properties

- [message](abci.ResponseEcho.md#message)
- [fields](abci.ResponseEcho.md#fields)
- [runtime](abci.ResponseEcho.md#runtime)
- [typeName](abci.ResponseEcho.md#typename)

### Methods

- [clone](abci.ResponseEcho.md#clone)
- [equals](abci.ResponseEcho.md#equals)
- [fromBinary](abci.ResponseEcho.md#frombinary)
- [fromJson](abci.ResponseEcho.md#fromjson)
- [fromJsonString](abci.ResponseEcho.md#fromjsonstring)
- [getType](abci.ResponseEcho.md#gettype)
- [toBinary](abci.ResponseEcho.md#tobinary)
- [toJson](abci.ResponseEcho.md#tojson)
- [toJsonString](abci.ResponseEcho.md#tojsonstring)
- [equals](abci.ResponseEcho.md#equals-1)
- [fromBinary](abci.ResponseEcho.md#frombinary-1)
- [fromJson](abci.ResponseEcho.md#fromjson-1)
- [fromJsonString](abci.ResponseEcho.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseEcho**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseEcho`](abci.ResponseEcho.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1211](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1211)

## Properties

### message

• **message**: `string` = `""`

**`Generated`**

from field: string message = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1209](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1209)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1218](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1218)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1216](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1216)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseEcho"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1217](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1217)

## Methods

### clone

▸ **clone**(): [`ResponseEcho`](abci.ResponseEcho.md)

Create a deep copy.

#### Returns

[`ResponseEcho`](abci.ResponseEcho.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseEcho`](abci.ResponseEcho.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseEcho`](abci.ResponseEcho.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseEcho`](abci.ResponseEcho.md)

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

[`ResponseEcho`](abci.ResponseEcho.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseEcho`](abci.ResponseEcho.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseEcho`](abci.ResponseEcho.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseEcho`](abci.ResponseEcho.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseEcho`](abci.ResponseEcho.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseEcho`](abci.ResponseEcho.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseEcho`](abci.ResponseEcho.md)\>

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
| `a` | `undefined` \| [`ResponseEcho`](abci.ResponseEcho.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseEcho`](abci.ResponseEcho.md)\> |
| `b` | `undefined` \| [`ResponseEcho`](abci.ResponseEcho.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseEcho`](abci.ResponseEcho.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1234](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1234)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseEcho`](abci.ResponseEcho.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseEcho`](abci.ResponseEcho.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1222](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1222)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseEcho`](abci.ResponseEcho.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseEcho`](abci.ResponseEcho.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1226](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1226)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseEcho`](abci.ResponseEcho.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseEcho`](abci.ResponseEcho.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1230](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1230)
