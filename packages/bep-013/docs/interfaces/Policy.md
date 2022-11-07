[@bearmint/bep-013 - v0.0.0](../README.md) / Policy

# Interface: Policy<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

## Table of contents

### Methods

- [allows](Policy.md#allows)
- [denies](Policy.md#denies)
- [validate](Policy.md#validate)

## Methods

### allows

▸ **allows**(`args`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/policies.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L21)

___

### denies

▸ **denies**(`args`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/policies.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L22)

___

### validate

▸ **validate**(`args`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/policies.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L23)
