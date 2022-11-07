[@bearmint/bep-013 - v0.0.0](../README.md) / TxTestContext

# Interface: TxTestContext

## Table of contents

### Methods

- [execute](TxTestContext.md#execute)
- [verify](TxTestContext.md#verify)

## Methods

### execute

▸ **execute**(): `Promise`<`Event`\>

Mutates application state based on the given tx.

#### Returns

`Promise`<`Event`\>

#### Defined in

[packages/bep-013/source/tx.ts:186](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L186)

___

### verify

▸ **verify**(): `Promise`<`Event`\>

Verifies the structural and logical integrity of the given tx.

#### Returns

`Promise`<`Event`\>

#### Defined in

[packages/bep-013/source/tx.ts:181](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L181)
