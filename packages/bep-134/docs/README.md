@bearmint/bep-134 - v0.0.0

# @bearmint/bep-134 - v0.0.0

## Table of contents

### Enumerations

- [BEP134UserPermission](enums/BEP134UserPermission.md)
- [MintPolicy](enums/MintPolicy.md)

### Interfaces

- [Milestone](interfaces/Milestone.md)
- [PolicyArguments](interfaces/PolicyArguments.md)

### Type Aliases

- [CustomTxMsgFactory](README.md#customtxmsgfactory)

### Variables

- [HANDLER](README.md#handler)
- [MODULE\_VERSION](README.md#module_version)
- [VERSION](README.md#version)

### Functions

- [assertNativeTokenOwnership](README.md#assertnativetokenownership)
- [decimalsToPower](README.md#decimalstopower)
- [getDenominationKey](README.md#getdenominationkey)
- [getNameKey](README.md#getnamekey)
- [getPrimaryKey](README.md#getprimarykey)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeTxAuditor](README.md#maketxauditor)
- [makeTxExecutor](README.md#maketxexecutor)
- [makeTxManifest](README.md#maketxmanifest)
- [makeTxMsgFactory](README.md#maketxmsgfactory)
- [ownsNativeToken](README.md#ownsnativetoken)
- [selectNAT](README.md#selectnat)
- [upsertNAT](README.md#upsertnat)

## Type Aliases

### CustomTxMsgFactory

Ƭ **CustomTxMsgFactory**: `ReturnType`<typeof [`makeTxMsgFactory`](README.md#maketxmsgfactory)\>

#### Defined in

[tx-msg.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/tx-msg.ts#L33)

## Variables

### HANDLER

• `Const` **HANDLER**: ``"@bearmint/bep-134"``

#### Defined in

[types.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/types.ts#L22)

___

### MODULE\_VERSION

• `Const` **MODULE\_VERSION**: `string`

#### Defined in

[types.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/types.ts#L25)

___

### VERSION

• `Const` **VERSION**: ``"0.0.0"``

#### Defined in

[types.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/types.ts#L23)

## Functions

### assertNativeTokenOwnership

▸ **assertNativeTokenOwnership**(`state`, `account`, `hash`, `key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `hash` | `string` |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[utils.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/utils.ts#L53)

___

### decimalsToPower

▸ **decimalsToPower**(`value`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`bigint`

#### Defined in

[utils.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/utils.ts#L39)

___

### getDenominationKey

▸ **getDenominationKey**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/utils.ts#L31)

___

### getNameKey

▸ **getNameKey**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/utils.ts#L27)

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

[utils.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/utils.ts#L35)

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

[service-provider.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/service-provider.ts#L28)

___

### makeTxAuditor

▸ **makeTxAuditor**(`cradle`): `TxAuditor`<`BEP134Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxAuditor`<`BEP134Msg`\>

#### Defined in

[tx-auditor.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/tx-auditor.ts#L25)

___

### makeTxExecutor

▸ **makeTxExecutor**(`cradle`): `TxExecutor`<`BEP134Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxExecutor`<`BEP134Msg`\>

#### Defined in

[tx-executor.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/tx-executor.ts#L26)

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

[tx-manifest.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/tx-manifest.ts#L23)

___

### makeTxMsgFactory

▸ **makeTxMsgFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fromBytes` | (`bytes`: `Uint8Array`) => `Promise`<`BEP134Msg`\> |
| `fromTx` | (`tx`: `Tx`) => `Promise`<`BEP134Msg`\> |

#### Defined in

[tx-msg.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/tx-msg.ts#L22)

___

### ownsNativeToken

▸ **ownsNativeToken**(`state`, `hash`, `account`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `hash` | `string` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[utils.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/utils.ts#L43)

___

### selectNAT

▸ **selectNAT**(`bep134Store`, `hash`): `Promise`<`BEP134Token`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep134Store` | `KVStore` |
| `hash` | `string` |

#### Returns

`Promise`<`BEP134Token`\>

#### Defined in

[utils.ts:69](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/utils.ts#L69)

___

### upsertNAT

▸ **upsertNAT**(`bep134Store`, `hash`, `value`): `Promise`<`BEP134Token`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep134Store` | `KVStore` |
| `hash` | `string` |
| `value` | `PlainMessage`<`BEP134Token`\> |

#### Returns

`Promise`<`BEP134Token`\>

#### Defined in

[utils.ts:73](https://github.com/bearmint/bearmint/blob/main/packages/bep-134/source/utils.ts#L73)
