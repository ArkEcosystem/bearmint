[@bearmint/bep-013 - v0.0.0](../README.md) / TxMsgFaker

# Interface: TxMsgFaker<T, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message` = `AnyMessage` |
| `O` | `object` |

## Table of contents

### Methods

- [execute](TxMsgFaker.md#execute)

## Methods

### execute

▸ **execute**(`data`, `options?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Plain`<`T`\> |
| `options?` | `O` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/bep-013/source/tx.ts:227](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L227)
