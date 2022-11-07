[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseCheckTx

# Class: ResponseCheckTx

[abci](../modules/abci.md).ResponseCheckTx

**`Generated`**

from message tendermint.abci.ResponseCheckTx

## Hierarchy

- [`Message`](Message.md)<[`ResponseCheckTx`](abci.ResponseCheckTx.md)\>

  ↳ **`ResponseCheckTx`**

## Table of contents

### Constructors

- [constructor](abci.ResponseCheckTx.md#constructor)

### Properties

- [code](abci.ResponseCheckTx.md#code)
- [codespace](abci.ResponseCheckTx.md#codespace)
- [data](abci.ResponseCheckTx.md#data)
- [events](abci.ResponseCheckTx.md#events)
- [gasUsed](abci.ResponseCheckTx.md#gasused)
- [gasWanted](abci.ResponseCheckTx.md#gaswanted)
- [info](abci.ResponseCheckTx.md#info)
- [log](abci.ResponseCheckTx.md#log)
- [mempoolError](abci.ResponseCheckTx.md#mempoolerror)
- [priority](abci.ResponseCheckTx.md#priority)
- [sender](abci.ResponseCheckTx.md#sender)
- [fields](abci.ResponseCheckTx.md#fields)
- [runtime](abci.ResponseCheckTx.md#runtime)
- [typeName](abci.ResponseCheckTx.md#typename)

### Methods

- [clone](abci.ResponseCheckTx.md#clone)
- [equals](abci.ResponseCheckTx.md#equals)
- [fromBinary](abci.ResponseCheckTx.md#frombinary)
- [fromJson](abci.ResponseCheckTx.md#fromjson)
- [fromJsonString](abci.ResponseCheckTx.md#fromjsonstring)
- [getType](abci.ResponseCheckTx.md#gettype)
- [toBinary](abci.ResponseCheckTx.md#tobinary)
- [toJson](abci.ResponseCheckTx.md#tojson)
- [toJsonString](abci.ResponseCheckTx.md#tojsonstring)
- [equals](abci.ResponseCheckTx.md#equals-1)
- [fromBinary](abci.ResponseCheckTx.md#frombinary-1)
- [fromJson](abci.ResponseCheckTx.md#fromjson-1)
- [fromJsonString](abci.ResponseCheckTx.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseCheckTx**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseCheckTx`](abci.ResponseCheckTx.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1574](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1574)

## Properties

### code

• **code**: `number` = `0`

**`Generated`**

from field: uint32 code = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1515](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1515)

___

### codespace

• **codespace**: `string` = `""`

**`Generated`**

from field: string codespace = 8;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1554](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1554)

___

### data

• **data**: `Uint8Array`

**`Generated`**

from field: bytes data = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1520](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1520)

___

### events

• **events**: [`Event`](abci.Event.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.Event events = 7;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1549](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1549)

___

### gasUsed

• **gasUsed**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 gas_used = 6 [json_name = "gas_used"];

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1544](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1544)

___

### gasWanted

• **gasWanted**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 gas_wanted = 5 [json_name = "gas_wanted"];

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1539](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1539)

___

### info

• **info**: `string` = `""`

nondeterministic

**`Generated`**

from field: string info = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1534](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1534)

___

### log

• **log**: `string` = `""`

nondeterministic

**`Generated`**

from field: string log = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1527](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1527)

___

### mempoolError

• **mempoolError**: `string` = `""`

mempool_error is set by Tendermint.
ABCI applictions creating a ResponseCheckTX should not set mempool_error.

**`Generated`**

from field: string mempool_error = 11;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1572](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1572)

___

### priority

• **priority**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 priority = 10;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1564](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1564)

___

### sender

• **sender**: `string` = `""`

**`Generated`**

from field: string sender = 9;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1559](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1559)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1581](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1581)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1579](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1579)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseCheckTx"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1580](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1580)

## Methods

### clone

▸ **clone**(): [`ResponseCheckTx`](abci.ResponseCheckTx.md)

Create a deep copy.

#### Returns

[`ResponseCheckTx`](abci.ResponseCheckTx.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseCheckTx`](abci.ResponseCheckTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseCheckTx`](abci.ResponseCheckTx.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseCheckTx`](abci.ResponseCheckTx.md)

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

[`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseCheckTx`](abci.ResponseCheckTx.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseCheckTx`](abci.ResponseCheckTx.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseCheckTx`](abci.ResponseCheckTx.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseCheckTx`](abci.ResponseCheckTx.md)\>

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
| `a` | `undefined` \| [`ResponseCheckTx`](abci.ResponseCheckTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseCheckTx`](abci.ResponseCheckTx.md)\> |
| `b` | `undefined` \| [`ResponseCheckTx`](abci.ResponseCheckTx.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseCheckTx`](abci.ResponseCheckTx.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1607](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1607)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1595](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1595)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1599](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1599)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseCheckTx`](abci.ResponseCheckTx.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1603](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1603)
