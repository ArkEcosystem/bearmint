[@bearmint/bep-018 - v0.0.0](../README.md) / BEP55MsgOp

# Class: BEP55MsgOp

Token Transfer Tx

**`Generated`**

from message BEP55MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP55MsgOp`](BEP55MsgOp.md)\>

  ↳ **`BEP55MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP55MsgOp.md#constructor)

### Properties

- [amount](BEP55MsgOp.md#amount)
- [denomination](BEP55MsgOp.md#denomination)
- [memo](BEP55MsgOp.md#memo)
- [recipient](BEP55MsgOp.md#recipient)
- [fields](BEP55MsgOp.md#fields)
- [runtime](BEP55MsgOp.md#runtime)
- [typeName](BEP55MsgOp.md#typename)

### Methods

- [clone](BEP55MsgOp.md#clone)
- [equals](BEP55MsgOp.md#equals)
- [fromBinary](BEP55MsgOp.md#frombinary)
- [fromJson](BEP55MsgOp.md#fromjson)
- [fromJsonString](BEP55MsgOp.md#fromjsonstring)
- [getType](BEP55MsgOp.md#gettype)
- [toBinary](BEP55MsgOp.md#tobinary)
- [toJson](BEP55MsgOp.md#tojson)
- [toJsonString](BEP55MsgOp.md#tojsonstring)
- [equals](BEP55MsgOp.md#equals-1)
- [fromBinary](BEP55MsgOp.md#frombinary-1)
- [fromJson](BEP55MsgOp.md#fromjson-1)
- [fromJsonString](BEP55MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP55MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP55MsgOp`](BEP55MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:390](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L390)

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 amount = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:378](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L378)

___

### denomination

• **denomination**: `string` = `""`

**`Generated`**

from field: string denomination = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:373](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L373)

___

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:388](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L388)

___

### recipient

• **recipient**: `string` = `""`

**`Generated`**

from field: string recipient = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:383](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L383)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:397](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L397)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:395](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L395)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP55MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:396](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L396)

## Methods

### clone

▸ **clone**(): [`BEP55MsgOp`](BEP55MsgOp.md)

Create a deep copy.

#### Returns

[`BEP55MsgOp`](BEP55MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP55MsgOp`](BEP55MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP55MsgOp`](BEP55MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP55MsgOp`](BEP55MsgOp.md)

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

[`BEP55MsgOp`](BEP55MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP55MsgOp`](BEP55MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP55MsgOp`](BEP55MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP55MsgOp`](BEP55MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP55MsgOp`](BEP55MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP55MsgOp`](BEP55MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP55MsgOp`](BEP55MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP55MsgOp`](BEP55MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP55MsgOp`](BEP55MsgOp.md)\> |
| `b` | `undefined` \| [`BEP55MsgOp`](BEP55MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP55MsgOp`](BEP55MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:416](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L416)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP55MsgOp`](BEP55MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP55MsgOp`](BEP55MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:404](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L404)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP55MsgOp`](BEP55MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP55MsgOp`](BEP55MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:408](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L408)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP55MsgOp`](BEP55MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP55MsgOp`](BEP55MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:412](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L412)
