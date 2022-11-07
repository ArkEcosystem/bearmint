[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseDeliverTx

# Class: ResponseDeliverTx

[abci](../modules/abci.md).ResponseDeliverTx

**`Generated`**

from message tendermint.abci.ResponseDeliverTx

## Hierarchy

- [`Message`](Message.md)<[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)\>

  ↳ **`ResponseDeliverTx`**

## Table of contents

### Constructors

- [constructor](abci.ResponseDeliverTx.md#constructor)

### Properties

- [code](abci.ResponseDeliverTx.md#code)
- [codespace](abci.ResponseDeliverTx.md#codespace)
- [data](abci.ResponseDeliverTx.md#data)
- [events](abci.ResponseDeliverTx.md#events)
- [gasUsed](abci.ResponseDeliverTx.md#gasused)
- [gasWanted](abci.ResponseDeliverTx.md#gaswanted)
- [info](abci.ResponseDeliverTx.md#info)
- [log](abci.ResponseDeliverTx.md#log)
- [fields](abci.ResponseDeliverTx.md#fields)
- [runtime](abci.ResponseDeliverTx.md#runtime)
- [typeName](abci.ResponseDeliverTx.md#typename)

### Methods

- [clone](abci.ResponseDeliverTx.md#clone)
- [equals](abci.ResponseDeliverTx.md#equals)
- [fromBinary](abci.ResponseDeliverTx.md#frombinary)
- [fromJson](abci.ResponseDeliverTx.md#fromjson)
- [fromJsonString](abci.ResponseDeliverTx.md#fromjsonstring)
- [getType](abci.ResponseDeliverTx.md#gettype)
- [toBinary](abci.ResponseDeliverTx.md#tobinary)
- [toJson](abci.ResponseDeliverTx.md#tojson)
- [toJsonString](abci.ResponseDeliverTx.md#tojsonstring)
- [equals](abci.ResponseDeliverTx.md#equals-1)
- [fromBinary](abci.ResponseDeliverTx.md#frombinary-1)
- [fromJson](abci.ResponseDeliverTx.md#fromjson-1)
- [fromJsonString](abci.ResponseDeliverTx.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseDeliverTx**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1662](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1662)

## Properties

### code

• **code**: `number` = `0`

**`Generated`**

from field: uint32 code = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1619](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1619)

___

### codespace

• **codespace**: `string` = `""`

**`Generated`**

from field: string codespace = 8;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1660](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1660)

___

### data

• **data**: `Uint8Array`

**`Generated`**

from field: bytes data = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1624](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1624)

___

### events

• **events**: [`Event`](abci.Event.md)[] = `[]`

nondeterministic

**`Generated`**

from field: repeated tendermint.abci.Event events = 7;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1655](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1655)

___

### gasUsed

• **gasUsed**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 gas_used = 6 [json_name = "gas_used"];

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1648](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1648)

___

### gasWanted

• **gasWanted**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 gas_wanted = 5 [json_name = "gas_wanted"];

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1643](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1643)

___

### info

• **info**: `string` = `""`

nondeterministic

**`Generated`**

from field: string info = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1638](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1638)

___

### log

• **log**: `string` = `""`

nondeterministic

**`Generated`**

from field: string log = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1631](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1631)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1669](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1669)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1667](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1667)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseDeliverTx"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1668](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1668)

## Methods

### clone

▸ **clone**(): [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

Create a deep copy.

#### Returns

[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseDeliverTx`](abci.ResponseDeliverTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

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

[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)\>

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
| `a` | `undefined` \| [`ResponseDeliverTx`](abci.ResponseDeliverTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)\> |
| `b` | `undefined` \| [`ResponseDeliverTx`](abci.ResponseDeliverTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1692](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1692)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1680](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1680)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1684](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1684)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1688](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1688)
