@bearmint/bep-095 - v0.0.0

# @bearmint/bep-095 - v0.0.0

## Table of contents

### Enumerations

- [TxStatus](enums/TxStatus.md)

### Interfaces

- [MuSig](interfaces/MuSig.md)
- [Signature](interfaces/Signature.md)
- [StoreTx](interfaces/StoreTx.md)
- [StoreTxRaw](interfaces/StoreTxRaw.md)

### Type Aliases

- [Memory](README.md#memory)

### Functions

- [makeDatabase](README.md#makedatabase)
- [makeMemory](README.md#makememory)
- [makeServer](README.md#makeserver)

## Type Aliases

### Memory

Ƭ **Memory**: `ReturnType`<typeof [`makeMemory`](README.md#makememory)\>

#### Defined in

[memory.ts:126](https://github.com/bearmint/bearmint/blob/main/packages/bep-095/source/memory.ts#L126)

## Functions

### makeDatabase

▸ **makeDatabase**(`path`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `all` | () => `Promise`<[`StoreTx`](interfaces/StoreTx.md)[]\> |
| `close` | () => `Promise`<`void`\> |
| `flush` | () => `Promise`<`void`\> |
| `forget` | (`hash`: `string`) => `Promise`<`void`\> |
| `store` | (`entry`: [`StoreTx`](interfaces/StoreTx.md)) => `Promise`<`void`\> |

#### Defined in

[database.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-095/source/database.ts#L41)

___

### makeMemory

▸ **makeMemory**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.pendingLimit` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getTxById` | (`storeId`: `string`) => [`StoreTx`](interfaces/StoreTx.md) |
| `removeById` | (`storeId`: `string`) => `void` |
| `deleteAllTxs` | () => `void` |
| `getAllTxs` | () => [`StoreTx`](interfaces/StoreTx.md)[] |
| `getTxStoreByPublicKey` | (`publicKey`: `string`) => [`StoreTx`](interfaces/StoreTx.md)[] |
| `loadTxs` | (`storeTxs`: [`StoreTx`](interfaces/StoreTx.md)[]) => `void` |
| `saveTx` | (`__namedParameters`: `SignatureRequest`) => `string` |
| `updateTx` | (`__namedParameters`: `SignatureRequest`) => `void` |

#### Defined in

[memory.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-095/source/memory.ts#L33)

___

### makeServer

▸ **makeServer**(`memory`): `Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `memory` | `Object` |
| `memory.getTxById` | (`storeId`: `string`) => [`StoreTx`](interfaces/StoreTx.md) |
| `memory.removeById` | (`storeId`: `string`) => `void` |
| `memory.deleteAllTxs` | () => `void` |
| `memory.getAllTxs` | () => [`StoreTx`](interfaces/StoreTx.md)[] |
| `memory.getTxStoreByPublicKey` | (`publicKey`: `string`) => [`StoreTx`](interfaces/StoreTx.md)[] |
| `memory.loadTxs` | (`storeTxs`: [`StoreTx`](interfaces/StoreTx.md)[]) => `void` |
| `memory.saveTx` | (`__namedParameters`: `SignatureRequest`) => `string` |
| `memory.updateTx` | (`__namedParameters`: `SignatureRequest`) => `void` |

#### Returns

`Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Defined in

[server/index.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-095/source/server/index.ts#L28)
