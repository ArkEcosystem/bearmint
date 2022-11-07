[@bearmint/bep-018 - v0.0.0](../README.md) / BEP126MsgOp

# Class: BEP126MsgOp

**`Generated`**

from message BEP126MsgOp

## Hierarchy

- [`Message`](Message.md)<[`BEP126MsgOp`](BEP126MsgOp.md)\>

  ↳ **`BEP126MsgOp`**

## Table of contents

### Constructors

- [constructor](BEP126MsgOp.md#constructor)

### Properties

- [memo](BEP126MsgOp.md#memo)
- [name](BEP126MsgOp.md#name)
- [policies](BEP126MsgOp.md#policies)
- [symbol](BEP126MsgOp.md#symbol)
- [uriPrefix](BEP126MsgOp.md#uriprefix)
- [uriSuffix](BEP126MsgOp.md#urisuffix)
- [fields](BEP126MsgOp.md#fields)
- [runtime](BEP126MsgOp.md#runtime)
- [typeName](BEP126MsgOp.md#typename)

### Methods

- [clone](BEP126MsgOp.md#clone)
- [equals](BEP126MsgOp.md#equals)
- [fromBinary](BEP126MsgOp.md#frombinary)
- [fromJson](BEP126MsgOp.md#fromjson)
- [fromJsonString](BEP126MsgOp.md#fromjsonstring)
- [getType](BEP126MsgOp.md#gettype)
- [toBinary](BEP126MsgOp.md#tobinary)
- [toJson](BEP126MsgOp.md#tojson)
- [toJsonString](BEP126MsgOp.md#tojsonstring)
- [equals](BEP126MsgOp.md#equals-1)
- [fromBinary](BEP126MsgOp.md#frombinary-1)
- [fromJson](BEP126MsgOp.md#fromjson-1)
- [fromJsonString](BEP126MsgOp.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP126MsgOp**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP126MsgOp`](BEP126MsgOp.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1898](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1898)

## Properties

### memo

• `Optional` **memo**: `string`

**`Generated`**

from field: optional string memo = 6;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1896](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1896)

___

### name

• **name**: `string` = `""`

**`Generated`**

from field: string name = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1871](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1871)

___

### policies

• **policies**: [`BEP126Policy`](BEP126Policy.md)[] = `[]`

**`Generated`**

from field: repeated BEP126Policy policies = 5;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1891](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1891)

___

### symbol

• **symbol**: `string` = `""`

**`Generated`**

from field: string symbol = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1876](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1876)

___

### uriPrefix

• **uriPrefix**: `string` = `""`

**`Generated`**

from field: string uri_prefix = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1881](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1881)

___

### uriSuffix

• **uriSuffix**: `string` = `""`

**`Generated`**

from field: string uri_suffix = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1886](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1886)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1905](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1905)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1903](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1903)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP126MsgOp"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1904](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1904)

## Methods

### clone

▸ **clone**(): [`BEP126MsgOp`](BEP126MsgOp.md)

Create a deep copy.

#### Returns

[`BEP126MsgOp`](BEP126MsgOp.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP126MsgOp`](BEP126MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126MsgOp`](BEP126MsgOp.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP126MsgOp`](BEP126MsgOp.md)

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

[`BEP126MsgOp`](BEP126MsgOp.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP126MsgOp`](BEP126MsgOp.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126MsgOp`](BEP126MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP126MsgOp`](BEP126MsgOp.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126MsgOp`](BEP126MsgOp.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP126MsgOp`](BEP126MsgOp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP126MsgOp`](BEP126MsgOp.md)\>

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
| `a` | `undefined` \| [`BEP126MsgOp`](BEP126MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126MsgOp`](BEP126MsgOp.md)\> |
| `b` | `undefined` \| [`BEP126MsgOp`](BEP126MsgOp.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126MsgOp`](BEP126MsgOp.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1926](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1926)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP126MsgOp`](BEP126MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP126MsgOp`](BEP126MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1914](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1914)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP126MsgOp`](BEP126MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126MsgOp`](BEP126MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1918](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1918)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP126MsgOp`](BEP126MsgOp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126MsgOp`](BEP126MsgOp.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1922](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1922)
