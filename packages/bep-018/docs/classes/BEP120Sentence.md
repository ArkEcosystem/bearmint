[@bearmint/bep-018 - v0.0.0](../README.md) / BEP120Sentence

# Class: BEP120Sentence

BEP120

**`Generated`**

from message BEP120Sentence

## Hierarchy

- [`Message`](Message.md)<[`BEP120Sentence`](BEP120Sentence.md)\>

  ↳ **`BEP120Sentence`**

## Table of contents

### Constructors

- [constructor](BEP120Sentence.md#constructor)

### Properties

- [end](BEP120Sentence.md#end)
- [start](BEP120Sentence.md#start)
- [fields](BEP120Sentence.md#fields)
- [runtime](BEP120Sentence.md#runtime)
- [typeName](BEP120Sentence.md#typename)

### Methods

- [clone](BEP120Sentence.md#clone)
- [equals](BEP120Sentence.md#equals)
- [fromBinary](BEP120Sentence.md#frombinary)
- [fromJson](BEP120Sentence.md#fromjson)
- [fromJsonString](BEP120Sentence.md#fromjsonstring)
- [getType](BEP120Sentence.md#gettype)
- [toBinary](BEP120Sentence.md#tobinary)
- [toJson](BEP120Sentence.md#tojson)
- [toJsonString](BEP120Sentence.md#tojsonstring)
- [equals](BEP120Sentence.md#equals-1)
- [fromBinary](BEP120Sentence.md#frombinary-1)
- [fromJson](BEP120Sentence.md#fromjson-1)
- [fromJsonString](BEP120Sentence.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP120Sentence**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP120Sentence`](BEP120Sentence.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:495](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L495)

## Properties

### end

• **end**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 end = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:493](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L493)

___

### start

• **start**: `bigint` = `protoInt64.zero`

**`Generated`**

from field: uint64 start = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:488](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L488)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:502](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L502)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:500](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L500)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP120Sentence"``

#### Defined in

[packages/bep-018/source/account_pb.ts:501](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L501)

## Methods

### clone

▸ **clone**(): [`BEP120Sentence`](BEP120Sentence.md)

Create a deep copy.

#### Returns

[`BEP120Sentence`](BEP120Sentence.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP120Sentence`](BEP120Sentence.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120Sentence`](BEP120Sentence.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP120Sentence`](BEP120Sentence.md)

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

[`BEP120Sentence`](BEP120Sentence.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP120Sentence`](BEP120Sentence.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120Sentence`](BEP120Sentence.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP120Sentence`](BEP120Sentence.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120Sentence`](BEP120Sentence.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP120Sentence`](BEP120Sentence.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP120Sentence`](BEP120Sentence.md)\>

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
| `a` | `undefined` \| [`BEP120Sentence`](BEP120Sentence.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120Sentence`](BEP120Sentence.md)\> |
| `b` | `undefined` \| [`BEP120Sentence`](BEP120Sentence.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP120Sentence`](BEP120Sentence.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:519](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L519)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP120Sentence`](BEP120Sentence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP120Sentence`](BEP120Sentence.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:507](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L507)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP120Sentence`](BEP120Sentence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120Sentence`](BEP120Sentence.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:511](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L511)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP120Sentence`](BEP120Sentence.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP120Sentence`](BEP120Sentence.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:515](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L515)
