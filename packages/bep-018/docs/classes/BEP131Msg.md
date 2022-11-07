[@bearmint/bep-018 - v0.0.0](../README.md) / BEP131Msg

# Class: BEP131Msg

**`Generated`**

from message BEP131Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP131Msg`](BEP131Msg.md)\>

  ↳ **`BEP131Msg`**

## Table of contents

### Constructors

- [constructor](BEP131Msg.md#constructor)

### Properties

- [memo](BEP131Msg.md#memo)
- [ops](BEP131Msg.md#ops)
- [fields](BEP131Msg.md#fields)
- [runtime](BEP131Msg.md#runtime)
- [typeName](BEP131Msg.md#typename)

### Methods

- [clone](BEP131Msg.md#clone)
- [equals](BEP131Msg.md#equals)
- [fromBinary](BEP131Msg.md#frombinary)
- [fromJson](BEP131Msg.md#fromjson)
- [fromJsonString](BEP131Msg.md#fromjsonstring)
- [getType](BEP131Msg.md#gettype)
- [toBinary](BEP131Msg.md#tobinary)
- [toJson](BEP131Msg.md#tojson)
- [toJsonString](BEP131Msg.md#tojsonstring)
- [equals](BEP131Msg.md#equals-1)
- [fromBinary](BEP131Msg.md#frombinary-1)
- [fromJson](BEP131Msg.md#fromjson-1)
- [fromJsonString](BEP131Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP131Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP131Msg`](BEP131Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2421](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2421)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2419](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2419)

___

### ops

• **ops**: [`BEP131MsgOp`](BEP131MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP131MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2414](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2414)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2428](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2428)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2426](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2426)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP131Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2427](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2427)

## Methods

### clone

▸ **clone**(): [`BEP131Msg`](BEP131Msg.md)

Create a deep copy.

#### Returns

[`BEP131Msg`](BEP131Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP131Msg`](BEP131Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131Msg`](BEP131Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP131Msg`](BEP131Msg.md)

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

[`BEP131Msg`](BEP131Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP131Msg`](BEP131Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131Msg`](BEP131Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP131Msg`](BEP131Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131Msg`](BEP131Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP131Msg`](BEP131Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP131Msg`](BEP131Msg.md)\>

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
| `a` | `undefined` \| [`BEP131Msg`](BEP131Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131Msg`](BEP131Msg.md)\> |
| `b` | `undefined` \| [`BEP131Msg`](BEP131Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131Msg`](BEP131Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2445](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2445)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP131Msg`](BEP131Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP131Msg`](BEP131Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2433](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2433)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP131Msg`](BEP131Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131Msg`](BEP131Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2437](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2437)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP131Msg`](BEP131Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131Msg`](BEP131Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2441](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2441)
