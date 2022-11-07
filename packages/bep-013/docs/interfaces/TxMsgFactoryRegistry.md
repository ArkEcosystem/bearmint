[@bearmint/bep-013 - v0.0.0](../README.md) / TxMsgFactoryRegistry

# Interface: TxMsgFactoryRegistry

## Table of contents

### Methods

- [all](TxMsgFactoryRegistry.md#all)
- [forget](TxMsgFactoryRegistry.md#forget)
- [get](TxMsgFactoryRegistry.md#get)
- [getFromTx](TxMsgFactoryRegistry.md#getfromtx)
- [set](TxMsgFactoryRegistry.md#set)

## Methods

### all

▸ **all**(): `Record`<`string`, `Record`<`string`, [`TxMsgFactory`](TxMsgFactory.md)\>\>

#### Returns

`Record`<`string`, `Record`<`string`, [`TxMsgFactory`](TxMsgFactory.md)\>\>

#### Defined in

[packages/bep-013/source/tx.ts:246](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L246)

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

[packages/bep-013/source/tx.ts:247](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L247)

___

### get

▸ **get**<`T`\>(`handler`, `version`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`TxMsgFactory`](TxMsgFactory.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |

#### Returns

`T`

#### Defined in

[packages/bep-013/source/tx.ts:248](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L248)

___

### getFromTx

▸ **getFromTx**<`T`\>(`tx`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`TxMsgFactory`](TxMsgFactory.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Tx`](Tx.md) |

#### Returns

`T`

#### Defined in

[packages/bep-013/source/tx.ts:249](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L249)

___

### set

▸ **set**(`handler`, `version`, `constructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |
| `constructor` | [`ClassOrFunctionReturning`](../README.md#classorfunctionreturning)<[`TxMsgFactory`](TxMsgFactory.md)\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:250](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L250)
