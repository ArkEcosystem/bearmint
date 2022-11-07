[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / RequestInfo

# Class: RequestInfo

[abci](../modules/abci.md).RequestInfo

**`Generated`**

from message tendermint.abci.RequestInfo

## Hierarchy

- [`Message`](Message.md)<[`RequestInfo`](abci.RequestInfo.md)\>

  ↳ **`RequestInfo`**

## Table of contents

### Constructors

- [constructor](abci.RequestInfo.md#constructor)

### Properties

- [abciVersion](abci.RequestInfo.md#abciversion)
- [blockVersion](abci.RequestInfo.md#blockversion)
- [p2pVersion](abci.RequestInfo.md#p2pversion)
- [version](abci.RequestInfo.md#version)
- [fields](abci.RequestInfo.md#fields)
- [runtime](abci.RequestInfo.md#runtime)
- [typeName](abci.RequestInfo.md#typename)

### Methods

- [clone](abci.RequestInfo.md#clone)
- [equals](abci.RequestInfo.md#equals)
- [fromBinary](abci.RequestInfo.md#frombinary)
- [fromJson](abci.RequestInfo.md#fromjson)
- [fromJsonString](abci.RequestInfo.md#fromjsonstring)
- [getType](abci.RequestInfo.md#gettype)
- [toBinary](abci.RequestInfo.md#tobinary)
- [toJson](abci.RequestInfo.md#tojson)
- [toJsonString](abci.RequestInfo.md#tojsonstring)
- [equals](abci.RequestInfo.md#equals-1)
- [fromBinary](abci.RequestInfo.md#frombinary-1)
- [fromJson](abci.RequestInfo.md#fromjson-1)
- [fromJsonString](abci.RequestInfo.md#fromjsonstring-1)

## Constructors

### constructor

• **new RequestInfo**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`RequestInfo`](abci.RequestInfo.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:299](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L299)

## Properties

### abciVersion

• **abciVersion**: `string` = `""`

**`Generated`**

from field: string abci_version = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:297](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L297)

___

### blockVersion

• **blockVersion**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 block_version = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:287](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L287)

___

### p2pVersion

• **p2pVersion**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 p2p_version = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:292](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L292)

___

### version

• **version**: `string` = `""`

**`Generated`**

from field: string version = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:282](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L282)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:306](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L306)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:304](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L304)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.RequestInfo"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:305](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L305)

## Methods

### clone

▸ **clone**(): [`RequestInfo`](abci.RequestInfo.md)

Create a deep copy.

#### Returns

[`RequestInfo`](abci.RequestInfo.md)

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
| `other` | `undefined` \| ``null`` \| [`RequestInfo`](abci.RequestInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestInfo`](abci.RequestInfo.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RequestInfo`](abci.RequestInfo.md)

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

[`RequestInfo`](abci.RequestInfo.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RequestInfo`](abci.RequestInfo.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestInfo`](abci.RequestInfo.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RequestInfo`](abci.RequestInfo.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestInfo`](abci.RequestInfo.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RequestInfo`](abci.RequestInfo.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RequestInfo`](abci.RequestInfo.md)\>

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
| `a` | `undefined` \| [`RequestInfo`](abci.RequestInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestInfo`](abci.RequestInfo.md)\> |
| `b` | `undefined` \| [`RequestInfo`](abci.RequestInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`RequestInfo`](abci.RequestInfo.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:325](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L325)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RequestInfo`](abci.RequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RequestInfo`](abci.RequestInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:313](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L313)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RequestInfo`](abci.RequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestInfo`](abci.RequestInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:317](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L317)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RequestInfo`](abci.RequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RequestInfo`](abci.RequestInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:321](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L321)
