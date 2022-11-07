@bearmint/bep-140 - v0.0.0

# @bearmint/bep-140 - v0.0.0

## Table of contents

### Enumerations

- [BEP134UserPermission](enums/BEP134UserPermission.md)
- [MintPolicy](enums/MintPolicy.md)

### Interfaces

- [Milestone](interfaces/Milestone.md)
- [PolicyArguments](interfaces/PolicyArguments.md)

### Variables

- [HANDLER](README.md#handler)
- [MODULE\_VERSION](README.md#module_version)
- [VERSION](README.md#version)

### Functions

- [makePolicy](README.md#makepolicy)
- [makeServiceProvider](README.md#makeserviceprovider)

## Variables

### HANDLER

• `Const` **HANDLER**: ``"@bearmint/bep-134"``

#### Defined in

[types.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-140/source/types.ts#L22)

___

### MODULE\_VERSION

• `Const` **MODULE\_VERSION**: `string`

#### Defined in

[types.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-140/source/types.ts#L25)

___

### VERSION

• `Const` **VERSION**: ``"0.0.0"``

#### Defined in

[types.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-140/source/types.ts#L23)

## Functions

### makePolicy

▸ **makePolicy**(): `Policy`

#### Returns

`Policy`

#### Defined in

[policy.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-140/source/policy.ts#L20)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-140/source/service-provider.ts#L24)
