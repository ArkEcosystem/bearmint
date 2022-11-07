@bearmint/bep-067 - v0.0.0

# @bearmint/bep-067 - v0.0.0

## Table of contents

### Type Aliases

- [CustomTxMsgFactory](README.md#customtxmsgfactory)

### Variables

- [HANDLER](README.md#handler)
- [VERSION](README.md#version)

### Functions

- [makeServiceProvider](README.md#makeserviceprovider)
- [makeTxAuditor](README.md#maketxauditor)
- [makeTxExecutor](README.md#maketxexecutor)
- [makeTxManifest](README.md#maketxmanifest)
- [makeTxMsgFactory](README.md#maketxmsgfactory)

## Type Aliases

### CustomTxMsgFactory

Ƭ **CustomTxMsgFactory**: `ReturnType`<typeof [`makeTxMsgFactory`](README.md#maketxmsgfactory)\>

#### Defined in

[tx-msg.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-067/source/tx-msg.ts#L33)

## Variables

### HANDLER

• `Const` **HANDLER**: ``"@bearmint/bep-067"``

#### Defined in

[types.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-067/source/types.ts#L18)

___

### VERSION

• `Const` **VERSION**: ``"0.0.0"``

#### Defined in

[types.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-067/source/types.ts#L19)

## Functions

### makeServiceProvider

▸ **makeServiceProvider**(`cradle`): `ServiceProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`ServiceProvider`

#### Defined in

[service-provider.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-067/source/service-provider.ts#L28)

___

### makeTxAuditor

▸ **makeTxAuditor**(): `TxAuditor`<`BEP67Msg`\>

#### Returns

`TxAuditor`<`BEP67Msg`\>

#### Defined in

[tx-auditor.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-067/source/tx-auditor.ts#L26)

___

### makeTxExecutor

▸ **makeTxExecutor**(`cradle`): `TxExecutor`<`BEP67Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxExecutor`<`BEP67Msg`\>

#### Defined in

[tx-executor.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-067/source/tx-executor.ts#L25)

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

[tx-manifest.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-067/source/tx-manifest.ts#L23)

___

### makeTxMsgFactory

▸ **makeTxMsgFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fromBytes` | (`bytes`: `Uint8Array`) => `Promise`<`BEP67Msg`\> |
| `fromTx` | (`tx`: `Tx`) => `Promise`<`BEP67Msg`\> |

#### Defined in

[tx-msg.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-067/source/tx-msg.ts#L22)
