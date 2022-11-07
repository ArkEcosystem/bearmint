[@bearmint/bep-018 - v0.0.0](../README.md) / TxReceipt

# Class: TxReceipt

**`Generated`**

from message TxReceipt

## Hierarchy

- [`Message`](Message.md)<[`TxReceipt`](TxReceipt.md)\>

  ↳ **`TxReceipt`**

## Table of contents

### Constructors

- [constructor](TxReceipt.md#constructor)

### Properties

- [blockHash](TxReceipt.md#blockhash)
- [blockNumber](TxReceipt.md#blocknumber)
- [logs](TxReceipt.md#logs)
- [fields](TxReceipt.md#fields)
- [runtime](TxReceipt.md#runtime)
- [typeName](TxReceipt.md#typename)

### Methods

- [clone](TxReceipt.md#clone)
- [equals](TxReceipt.md#equals)
- [fromBinary](TxReceipt.md#frombinary)
- [fromJson](TxReceipt.md#fromjson)
- [fromJsonString](TxReceipt.md#fromjsonstring)
- [getType](TxReceipt.md#gettype)
- [toBinary](TxReceipt.md#tobinary)
- [toJson](TxReceipt.md#tojson)
- [toJsonString](TxReceipt.md#tojsonstring)
- [equals](TxReceipt.md#equals-1)
- [fromBinary](TxReceipt.md#frombinary-1)
- [fromJson](TxReceipt.md#fromjson-1)
- [fromJsonString](TxReceipt.md#fromjsonstring-1)

## Constructors

### constructor

• **new TxReceipt**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`TxReceipt`](TxReceipt.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:291](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L291)

## Properties

### blockHash

• **blockHash**: `Uint8Array`

**`Generated`**

from field: bytes block_hash = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:279](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L279)

___

### blockNumber

• **blockNumber**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 block_number = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:284](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L284)

___

### logs

• **logs**: [`TxReceiptLog`](TxReceiptLog.md)[] = `[]`

**`Generated`**

from field: repeated TxReceiptLog logs = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:289](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L289)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:298](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L298)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:296](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L296)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"TxReceipt"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:297](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L297)

## Methods

### clone

▸ **clone**(): [`TxReceipt`](TxReceipt.md)

Create a deep copy.

#### Returns

[`TxReceipt`](TxReceipt.md)

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
| `other` | `undefined` \| ``null`` \| [`TxReceipt`](TxReceipt.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxReceipt`](TxReceipt.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TxReceipt`](TxReceipt.md)

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

[`TxReceipt`](TxReceipt.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TxReceipt`](TxReceipt.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxReceipt`](TxReceipt.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TxReceipt`](TxReceipt.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxReceipt`](TxReceipt.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TxReceipt`](TxReceipt.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TxReceipt`](TxReceipt.md)\>

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
| `a` | `undefined` \| [`TxReceipt`](TxReceipt.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxReceipt`](TxReceipt.md)\> |
| `b` | `undefined` \| [`TxReceipt`](TxReceipt.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxReceipt`](TxReceipt.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:316](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L316)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TxReceipt`](TxReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TxReceipt`](TxReceipt.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:304](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L304)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TxReceipt`](TxReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxReceipt`](TxReceipt.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:308](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L308)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TxReceipt`](TxReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxReceipt`](TxReceipt.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:312](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L312)
