@bearmint/bep-101 - v0.0.0

# @bearmint/bep-101 - v0.0.0

## Table of contents

### Functions

- [getPunishment](README.md#getpunishment)
- [slashAccount](README.md#slashaccount)

## Functions

### getPunishment

▸ **getPunishment**(`name`, `serviceProviderRepository`, `committedState`, `type`): `undefined` \| `Punishment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `serviceProviderRepository` | `ServiceProviderRepository` |
| `committedState` | `StateStore` |
| `type` | `MisbehaviorType` |

#### Returns

`undefined` \| `Punishment`

#### Defined in

[index.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-101/source/index.ts#L36)

___

### slashAccount

▸ **slashAccount**(`stakingService`, `delegator`, `validator`, `punishment`, `stakeDenomination`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stakingService` | `StakingService` |
| `delegator` | `Account`<`Record`<`string`, `any`\>\> |
| `validator` | `AccountWithValidator` |
| `punishment` | `Punishment` |
| `stakeDenomination` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:69](https://github.com/bearmint/bearmint/blob/main/packages/bep-101/source/index.ts#L69)
