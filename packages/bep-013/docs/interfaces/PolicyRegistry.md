[@bearmint/bep-013 - v0.0.0](../README.md) / PolicyRegistry

# Interface: PolicyRegistry

## Table of contents

### Methods

- [all](PolicyRegistry.md#all)
- [forget](PolicyRegistry.md#forget)
- [get](PolicyRegistry.md#get)
- [set](PolicyRegistry.md#set)

## Methods

### all

▸ **all**(): [`PoliciesByModule`](../README.md#policiesbymodule)

#### Returns

[`PoliciesByModule`](../README.md#policiesbymodule)

#### Defined in

[packages/bep-013/source/policies.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L31)

___

### forget

▸ **forget**(`module`, `policyType?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `policyType?` | `string` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/policies.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L32)

___

### get

▸ **get**(`module`, `policyType`, `policyName`): [`Policy`](Policy.md)<`object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `policyType` | `string` |
| `policyName` | `string` |

#### Returns

[`Policy`](Policy.md)<`object`\>

#### Defined in

[packages/bep-013/source/policies.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L33)

___

### set

▸ **set**(`module`, `policyType`, `policyName`, `constructor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `policyType` | `string` |
| `policyName` | `string` |
| `constructor` | [`ClassOrFunctionReturning`](../README.md#classorfunctionreturning)<[`Policy`](Policy.md)<`object`\>\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/policies.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L34)
