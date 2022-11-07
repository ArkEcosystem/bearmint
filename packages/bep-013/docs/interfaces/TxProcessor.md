[@bearmint/bep-013 - v0.0.0](../README.md) / TxProcessor

# Interface: TxProcessor

## Table of contents

### Methods

- [execute](TxProcessor.md#execute)

## Methods

### execute

▸ **execute**(`eventRecorder`, `gasMeter`, `state`, `tx`): `Promise`<{ `events`: `Event`[] ; `receipt`: [`TxReceipt`](TxReceipt.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventRecorder` | [`EventRecorder`](EventRecorder.md) |
| `gasMeter` | [`GasMeter`](GasMeter.md) |
| `state` | [`StateStore`](StateStore.md) |
| `tx` | [`Tx`](Tx.md) |

#### Returns

`Promise`<{ `events`: `Event`[] ; `receipt`: [`TxReceipt`](TxReceipt.md)  }\>

#### Defined in

[packages/bep-013/source/tx.ts:210](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L210)
