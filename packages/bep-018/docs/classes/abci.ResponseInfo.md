[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseInfo

# Class: ResponseInfo

[abci](../modules/abci.md).ResponseInfo

**`Generated`**

from message tendermint.abci.ResponseInfo

## Hierarchy

- [`Message`](Message.md)<[`ResponseInfo`](abci.ResponseInfo.md)\>

  ↳ **`ResponseInfo`**

## Table of contents

### Constructors

- [constructor](abci.ResponseInfo.md#constructor)

### Properties

- [appVersion](abci.ResponseInfo.md#appversion)
- [data](abci.ResponseInfo.md#data)
- [lastBlockAppHash](abci.ResponseInfo.md#lastblockapphash)
- [lastBlockHeight](abci.ResponseInfo.md#lastblockheight)
- [version](abci.ResponseInfo.md#version)
- [fields](abci.ResponseInfo.md#fields)
- [runtime](abci.ResponseInfo.md#runtime)
- [typeName](abci.ResponseInfo.md#typename)

### Methods

- [clone](abci.ResponseInfo.md#clone)
- [equals](abci.ResponseInfo.md#equals)
- [fromBinary](abci.ResponseInfo.md#frombinary)
- [fromJson](abci.ResponseInfo.md#fromjson)
- [fromJsonString](abci.ResponseInfo.md#fromjsonstring)
- [getType](abci.ResponseInfo.md#gettype)
- [toBinary](abci.ResponseInfo.md#tobinary)
- [toJson](abci.ResponseInfo.md#tojson)
- [toJsonString](abci.ResponseInfo.md#tojsonstring)
- [equals](abci.ResponseInfo.md#equals-1)
- [fromBinary](abci.ResponseInfo.md#frombinary-1)
- [fromJson](abci.ResponseInfo.md#fromjson-1)
- [fromJsonString](abci.ResponseInfo.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseInfo**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseInfo`](abci.ResponseInfo.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1299](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1299)

## Properties

### appVersion

• **appVersion**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 app_version = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1287](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1287)

___

### data

• **data**: `string` = `""`

**`Generated`**

from field: string data = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1277](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1277)

___

### lastBlockAppHash

• **lastBlockAppHash**: `Uint8Array`

**`Generated`**

from field: bytes last_block_app_hash = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1297](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1297)

___

### lastBlockHeight

• **lastBlockHeight**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 last_block_height = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1292](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1292)

___

### version

• **version**: `string` = `""`

**`Generated`**

from field: string version = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1282](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1282)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1306](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1306)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1304](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1304)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseInfo"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1305](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1305)

## Methods

### clone

▸ **clone**(): [`ResponseInfo`](abci.ResponseInfo.md)

Create a deep copy.

#### Returns

[`ResponseInfo`](abci.ResponseInfo.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseInfo`](abci.ResponseInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseInfo`](abci.ResponseInfo.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseInfo`](abci.ResponseInfo.md)

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

[`ResponseInfo`](abci.ResponseInfo.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseInfo`](abci.ResponseInfo.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseInfo`](abci.ResponseInfo.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseInfo`](abci.ResponseInfo.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseInfo`](abci.ResponseInfo.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseInfo`](abci.ResponseInfo.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseInfo`](abci.ResponseInfo.md)\>

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
| `a` | `undefined` \| [`ResponseInfo`](abci.ResponseInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseInfo`](abci.ResponseInfo.md)\> |
| `b` | `undefined` \| [`ResponseInfo`](abci.ResponseInfo.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseInfo`](abci.ResponseInfo.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1326](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1326)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseInfo`](abci.ResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseInfo`](abci.ResponseInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1314](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1314)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseInfo`](abci.ResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseInfo`](abci.ResponseInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1318](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1318)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseInfo`](abci.ResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseInfo`](abci.ResponseInfo.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1322](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1322)
