@bearmint/bep-146 - v0.0.0

# @bearmint/bep-146 - v0.0.0

## Table of contents

### Functions

- [makePolicyRegistry](README.md#makepolicyregistry)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeStrategyRegistry](README.md#makestrategyregistry)
- [makeVersionedRegistry](README.md#makeversionedregistry)
- [makeVersionedRegistryFactory](README.md#makeversionedregistryfactory)

## Functions

### makePolicyRegistry

▸ **makePolicyRegistry**(`cradle`): `PolicyRegistry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`PolicyRegistry`

#### Defined in

[policy-registry.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-146/source/policy-registry.ts#L28)

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

[service-provider.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-146/source/service-provider.ts#L27)

___

### makeStrategyRegistry

▸ **makeStrategyRegistry**(): `StrategyRegistry`

#### Returns

`StrategyRegistry`

#### Defined in

[strategy-registry.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-146/source/strategy-registry.ts#L22)

___

### makeVersionedRegistry

▸ **makeVersionedRegistry**<`T`\>(`container`, `name`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `Container` |
| `name` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get` | (`handler`: `string`, `version`: `string`) => `T` |
| `all` | () => `Record`<`string`, `Record`<`string`, `T`\>\> |
| `forget` | (`handler`: `string`, `version`: `string`) => `void` |
| `getFromTx` | (`tx`: `Tx`) => `T` |
| `set` | (`handler`: `string`, `version`: `string`, `constructor`: `FactoryFunction`<`T`\>) => `void` |

#### Defined in

[versioned-registry.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-146/source/versioned-registry.ts#L22)

___

### makeVersionedRegistryFactory

▸ **makeVersionedRegistryFactory**(`cradle`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `make` | (`name`: `string`) => { `get`: (`handler`: `string`, `version`: `string`) => `unknown` ; `all`: () => `Record`<`string`, `Record`<`string`, `unknown`\>\> ; `forget`: (`handler`: `string`, `version`: `string`) => `void` ; `getFromTx`: (`tx`: `Tx`) => `unknown` ; `set`: (`handler`: `string`, `version`: `string`, `constructor`: `FactoryFunction`<`unknown`\>) => `void`  } |

#### Defined in

[versioned-registry.ts:88](https://github.com/bearmint/bearmint/blob/main/packages/bep-146/source/versioned-registry.ts#L88)
