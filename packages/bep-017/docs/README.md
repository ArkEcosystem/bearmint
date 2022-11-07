@bearmint/bep-017 - v0.0.0

# @bearmint/bep-017 - v0.0.0

## Table of contents

### Variables

- [bootstrappers](README.md#bootstrappers)

### Functions

- [makeBootServiceProviders](README.md#makebootserviceproviders)
- [makeConsoleLogger](README.md#makeconsolelogger)
- [makeLoadConfiguration](README.md#makeloadconfiguration)
- [makeLoadEnvironmentVariables](README.md#makeloadenvironmentvariables)
- [makeLoadServiceProviders](README.md#makeloadserviceproviders)
- [makeRegisterBasePaths](README.md#makeregisterbasepaths)
- [makeRegisterExceptionHandler](README.md#makeregisterexceptionhandler)
- [makeRegisterServiceProviders](README.md#makeregisterserviceproviders)

## Variables

### bootstrappers

• `Const` **bootstrappers**: `BootstrapperConstructor`[]

#### Defined in

[bootstrap.ts:359](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/bootstrap.ts#L359)

## Functions

### makeBootServiceProviders

▸ **makeBootServiceProviders**(`cradle`): `Bootstrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Bootstrapper`

#### Defined in

[bootstrap.ts:270](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/bootstrap.ts#L270)

___

### makeConsoleLogger

▸ **makeConsoleLogger**(): `Logger`

#### Returns

`Logger`

#### Defined in

[console-logger.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/console-logger.ts#L40)

___

### makeLoadConfiguration

▸ **makeLoadConfiguration**(`cradle`): `Bootstrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Bootstrapper`

#### Defined in

[bootstrap.ts:124](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/bootstrap.ts#L124)

___

### makeLoadEnvironmentVariables

▸ **makeLoadEnvironmentVariables**(`cradle`): `Bootstrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Bootstrapper`

#### Defined in

[bootstrap.ts:103](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/bootstrap.ts#L103)

___

### makeLoadServiceProviders

▸ **makeLoadServiceProviders**(`cradle`): `Bootstrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Bootstrapper`

#### Defined in

[bootstrap.ts:145](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/bootstrap.ts#L145)

___

### makeRegisterBasePaths

▸ **makeRegisterBasePaths**(`cradle`): `Bootstrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Bootstrapper`

#### Defined in

[bootstrap.ts:74](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/bootstrap.ts#L74)

___

### makeRegisterExceptionHandler

▸ **makeRegisterExceptionHandler**(`cradle`): `Bootstrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Bootstrapper`

#### Defined in

[bootstrap.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/bootstrap.ts#L40)

___

### makeRegisterServiceProviders

▸ **makeRegisterServiceProviders**(`cradle`): `Bootstrapper`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Bootstrapper`

#### Defined in

[bootstrap.ts:173](https://github.com/bearmint/bearmint/blob/main/packages/bep-017/source/bootstrap.ts#L173)
