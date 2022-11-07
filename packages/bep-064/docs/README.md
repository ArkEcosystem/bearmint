@bearmint/bep-064 - v0.0.0

# @bearmint/bep-064 - v0.0.0

## Table of contents

### Interfaces

- [PendingLock](interfaces/PendingLock.md)

### Type Aliases

- [CustomTxMsgFactory](README.md#customtxmsgfactory)

### Variables

- [HANDLER](README.md#handler)
- [VERSION](README.md#version)

### Functions

- [getPendingLock](README.md#getpendinglock)
- [getPrimaryKey](README.md#getprimarykey)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeTxAuditor](README.md#maketxauditor)
- [makeTxExecutor](README.md#maketxexecutor)
- [makeTxManifest](README.md#maketxmanifest)
- [makeTxMsgFactory](README.md#maketxmsgfactory)

## Type Aliases

### CustomTxMsgFactory

Ƭ **CustomTxMsgFactory**: `ReturnType`<typeof [`makeTxMsgFactory`](README.md#maketxmsgfactory)\>

#### Defined in

[tx-msg.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/tx-msg.ts#L33)

## Variables

### HANDLER

• `Const` **HANDLER**: ``"@bearmint/bep-064"``

#### Defined in

[types.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/types.ts#L18)

___

### VERSION

• `Const` **VERSION**: ``"0.0.0"``

#### Defined in

[types.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/types.ts#L19)

## Functions

### getPendingLock

▸ **getPendingLock**(`txStore`, `txFactory`, `txMsgServiceRegistry`, `bep64`, `hash`): `Promise`<[`PendingLock`](interfaces/PendingLock.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txStore` | `KVStore` |
| `txFactory` | `TxFactory` |
| `txMsgServiceRegistry` | `TxMsgFactoryRegistry` |
| `bep64` | `KVStore` |
| `hash` | `string` |

#### Returns

`Promise`<[`PendingLock`](interfaces/PendingLock.md)\>

#### Defined in

[utils.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/utils.ts#L29)

___

### getPrimaryKey

▸ **getPrimaryKey**(`hash`, `index`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `index` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/utils.ts#L25)

___

### makeServiceProvider

▸ **makeServiceProvider**(`cradle`): `ServiceProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`ServiceProvider`

#### Defined in

[service-provider.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/service-provider.ts#L28)

___

### makeTxAuditor

▸ **makeTxAuditor**(): `TxAuditor`<`BEP64Msg`\>

#### Returns

`TxAuditor`<`BEP64Msg`\>

#### Defined in

[tx-auditor.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/tx-auditor.ts#L24)

___

### makeTxExecutor

▸ **makeTxExecutor**(): `TxExecutor`<`BEP64Msg`\>

#### Returns

`TxExecutor`<`BEP64Msg`\>

#### Defined in

[tx-executor.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/tx-executor.ts#L27)

___

### makeTxManifest

▸ **makeTxManifest**(`cradle`): `TxManifest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxManifest`

#### Defined in

[tx-manifest.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/tx-manifest.ts#L23)

___

### makeTxMsgFactory

▸ **makeTxMsgFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fromBytes` | (`bytes`: `Uint8Array`) => `Promise`<`BEP64Msg`\> |
| `fromTx` | (`tx`: `Tx`) => `Promise`<`BEP64Msg`\> |

#### Defined in

[tx-msg.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-064/source/tx-msg.ts#L22)
