[@bearmint/bep-134 - v0.0.0](../README.md) / Milestone

# Interface: Milestone

## Table of contents

### Properties

- [count](Milestone.md#count)
- [list](Milestone.md#list)
- [range](Milestone.md#range)
- [regex](Milestone.md#regex)
- [schema](Milestone.md#schema)

## Properties

### count

• **count**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ops` | { `max`: `number` ; `min`: `number`  } |
| `ops.max` | `number` |
| `ops.min` | `number` |

#### Defined in

[types.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/types.ts#L28)

___

### list

• **list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `policies` | `string`[] |

#### Defined in

[types.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/types.ts#L34)

___

### range

• **range**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decimals` | { `max`: `number` ; `min`: `number`  } |
| `decimals.max` | `number` |
| `decimals.min` | `number` |

#### Defined in

[types.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/types.ts#L37)

___

### regex

• **regex**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `denomination` | { `flags?`: `string` ; `pattern`: `string`  } |
| `denomination.flags?` | `string` |
| `denomination.pattern` | `string` |
| `name` | { `flags?`: `string` ; `pattern`: `string`  } |
| `name.flags?` | `string` |
| `name.pattern` | `string` |

#### Defined in

[types.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/types.ts#L43)

___

### schema

• **schema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `policies` | [{ `args`: `object` ; `type`: `string`  }[]] |

#### Defined in

[types.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/types.ts#L53)
