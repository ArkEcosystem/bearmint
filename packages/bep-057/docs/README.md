@bearmint/bep-057 - v0.0.0

# @bearmint/bep-057 - v0.0.0

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

[tx-msg.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-057/source/tx-msg.ts#L33)

## Variables

### HANDLER

• `Const` **HANDLER**: ``"@bearmint/bep-057"``

#### Defined in

[types.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-057/source/types.ts#L18)

___

### VERSION

• `Const` **VERSION**: ``"0.0.0"``

#### Defined in

[types.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-057/source/types.ts#L19)

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

[service-provider.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-057/source/service-provider.ts#L27)

___

### makeTxAuditor

▸ **makeTxAuditor**(): `TxAuditor`<`BEP57Msg`\>

#### Returns

`TxAuditor`<`BEP57Msg`\>

#### Defined in

[tx-auditor.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-057/source/tx-auditor.ts#L27)

___

### makeTxExecutor

▸ **makeTxExecutor**(): `TxExecutor`<`BEP57Msg`\>

#### Returns

`TxExecutor`<`BEP57Msg`\>

#### Defined in

[tx-executor.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-057/source/tx-executor.ts#L27)

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

[tx-manifest.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-057/source/tx-manifest.ts#L23)

___

### makeTxMsgFactory

▸ **makeTxMsgFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fromBytes` | (`bytes`: `Uint8Array`) => `Promise`<`BEP57Msg`\> |
| `fromTx` | (`tx`: `Tx`) => `Promise`<`BEP57Msg`\> |

#### Defined in

[tx-msg.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-057/source/tx-msg.ts#L22)
