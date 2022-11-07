[@bearmint/bep-013 - v0.0.0](../README.md) / StakingService

# Interface: StakingService

## Table of contents

### Methods

- [allByValidator](StakingService.md#allbyvalidator)
- [attach](StakingService.md#attach)
- [decreaseStake](StakingService.md#decreasestake)
- [detach](StakingService.md#detach)
- [increaseStake](StakingService.md#increasestake)
- [keysByValidator](StakingService.md#keysbyvalidator)
- [multiplyStake](StakingService.md#multiplystake)
- [valuesByValidator](StakingService.md#valuesbyvalidator)

## Methods

### allByValidator

▸ **allByValidator**(`validator`): `Promise`<`BEP88Validator`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |

#### Returns

`Promise`<`BEP88Validator`\>

#### Defined in

[packages/bep-013/source/state.ts:95](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L95)

___

### attach

▸ **attach**(`validator`, `delegator`, `stake`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |
| `delegator` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |
| `stake` | `bigint` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:107](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L107)

___

### decreaseStake

▸ **decreaseStake**(`validator`, `delegator`, `stake`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |
| `delegator` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |
| `stake` | `bigint` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:100](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L100)

___

### detach

▸ **detach**(`validator`, `delegator`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |
| `delegator` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:108](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L108)

___

### increaseStake

▸ **increaseStake**(`validator`, `delegator`, `stake`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |
| `delegator` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |
| `stake` | `bigint` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:99](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L99)

___

### keysByValidator

▸ **keysByValidator**(`validator`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/bep-013/source/state.ts:96](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L96)

___

### multiplyStake

▸ **multiplyStake**(`validator`, `delegator`, `percentage`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |
| `delegator` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |
| `percentage` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:101](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L101)

___

### valuesByValidator

▸ **valuesByValidator**(`validator`): `Promise`<`bigint`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | [`AccountWithValidator`](AccountWithValidator.md) |

#### Returns

`Promise`<`bigint`[]\>

#### Defined in

[packages/bep-013/source/state.ts:97](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L97)
