[@bearmint/bep-109 - v0.0.0](../README.md) / TxGasTooLowException

# Class: TxGasTooLowException

## Hierarchy

- [`Exception`](Exception.md)

  ↳ **`TxGasTooLowException`**

## Table of contents

### Constructors

- [constructor](TxGasTooLowException.md#constructor)

### Properties

- [cause](TxGasTooLowException.md#cause)
- [message](TxGasTooLowException.md#message)
- [name](TxGasTooLowException.md#name)
- [stack](TxGasTooLowException.md#stack)
- [prepareStackTrace](TxGasTooLowException.md#preparestacktrace)
- [stackTraceLimit](TxGasTooLowException.md#stacktracelimit)

### Methods

- [captureStackTrace](TxGasTooLowException.md#capturestacktrace)

## Constructors

### constructor

• **new TxGasTooLowException**(`hash`, `denomination`, `expected`, `actual`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `denomination` | `string` |
| `expected` | `bigint` |
| `actual` | `bigint` |

#### Overrides

[Exception](Exception.md).[constructor](Exception.md#constructor)

#### Defined in

[packages/bep-109/source/error.ts:136](https://github.com/bearmint/bearmint/blob/main/packages/bep-109/source/error.ts#L136)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[Exception](Exception.md).[cause](Exception.md#cause)

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

[Exception](Exception.md).[message](Exception.md#message)

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

[Exception](Exception.md).[name](Exception.md#name)

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[Exception](Exception.md).[stack](Exception.md#stack)

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

[Exception](Exception.md).[prepareStackTrace](Exception.md#preparestacktrace)

#### Defined in

node_modules/.pnpm/@types+node@18.11.7/node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[Exception](Exception.md).[stackTraceLimit](Exception.md#stacktracelimit)

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

[Exception](Exception.md).[captureStackTrace](Exception.md#capturestacktrace)

#### Defined in

node_modules/.pnpm/@types+node@18.11.7/node_modules/@types/node/ts4.8/globals.d.ts:4
