[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / Event

# Class: Event

[abci](../modules/abci.md).Event

Event allows application developers to attach additional information to
ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
Later, transactions may be queried using these events.

**`Generated`**

from message tendermint.abci.Event

## Hierarchy

- [`Message`](Message.md)<[`Event`](abci.Event.md)\>

  ↳ **`Event`**

## Table of contents

### Constructors

- [constructor](abci.Event.md#constructor)

### Properties

- [attributes](abci.Event.md#attributes)
- [type](abci.Event.md#type)
- [fields](abci.Event.md#fields)
- [runtime](abci.Event.md#runtime)
- [typeName](abci.Event.md#typename)

### Methods

- [clone](abci.Event.md#clone)
- [equals](abci.Event.md#equals)
- [fromBinary](abci.Event.md#frombinary)
- [fromJson](abci.Event.md#fromjson)
- [fromJsonString](abci.Event.md#fromjsonstring)
- [getType](abci.Event.md#gettype)
- [toBinary](abci.Event.md#tobinary)
- [toJson](abci.Event.md#tojson)
- [toJsonString](abci.Event.md#tojsonstring)
- [equals](abci.Event.md#equals-1)
- [fromBinary](abci.Event.md#frombinary-1)
- [fromJson](abci.Event.md#fromjson-1)
- [fromJsonString](abci.Event.md#fromjsonstring-1)

## Constructors

### constructor

• **new Event**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`Event`](abci.Event.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2276](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2276)

## Properties

### attributes

• **attributes**: [`EventAttribute`](abci.EventAttribute.md)[] = `[]`

**`Generated`**

from field: repeated tendermint.abci.EventAttribute attributes = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2274](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2274)

___

### type

• **type**: `string` = `""`

**`Generated`**

from field: string type = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2269](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2269)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2283](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2283)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2281](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2281)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"tendermint.abci.Event"``

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2282](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2282)

## Methods

### clone

▸ **clone**(): [`Event`](abci.Event.md)

Create a deep copy.

#### Returns

[`Event`](abci.Event.md)

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
| `other` | `undefined` \| ``null`` \| [`Event`](abci.Event.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Event`](abci.Event.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Event`](abci.Event.md)

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

[`Event`](abci.Event.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Event`](abci.Event.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Event`](abci.Event.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Event`](abci.Event.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Event`](abci.Event.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Event`](abci.Event.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Event`](abci.Event.md)\>

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
| `a` | `undefined` \| [`Event`](abci.Event.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Event`](abci.Event.md)\> |
| `b` | `undefined` \| [`Event`](abci.Event.md) \| [`PlainMessage`](../README.md#plainmessage)<[`Event`](abci.Event.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2300](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2300)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Event`](abci.Event.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Event`](abci.Event.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2288](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2288)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Event`](abci.Event.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Event`](abci.Event.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2292](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2292)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Event`](abci.Event.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Event`](abci.Event.md)

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2296](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2296)
