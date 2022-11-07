@bearmint/bep-131 - v0.0.0

# @bearmint/bep-131 - v0.0.0

## Table of contents

### Type Aliases

- [CustomTxMsgFactory](README.md#customtxmsgfactory)

### Variables

- [HANDLER](README.md#handler)
- [VERSION](README.md#version)

### Functions

- [destroyNFT](README.md#destroynft)
- [getNFT](README.md#getnft)
- [getPrimaryKey](README.md#getprimarykey)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeTokenId](README.md#maketokenid)
- [makeTxAuditor](README.md#maketxauditor)
- [makeTxExecutor](README.md#maketxexecutor)
- [makeTxManifest](README.md#maketxmanifest)
- [makeTxMsgFactory](README.md#maketxmsgfactory)
- [upsertNFT](README.md#upsertnft)

## Type Aliases

### CustomTxMsgFactory

Ƭ **CustomTxMsgFactory**: `ReturnType`<typeof [`makeTxMsgFactory`](README.md#maketxmsgfactory)\>

#### Defined in

[tx-msg.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/tx-msg.ts#L33)

## Variables

### HANDLER

• `Const` **HANDLER**: ``"@bearmint/bep-131"``

#### Defined in

[types.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/types.ts#L18)

___

### VERSION

• `Const` **VERSION**: ``"0.0.0"``

#### Defined in

[types.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/types.ts#L19)

## Functions

### destroyNFT

▸ **destroyNFT**(`bep131Store`, `hash`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep131Store` | `KVStore` |
| `hash` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[utils.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/utils.ts#L46)

___

### getNFT

▸ **getNFT**(`bep131Store`, `hash`): `Promise`<`BEP131Token`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep131Store` | `KVStore` |
| `hash` | `string` |

#### Returns

`Promise`<`BEP131Token`\>

#### Defined in

[utils.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/utils.ts#L34)

___

### getPrimaryKey

▸ **getPrimaryKey**(`collectionId`, `tokenId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectionId` | `string` |
| `tokenId` | `number` |

#### Returns

`string`

#### Defined in

[utils.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/utils.ts#L30)

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

[service-provider.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/service-provider.ts#L28)

___

### makeTokenId

▸ **makeTokenId**(`collection`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | `BEP126Collection` |

#### Returns

`number`

#### Defined in

[utils.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/utils.ts#L26)

___

### makeTxAuditor

▸ **makeTxAuditor**(`cradle`): `TxAuditor`<`BEP131Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxAuditor`<`BEP131Msg`\>

#### Defined in

[tx-auditor.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/tx-auditor.ts#L22)

___

### makeTxExecutor

▸ **makeTxExecutor**(`cradle`): `TxExecutor`<`BEP131Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxExecutor`<`BEP131Msg`\>

#### Defined in

[tx-executor.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/tx-executor.ts#L27)

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

[tx-manifest.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/tx-manifest.ts#L23)

___

### makeTxMsgFactory

▸ **makeTxMsgFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fromBytes` | (`bytes`: `Uint8Array`) => `Promise`<`BEP131Msg`\> |
| `fromTx` | (`tx`: `Tx`) => `Promise`<`BEP131Msg`\> |

#### Defined in

[tx-msg.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/tx-msg.ts#L22)

___

### upsertNFT

▸ **upsertNFT**(`bep131Store`, `hash`, `nft`): `Promise`<`BEP131Token`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep131Store` | `KVStore` |
| `hash` | `string` |
| `nft` | `Plain`<`BEP131Token`\> |

#### Returns

`Promise`<`BEP131Token`\>

#### Defined in

[utils.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-131/source/utils.ts#L38)
