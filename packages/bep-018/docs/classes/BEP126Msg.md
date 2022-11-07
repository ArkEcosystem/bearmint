[@bearmint/bep-018 - v0.0.0](../README.md) / BEP126Msg

# Class: BEP126Msg

**`Generated`**

from message BEP126Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP126Msg`](BEP126Msg.md)\>

  ↳ **`BEP126Msg`**

## Table of contents

### Constructors

- [constructor](BEP126Msg.md#constructor)

### Properties

- [memo](BEP126Msg.md#memo)
- [ops](BEP126Msg.md#ops)
- [fields](BEP126Msg.md#fields)
- [runtime](BEP126Msg.md#runtime)
- [typeName](BEP126Msg.md#typename)

### Methods

- [clone](BEP126Msg.md#clone)
- [equals](BEP126Msg.md#equals)
- [fromBinary](BEP126Msg.md#frombinary)
- [fromJson](BEP126Msg.md#fromjson)
- [fromJsonString](BEP126Msg.md#fromjsonstring)
- [getType](BEP126Msg.md#gettype)
- [toBinary](BEP126Msg.md#tobinary)
- [toJson](BEP126Msg.md#tojson)
- [toJsonString](BEP126Msg.md#tojsonstring)
- [equals](BEP126Msg.md#equals-1)
- [fromBinary](BEP126Msg.md#frombinary-1)
- [fromJson](BEP126Msg.md#fromjson-1)
- [fromJsonString](BEP126Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP126Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP126Msg`](BEP126Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1945](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1945)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1943](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1943)

___

### ops

• **ops**: [`BEP126MsgOp`](BEP126MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP126MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1938](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1938)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1952](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1952)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1950](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1950)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP126Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1951](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1951)

## Methods

### clone

▸ **clone**(): [`BEP126Msg`](BEP126Msg.md)

Create a deep copy.

#### Returns

[`BEP126Msg`](BEP126Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP126Msg`](BEP126Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Msg`](BEP126Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP126Msg`](BEP126Msg.md)

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

[`BEP126Msg`](BEP126Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP126Msg`](BEP126Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Msg`](BEP126Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP126Msg`](BEP126Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Msg`](BEP126Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP126Msg`](BEP126Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP126Msg`](BEP126Msg.md)\>

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
| `a` | `undefined` \| [`BEP126Msg`](BEP126Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Msg`](BEP126Msg.md)\> |
| `b` | `undefined` \| [`BEP126Msg`](BEP126Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Msg`](BEP126Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1969](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1969)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP126Msg`](BEP126Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP126Msg`](BEP126Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1957](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1957)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP126Msg`](BEP126Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Msg`](BEP126Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1961](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1961)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP126Msg`](BEP126Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Msg`](BEP126Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1965](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1965)
