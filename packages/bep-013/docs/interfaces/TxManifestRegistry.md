[@bearmint/bep-013 - v0.0.0](../README.md) / TxManifestRegistry

# Interface: TxManifestRegistry

## Table of contents

### Methods

- [all](TxManifestRegistry.md#all)
- [forget](TxManifestRegistry.md#forget)
- [get](TxManifestRegistry.md#get)
- [getFromTx](TxManifestRegistry.md#getfromtx)
- [set](TxManifestRegistry.md#set)

## Methods

### all

▸ **all**(): `Record`<`string`, `Record`<`string`, [`TxManifest`](TxManifest.md)\>\>

#### Returns

`Record`<`string`, `Record`<`string`, [`TxManifest`](TxManifest.md)\>\>

#### Defined in

[packages/bep-013/source/tx.ts:260](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L260)

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

[packages/bep-013/source/tx.ts:261](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L261)

___

### get

▸ **get**(`handler`, `version`): [`TxManifest`](TxManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |

#### Returns

[`TxManifest`](TxManifest.md)

#### Defined in

[packages/bep-013/source/tx.ts:262](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L262)

___

### getFromTx

▸ **getFromTx**(`tx`): [`TxManifest`](TxManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Tx`](Tx.md) |

#### Returns

[`TxManifest`](TxManifest.md)

#### Defined in

[packages/bep-013/source/tx.ts:263](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L263)

___

### set

▸ **set**(`handler`, `version`, `constructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `string` |
| `version` | `string` |
| `constructor` | [`ClassOrFunctionReturning`](../README.md#classorfunctionreturning)<[`TxManifest`](TxManifest.md)\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:264](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L264)
