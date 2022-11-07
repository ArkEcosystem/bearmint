[@bearmint/bep-013 - v0.0.0](../README.md) / ValidatorRewarderStrategy

# Interface: ValidatorRewarderStrategy

## Table of contents

### Methods

- [execute](ValidatorRewarderStrategy.md#execute)

## Methods

### execute

▸ **execute**(`state`, `account`, `denomination`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`StateStore`](StateStore.md) |
| `account` | [`AccountWithValidator`](AccountWithValidator.md) |
| `denomination` | `string` |

#### Returns

`Promise`<`bigint`\>

#### Defined in

[packages/bep-013/source/reward.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/reward.ts#L43)
