[@bearmint/bep-013 - v0.0.0](../README.md) / Container

# Interface: Container

## Table of contents

### Methods

- [bindClass](Container.md#bindclass)
- [bindClassSingleton](Container.md#bindclasssingleton)
- [bindFunction](Container.md#bindfunction)
- [bindFunctionSingleton](Container.md#bindfunctionsingleton)
- [bindValue](Container.md#bindvalue)
- [build](Container.md#build)
- [createScope](Container.md#createscope)
- [has](Container.md#has)
- [missing](Container.md#missing)
- [resolve](Container.md#resolve)

## Methods

### bindClass

▸ **bindClass**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`Constructor`](../README.md#constructor)<`T`\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/container.ts:178](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L178)

___

### bindClassSingleton

▸ **bindClassSingleton**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`Constructor`](../README.md#constructor)<`T`\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/container.ts:179](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L179)

___

### bindFunction

▸ **bindFunction**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`FunctionReturning`](../README.md#functionreturning)<`T`\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/container.ts:180](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L180)

___

### bindFunctionSingleton

▸ **bindFunctionSingleton**<`T`\>(`key`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`FunctionReturning`](../README.md#functionreturning)<`T`\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/container.ts:181](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L181)

___

### bindValue

▸ **bindValue**<`T`\>(`key`, `value`): `void`

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

`void`

#### Defined in

[packages/bep-013/source/container.ts:182](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L182)

___

### build

▸ **build**<`T`\>(`value`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ClassOrFunctionReturning`](../README.md#classorfunctionreturning)<`T`\> \| `Resolver`<`T`\> |

#### Returns

`T`

#### Defined in

[packages/bep-013/source/container.ts:183](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L183)

___

### createScope

▸ **createScope**(): [`Container`](Container.md)

#### Returns

[`Container`](Container.md)

#### Defined in

[packages/bep-013/source/container.ts:184](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L184)

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

[packages/bep-013/source/container.ts:186](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L186)

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

[packages/bep-013/source/container.ts:187](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L187)

___

### resolve

▸ **resolve**<`T`\>(`key`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`T`

#### Defined in

[packages/bep-013/source/container.ts:185](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L185)
