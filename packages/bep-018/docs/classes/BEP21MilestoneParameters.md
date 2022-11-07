[@bearmint/bep-018 - v0.0.0](../README.md) / BEP21MilestoneParameters

# Class: BEP21MilestoneParameters

**`Generated`**

from message BEP21MilestoneParameters

## Hierarchy

- [`Message`](Message.md)<[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)\>

  ↳ **`BEP21MilestoneParameters`**

## Table of contents

### Constructors

- [constructor](BEP21MilestoneParameters.md#constructor)

### Properties

- [application](BEP21MilestoneParameters.md#application)
- [consensus](BEP21MilestoneParameters.md#consensus)
- [denominations](BEP21MilestoneParameters.md#denominations)
- [mandatoryModules](BEP21MilestoneParameters.md#mandatorymodules)
- [transactions](BEP21MilestoneParameters.md#transactions)
- [fields](BEP21MilestoneParameters.md#fields)
- [runtime](BEP21MilestoneParameters.md#runtime)
- [typeName](BEP21MilestoneParameters.md#typename)

### Methods

- [clone](BEP21MilestoneParameters.md#clone)
- [equals](BEP21MilestoneParameters.md#equals)
- [fromBinary](BEP21MilestoneParameters.md#frombinary)
- [fromJson](BEP21MilestoneParameters.md#fromjson)
- [fromJsonString](BEP21MilestoneParameters.md#fromjsonstring)
- [getType](BEP21MilestoneParameters.md#gettype)
- [toBinary](BEP21MilestoneParameters.md#tobinary)
- [toJson](BEP21MilestoneParameters.md#tojson)
- [toJsonString](BEP21MilestoneParameters.md#tojsonstring)
- [equals](BEP21MilestoneParameters.md#equals-1)
- [fromBinary](BEP21MilestoneParameters.md#frombinary-1)
- [fromJson](BEP21MilestoneParameters.md#fromjson-1)
- [fromJsonString](BEP21MilestoneParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new BEP21MilestoneParameters**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`PartialMessage`](../README.md#partialmessage)<[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)\> |

#### Overrides

[Message](Message.md).[constructor](Message.md#constructor)

#### Defined in

[packages/bep-018/source/state_pb.ts:55](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L55)

## Properties

### application

• `Optional` **application**: `Struct`

**`Generated`**

from field: google.protobuf.Struct application = 1;

#### Defined in

[packages/bep-018/source/state_pb.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L33)

___

### consensus

• `Optional` **consensus**: `Struct`

**`Generated`**

from field: google.protobuf.Struct consensus = 2;

#### Defined in

[packages/bep-018/source/state_pb.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L38)

___

### denominations

• `Optional` **denominations**: `Struct`

**`Generated`**

from field: google.protobuf.Struct denominations = 3;

#### Defined in

[packages/bep-018/source/state_pb.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L43)

___

### mandatoryModules

• `Optional` **mandatoryModules**: `Struct`

**`Generated`**

from field: google.protobuf.Struct mandatory_modules = 4;

#### Defined in

[packages/bep-018/source/state_pb.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L48)

___

### transactions

• `Optional` **transactions**: `Struct`

**`Generated`**

from field: google.protobuf.Struct transactions = 5;

#### Defined in

[packages/bep-018/source/state_pb.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L53)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[packages/bep-018/source/state_pb.ts:62](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L62)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[packages/bep-018/source/state_pb.ts:60](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L60)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"BEP21MilestoneParameters"``

#### Defined in

[packages/bep-018/source/state_pb.ts:61](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L61)

## Methods

### clone

▸ **clone**(): [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

Create a deep copy.

#### Returns

[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](Message.md).[equals](Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

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

[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Inherited from

[Message](Message.md).[fromBinary](Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Inherited from

[Message](Message.md).[fromJson](Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Inherited from

[Message](Message.md).[fromJsonString](Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)\>

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
| `a` | `undefined` \| [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)\> |
| `b` | `undefined` \| [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md) \| [`PlainMessage`](../README.md#plainmessage)<[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/bep-018/source/state_pb.ts:82](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L82)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Defined in

[packages/bep-018/source/state_pb.ts:70](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L70)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Defined in

[packages/bep-018/source/state_pb.ts:74](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L74)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

#### Defined in

[packages/bep-018/source/state_pb.ts:78](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/state_pb.ts#L78)
