[@bearmint/bep-013 - v0.0.0](../README.md) / TxBuilder

# Interface: TxBuilder<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message` = `AnyMessage` |

## Table of contents

### Methods

- [execute](TxBuilder.md#execute)

## Methods

### execute

▸ **execute**(`data`, `options`): `Promise`<`TxMsg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Plain`<`T`\> |
| `options` | `Object` |
| `options.network` | `string` |
| `options.version` | `string` |

#### Returns

`Promise`<`TxMsg`\>

#### Defined in

[packages/bep-013/source/tx.ts:231](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L231)
