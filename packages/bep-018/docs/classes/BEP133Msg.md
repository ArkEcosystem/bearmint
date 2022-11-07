[@bearmint/bep-018 - v0.0.0](../README.md) / BEP133Msg

# Class: BEP133Msg

**`Generated`**

from message BEP133Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP133Msg`](BEP133Msg.md)\>

  ↳ **`BEP133Msg`**

## Table of contents

### Constructors

- [constructor](BEP133Msg.md#constructor)

### Properties

- [memo](BEP133Msg.md#memo)
- [ops](BEP133Msg.md#ops)
- [fields](BEP133Msg.md#fields)
- [runtime](BEP133Msg.md#runtime)
- [typeName](BEP133Msg.md#typename)

### Methods

- [clone](BEP133Msg.md#clone)
- [equals](BEP133Msg.md#equals)
- [fromBinary](BEP133Msg.md#frombinary)
- [fromJson](BEP133Msg.md#fromjson)
- [fromJsonString](BEP133Msg.md#fromjsonstring)
- [getType](BEP133Msg.md#gettype)
- [toBinary](BEP133Msg.md#tobinary)
- [toJson](BEP133Msg.md#tojson)
- [toJsonString](BEP133Msg.md#tojsonstring)
- [equals](BEP133Msg.md#equals-1)
- [fromBinary](BEP133Msg.md#frombinary-1)
- [fromJson](BEP133Msg.md#fromjson-1)
- [fromJsonString](BEP133Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP133Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP133Msg`](BEP133Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2666](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2666)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2664](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2664)

___

### ops

• **ops**: [`BEP133MsgOp`](BEP133MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP133MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2659](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2659)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2673](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2673)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2671](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2671)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP133Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2672](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2672)

## Methods

### clone

▸ **clone**(): [`BEP133Msg`](BEP133Msg.md)

Create a deep copy.

#### Returns

[`BEP133Msg`](BEP133Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP133Msg`](BEP133Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP133Msg`](BEP133Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP133Msg`](BEP133Msg.md)

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

[`BEP133Msg`](BEP133Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP133Msg`](BEP133Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP133Msg`](BEP133Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP133Msg`](BEP133Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP133Msg`](BEP133Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP133Msg`](BEP133Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP133Msg`](BEP133Msg.md)\>

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
| `a` | `undefined` \| [`BEP133Msg`](BEP133Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP133Msg`](BEP133Msg.md)\> |
| `b` | `undefined` \| [`BEP133Msg`](BEP133Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP133Msg`](BEP133Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2690](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2690)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP133Msg`](BEP133Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP133Msg`](BEP133Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2678](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2678)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP133Msg`](BEP133Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP133Msg`](BEP133Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2682](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2682)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP133Msg`](BEP133Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP133Msg`](BEP133Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2686](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2686)
