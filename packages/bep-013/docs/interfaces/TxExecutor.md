[@bearmint/bep-013 - v0.0.0](../README.md) / TxExecutor

# Interface: TxExecutor<TMsg\>

Executes the transaction and mutates the application state.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TMsg` | `object` |

## Table of contents

### Methods

- [execute](TxExecutor.md#execute)

## Methods

### execute

▸ **execute**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.assert` | [`TxAssertions`](TxAssertions.md) |
| `args.eventRecorder` | [`EventRecorder`](EventRecorder.md) |
| `args.msg` | `TMsg` |
| `args.receipt` | [`TxReceipt`](TxReceipt.md) |
| `args.state` | [`StateStore`](StateStore.md) |
| `args.toolkit` | [`TxToolkit`](TxToolkit.md) |
| `args.tx` | [`Tx`](Tx.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:166](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L166)
