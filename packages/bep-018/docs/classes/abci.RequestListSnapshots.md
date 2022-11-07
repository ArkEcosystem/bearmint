[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestListSnapshots

# Class: RequestListSnapshots

[abci](../modules/abci.md).RequestListSnapshots

lists available snapshots

**`Generated`**

from message tendermint.abci.RequestListSnapshots

## Hierarchy

- [`Message`](Message.md)<[`RequestListSnapshots`](abci.RequestListSnapshots.md)\>

  ↳ **`RequestListSnapshots`**

## Table of contents

### Constructors

- [constructor](abci.RequestListSnapshots.md#constructor)

### Properties

- [fields](abci.RequestListSnapshots.md#fields)
- [runtime](abci.RequestListSnapshots.md#runtime)
- [typeName](abci.RequestListSnapshots.md#typename)

### Methods

- [clone](abci.RequestListSnapshots.md#clone)
- [equals](abci.RequestListSnapshots.md#equals)
- [fromBinary](abci.RequestListSnapshots.md#frombinary)
- [fromJson](abci.RequestListSnapshots.md#fromjson)
- [fromJsonString](abci.RequestListSnapshots.md#fromjsonstring)
- [getType](abci.RequestListSnapshots.md#gettype)
- [toBinary](abci.RequestListSnapshots.md#tobinary)
- [toJson](abci.RequestListSnapshots.md#tojson)
- [toJsonString](abci.RequestListSnapshots.md#tojsonstring)
- [equals](abci.RequestListSnapshots.md#equals-1)
- [fromBinary](abci.RequestListSnapshots.md#frombinary-1)
- [fromJson](abci.RequestListSnapshots.md#fromjson-1)
- [fromJsonString](abci.RequestListSnapshots.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestListSnapshots**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestListSnapshots`](abci.RequestListSnapshots.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:661](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L661)

## Properties

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:668](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L668)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:666](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L666)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestListSnapshots"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:667](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L667)

## Methods

### clone

▸ **clone**(): [`RequestListSnapshots`](abci.RequestListSnapshots.md)

Create a deep copy.

#### Returns

[`RequestListSnapshots`](abci.RequestListSnapshots.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestListSnapshots`](abci.RequestListSnapshots.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestListSnapshots`](abci.RequestListSnapshots.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestListSnapshots`](abci.RequestListSnapshots.md)

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

[`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestListSnapshots`](abci.RequestListSnapshots.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestListSnapshots`](abci.RequestListSnapshots.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestListSnapshots`](abci.RequestListSnapshots.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestListSnapshots`](abci.RequestListSnapshots.md)\>

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
| `a` | `undefined` \| [`RequestListSnapshots`](abci.RequestListSnapshots.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestListSnapshots`](abci.RequestListSnapshots.md)\> |
| `b` | `undefined` \| [`RequestListSnapshots`](abci.RequestListSnapshots.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestListSnapshots`](abci.RequestListSnapshots.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:683](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L683)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:671](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L671)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:675](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L675)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestListSnapshots`](abci.RequestListSnapshots.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:679](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L679)
