[@bearmint/bep-018 - v0.0.0](../README.md) / BEP126Collection

# Class: BEP126Collection

**`Generated`**

from message BEP126Collection

## Hierarchy

- [`Message`](Message.md)<[`BEP126Collection`](BEP126Collection.md)\>

  ↳ **`BEP126Collection`**

## Table of contents

### Constructors

- [constructor](BEP126Collection.md#constructor)

### Properties

- [accessControlList](BEP126Collection.md#accesscontrollist)
- [currentOwner](BEP126Collection.md#currentowner)
- [id](BEP126Collection.md#id)
- [initialOwner](BEP126Collection.md#initialowner)
- [name](BEP126Collection.md#name)
- [policies](BEP126Collection.md#policies)
- [symbol](BEP126Collection.md#symbol)
- [tokens](BEP126Collection.md#tokens)
- [uriPrefix](BEP126Collection.md#uriprefix)
- [uriSuffix](BEP126Collection.md#urisuffix)
- [fields](BEP126Collection.md#fields)
- [runtime](BEP126Collection.md#runtime)
- [typeName](BEP126Collection.md#typename)

### Methods

- [clone](BEP126Collection.md#clone)
- [equals](BEP126Collection.md#equals)
- [fromBinary](BEP126Collection.md#frombinary)
- [fromJson](BEP126Collection.md#fromjson)
- [fromJsonString](BEP126Collection.md#fromjsonstring)
- [getType](BEP126Collection.md#gettype)
- [toBinary](BEP126Collection.md#tobinary)
- [toJson](BEP126Collection.md#tojson)
- [toJsonString](BEP126Collection.md#tojsonstring)
- [equals](BEP126Collection.md#equals-1)
- [fromBinary](BEP126Collection.md#frombinary-1)
- [fromJson](BEP126Collection.md#fromjson-1)
- [fromJsonString](BEP126Collection.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP126Collection**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP126Collection`](BEP126Collection.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1827](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1827)

## Properties

### accessControlList

• **accessControlList**: `Object` = `{}`

The ACL (Access Control List) for users of this collection

**`Generated`**

from field: map<string, BEP126User> access_control_list = 9;

#### Index signature

▪ [key: `string`]: [`BEP126User`](BEP126User.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1818](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1818)

___

### currentOwner

• **currentOwner**: `string` = `""`

The current owner of this collection

**`Generated`**

from field: string current_owner = 8;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1811](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1811)

___

### id

• **id**: `string` = `""`

The id of this collection (computed from `addr.txHash.idx`)

**`Generated`**

from field: string id = 1;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1762](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1762)

___

### initialOwner

• **initialOwner**: `string` = `""`

The initial owner of this collection

**`Generated`**

from field: string initial_owner = 7;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1804](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1804)

___

### name

• **name**: `string` = `""`

The name of this collection (e.g. Bored Ape Yacht Club)

**`Generated`**

from field: string name = 2;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1769](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1769)

___

### policies

• **policies**: [`BEP126Policy`](BEP126Policy.md)[] = `[]`

The policies that enforce authorisation restrictions of this collection.

**`Generated`**

from field: repeated BEP126Policy policies = 10;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1825](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1825)

___

### symbol

• **symbol**: `string` = `""`

The symbol of this collection (e.g. BAYC)

**`Generated`**

from field: string symbol = 3;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1776](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1776)

___

### tokens

• **tokens**: `string`[] = `[]`

The NFTs in this collection (<tokenId, owner>)

**`Generated`**

from field: repeated string tokens = 6;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1797](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1797)

___

### uriPrefix

• **uriPrefix**: `string` = `""`

The prefix for the metadata URI of NFTs in this collection

**`Generated`**

from field: string uri_prefix = 4;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1783](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1783)

___

### uriSuffix

• **uriSuffix**: `string` = `""`

The suffix for the metadata URI of NFTs in this collection

**`Generated`**

from field: string uri_suffix = 5;

#### Defined in

[packages/bep-018/source/tx_pb.ts:1790](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1790)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1834](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1834)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1832](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1832)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP126Collection"``

#### Defined in

[packages/bep-018/source/tx_pb.ts:1833](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1833)

## Methods

### clone

▸ **clone**(): [`BEP126Collection`](BEP126Collection.md)

Create a deep copy.

#### Returns

[`BEP126Collection`](BEP126Collection.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP126Collection`](BEP126Collection.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Collection`](BEP126Collection.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP126Collection`](BEP126Collection.md)

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

[`BEP126Collection`](BEP126Collection.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP126Collection`](BEP126Collection.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Collection`](BEP126Collection.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP126Collection`](BEP126Collection.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Collection`](BEP126Collection.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP126Collection`](BEP126Collection.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP126Collection`](BEP126Collection.md)\>

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
| `a` | `undefined` \| [`BEP126Collection`](BEP126Collection.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Collection`](BEP126Collection.md)\> |
| `b` | `undefined` \| [`BEP126Collection`](BEP126Collection.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP126Collection`](BEP126Collection.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tx_pb.ts:1859](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1859)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP126Collection`](BEP126Collection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP126Collection`](BEP126Collection.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1847](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1847)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP126Collection`](BEP126Collection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Collection`](BEP126Collection.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1851](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1851)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP126Collection`](BEP126Collection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP126Collection`](BEP126Collection.md)

#### Defined in

[packages/bep-018/source/tx_pb.ts:1855](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tx_pb.ts#L1855)
