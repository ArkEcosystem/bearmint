[@bearmint/bep-018 - v0.0.0](../README.md) / BEP59MsgHash

# Class: BEP59MsgHash

**`Generated`**

from message BEP59MsgHash

## Hierarchy

- [`Message`](Message.md)<[`BEP59MsgHash`](BEP59MsgHash.md)\>

  ↳ **`BEP59MsgHash`**

## Table of contents

### Constructors

- [constructor](BEP59MsgHash.md#constructor)

### Properties

- [memo](BEP59MsgHash.md#memo)
- [strategy](BEP59MsgHash.md#strategy)
- [strategyArgs](BEP59MsgHash.md#strategyargs)
- [fields](BEP59MsgHash.md#fields)
- [runtime](BEP59MsgHash.md#runtime)
- [typeName](BEP59MsgHash.md#typename)

### Methods

- [clone](BEP59MsgHash.md#clone)
- [equals](BEP59MsgHash.md#equals)
- [fromBinary](BEP59MsgHash.md#frombinary)
- [fromJson](BEP59MsgHash.md#fromjson)
- [fromJsonString](BEP59MsgHash.md#fromjsonstring)
- [getType](BEP59MsgHash.md#gettype)
- [toBinary](BEP59MsgHash.md#tobinary)
- [toJson](BEP59MsgHash.md#tojson)
- [toJsonString](BEP59MsgHash.md#tojsonstring)
- [equals](BEP59MsgHash.md#equals-1)
- [fromBinary](BEP59MsgHash.md#frombinary-1)
- [fromJson](BEP59MsgHash.md#fromjson-1)
- [fromJsonString](BEP59MsgHash.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP59MsgHash**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP59MsgHash`](BEP59MsgHash.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:816](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L816)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:814](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L814)

___

### strategy

• **strategy**: `string` = `""`

**`Generated`**

from field: string strategy = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:804](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L804)

___

### strategyArgs

• **strategyArgs**: `string` = `""`

**`Generated`**

from field: string strategy_args = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:809](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L809)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:823](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L823)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:821](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L821)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP59MsgHash"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:822](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L822)

## Methods

### clone

▸ **clone**(): [`BEP59MsgHash`](BEP59MsgHash.md)

Create a deep copy.

#### Returns

[`BEP59MsgHash`](BEP59MsgHash.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP59MsgHash`](BEP59MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59MsgHash`](BEP59MsgHash.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP59MsgHash`](BEP59MsgHash.md)

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

[`BEP59MsgHash`](BEP59MsgHash.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP59MsgHash`](BEP59MsgHash.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59MsgHash`](BEP59MsgHash.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP59MsgHash`](BEP59MsgHash.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59MsgHash`](BEP59MsgHash.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP59MsgHash`](BEP59MsgHash.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP59MsgHash`](BEP59MsgHash.md)\>

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
| `a` | `undefined` \| [`BEP59MsgHash`](BEP59MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59MsgHash`](BEP59MsgHash.md)\> |
| `b` | `undefined` \| [`BEP59MsgHash`](BEP59MsgHash.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59MsgHash`](BEP59MsgHash.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:841](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L841)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP59MsgHash`](BEP59MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP59MsgHash`](BEP59MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:829](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L829)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP59MsgHash`](BEP59MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59MsgHash`](BEP59MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:833](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L833)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP59MsgHash`](BEP59MsgHash.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59MsgHash`](BEP59MsgHash.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:837](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L837)
