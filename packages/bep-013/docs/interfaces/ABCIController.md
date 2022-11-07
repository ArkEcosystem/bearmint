[@bearmint/bep-013 - v0.0.0](../README.md) / ABCIController

# Interface: ABCIController<TRequest, TResponse\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TRequest` | extends `Message` = `AnyMessage` |
| `TResponse` | extends `Message` = `AnyMessage` |

## Table of contents

### Methods

- [execute](ABCIController.md#execute)

## Methods

### execute

▸ **execute**(`request`): `Promise`<`PartialMessage`<`TResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `TRequest` |

#### Returns

`Promise`<`PartialMessage`<`TResponse`\>\>

#### Defined in

[packages/bep-013/source/tendermint.ts:56](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L56)
