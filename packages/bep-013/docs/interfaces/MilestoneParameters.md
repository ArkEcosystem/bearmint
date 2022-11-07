[@bearmint/bep-013 - v0.0.0](../README.md) / MilestoneParameters

# Interface: MilestoneParameters<MandatoryModules, OptionalModules\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `MandatoryModules` | `object` |
| `OptionalModules` | `object` |

## Table of contents

### Properties

- [application](MilestoneParameters.md#application)
- [consensus](MilestoneParameters.md#consensus)
- [denominations](MilestoneParameters.md#denominations)
- [modules](MilestoneParameters.md#modules)
- [transactions](MilestoneParameters.md#transactions)

## Properties

### application

• **application**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `protocolVersion` | `string` |
| `semanticVersion` | `string` |

#### Defined in

[packages/bep-013/source/milestone.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/milestone.ts#L23)

___

### consensus

• **consensus**: `PlainMessage`<`ConsensusParams`\>

#### Defined in

[packages/bep-013/source/milestone.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/milestone.ts#L27)

___

### denominations

• **denominations**: `Record`<[`DenominationType`](../README.md#denominationtype), `string`\>

#### Defined in

[packages/bep-013/source/milestone.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/milestone.ts#L28)

___

### modules

• **modules**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | `MandatoryModules` |
| `optional?` | `OptionalModules` |

#### Defined in

[packages/bep-013/source/milestone.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/milestone.ts#L29)

___

### transactions

• **transactions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `handlers` | `Record`<`string`, { `ranges`: `string`[]  }\> |

#### Defined in

[packages/bep-013/source/milestone.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/milestone.ts#L33)
