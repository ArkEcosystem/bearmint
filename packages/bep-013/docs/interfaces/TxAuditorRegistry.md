[@bearmint/bep-013 - v0.0.0](../README.md) / TxAuditorRegistry

# Interface: TxAuditorRegistry

## Table of contents

### Methods

- [all](TxAuditorRegistry.md#all)
- [forget](TxAuditorRegistry.md#forget)
- [get](TxAuditorRegistry.md#get)
- [getFromTx](TxAuditorRegistry.md#getfromtx)
- [set](TxAuditorRegistry.md#set)

## Methods

### all

▸ **all**(): `Record`<`string`, `Record`<`string`, [`TxAuditor`](TxAuditor.md)<`object`\>\>\>

#### Returns

`Record`<`string`, `Record`<`string`, [`TxAuditor`](TxAuditor.md)<`object`\>\>\>

#### Defined in

[packages/bep-013/source/tx.ts:194](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L194)

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

[packages/bep-013/source/tx.ts:195](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L195)

___

### get

▸ **get**(`handler`, `version`): [`TxAuditor`](TxAuditor.md)<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |

#### Returns

[`TxAuditor`](TxAuditor.md)<`object`\>

#### Defined in

[packages/bep-013/source/tx.ts:196](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L196)

___

### getFromTx

▸ **getFromTx**(`tx`): [`TxAuditor`](TxAuditor.md)<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Tx`](Tx.md) |

#### Returns

[`TxAuditor`](TxAuditor.md)<`object`\>

#### Defined in

[packages/bep-013/source/tx.ts:197](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L197)

___

### set

▸ **set**(`handler`, `version`, `constructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |
| `constructor` | [`ClassOrFunctionReturning`](../README.md#classorfunctionreturning)<[`TxAuditor`](TxAuditor.md)<`object`\>\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:198](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L198)
