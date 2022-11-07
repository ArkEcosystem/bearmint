@bearmint/bep-124 - v0.0.0

# @bearmint/bep-124 - v0.0.0

## Table of contents

### Functions

- [logReward](README.md#logreward)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeStrategy](README.md#makestrategy)

## Functions

### logReward

▸ **logReward**(`cradle`, `account`, `amount`, `denomination`, `origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `amount` | `bigint` |
| `denomination` | `string` |
| `origin` | `string` |

#### Returns

`void`

#### Defined in

[strategy.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-124/source/strategy.ts#L24)

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

[service-provider.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-124/source/service-provider.ts#L23)

___

### makeStrategy

▸ **makeStrategy**(`cradle`): `ValidatorRewarderStrategy`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`ValidatorRewarderStrategy`

#### Defined in

[strategy.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-124/source/strategy.ts#L43)
