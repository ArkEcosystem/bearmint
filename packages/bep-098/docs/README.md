@bearmint/bep-098 - v0.0.0

# @bearmint/bep-098 - v0.0.0

## Table of contents

### Functions

- [makeApplication](README.md#makeapplication)

## Functions

### makeApplication

▸ **makeApplication**(`container`, `makeEventDispatcher`, `makeLogger`, `makeServiceProviderRepository`, `manifest`): `Application`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `Container` |
| `makeEventDispatcher` | `FactoryFunction`<`EventDispatcher`\> |
| `makeLogger` | `FactoryFunction`<`Logger`\> |
| `makeServiceProviderRepository` | `FactoryFunction`<`ServiceProviderRepository`\> |
| `manifest` | `ApplicationManifest` |

#### Returns

`Application`

#### Defined in

[app.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-098/source/app.ts#L34)
