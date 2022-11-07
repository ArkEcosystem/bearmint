[@bearmint/bep-013 - v0.0.0](../README.md) / StrategyRegistry

# Interface: StrategyRegistry

## Table of contents

### Methods

- [all](StrategyRegistry.md#all)
- [allByModule](StrategyRegistry.md#allbymodule)
- [forget](StrategyRegistry.md#forget)
- [get](StrategyRegistry.md#get)
- [has](StrategyRegistry.md#has)
- [missing](StrategyRegistry.md#missing)
- [set](StrategyRegistry.md#set)

## Methods

### all

▸ **all**(): [`StrategiesByModule`](../README.md#strategiesbymodule)

#### Returns

[`StrategiesByModule`](../README.md#strategiesbymodule)

#### Defined in

[packages/bep-013/source/strategies.ts:6](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L6)

___

### allByModule

▸ **allByModule**<`T`\>(`module`): [`Strategies`](../README.md#strategies)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |

#### Returns

[`Strategies`](../README.md#strategies)<`T`\>

#### Defined in

[packages/bep-013/source/strategies.ts:7](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L7)

___

### forget

▸ **forget**(`module`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/strategies.ts:8](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L8)

___

### get

▸ **get**<`T`\>(`module`, `strategy`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `strategy` | `string` |

#### Returns

`T`

#### Defined in

[packages/bep-013/source/strategies.ts:9](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L9)

___

### has

▸ **has**(`module`, `strategy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `strategy` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/strategies.ts:10](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L10)

___

### missing

▸ **missing**(`module`, `strategy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `strategy` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/strategies.ts:11](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L11)

___

### set

▸ **set**(`module`, `strategy`, `constructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `strategy` | `string` |
| `constructor` | `unknown` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/strategies.ts:12](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L12)
