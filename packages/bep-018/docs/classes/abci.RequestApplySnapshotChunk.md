[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestApplySnapshotChunk

# Class: RequestApplySnapshotChunk

[abci](../modules/abci.md).RequestApplySnapshotChunk

Applies a snapshot chunk

**`Generated`**

from message tendermint.abci.RequestApplySnapshotChunk

## Hierarchy

- [`Message`](Message.md)<[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)\>

  ↳ **`RequestApplySnapshotChunk`**

## Table of contents

### Constructors

- [constructor](abci.RequestApplySnapshotChunk.md#constructor)

### Properties

- [chunk](abci.RequestApplySnapshotChunk.md#chunk)
- [index](abci.RequestApplySnapshotChunk.md#index)
- [sender](abci.RequestApplySnapshotChunk.md#sender)
- [fields](abci.RequestApplySnapshotChunk.md#fields)
- [runtime](abci.RequestApplySnapshotChunk.md#runtime)
- [typeName](abci.RequestApplySnapshotChunk.md#typename)

### Methods

- [clone](abci.RequestApplySnapshotChunk.md#clone)
- [equals](abci.RequestApplySnapshotChunk.md#equals)
- [fromBinary](abci.RequestApplySnapshotChunk.md#frombinary)
- [fromJson](abci.RequestApplySnapshotChunk.md#fromjson)
- [fromJsonString](abci.RequestApplySnapshotChunk.md#fromjsonstring)
- [getType](abci.RequestApplySnapshotChunk.md#gettype)
- [toBinary](abci.RequestApplySnapshotChunk.md#tobinary)
- [toJson](abci.RequestApplySnapshotChunk.md#tojson)
- [toJsonString](abci.RequestApplySnapshotChunk.md#tojsonstring)
- [equals](abci.RequestApplySnapshotChunk.md#equals-1)
- [fromBinary](abci.RequestApplySnapshotChunk.md#frombinary-1)
- [fromJson](abci.RequestApplySnapshotChunk.md#fromjson-1)
- [fromJsonString](abci.RequestApplySnapshotChunk.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestApplySnapshotChunk**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:809](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L809)

## Properties

### chunk

• **chunk**: `Uint8Array`

**`Generated`**

from field: bytes chunk = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:802](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L802)

___

### index

• **index**: `number` = `0`

**`Generated`**

from field: uint32 index = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:797](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L797)

___

### sender

• **sender**: `string` = `""`

**`Generated`**

from field: string sender = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:807](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L807)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:816](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L816)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:814](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L814)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestApplySnapshotChunk"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:815](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L815)

## Methods

### clone

▸ **clone**(): [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

Create a deep copy.

#### Returns

[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

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

[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)\>

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
| `a` | `undefined` \| [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)\> |
| `b` | `undefined` \| [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:834](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L834)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:822](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L822)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:826](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L826)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:830](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L830)
