[@bearmint/bep-018 - v0.0.0](../README.md) / BEP67Msg

# Class: BEP67Msg

**`Generated`**

from message BEP67Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP67Msg`](BEP67Msg.md)\>

  ↳ **`BEP67Msg`**

## Table of contents

### Constructors

- [constructor](BEP67Msg.md#constructor)

### Properties

- [memo](BEP67Msg.md#memo)
- [ops](BEP67Msg.md#ops)
- [fields](BEP67Msg.md#fields)
- [runtime](BEP67Msg.md#runtime)
- [typeName](BEP67Msg.md#typename)

### Methods

- [clone](BEP67Msg.md#clone)
- [equals](BEP67Msg.md#equals)
- [fromBinary](BEP67Msg.md#frombinary)
- [fromJson](BEP67Msg.md#fromjson)
- [fromJsonString](BEP67Msg.md#fromjsonstring)
- [getType](BEP67Msg.md#gettype)
- [toBinary](BEP67Msg.md#tobinary)
- [toJson](BEP67Msg.md#tojson)
- [toJsonString](BEP67Msg.md#tojsonstring)
- [equals](BEP67Msg.md#equals-1)
- [fromBinary](BEP67Msg.md#frombinary-1)
- [fromJson](BEP67Msg.md#fromjson-1)
- [fromJsonString](BEP67Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP67Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP67Msg`](BEP67Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1303](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1303)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1301](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1301)

___

### ops

• **ops**: [`BEP67MsgOp`](BEP67MsgOp.md)[] = `[]`

**`Generated`**

from field: repeated BEP67MsgOp ops = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1296](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1296)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1310](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1310)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1308](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1308)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP67Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1309](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1309)

## Methods

### clone

▸ **clone**(): [`BEP67Msg`](BEP67Msg.md)

Create a deep copy.

#### Returns

[`BEP67Msg`](BEP67Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP67Msg`](BEP67Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP67Msg`](BEP67Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP67Msg`](BEP67Msg.md)

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

[`BEP67Msg`](BEP67Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP67Msg`](BEP67Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP67Msg`](BEP67Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP67Msg`](BEP67Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP67Msg`](BEP67Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP67Msg`](BEP67Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP67Msg`](BEP67Msg.md)\>

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
| `a` | `undefined` \| [`BEP67Msg`](BEP67Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP67Msg`](BEP67Msg.md)\> |
| `b` | `undefined` \| [`BEP67Msg`](BEP67Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP67Msg`](BEP67Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1327](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1327)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP67Msg`](BEP67Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP67Msg`](BEP67Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1315](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1315)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP67Msg`](BEP67Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP67Msg`](BEP67Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1319](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1319)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP67Msg`](BEP67Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP67Msg`](BEP67Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1323](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1323)
