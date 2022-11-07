[@bearmint/bep-013 - v0.0.0](../README.md) / ServiceProviderConfig

# Interface: ServiceProviderConfig

## Table of contents

### Methods

- [all](ServiceProviderConfig.md#all)
- [get](ServiceProviderConfig.md#get)
- [has](ServiceProviderConfig.md#has)
- [merge](ServiceProviderConfig.md#merge)
- [set](ServiceProviderConfig.md#set)
- [unset](ServiceProviderConfig.md#unset)

## Methods

### all

▸ **all**(): `object`

#### Returns

`object`

#### Defined in

[packages/bep-013/source/service-provider.ts:49](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L49)

___

### get

▸ **get**<`T`\>(`key`, `defaultValue?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `defaultValue?` | `T` |

#### Returns

`T`

#### Defined in

[packages/bep-013/source/service-provider.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L50)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/service-provider.ts:51](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L51)

___

### merge

▸ **merge**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `undefined` \| `object` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/service-provider.ts:52](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L52)

___

### set

▸ **set**<`T`\>(`key`, `value`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/service-provider.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L53)

___

### unset

▸ **unset**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/service-provider.ts:54](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/service-provider.ts#L54)
