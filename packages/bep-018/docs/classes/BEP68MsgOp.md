[@bearmint/bep-018 - v0.0.0](../README.md) / BEP68MsgOp

# Class: BEP68MsgOp

Blob Registration Tx

**`Generated`**

from message BEP68MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP68MsgOp`](BEP68MsgOp.md)\>

  ↳ **`BEP68MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP68MsgOp.md#constructor)

### Properties

- [data](BEP68MsgOp.md#data)
- [memo](BEP68MsgOp.md#memo)
- [mimeType](BEP68MsgOp.md#mimetype)
- [fields](BEP68MsgOp.md#fields)
- [runtime](BEP68MsgOp.md#runtime)
- [typeName](BEP68MsgOp.md#typename)

### Methods

- [clone](BEP68MsgOp.md#clone)
- [equals](BEP68MsgOp.md#equals)
- [fromBinary](BEP68MsgOp.md#frombinary)
- [fromJson](BEP68MsgOp.md#fromjson)
- [fromJsonString](BEP68MsgOp.md#fromjsonstring)
- [getType](BEP68MsgOp.md#gettype)
- [toBinary](BEP68MsgOp.md#tobinary)
- [toJson](BEP68MsgOp.md#tojson)
- [toJsonString](BEP68MsgOp.md#tojsonstring)
- [equals](BEP68MsgOp.md#equals-1)
- [fromBinary](BEP68MsgOp.md#frombinary-1)
- [fromJson](BEP68MsgOp.md#fromjson-1)
- [fromJsonString](BEP68MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP68MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP68MsgOp`](BEP68MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1353](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1353)

## Properties

### data

• **data**: `Uint8Array`

**`Generated`**

from field: bytes data = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1346](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1346)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1351](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1351)

___

### mimeType

• **mimeType**: `string` = `""`

**`Generated`**

from field: string mime_type = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1341](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1341)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1360](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1360)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1358](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1358)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP68MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1359](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1359)

## Methods

### clone

▸ **clone**(): [`BEP68MsgOp`](BEP68MsgOp.md)

Create a deep copy.

#### Returns

[`BEP68MsgOp`](BEP68MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP68MsgOp`](BEP68MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP68MsgOp`](BEP68MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP68MsgOp`](BEP68MsgOp.md)

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

[`BEP68MsgOp`](BEP68MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP68MsgOp`](BEP68MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP68MsgOp`](BEP68MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP68MsgOp`](BEP68MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP68MsgOp`](BEP68MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP68MsgOp`](BEP68MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP68MsgOp`](BEP68MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP68MsgOp`](BEP68MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP68MsgOp`](BEP68MsgOp.md)\> |
| `b` | `undefined` \| [`BEP68MsgOp`](BEP68MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP68MsgOp`](BEP68MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1378](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1378)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP68MsgOp`](BEP68MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP68MsgOp`](BEP68MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1366](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1366)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP68MsgOp`](BEP68MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP68MsgOp`](BEP68MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1370](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1370)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP68MsgOp`](BEP68MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP68MsgOp`](BEP68MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1374](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1374)
