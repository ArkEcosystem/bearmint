[@bearmint/bep-013 - v0.0.0](../README.md) / TxExecutorRegistry

# Interface: TxExecutorRegistry

## Table of contents

### Methods

- [all](TxExecutorRegistry.md#all)
- [forget](TxExecutorRegistry.md#forget)
- [get](TxExecutorRegistry.md#get)
- [getFromTx](TxExecutorRegistry.md#getfromtx)
- [set](TxExecutorRegistry.md#set)

## Methods

### all

▸ **all**(): `Record`<`string`, `Record`<`string`, [`TxExecutor`](TxExecutor.md)<`object`\>\>\>

#### Returns

`Record`<`string`, `Record`<`string`, [`TxExecutor`](TxExecutor.md)<`object`\>\>\>

#### Defined in

[packages/bep-013/source/tx.ts:202](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L202)

___

### forget

▸ **forget**(`handler`, `version`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:203](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L203)

___

### get

▸ **get**(`handler`, `version`): [`TxExecutor`](TxExecutor.md)<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |

#### Returns

[`TxExecutor`](TxExecutor.md)<`object`\>

#### Defined in

[packages/bep-013/source/tx.ts:204](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L204)

___

### getFromTx

▸ **getFromTx**(`tx`): [`TxExecutor`](TxExecutor.md)<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Tx`](Tx.md) |

#### Returns

[`TxExecutor`](TxExecutor.md)<`object`\>

#### Defined in

[packages/bep-013/source/tx.ts:205](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L205)

___

### set

▸ **set**(`handler`, `version`, `constructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |
| `constructor` | [`ClassOrFunctionReturning`](../README.md#classorfunctionreturning)<[`TxExecutor`](TxExecutor.md)<`object`\>\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:206](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L206)
