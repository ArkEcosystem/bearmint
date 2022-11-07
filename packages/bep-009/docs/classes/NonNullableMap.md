[@bearmint/bep-009 - v0.0.0](../README.md) / NonNullableMap

# Class: NonNullableMap<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- `NonNullableMap`<`T`\>

## Table of contents

### Constructors

- [constructor](NonNullableMap.md#constructor)

### Methods

- [all](NonNullableMap.md#all)
- [entries](NonNullableMap.md#entries)
- [get](NonNullableMap.md#get)
- [has](NonNullableMap.md#has)
- [keys](NonNullableMap.md#keys)
- [missing](NonNullableMap.md#missing)
- [set](NonNullableMap.md#set)
- [values](NonNullableMap.md#values)

## Constructors

### constructor

• **new NonNullableMap**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Methods

### all

▸ **all**(): `Record`<`string`, `T`\>

#### Returns

`Record`<`string`, `T`\>

#### Implementation of

Map.all

#### Defined in

[packages/bep-009/source/non-nullable-map.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/non-nullable-map.ts#L25)

___

### entries

▸ **entries**(): [`string`, `T`][]

#### Returns

[`string`, `T`][]

#### Implementation of

Map.entries

#### Defined in

[packages/bep-009/source/non-nullable-map.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/non-nullable-map.ts#L29)

___

### get

▸ **get**(`key`): `NonNullable`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`NonNullable`<`T`\>

#### Implementation of

Map.get

#### Defined in

[packages/bep-009/source/non-nullable-map.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/non-nullable-map.ts#L33)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Implementation of

Map.has

#### Defined in

[packages/bep-009/source/non-nullable-map.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/non-nullable-map.ts#L41)

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

#### Implementation of

Map.keys

#### Defined in

[packages/bep-009/source/non-nullable-map.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/non-nullable-map.ts#L45)

___

### missing

▸ **missing**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Implementation of

Map.missing

#### Defined in

[packages/bep-009/source/non-nullable-map.ts:49](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/non-nullable-map.ts#L49)

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

#### Implementation of

Map.set

#### Defined in

[packages/bep-009/source/non-nullable-map.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/non-nullable-map.ts#L53)

___

### values

▸ **values**(): `T`[]

#### Returns

`T`[]

#### Implementation of

Map.values

#### Defined in

[packages/bep-009/source/non-nullable-map.ts:57](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/non-nullable-map.ts#L57)
