[@bearmint/bep-013 - v0.0.0](../README.md) / TxAuditor

# Interface: TxAuditor<TMsg\>

Ensures that the transaction is applicable to the application state.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TMsg` | `object` |

## Table of contents

### Methods

- [execute](TxAuditor.md#execute)

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
| `args.state` | [`StateStore`](StateStore.md) |
| `args.toolkit` | [`TxToolkit`](TxToolkit.md) |
| `args.tx` | [`Tx`](Tx.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:152](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L152)
