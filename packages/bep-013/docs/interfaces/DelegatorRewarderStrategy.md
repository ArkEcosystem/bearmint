[@bearmint/bep-013 - v0.0.0](../README.md) / DelegatorRewarderStrategy

# Interface: DelegatorRewarderStrategy

## Table of contents

### Methods

- [execute](DelegatorRewarderStrategy.md#execute)
- [validate](DelegatorRewarderStrategy.md#validate)

## Methods

### execute

▸ **execute**(`state`, `validator`, `delegator`, `reward`, `denomination`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`StateStore`](StateStore.md) |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |
| `delegator` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |
| `reward` | `bigint` |
| `denomination` | `string` |

#### Returns

`Promise`<`bigint`\>

#### Defined in

[packages/bep-013/source/reward.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/reward.ts#L28)

___

### validate

▸ **validate**(`args`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/reward.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/reward.ts#L35)
