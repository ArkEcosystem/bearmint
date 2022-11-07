[@bearmint/bep-018 - v0.0.0](../README.md) / BEP118Record

# Class: BEP118Record

**`Generated`**

from message BEP118Record

## Hierarchy

- [`Message`](Message.md)<[`BEP118Record`](BEP118Record.md)\>

  ↳ **`BEP118Record`**

## Table of contents

### Constructors

- [constructor](BEP118Record.md#constructor)

### Properties

- [misbehavior](BEP118Record.md#misbehavior)
- [punishment](BEP118Record.md#punishment)
- [fields](BEP118Record.md#fields)
- [runtime](BEP118Record.md#runtime)
- [typeName](BEP118Record.md#typename)

### Methods

- [clone](BEP118Record.md#clone)
- [equals](BEP118Record.md#equals)
- [fromBinary](BEP118Record.md#frombinary)
- [fromJson](BEP118Record.md#fromjson)
- [fromJsonString](BEP118Record.md#fromjsonstring)
- [getType](BEP118Record.md#gettype)
- [toBinary](BEP118Record.md#tobinary)
- [toJson](BEP118Record.md#tojson)
- [toJsonString](BEP118Record.md#tojsonstring)
- [equals](BEP118Record.md#equals-1)
- [fromBinary](BEP118Record.md#frombinary-1)
- [fromJson](BEP118Record.md#fromjson-1)
- [fromJsonString](BEP118Record.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP118Record**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP118Record`](BEP118Record.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/account_pb.ts:276](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L276)

## Properties

### misbehavior

• `Optional` **misbehavior**: [`BEP101Misbehavior`](BEP101Misbehavior.md)

**`Generated`**

from field: BEP101Misbehavior misbehavior = 1;

#### Defined in

[packages/bep-018/source/account_pb.ts:269](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L269)

___

### punishment

• `Optional` **punishment**: [`BEP118Punishment`](BEP118Punishment.md)

**`Generated`**

from field: BEP118Punishment punishment = 2;

#### Defined in

[packages/bep-018/source/account_pb.ts:274](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L274)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/account_pb.ts:283](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L283)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/account_pb.ts:281](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L281)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP118Record"``

#### Defined in

[packages/bep-018/source/account_pb.ts:282](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L282)

## Methods

### clone

▸ **clone**(): [`BEP118Record`](BEP118Record.md)

Create a deep copy.

#### Returns

[`BEP118Record`](BEP118Record.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP118Record`](BEP118Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118Record`](BEP118Record.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP118Record`](BEP118Record.md)

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

[`BEP118Record`](BEP118Record.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP118Record`](BEP118Record.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118Record`](BEP118Record.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP118Record`](BEP118Record.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118Record`](BEP118Record.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP118Record`](BEP118Record.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP118Record`](BEP118Record.md)\>

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
| `a` | `undefined` \| [`BEP118Record`](BEP118Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118Record`](BEP118Record.md)\> |
| `b` | `undefined` \| [`BEP118Record`](BEP118Record.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP118Record`](BEP118Record.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/account_pb.ts:300](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L300)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP118Record`](BEP118Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP118Record`](BEP118Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:288](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L288)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP118Record`](BEP118Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118Record`](BEP118Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:292](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L292)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP118Record`](BEP118Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP118Record`](BEP118Record.md)

#### Defined in

[packages/bep-018/source/account_pb.ts:296](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/account_pb.ts#L296)
