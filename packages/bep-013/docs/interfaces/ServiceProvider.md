[@bearmint/bep-013 - v0.0.0](../README.md) / ServiceProvider

# Interface: ServiceProvider

## Table of contents

### Methods

- [boot](ServiceProvider.md#boot)
- [bootWhen](ServiceProvider.md#bootwhen)
- [config](ServiceProvider.md#config)
- [dependencies](ServiceProvider.md#dependencies)
- [dispose](ServiceProvider.md#dispose)
- [disposeWhen](ServiceProvider.md#disposewhen)
- [name](ServiceProvider.md#name)
- [register](ServiceProvider.md#register)
- [required](ServiceProvider.md#required)
- [version](ServiceProvider.md#version)

## Methods

### boot

▸ **boot**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L36)

___

### bootWhen

▸ **bootWhen**(`serviceProvider?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProvider?` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L37)

___

### config

▸ **config**(): [`ServiceProviderConfig`](ServiceProviderConfig.md)

#### Returns

[`ServiceProviderConfig`](ServiceProviderConfig.md)

#### Defined in

[packages/bep-013/source/service-provider.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L38)

___

### dependencies

▸ **dependencies**(): [`ServiceProviderDependency`](ServiceProviderDependency.md)[]

#### Returns

[`ServiceProviderDependency`](ServiceProviderDependency.md)[]

#### Defined in

[packages/bep-013/source/service-provider.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L39)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L40)

___

### disposeWhen

▸ **disposeWhen**(`serviceProvider?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serviceProvider?` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L41)

___

### name

▸ **name**(): `string`

#### Returns

`string`

#### Defined in

[packages/bep-013/source/service-provider.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L42)

___

### register

▸ **register**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L43)

___

### required

▸ **required**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/service-provider.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L44)

___

### version

▸ **version**(): `string`

#### Returns

`string`

#### Defined in

[packages/bep-013/source/service-provider.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L45)
