[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseQuery

# Class: ResponseQuery

[abci](../modules/abci.md).ResponseQuery

**`Generated`**

from message tendermint.abci.ResponseQuery

## Hierarchy

- [`Message`](Message.md)<[`ResponseQuery`](abci.ResponseQuery.md)\>

  ↳ **`ResponseQuery`**

## Table of contents

### Constructors

- [constructor](abci.ResponseQuery.md#constructor)

### Properties

- [code](abci.ResponseQuery.md#code)
- [codespace](abci.ResponseQuery.md#codespace)
- [height](abci.ResponseQuery.md#height)
- [index](abci.ResponseQuery.md#index)
- [info](abci.ResponseQuery.md#info)
- [key](abci.ResponseQuery.md#key)
- [log](abci.ResponseQuery.md#log)
- [proofOps](abci.ResponseQuery.md#proofops)
- [value](abci.ResponseQuery.md#value)
- [fields](abci.ResponseQuery.md#fields)
- [runtime](abci.ResponseQuery.md#runtime)
- [typeName](abci.ResponseQuery.md#typename)

### Methods

- [clone](abci.ResponseQuery.md#clone)
- [equals](abci.ResponseQuery.md#equals)
- [fromBinary](abci.ResponseQuery.md#frombinary)
- [fromJson](abci.ResponseQuery.md#fromjson)
- [fromJsonString](abci.ResponseQuery.md#fromjsonstring)
- [getType](abci.ResponseQuery.md#gettype)
- [toBinary](abci.ResponseQuery.md#tobinary)
- [toJson](abci.ResponseQuery.md#tojson)
- [toJsonString](abci.ResponseQuery.md#tojsonstring)
- [equals](abci.ResponseQuery.md#equals-1)
- [fromBinary](abci.ResponseQuery.md#frombinary-1)
- [fromJson](abci.ResponseQuery.md#fromjson-1)
- [fromJsonString](abci.ResponseQuery.md#fromjsonstring-1)

## Constructors

### constructor

• **new ResponseQuery**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`ResponseQuery`](abci.ResponseQuery.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1435](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1435)

## Properties

### code

• **code**: `number` = `0`

**`Generated`**

from field: uint32 code = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1387](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1387)

___

### codespace

• **codespace**: `string` = `""`

**`Generated`**

from field: string codespace = 10;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1433](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1433)

___

### height

• **height**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 height = 9;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1428](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1428)

___

### index

• **index**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: int64 index = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1408](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1408)

___

### info

• **info**: `string` = `""`

nondeterministic

**`Generated`**

from field: string info = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1403](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1403)

___

### key

• **key**: `Uint8Array`

**`Generated`**

from field: bytes key = 6;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1413](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1413)

___

### log

• **log**: `string` = `""`

bytes data = 2; // use "value" instead.

nondeterministic

**`Generated`**

from field: string log = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1396](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1396)

___

### proofOps

• `Optional` **proofOps**: `ProofOps`

**`Generated`**

from field: tendermint.crypto.ProofOps proof_ops = 8;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1423](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1423)

___

### value

• **value**: `Uint8Array`

**`Generated`**

from field: bytes value = 7;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1418](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1418)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1442](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1442)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1440](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1440)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.ResponseQuery"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1441](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1441)

## Methods

### clone

▸ **clone**(): [`ResponseQuery`](abci.ResponseQuery.md)

Create a deep copy.

#### Returns

[`ResponseQuery`](abci.ResponseQuery.md)

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
| `other` | `undefined` \| ``null`` \| [`ResponseQuery`](abci.ResponseQuery.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseQuery`](abci.ResponseQuery.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ResponseQuery`](abci.ResponseQuery.md)

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

[`ResponseQuery`](abci.ResponseQuery.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ResponseQuery`](abci.ResponseQuery.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseQuery`](abci.ResponseQuery.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ResponseQuery`](abci.ResponseQuery.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseQuery`](abci.ResponseQuery.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ResponseQuery`](abci.ResponseQuery.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ResponseQuery`](abci.ResponseQuery.md)\>

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
| `a` | `undefined` \| [`ResponseQuery`](abci.ResponseQuery.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseQuery`](abci.ResponseQuery.md)\> |
| `b` | `undefined` \| [`ResponseQuery`](abci.ResponseQuery.md) \| [`PlainMessage`](../README.md#plainmessage)<[`ResponseQuery`](abci.ResponseQuery.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1466](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1466)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ResponseQuery`](abci.ResponseQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ResponseQuery`](abci.ResponseQuery.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1454](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1454)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ResponseQuery`](abci.ResponseQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseQuery`](abci.ResponseQuery.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1458](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1458)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ResponseQuery`](abci.ResponseQuery.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ResponseQuery`](abci.ResponseQuery.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1462](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1462)
