[@bearmint/bep-013 - v0.0.0](../README.md) / ServiceProviderRepository

# Interface: ServiceProviderRepository

## Table of contents

### Methods

- [all](ServiceProviderRepository.md#all)
- [allLoadedProviders](ServiceProviderRepository.md#allloadedproviders)
- [boot](ServiceProviderRepository.md#boot)
- [defer](ServiceProviderRepository.md#defer)
- [deferred](ServiceProviderRepository.md#deferred)
- [dispose](ServiceProviderRepository.md#dispose)
- [fail](ServiceProviderRepository.md#fail)
- [failed](ServiceProviderRepository.md#failed)
- [get](ServiceProviderRepository.md#get)
- [has](ServiceProviderRepository.md#has)
- [load](ServiceProviderRepository.md#load)
- [loaded](ServiceProviderRepository.md#loaded)
- [register](ServiceProviderRepository.md#register)
- [set](ServiceProviderRepository.md#set)

## Methods

### all

▸ **all**(): `Map`<`string`, [`ServiceProvider`](ServiceProvider.md)\>

#### Returns

`Map`<`string`, [`ServiceProvider`](ServiceProvider.md)\>

#### Defined in

[packages/bep-013/source/service-provider.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L19)

___

### allLoadedProviders

▸ **allLoadedProviders**(): [`ServiceProvider`](ServiceProvider.md)[]

#### Returns

[`ServiceProvider`](ServiceProvider.md)[]

#### Defined in

[packages/bep-013/source/service-provider.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L20)

___

### boot

▸ **boot**(`name`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L21)

___

### defer

▸ **defer**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/service-provider.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L22)

___

### deferred

▸ **deferred**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/service-provider.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L23)

___

### dispose

▸ **dispose**(`name`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L24)

___

### fail

▸ **fail**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/service-provider.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L25)

___

### failed

▸ **failed**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/service-provider.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L26)

___

### get

▸ **get**(`name`): [`ServiceProvider`](ServiceProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ServiceProvider`](ServiceProvider.md)

#### Defined in

[packages/bep-013/source/service-provider.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L27)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/service-provider.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L28)

___

### load

▸ **load**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/service-provider.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L29)

___

### loaded

▸ **loaded**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/service-provider.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L30)

___

### register

▸ **register**(`name`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L31)

___

### set

▸ **set**(`name`, `provider`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `provider` | [`ServiceProvider`](ServiceProvider.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/service-provider.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L32)
