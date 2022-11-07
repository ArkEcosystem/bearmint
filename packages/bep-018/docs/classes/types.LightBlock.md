[@bearmint/bep-018 - v0.0.0](../README.md) / [types](../modules/types.md) / LightBlock

# Class: LightBlock

[types](../modules/types.md).LightBlock

**`Generated`**

from message tendermint.types.LightBlock

## Hierarchy

- [`Message`](Message.md)<[`LightBlock`](types.LightBlock.md)\>

  ↳ **`LightBlock`**

## Table of contents

### Constructors

- [constructor](types.LightBlock.md#constructor)

### Properties

- [signedHeader](types.LightBlock.md#signedheader)
- [validatorSet](types.LightBlock.md#validatorset)
- [fields](types.LightBlock.md#fields)
- [runtime](types.LightBlock.md#runtime)
- [typeName](types.LightBlock.md#typename)

### Methods

- [clone](types.LightBlock.md#clone)
- [equals](types.LightBlock.md#equals)
- [fromBinary](types.LightBlock.md#frombinary)
- [fromJson](types.LightBlock.md#fromjson)
- [fromJsonString](types.LightBlock.md#fromjsonstring)
- [getType](types.LightBlock.md#gettype)
- [toBinary](types.LightBlock.md#tobinary)
- [toJson](types.LightBlock.md#tojson)
- [toJsonString](types.LightBlock.md#tojsonstring)
- [equals](types.LightBlock.md#equals-1)
- [fromBinary](types.LightBlock.md#frombinary-1)
- [fromJson](types.LightBlock.md#fromjson-1)
- [fromJsonString](types.LightBlock.md#fromjsonstring-1)

## Constructors

### constructor

• **new LightBlock**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`LightBlock`](types.LightBlock.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:739](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L739)

## Properties

### signedHeader

• `Optional` **signedHeader**: [`SignedHeader`](types.SignedHeader.md)

**`Generated`**

from field: tendermint.types.SignedHeader signed_header = 1;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:732](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L732)

___

### validatorSet

• `Optional` **validatorSet**: `ValidatorSet`

**`Generated`**

from field: tendermint.types.ValidatorSet validator_set = 2;

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:737](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L737)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:746](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L746)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:744](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L744)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.types.LightBlock"``

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:745](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L745)

## Methods

### clone

▸ **clone**(): [`LightBlock`](types.LightBlock.md)

Create a deep copy.

#### Returns

[`LightBlock`](types.LightBlock.md)

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
| `other` | `undefined` \| ``null`` \| [`LightBlock`](types.LightBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`LightBlock`](types.LightBlock.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LightBlock`](types.LightBlock.md)

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

[`LightBlock`](types.LightBlock.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LightBlock`](types.LightBlock.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LightBlock`](types.LightBlock.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LightBlock`](types.LightBlock.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LightBlock`](types.LightBlock.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LightBlock`](types.LightBlock.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LightBlock`](types.LightBlock.md)\>

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
| `a` | `undefined` \| [`LightBlock`](types.LightBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`LightBlock`](types.LightBlock.md)\> |
| `b` | `undefined` \| [`LightBlock`](types.LightBlock.md) \| [`PlainMessage`](../README.md#plainmessage)<[`LightBlock`](types.LightBlock.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:763](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L763)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LightBlock`](types.LightBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LightBlock`](types.LightBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:751](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L751)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LightBlock`](types.LightBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LightBlock`](types.LightBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:755](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L755)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LightBlock`](types.LightBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LightBlock`](types.LightBlock.md)

#### Defined in

[packages/bep-018/source/tendermint/types/types_pb.ts:759](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/types/types_pb.ts#L759)
