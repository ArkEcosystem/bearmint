[@bearmint/bep-018 - v0.0.0](../README.md) / BEP59Strategy

# Class: BEP59Strategy

**`Generated`**

from message BEP59Strategy

## Hierarchy

- [`Message`](Message.md)<[`BEP59Strategy`](BEP59Strategy.md)\>

  ↳ **`BEP59Strategy`**

## Table of contents

### Constructors

- [constructor](BEP59Strategy.md#constructor)

### Properties

- [strategy](BEP59Strategy.md#strategy)
- [strategyArgs](BEP59Strategy.md#strategyargs)
- [fields](BEP59Strategy.md#fields)
- [runtime](BEP59Strategy.md#runtime)
- [typeName](BEP59Strategy.md#typename)

### Methods

- [clone](BEP59Strategy.md#clone)
- [equals](BEP59Strategy.md#equals)
- [fromBinary](BEP59Strategy.md#frombinary)
- [fromJson](BEP59Strategy.md#fromjson)
- [fromJsonString](BEP59Strategy.md#fromjsonstring)
- [getType](BEP59Strategy.md#gettype)
- [toBinary](BEP59Strategy.md#tobinary)
- [toJson](BEP59Strategy.md#tojson)
- [toJsonString](BEP59Strategy.md#tojsonstring)
- [equals](BEP59Strategy.md#equals-1)
- [fromBinary](BEP59Strategy.md#frombinary-1)
- [fromJson](BEP59Strategy.md#fromjson-1)
- [fromJsonString](BEP59Strategy.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP59Strategy**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP59Strategy`](BEP59Strategy.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:860](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L860)

## Properties

### strategy

• **strategy**: `string` = `""`

**`Generated`**

from field: string strategy = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:853](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L853)

___

### strategyArgs

• **strategyArgs**: `string` = `""`

**`Generated`**

from field: string strategy_args = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:858](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L858)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:867](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L867)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:865](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L865)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP59Strategy"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:866](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L866)

## Methods

### clone

▸ **clone**(): [`BEP59Strategy`](BEP59Strategy.md)

Create a deep copy.

#### Returns

[`BEP59Strategy`](BEP59Strategy.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP59Strategy`](BEP59Strategy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59Strategy`](BEP59Strategy.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP59Strategy`](BEP59Strategy.md)

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

[`BEP59Strategy`](BEP59Strategy.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP59Strategy`](BEP59Strategy.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59Strategy`](BEP59Strategy.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP59Strategy`](BEP59Strategy.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59Strategy`](BEP59Strategy.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP59Strategy`](BEP59Strategy.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP59Strategy`](BEP59Strategy.md)\>

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
| `a` | `undefined` \| [`BEP59Strategy`](BEP59Strategy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59Strategy`](BEP59Strategy.md)\> |
| `b` | `undefined` \| [`BEP59Strategy`](BEP59Strategy.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP59Strategy`](BEP59Strategy.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:884](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L884)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP59Strategy`](BEP59Strategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP59Strategy`](BEP59Strategy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:872](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L872)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP59Strategy`](BEP59Strategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59Strategy`](BEP59Strategy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:876](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L876)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP59Strategy`](BEP59Strategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP59Strategy`](BEP59Strategy.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:880](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L880)
