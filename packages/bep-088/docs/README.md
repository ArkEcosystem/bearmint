@bearmint/bep-088 - v0.0.0

# @bearmint/bep-088 - v0.0.0

## Table of contents

### Classes

- [StakingService](classes/StakingService.md)

### Functions

- [electValidators](README.md#electvalidators)
- [gatherEligibleValidators](README.md#gathereligiblevalidators)
- [inPowerRange](README.md#inpowerrange)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeStakingServiceFactory](README.md#makestakingservicefactory)
- [makeStrategy](README.md#makestrategy)
- [sortValidators](README.md#sortvalidators)

## Functions

### electValidators

▸ **electValidators**(`accountRepository`, `accounts`, `validatorCount`, `genesis`): `Promise`<`AccountWithValidator`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountRepository` | `AccountRepository` |
| `accounts` | `AccountWithValidator`[] |
| `validatorCount` | `Object` |
| `validatorCount.max` | `number` |
| `validatorCount.min` | `number` |
| `genesis` | `GenesisValidator`[] |

#### Returns

`Promise`<`AccountWithValidator`[]\>

#### Defined in

[utils.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/utils.ts#L94)

___

### gatherEligibleValidators

▸ **gatherEligibleValidators**(`state`, `eventDispatcher`, `range`): `Promise`<`AccountWithValidator`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `eventDispatcher` | `EventDispatcher` |
| `range` | `Object` |
| `range.max` | `number` |
| `range.min` | `number` |

#### Returns

`Promise`<`AccountWithValidator`[]\>

#### Defined in

[utils.ts:55](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/utils.ts#L55)

___

### inPowerRange

▸ **inPowerRange**(`account`, `range`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountWithValidator` |
| `range` | `Object` |
| `range.max` | `number` |
| `range.min` | `number` |

#### Returns

`boolean`

#### Defined in

[utils.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/utils.ts#L47)

___

### makeServiceProvider

▸ **makeServiceProvider**(`cradle`): `ServiceProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`ServiceProvider`

#### Defined in

[service-provider.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/service-provider.ts#L26)

___

### makeStakingServiceFactory

▸ **makeStakingServiceFactory**(`cradle`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `make` | (`state`: `StateStore`) => [`StakingService`](classes/StakingService.md) |

#### Defined in

[staking-service.ts:222](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L222)

___

### makeStrategy

▸ **makeStrategy**(`cradle`): `ValidatorElector`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`ValidatorElector`

#### Defined in

[strategy.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/strategy.ts#L28)

___

### sortValidators

▸ **sortValidators**(`validators`): `AccountWithValidator`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `validators` | `AccountWithValidator`[] |

#### Returns

`AccountWithValidator`[]

#### Defined in

[utils.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/utils.ts#L29)
