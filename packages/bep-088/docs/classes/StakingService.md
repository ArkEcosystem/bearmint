[@bearmint/bep-088 - v0.0.0](../README.md) / StakingService

# Class: StakingService

## Implements

- `StakingService`

## Table of contents

### Constructors

- [constructor](StakingService.md#constructor)

### Methods

- [allByValidator](StakingService.md#allbyvalidator)
- [attach](StakingService.md#attach)
- [decreaseStake](StakingService.md#decreasestake)
- [detach](StakingService.md#detach)
- [increaseStake](StakingService.md#increasestake)
- [keysByValidator](StakingService.md#keysbyvalidator)
- [multiplyStake](StakingService.md#multiplystake)
- [valuesByValidator](StakingService.md#valuesbyvalidator)

## Constructors

### constructor

• **new StakingService**(`state`, `dataSink`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `dataSink` | `DataSink` |

#### Defined in

[staking-service.ts:57](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L57)

## Methods

### allByValidator

▸ **allByValidator**(`validator`): `Promise`<`BEP88Validator`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `AccountWithValidator` |

#### Returns

`Promise`<`BEP88Validator`\>

#### Implementation of

Contract.allByValidator

#### Defined in

[staking-service.ts:63](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L63)

___

### attach

▸ **attach**(`validator`, `delegator`, `stake`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `AccountWithValidator` |
| `delegator` | `Account`<`Record`<`string`, `any`\>\> |
| `stake` | `bigint` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Contract.attach

#### Defined in

[staking-service.ts:132](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L132)

___

### decreaseStake

▸ **decreaseStake**(`validator`, `delegator`, `stake`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `AccountWithValidator` |
| `delegator` | `Account`<`Record`<`string`, `any`\>\> |
| `stake` | `bigint` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Contract.decreaseStake

#### Defined in

[staking-service.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L94)

___

### detach

▸ **detach**(`validator`, `delegator`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `AccountWithValidator` |
| `delegator` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

Contract.detach

#### Defined in

[staking-service.ts:145](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L145)

___

### increaseStake

▸ **increaseStake**(`validator`, `delegator`, `stake`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `AccountWithValidator` |
| `delegator` | `Account`<`Record`<`string`, `any`\>\> |
| `stake` | `bigint` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Contract.increaseStake

#### Defined in

[staking-service.ts:79](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L79)

___

### keysByValidator

▸ **keysByValidator**(`validator`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `AccountWithValidator` |

#### Returns

`Promise`<`string`[]\>

#### Implementation of

Contract.keysByValidator

#### Defined in

[staking-service.ts:71](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L71)

___

### multiplyStake

▸ **multiplyStake**(`validator`, `delegator`, `percentage`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `AccountWithValidator` |
| `delegator` | `Account`<`Record`<`string`, `any`\>\> |
| `percentage` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Contract.multiplyStake

#### Defined in

[staking-service.ts:110](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L110)

___

### valuesByValidator

▸ **valuesByValidator**(`validator`): `Promise`<`bigint`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validator` | `AccountWithValidator` |

#### Returns

`Promise`<`bigint`[]\>

#### Implementation of

Contract.valuesByValidator

#### Defined in

[staking-service.ts:75](https://github.com/bearmint/bearmint/blob/main/packages/bep-088/source/staking-service.ts#L75)
