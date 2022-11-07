[@bearmint/bep-013 - v0.0.0](../README.md) / EventDispatcher

# Interface: EventDispatcher

## Table of contents

### Methods

- [dispatch](EventDispatcher.md#dispatch)
- [dispatchSerial](EventDispatcher.md#dispatchserial)
- [listen](EventDispatcher.md#listen)

## Methods

### dispatch

▸ **dispatch**(`eventName`, `eventData?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `eventData?` | `unknown` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/event.ts:57](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/event.ts#L57)

___

### dispatchSerial

▸ **dispatchSerial**(`eventName`, `eventData?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `eventData?` | `unknown` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/event.ts:58](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/event.ts#L58)

___

### listen

▸ **listen**(`eventName`, `eventListener`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `eventListener` | [`ClassOrFunctionReturning`](../README.md#classorfunctionreturning)<[`EventListener`](EventListener.md)<`any`\>\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/bep-013/source/event.ts:59](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/event.ts#L59)
