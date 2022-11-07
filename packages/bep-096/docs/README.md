@bearmint/bep-096 - v0.0.0

# @bearmint/bep-096 - v0.0.0

## Table of contents

### Interfaces

- [Hook](interfaces/Hook.md)

### Variables

- [Config](README.md#config)

### Functions

- [makeAsteriskListener](README.md#makeasterisklistener)
- [makeServiceProvider](README.md#makeserviceprovider)

## Variables

### Config

• `Const` **Config**: `string`

#### Defined in

[types.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-096/source/types.ts#L22)

## Functions

### makeAsteriskListener

▸ **makeAsteriskListener**(`cradle`): `EventListener`<`Account`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`EventListener`<`Account`\>

#### Defined in

[listeners.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-096/source/listeners.ts#L24)

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

[service-provider.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-096/source/service-provider.ts#L26)
