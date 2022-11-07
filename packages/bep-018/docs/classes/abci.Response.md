[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / Response

# Class: Response

[abci](../modules/abci.md).Response

**`Generated`**

from message tendermint.abci.Response

## Hierarchy

- [`Message`](Message.md)<[`Response`](abci.Response.md)\>

  ↳ **`Response`**

## Table of contents

### Constructors

- [constructor](abci.Response.md#constructor)

### Properties

- [value](abci.Response.md#value)
- [fields](abci.Response.md#fields)
- [runtime](abci.Response.md#runtime)
- [typeName](abci.Response.md#typename)

### Methods

- [clone](abci.Response.md#clone)
- [equals](abci.Response.md#equals)
- [fromBinary](abci.Response.md#frombinary)
- [fromJson](abci.Response.md#fromjson)
- [fromJsonString](abci.Response.md#fromjsonstring)
- [getType](abci.Response.md#gettype)
- [toBinary](abci.Response.md#tobinary)
- [toJson](abci.Response.md#tojson)
- [toJsonString](abci.Response.md#tojsonstring)
- [equals](abci.Response.md#equals-1)
- [fromBinary](abci.Response.md#frombinary-1)
- [fromJson](abci.Response.md#fromjson-1)
- [fromJsonString](abci.Response.md#fromjsonstring-1)

## Constructors

### constructor

• **new Response**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Response`](abci.Response.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1119](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1119)

## Properties

### value

• **value**: { `case`: ``"exception"`` ; `value`: [`ResponseException`](abci.ResponseException.md)  } \| { `case`: ``"echo"`` ; `value`: [`ResponseEcho`](abci.ResponseEcho.md)  } \| { `case`: ``"flush"`` ; `value`: [`ResponseFlush`](abci.ResponseFlush.md)  } \| { `case`: ``"info"`` ; `value`: [`ResponseInfo`](abci.ResponseInfo.md)  } \| { `case`: ``"initChain"`` ; `value`: [`ResponseInitChain`](abci.ResponseInitChain.md)  } \| { `case`: ``"query"`` ; `value`: [`ResponseQuery`](abci.ResponseQuery.md)  } \| { `case`: ``"beginBlock"`` ; `value`: [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)  } \| { `case`: ``"checkTx"`` ; `value`: [`ResponseCheckTx`](abci.ResponseCheckTx.md)  } \| { `case`: ``"deliverTx"`` ; `value`: [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)  } \| { `case`: ``"endBlock"`` ; `value`: [`ResponseEndBlock`](abci.ResponseEndBlock.md)  } \| { `case`: ``"commit"`` ; `value`: [`ResponseCommit`](abci.ResponseCommit.md)  } \| { `case`: ``"listSnapshots"`` ; `value`: [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)  } \| { `case`: ``"offerSnapshot"`` ; `value`: [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)  } \| { `case`: ``"loadSnapshotChunk"`` ; `value`: [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)  } \| { `case`: ``"applySnapshotChunk"`` ; `value`: [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)  } \| { `case`: ``"prepareProposal"`` ; `value`: [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)  } \| { `case`: ``"processProposal"`` ; `value`: [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)  } \| { `case`: `undefined` ; `value?`: `undefined`  }

**`Generated`**

from oneof tendermint.abci.Response.value

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1015](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1015)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1126](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1126)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1124](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1124)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.Response"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1125](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1125)

## Methods

### clone

▸ **clone**(): [`Response`](abci.Response.md)

Create a deep copy.

#### Returns

[`Response`](abci.Response.md)

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
| `other` | `undefined` \| ``null`` \| [`Response`](abci.Response.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Response`](abci.Response.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Response`](abci.Response.md)

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

[`Response`](abci.Response.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Response`](abci.Response.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Response`](abci.Response.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Response`](abci.Response.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Response`](abci.Response.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Response`](abci.Response.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Response`](abci.Response.md)\>

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
| `a` | `undefined` \| [`Response`](abci.Response.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Response`](abci.Response.md)\> |
| `b` | `undefined` \| [`Response`](abci.Response.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Response`](abci.Response.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1158](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1158)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Response`](abci.Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Response`](abci.Response.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1146](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1146)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Response`](abci.Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Response`](abci.Response.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1150](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1150)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Response`](abci.Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Response`](abci.Response.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1154](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1154)
