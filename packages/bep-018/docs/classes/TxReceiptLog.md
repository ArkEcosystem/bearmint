[@bearmint/bep-018 - v0.0.0](../README.md) / TxReceiptLog

# Class: TxReceiptLog

**`Generated`**

from message TxReceiptLog

## Hierarchy

- [`Message`](Message.md)<[`TxReceiptLog`](TxReceiptLog.md)\>

  ↳ **`TxReceiptLog`**

## Table of contents

### Constructors

- [constructor](TxReceiptLog.md#constructor)

### Properties

- [args](TxReceiptLog.md#args)
- [event](TxReceiptLog.md#event)
- [fields](TxReceiptLog.md#fields)
- [runtime](TxReceiptLog.md#runtime)
- [typeName](TxReceiptLog.md#typename)

### Methods

- [clone](TxReceiptLog.md#clone)
- [equals](TxReceiptLog.md#equals)
- [fromBinary](TxReceiptLog.md#frombinary)
- [fromJson](TxReceiptLog.md#fromjson)
- [fromJsonString](TxReceiptLog.md#fromjsonstring)
- [getType](TxReceiptLog.md#gettype)
- [toBinary](TxReceiptLog.md#tobinary)
- [toJson](TxReceiptLog.md#tojson)
- [toJsonString](TxReceiptLog.md#tojsonstring)
- [equals](TxReceiptLog.md#equals-1)
- [fromBinary](TxReceiptLog.md#frombinary-1)
- [fromJson](TxReceiptLog.md#fromjson-1)
- [fromJsonString](TxReceiptLog.md#fromjsonstring-1)

## Constructors

### constructor

• **new TxReceiptLog**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`TxReceiptLog`](TxReceiptLog.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:335](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L335)

## Properties

### args

• `Optional` **args**: `Struct`

**`Generated`**

from field: google.protobuf.Struct args = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:333](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L333)

___

### event

• **event**: `string` = `""`

**`Generated`**

from field: string event = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:328](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L328)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:342](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L342)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:340](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L340)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"TxReceiptLog"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:341](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L341)

## Methods

### clone

▸ **clone**(): [`TxReceiptLog`](TxReceiptLog.md)

Create a deep copy.

#### Returns

[`TxReceiptLog`](TxReceiptLog.md)

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
| `other` | `undefined` \| ``null`` \| [`TxReceiptLog`](TxReceiptLog.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxReceiptLog`](TxReceiptLog.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TxReceiptLog`](TxReceiptLog.md)

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

[`TxReceiptLog`](TxReceiptLog.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TxReceiptLog`](TxReceiptLog.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxReceiptLog`](TxReceiptLog.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TxReceiptLog`](TxReceiptLog.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxReceiptLog`](TxReceiptLog.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TxReceiptLog`](TxReceiptLog.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TxReceiptLog`](TxReceiptLog.md)\>

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
| `a` | `undefined` \| [`TxReceiptLog`](TxReceiptLog.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxReceiptLog`](TxReceiptLog.md)\> |
| `b` | `undefined` \| [`TxReceiptLog`](TxReceiptLog.md) \| [`PlainMessage`](../README.md#plainmessage)<[`TxReceiptLog`](TxReceiptLog.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:359](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L359)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TxReceiptLog`](TxReceiptLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TxReceiptLog`](TxReceiptLog.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:347](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L347)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TxReceiptLog`](TxReceiptLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxReceiptLog`](TxReceiptLog.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:351](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L351)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TxReceiptLog`](TxReceiptLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TxReceiptLog`](TxReceiptLog.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:355](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L355)
