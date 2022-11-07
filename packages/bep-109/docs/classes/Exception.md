[@bearmint/bep-109 - v0.0.0](../README.md) / Exception

# Class: Exception

## Hierarchy

- `Error`

  ↳ **`Exception`**

  ↳↳ [`NotImplementedException`](NotImplementedException.md)

  ↳↳ [`InvalidServiceProviderConfigException`](InvalidServiceProviderConfigException.md)

  ↳↳ [`ServiceProviderCannotBeRegisteredException`](ServiceProviderCannotBeRegisteredException.md)

  ↳↳ [`ServiceProviderCannotBeBootedException`](ServiceProviderCannotBeBootedException.md)

  ↳↳ [`DependencyVersionOutOfRangeException`](DependencyVersionOutOfRangeException.md)

  ↳↳ [`OptionalDependencyCannotBeFoundException`](OptionalDependencyCannotBeFoundException.md)

  ↳↳ [`RequiredDependencyCannotBeFoundException`](RequiredDependencyCannotBeFoundException.md)

  ↳↳ [`TxGasTooLowException`](TxGasTooLowException.md)

  ↳↳ [`TxGasTooHighException`](TxGasTooHighException.md)

  ↳↳ [`TxFailuresRecordedException`](TxFailuresRecordedException.md)

  ↳↳ [`TxExecutionFailedException`](TxExecutionFailedException.md)

  ↳↳ [`AccountBalanceWentNegativeException`](AccountBalanceWentNegativeException.md)

  ↳↳ [`TxHasNoGasConfigurationException`](TxHasNoGasConfigurationException.md)

  ↳↳ [`MissingRequiredConfigurationValueException`](MissingRequiredConfigurationValueException.md)

  ↳↳ [`TxAuditException`](TxAuditException.md)

  ↳↳ [`StrategyRequiresSingleDenominationException`](StrategyRequiresSingleDenominationException.md)

  ↳↳ [`BadRequestException`](BadRequestException.md)

  ↳↳ [`DoesNotSatisfyElectionConditionsError`](DoesNotSatisfyElectionConditionsError.md)

## Table of contents

### Constructors

- [constructor](Exception.md#constructor)

### Properties

- [cause](Exception.md#cause)
- [message](Exception.md#message)
- [name](Exception.md#name)
- [stack](Exception.md#stack)
- [prepareStackTrace](Exception.md#preparestacktrace)
- [stackTraceLimit](Exception.md#stacktracelimit)

### Methods

- [captureStackTrace](Exception.md#capturestacktrace)

## Constructors

### constructor

• **new Exception**(`msg`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `options?` | `Object` |
| `options.cause?` | `Error` |
| `options.code?` | `string` |
| `options.expected?` | `boolean` |
| `options.transient?` | `boolean` |

#### Overrides

Error.constructor

#### Defined in

[packages/bep-109/source/error.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-109/source/error.ts#L27)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@18.11.7/node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@18.11.7/node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@18.11.7/node_modules/@types/node/ts4.8/globals.d.ts:4
