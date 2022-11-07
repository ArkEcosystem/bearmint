@bearmint/bep-016 - v0.0.0

# @bearmint/bep-016 - v0.0.0

## Table of contents

### Functions

- [makeServiceProviderConfig](README.md#makeserviceproviderconfig)
- [makeServiceProviderRepository](README.md#makeserviceproviderrepository)
- [makeServiceProviderSkeleton](README.md#makeserviceproviderskeleton)

## Functions

### makeServiceProviderConfig

▸ **makeServiceProviderConfig**(): `ServiceProviderConfig`

#### Returns

`ServiceProviderConfig`

#### Defined in

[config.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-016/source/config.ts#L22)

___

### makeServiceProviderRepository

▸ **makeServiceProviderRepository**(`cradle`): `ServiceProviderRepository`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Pick`<`Cradle`<`Record`<`string`, `unknown`\>\>, ``"Container"`` \| ``"EventDispatcher"``\> |

#### Returns

`ServiceProviderRepository`

#### Defined in

[repository.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-016/source/repository.ts#L22)

___

### makeServiceProviderSkeleton

▸ **makeServiceProviderSkeleton**(`path`): `ServiceProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`ServiceProvider`

#### Defined in

[skeleton.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-016/source/skeleton.ts#L23)
