[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / Request

# Class: Request

[abci](../modules/abci.md).Request

**`Generated`**

from message tendermint.abci.Request

## Hierarchy

- [`Message`](Message.md)<[`Request`](abci.Request.md)\>

  ↳ **`Request`**

## Table of contents

### Constructors

- [constructor](abci.Request.md#constructor)

### Properties

- [value](abci.Request.md#value)
- [fields](abci.Request.md#fields)
- [runtime](abci.Request.md#runtime)
- [typeName](abci.Request.md#typename)

### Methods

- [clone](abci.Request.md#clone)
- [equals](abci.Request.md#equals)
- [fromBinary](abci.Request.md#frombinary)
- [fromJson](abci.Request.md#fromjson)
- [fromJsonString](abci.Request.md#fromjsonstring)
- [getType](abci.Request.md#gettype)
- [toBinary](abci.Request.md#tobinary)
- [toJson](abci.Request.md#tojson)
- [toJsonString](abci.Request.md#tojsonstring)
- [equals](abci.Request.md#equals-1)
- [fromBinary](abci.Request.md#frombinary-1)
- [fromJson](abci.Request.md#fromjson-1)
- [fromJsonString](abci.Request.md#fromjsonstring-1)

## Constructors

### constructor

• **new Request**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Request`](abci.Request.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:164](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L164)

## Properties

### value

• **value**: { `case`: ``"echo"`` ; `value`: [`RequestEcho`](abci.RequestEcho.md)  } \| { `case`: ``"flush"`` ; `value`: [`RequestFlush`](abci.RequestFlush.md)  } \| { `case`: ``"info"`` ; `value`: [`RequestInfo`](abci.RequestInfo.md)  } \| { `case`: ``"initChain"`` ; `value`: [`RequestInitChain`](abci.RequestInitChain.md)  } \| { `case`: ``"query"`` ; `value`: [`RequestQuery`](abci.RequestQuery.md)  } \| { `case`: ``"beginBlock"`` ; `value`: [`RequestBeginBlock`](abci.RequestBeginBlock.md)  } \| { `case`: ``"checkTx"`` ; `value`: [`RequestCheckTx`](abci.RequestCheckTx.md)  } \| { `case`: ``"deliverTx"`` ; `value`: [`RequestDeliverTx`](abci.RequestDeliverTx.md)  } \| { `case`: ``"endBlock"`` ; `value`: [`RequestEndBlock`](abci.RequestEndBlock.md)  } \| { `case`: ``"commit"`` ; `value`: [`RequestCommit`](abci.RequestCommit.md)  } \| { `case`: ``"listSnapshots"`` ; `value`: [`RequestListSnapshots`](abci.RequestListSnapshots.md)  } \| { `case`: ``"offerSnapshot"`` ; `value`: [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)  } \| { `case`: ``"loadSnapshotChunk"`` ; `value`: [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)  } \| { `case`: ``"applySnapshotChunk"`` ; `value`: [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)  } \| { `case`: ``"prepareProposal"`` ; `value`: [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)  } \| { `case`: ``"processProposal"`` ; `value`: [`RequestProcessProposal`](abci.RequestProcessProposal.md)  } \| { `case`: `undefined` ; `value?`: `undefined`  }

**`Generated`**

from oneof tendermint.abci.Request.value

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:66](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L66)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:171](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L171)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:169](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L169)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.Request"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:170](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L170)

## Methods

### clone

▸ **clone**(): [`Request`](abci.Request.md)

Create a deep copy.

#### Returns

[`Request`](abci.Request.md)

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
| `other` | `undefined` \| ``null`` \| [`Request`](abci.Request.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Request`](abci.Request.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Request`](abci.Request.md)

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

[`Request`](abci.Request.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Request`](abci.Request.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Request`](abci.Request.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Request`](abci.Request.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Request`](abci.Request.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Request`](abci.Request.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Request`](abci.Request.md)\>

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
| `a` | `undefined` \| [`Request`](abci.Request.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Request`](abci.Request.md)\> |
| `b` | `undefined` \| [`Request`](abci.Request.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Request`](abci.Request.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:202](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L202)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Request`](abci.Request.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Request`](abci.Request.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:190](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L190)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Request`](abci.Request.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Request`](abci.Request.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:194](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L194)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Request`](abci.Request.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Request`](abci.Request.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:198](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L198)
