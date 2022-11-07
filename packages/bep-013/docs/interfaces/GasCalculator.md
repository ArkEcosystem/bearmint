[@bearmint/bep-013 - v0.0.0](../README.md) / GasCalculator

# Interface: GasCalculator

## Table of contents

### Methods

- [execute](GasCalculator.md#execute)

## Methods

### execute

▸ **execute**(`state`, `tx`): `Promise`<{ `actual`: `bigint` ; `expected`: `bigint`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`StateStore`](StateStore.md) |
| `tx` | [`Tx`](Tx.md) |

#### Returns

`Promise`<{ `actual`: `bigint` ; `expected`: `bigint`  }\>

#### Defined in

[packages/bep-013/source/gas.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/gas.ts#L24)
