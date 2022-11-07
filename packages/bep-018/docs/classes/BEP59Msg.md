[@bearmint/bep-018 - v0.0.0](../README.md) / BEP59Msg

# Class: BEP59Msg

Validator Distribution Tx

**`Generated`**

from message BEP59Msg

## Hierarchy

- [`Message`](Message.md)<[`BEP59Msg`](BEP59Msg.md)\>

  ↳ **`BEP59Msg`**

## Table of contents

### Constructors

- [constructor](BEP59Msg.md#constructor)

### Properties

- [memo](BEP59Msg.md#memo)
- [signature](BEP59Msg.md#signature)
- [strategy](BEP59Msg.md#strategy)
- [strategyArgs](BEP59Msg.md#strategyargs)
- [fields](BEP59Msg.md#fields)
- [runtime](BEP59Msg.md#runtime)
- [typeName](BEP59Msg.md#typename)

### Methods

- [clone](BEP59Msg.md#clone)
- [equals](BEP59Msg.md#equals)
- [fromBinary](BEP59Msg.md#frombinary)
- [fromJson](BEP59Msg.md#fromjson)
- [fromJsonString](BEP59Msg.md#fromjsonstring)
- [getType](BEP59Msg.md#gettype)
- [toBinary](BEP59Msg.md#tobinary)
- [toJson](BEP59Msg.md#tojson)
- [toJsonString](BEP59Msg.md#tojsonstring)
- [equals](BEP59Msg.md#equals-1)
- [fromBinary](BEP59Msg.md#frombinary-1)
- [fromJson](BEP59Msg.md#fromjson-1)
- [fromJsonString](BEP59Msg.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP59Msg**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP59Msg`](BEP59Msg.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:766](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L766)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:764](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L764)

___

### signature

• **signature**: `Uint8Array`

**`Generated`**

from field: bytes signature = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:759](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L759)

___

### strategy

• **strategy**: `string` = `""`

**`Generated`**

from field: string strategy = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:749](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L749)

___

### strategyArgs

• **strategyArgs**: `string` = `""`

**`Generated`**

from field: string strategy_args = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:754](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L754)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:773](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L773)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:771](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L771)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP59Msg"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:772](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L772)

## Methods

### clone

▸ **clone**(): [`BEP59Msg`](BEP59Msg.md)

Create a deep copy.

#### Returns

[`BEP59Msg`](BEP59Msg.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP59Msg`](BEP59Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59Msg`](BEP59Msg.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP59Msg`](BEP59Msg.md)

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

[`BEP59Msg`](BEP59Msg.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP59Msg`](BEP59Msg.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59Msg`](BEP59Msg.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP59Msg`](BEP59Msg.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59Msg`](BEP59Msg.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP59Msg`](BEP59Msg.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP59Msg`](BEP59Msg.md)\>

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
| `a` | `undefined` \| [`BEP59Msg`](BEP59Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59Msg`](BEP59Msg.md)\> |
| `b` | `undefined` \| [`BEP59Msg`](BEP59Msg.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59Msg`](BEP59Msg.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:792](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L792)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP59Msg`](BEP59Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP59Msg`](BEP59Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:780](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L780)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP59Msg`](BEP59Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59Msg`](BEP59Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:784](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L784)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP59Msg`](BEP59Msg.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59Msg`](BEP59Msg.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:788](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L788)
