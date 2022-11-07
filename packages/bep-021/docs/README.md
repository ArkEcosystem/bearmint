@bearmint/bep-021 - v0.0.0

# @bearmint/bep-021 - v0.0.0

## Table of contents

### Functions

- [denom](README.md#denom)
- [getModuleMilestone](README.md#getmodulemilestone)
- [getPublicKeyType](README.md#getpublickeytype)
- [makeServiceProvider](README.md#makeserviceprovider)
- [setMilestone](README.md#setmilestone)

## Functions

### denom

▸ **denom**(`state`, `type`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `type` | `DenominationType` |

#### Returns

`string`

#### Defined in

[denom.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-021/source/denom.ts#L20)

___

### getModuleMilestone

▸ **getModuleMilestone**<`T`\>(`serviceProviderRepository`, `committedState`, `name`, `version?`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProviderRepository` | `ServiceProviderRepository` |
| `committedState` | `StateStore` |
| `name` | `string` |
| `version?` | `string` |

#### Returns

`Object`

#### Defined in

[get-module-milestone.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-021/source/get-module-milestone.ts#L25)

___

### getPublicKeyType

▸ **getPublicKeyType**(`milestone`): `string` & `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `milestone` | `Milestone`<`object`, `object`\> |

#### Returns

`string` & `string`[]

#### Defined in

[utils.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-021/source/utils.ts#L21)

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

[service-provider.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-021/source/service-provider.ts#L28)

___

### setMilestone

▸ **setMilestone**(`cradle`, `state`, `blockNumber`): `Promise`<`Milestone`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |
| `state` | `StateStore` |
| `blockNumber` | `bigint` |

#### Returns

`Promise`<`Milestone`\>

#### Defined in

[set-milestone.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-021/source/set-milestone.ts#L24)
