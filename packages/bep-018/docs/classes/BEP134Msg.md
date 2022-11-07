[@bearmint/bep-018 - v0.0.0](../README.md) / BEP134Msg

# Class: BEP134Msg

**`Generated`**

from message BEP134Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP134Msg`](BEP134Msg.md)\>

  ↳ **`BEP134Msg`**

## Table of contents

### Constructors

- [constructor](BEP134Msg.md#constructor)

### Properties

- [memo](BEP134Msg.md#memo)
- [ops](BEP134Msg.md#ops)
- [fields](BEP134Msg.md#fields)
- [runtime](BEP134Msg.md#runtime)
- [typeName](BEP134Msg.md#typename)

### Methods

- [clone](BEP134Msg.md#clone)
- [equals](BEP134Msg.md#equals)
- [fromBinary](BEP134Msg.md#frombinary)
- [fromJson](BEP134Msg.md#fromjson)
- [fromJsonString](BEP134Msg.md#fromjsonstring)
- [getType](BEP134Msg.md#gettype)
- [toBinary](BEP134Msg.md#tobinary)
- [toJson](BEP134Msg.md#tojson)
- [toJsonString](BEP134Msg.md#tojsonstring)
- [equals](BEP134Msg.md#equals-1)
- [fromBinary](BEP134Msg.md#frombinary-1)
- [fromJson](BEP134Msg.md#fromjson-1)
- [fromJsonString](BEP134Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP134Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP134Msg`](BEP134Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2906](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2906)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2904](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2904)

___

### ops

• **ops**: [`BEP134MsgOp`](BEP134MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP134MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2899](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2899)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2913](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2913)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2911](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2911)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP134Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2912](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2912)

## Methods

### clone

▸ **clone**(): [`BEP134Msg`](BEP134Msg.md)

Create a deep copy.

#### Returns

[`BEP134Msg`](BEP134Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP134Msg`](BEP134Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Msg`](BEP134Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP134Msg`](BEP134Msg.md)

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

[`BEP134Msg`](BEP134Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP134Msg`](BEP134Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Msg`](BEP134Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP134Msg`](BEP134Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Msg`](BEP134Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP134Msg`](BEP134Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP134Msg`](BEP134Msg.md)\>

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
| `a` | `undefined` \| [`BEP134Msg`](BEP134Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Msg`](BEP134Msg.md)\> |
| `b` | `undefined` \| [`BEP134Msg`](BEP134Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP134Msg`](BEP134Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2930](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2930)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP134Msg`](BEP134Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP134Msg`](BEP134Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2918](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2918)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP134Msg`](BEP134Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Msg`](BEP134Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2922](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2922)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP134Msg`](BEP134Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP134Msg`](BEP134Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2926](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2926)
