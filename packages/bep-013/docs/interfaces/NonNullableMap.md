[@bearmint/bep-013 - v0.0.0](../README.md) / NonNullableMap

# Interface: NonNullableMap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [all](NonNullableMap.md#all)
- [entries](NonNullableMap.md#entries)
- [get](NonNullableMap.md#get)
- [has](NonNullableMap.md#has)
- [keys](NonNullableMap.md#keys)
- [missing](NonNullableMap.md#missing)
- [set](NonNullableMap.md#set)
- [values](NonNullableMap.md#values)

## Methods

### all

▸ **all**(): `Record`<`string`, `T`\>

#### Returns

`Record`<`string`, `T`\>

#### Defined in

[packages/bep-013/source/utils.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/utils.ts#L19)

___

### entries

▸ **entries**(): [`string`, `T`][]

#### Returns

[`string`, `T`][]

#### Defined in

[packages/bep-013/source/utils.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/utils.ts#L20)

___

### get

▸ **get**(`key`): `NonNullable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`NonNullable`<`T`\>

#### Defined in

[packages/bep-013/source/utils.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/utils.ts#L21)

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

[packages/bep-013/source/utils.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/utils.ts#L22)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/bep-013/source/utils.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/utils.ts#L23)

___

### missing

▸ **missing**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/utils.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/utils.ts#L24)

___

### set

▸ **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/utils.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/utils.ts#L25)

___

### values

▸ **values**(): `T`[]

#### Returns

`T`[]

#### Defined in

[packages/bep-013/source/utils.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/utils.ts#L26)
