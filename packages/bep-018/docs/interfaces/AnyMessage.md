[@bearmint/bep-018 - v0.0.0](../README.md) / AnyMessage

# Interface: AnyMessage

AnyMessage is an interface implemented by all messages. If you need to
handle messages of unknown type, this interface provides a convenient
index signature to access fields with message["fieldname"].

## Hierarchy

- [`Message`](../classes/Message.md)<[`AnyMessage`](AnyMessage.md)\>

  ↳ **`AnyMessage`**

## Indexable

▪ [k: `string`]: `any`

## Table of contents

### Methods

- [clone](AnyMessage.md#clone)
- [equals](AnyMessage.md#equals)
- [fromBinary](AnyMessage.md#frombinary)
- [fromJson](AnyMessage.md#fromjson)
- [fromJsonString](AnyMessage.md#fromjsonstring)
- [getType](AnyMessage.md#gettype)
- [toBinary](AnyMessage.md#tobinary)
- [toJson](AnyMessage.md#tojson)
- [toJsonString](AnyMessage.md#tojsonstring)

## Methods

### clone

▸ **clone**(): [`AnyMessage`](AnyMessage.md)

Create a deep copy.

#### Returns

[`AnyMessage`](AnyMessage.md)

#### Inherited from

[Message](../classes/Message.md).[clone](../classes/Message.md#clone)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:27

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`AnyMessage`](AnyMessage.md) \| [`PlainMessage`](../README.md#plainmessage)<[`AnyMessage`](AnyMessage.md)\> |

#### Returns

`boolean`

#### Inherited from

[Message](../classes/Message.md).[equals](../classes/Message.md#equals)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AnyMessage`](AnyMessage.md)

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

[`AnyMessage`](AnyMessage.md)

#### Inherited from

[Message](../classes/Message.md).[fromBinary](../classes/Message.md#frombinary)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AnyMessage`](AnyMessage.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnyMessage`](AnyMessage.md)

#### Inherited from

[Message](../classes/Message.md).[fromJson](../classes/Message.md#fromjson)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AnyMessage`](AnyMessage.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AnyMessage`](AnyMessage.md)

#### Inherited from

[Message](../classes/Message.md).[fromJsonString](../classes/Message.md#fromjsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AnyMessage`](AnyMessage.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AnyMessage`](AnyMessage.md)\>

#### Inherited from

[Message](../classes/Message.md).[getType](../classes/Message.md#gettype)

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

[Message](../classes/Message.md).[toBinary](../classes/Message.md#tobinary)

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

[Message](../classes/Message.md).[toJson](../classes/Message.md#tojson)

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

[Message](../classes/Message.md).[toJsonString](../classes/Message.md#tojsonstring)

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:58
