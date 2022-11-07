[@bearmint/bep-018 - v0.0.0](../README.md) / BEP131Token

# Class: BEP131Token

**`Generated`**

from message BEP131Token

## Hierarchy

- [`Message`](Message.md)<[`BEP131Token`](BEP131Token.md)\>

  ↳ **`BEP131Token`**

## Table of contents

### Constructors

- [constructor](BEP131Token.md#constructor)

### Properties

- [collection](BEP131Token.md#collection)
- [hash](BEP131Token.md#hash)
- [id](BEP131Token.md#id)
- [owner](BEP131Token.md#owner)
- [fields](BEP131Token.md#fields)
- [runtime](BEP131Token.md#runtime)
- [typeName](BEP131Token.md#typename)

### Methods

- [clone](BEP131Token.md#clone)
- [equals](BEP131Token.md#equals)
- [fromBinary](BEP131Token.md#frombinary)
- [fromJson](BEP131Token.md#fromjson)
- [fromJsonString](BEP131Token.md#fromjsonstring)
- [getType](BEP131Token.md#gettype)
- [toBinary](BEP131Token.md#tobinary)
- [toJson](BEP131Token.md#tojson)
- [toJsonString](BEP131Token.md#tojsonstring)
- [equals](BEP131Token.md#equals-1)
- [fromBinary](BEP131Token.md#frombinary-1)
- [fromJson](BEP131Token.md#fromjson-1)
- [fromJsonString](BEP131Token.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP131Token**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP131Token`](BEP131Token.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2482](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2482)

## Properties

### collection

• **collection**: `string` = `""`

The id of the collection to which this NFT belongs to

**`Generated`**

from field: string collection = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2473](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2473)

___

### hash

• **hash**: `string` = `""`

The unique hash of this NFT

**`Generated`**

from field: string hash = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2466](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2466)

___

### id

• **id**: `number` = `0`

The unique ID of this NFT

**`Generated`**

from field: uint32 id = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2459](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2459)

___

### owner

• **owner**: `string` = `""`

The id of the collection to which this NFT belongs to

**`Generated`**

from field: string owner = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:2480](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2480)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2489](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2489)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2487](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2487)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP131Token"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:2488](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2488)

## Methods

### clone

▸ **clone**(): [`BEP131Token`](BEP131Token.md)

Create a deep copy.

#### Returns

[`BEP131Token`](BEP131Token.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP131Token`](BEP131Token.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131Token`](BEP131Token.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP131Token`](BEP131Token.md)

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

[`BEP131Token`](BEP131Token.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP131Token`](BEP131Token.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131Token`](BEP131Token.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP131Token`](BEP131Token.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131Token`](BEP131Token.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP131Token`](BEP131Token.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP131Token`](BEP131Token.md)\>

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
| `a` | `undefined` \| [`BEP131Token`](BEP131Token.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131Token`](BEP131Token.md)\> |
| `b` | `undefined` \| [`BEP131Token`](BEP131Token.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP131Token`](BEP131Token.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:2508](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2508)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP131Token`](BEP131Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP131Token`](BEP131Token.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2496](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2496)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP131Token`](BEP131Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131Token`](BEP131Token.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2500](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2500)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP131Token`](BEP131Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP131Token`](BEP131Token.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:2504](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L2504)
