[@bearmint/bep-053 - v0.0.0](../README.md) / [E2E](../modules/E2E.md) / Context

# Interface: Context

[E2E](../modules/E2E.md).Context

## Table of contents

### Properties

- [acctFactory](E2E.Context.md#acctfactory)
- [accts](E2E.Context.md#accts)
- [client](E2E.Context.md#client)
- [txFactory](E2E.Context.md#txfactory)

## Properties

### acctFactory

• **acctFactory**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asserted` | (`mnemonic`: `string`) => `Promise`<{ `address`: `string` ; `fetchByAddress`: () => `Promise`<`object`\> ; `getBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `getPendingLockedBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `keypair`: `KeyPair` ; `mnemonic`: `string` ; `assertExpectations`: () => `Promise`<`void`\> ; `expectLessLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectLessTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMetadata`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataNotContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEquals`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEqualsHex`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataMissing`: (`moduleName`: `string`) => `Promise`<`void`\> ; `expectModuleMetadataNotContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectMoreLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMoreTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectProperty`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectSameLockedTokens`: (`denomination`: `string`) => `Promise`<`void`\> ; `expectSameTokens`: (`denomination`: `string`) => `Promise`<`void`\>  }\> |
| `random` | () => `Promise`<{ `address`: `string` ; `fetchByAddress`: () => `Promise`<`object`\> ; `getBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `getPendingLockedBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `keypair`: `KeyPair` ; `mnemonic`: `string` ; `assertExpectations`: () => `Promise`<`void`\> ; `expectLessLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectLessTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMetadata`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataNotContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEquals`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEqualsHex`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataMissing`: (`moduleName`: `string`) => `Promise`<`void`\> ; `expectModuleMetadataNotContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectMoreLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMoreTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectProperty`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectSameLockedTokens`: (`denomination`: `string`) => `Promise`<`void`\> ; `expectSameTokens`: (`denomination`: `string`) => `Promise`<`void`\>  }\> |

#### Defined in

[bep-053/source/e2e/types.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/types.ts#L47)

___

### accts

• **accts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assertExpectations` | () => `Promise`<`void`\> |
| `fromMnemonic` | (`moniker`: `string`, `mnemonic`: `string`) => `Promise`<`void`\> |
| `fromRandom` | (`moniker`: `string`) => `Promise`<`void`\> |
| `get` | (`moniker`: `string`) => { `address`: `string` ; `fetchByAddress`: () => `Promise`<`object`\> ; `getBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `getPendingLockedBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `keypair`: `KeyPair` ; `mnemonic`: `string` ; `assertExpectations`: () => `Promise`<`void`\> ; `expectLessLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectLessTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMetadata`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataNotContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEquals`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEqualsHex`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataMissing`: (`moduleName`: `string`) => `Promise`<`void`\> ; `expectModuleMetadataNotContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectMoreLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMoreTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectProperty`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectSameLockedTokens`: (`denomination`: `string`) => `Promise`<`void`\> ; `expectSameTokens`: (`denomination`: `string`) => `Promise`<`void`\>  } |

#### Defined in

[bep-053/source/e2e/types.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/types.ts#L48)

___

### client

• **client**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buildTx` | (`type`: ``"@bearmint/bep-055"``) => `TxBuilder`<`BEP55Msg`\>(`type`: ``"@bearmint/bep-056"``) => `TxBuilder`<`BEP56Msg`\>(`type`: ``"@bearmint/bep-057"``) => `TxBuilder`<`BEP57Msg`\>(`type`: ``"@bearmint/bep-058"``) => `TxBuilder`<`BEP58Msg`\>(`type`: ``"@bearmint/bep-059"``) => `TxBuilder`<`BEP59Msg`\>(`type`: ``"@bearmint/bep-064"``) => `TxBuilder`<`BEP64Msg`\>(`type`: ``"@bearmint/bep-065"``) => `TxBuilder`<`BEP65Msg`\>(`type`: ``"@bearmint/bep-066"``) => `TxBuilder`<`BEP66Msg`\>(`type`: ``"@bearmint/bep-067"``) => `TxBuilder`<`BEP67Msg`\>(`type`: ``"@bearmint/bep-068"``) => `TxBuilder`<`BEP68Msg`\>(`type`: ``"@bearmint/bep-104"``) => `TxBuilder`<`BEP104Msg`\>(`type`: ``"@bearmint/bep-110"``) => `TxBuilder`<`BEP110Msg`\>(`type`: ``"@bearmint/bep-122"``) => `TxBuilder`<`BEP122Msg`\>(`type`: ``"@bearmint/bep-126"``) => `TxBuilder`<`BEP126Msg`\>(`type`: ``"@bearmint/bep-127"``) => `TxBuilder`<`BEP127Msg`\>(`type`: ``"@bearmint/bep-128"``) => `TxBuilder`<`BEP128Msg`\>(`type`: ``"@bearmint/bep-129"``) => `TxBuilder`<`BEP129Msg`\>(`type`: ``"@bearmint/bep-130"``) => `TxBuilder`<`BEP130Msg`\>(`type`: ``"@bearmint/bep-131"``) => `TxBuilder`<`BEP131Msg`\>(`type`: ``"@bearmint/bep-132"``) => `TxBuilder`<`BEP132Msg`\>(`type`: ``"@bearmint/bep-133"``) => `TxBuilder`<`BEP133Msg`\>(`type`: ``"@bearmint/bep-134"``) => `TxBuilder`<`BEP134Msg`\>(`type`: ``"@bearmint/bep-135"``) => `TxBuilder`<`BEP135Msg`\>(`type`: ``"@bearmint/bep-136"``) => `TxBuilder`<`BEP136Msg`\>(`type`: ``"@bearmint/bep-137"``) => `TxBuilder`<`BEP137Msg`\> |
| `fakeTxMsg` | (`type`: ``"@bearmint/bep-055"``) => `TxMsgFaker`<`BEP55Msg`, `object`\>(`type`: ``"@bearmint/bep-056"``) => `TxMsgFaker`<`BEP56Msg`, `object`\>(`type`: ``"@bearmint/bep-057"``) => `TxMsgFaker`<`BEP57Msg`, `object`\>(`type`: ``"@bearmint/bep-058"``) => `TxMsgFaker`<`BEP58Msg`, `object`\>(`type`: ``"@bearmint/bep-059"``) => `TxMsgFaker`<`BEP59Msg`, `object`\>(`type`: ``"@bearmint/bep-064"``) => `TxMsgFaker`<`BEP64Msg`, `object`\>(`type`: ``"@bearmint/bep-065"``) => `TxMsgFaker`<`BEP65Msg`, `object`\>(`type`: ``"@bearmint/bep-066"``) => `TxMsgFaker`<`BEP66Msg`, `object`\>(`type`: ``"@bearmint/bep-067"``) => `TxMsgFaker`<`BEP67Msg`, `object`\>(`type`: ``"@bearmint/bep-068"``) => `TxMsgFaker`<`BEP68Msg`, `object`\>(`type`: ``"@bearmint/bep-104"``) => `TxMsgFaker`<`BEP104Msg`, `object`\>(`type`: ``"@bearmint/bep-110"``) => `TxMsgFaker`<`BEP110Msg`, `object`\>(`type`: ``"@bearmint/bep-122"``) => `TxMsgFaker`<`BEP122Msg`, `object`\>(`type`: ``"@bearmint/bep-126"``) => `TxMsgFaker`<`BEP126Msg`, `object`\>(`type`: ``"@bearmint/bep-127"``) => `TxMsgFaker`<`BEP127Msg`, `object`\>(`type`: ``"@bearmint/bep-128"``) => `TxMsgFaker`<`BEP128Msg`, `object`\>(`type`: ``"@bearmint/bep-129"``) => `TxMsgFaker`<`BEP129Msg`, `object`\>(`type`: ``"@bearmint/bep-130"``) => `TxMsgFaker`<`BEP130Msg`, `object`\>(`type`: ``"@bearmint/bep-131"``) => `TxMsgFaker`<`BEP131Msg`, `object`\>(`type`: ``"@bearmint/bep-132"``) => `TxMsgFaker`<`BEP132Msg`, `object`\>(`type`: ``"@bearmint/bep-133"``) => `TxMsgFaker`<`BEP133Msg`, `object`\>(`type`: ``"@bearmint/bep-134"``) => `TxMsgFaker`<`BEP134Msg`, `object`\>(`type`: ``"@bearmint/bep-135"``) => `TxMsgFaker`<`BEP135Msg`, `object`\>(`type`: ``"@bearmint/bep-136"``) => `TxMsgFaker`<`BEP136Msg`, `object`\>(`type`: ``"@bearmint/bep-137"``) => `TxMsgFaker`<`BEP137Msg`, `object`\> |
| `rails` | () => { `accounts`: (`parameters?`: `AccountRequestParameters`) => `Promise`<`any`\> ; `blocks`: (`parameters?`: `BlockRequestParameters`) => `Promise`<`any`\> ; `txs`: (`parameters?`: `TxRequestParameters`) => `Promise`<`any`\>  } |
| `signTx` | (`__namedParameters`: { `data`: { `gas`: `string` ; `message`: `PartialMessage`<`TxMsg`\> ; `nonce`: `string`  } ; `recipient`: `Address` ; `sender`: `KeyPair`  }) => `Promise`<`Tx`\> |
| `trpc` | (`host?`: `string`) => { `broadcastSignedTx`: (`signedTx`: `Tx`) => `Promise`<`BroadcastTxResponse`\> ; `getAccountByAddress`: (`address`: `string`) => `Promise`<`any`\> ; `getCommittedBlockNumber`: () => `Promise`<`bigint`\> ; `getNextNonce`: (`publicKey`: `string`) => `Promise`<`string`\>  } |

#### Defined in

[bep-053/source/e2e/types.ts:49](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/types.ts#L49)

___

### txFactory

• **txFactory**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `plain` | (`sender`: `KeyPair`, `recipient`: `KeyPair`, `content`: `Uint8Array`, `handler?`: `string`, `version?`: `string`) => `Promise`<`Tx`\> |
| `asserted` | (`sender`: `KeyPair`, `recipient`: `KeyPair`, `content`: `Uint8Array`, `handler?`: `string`, `version?`: `string`) => `Promise`<{ `confirmMeta`: (`key`: `string`, `value?`: `object`) => `Promise`<`void`\> ; `confirmMetaMsg`: (`key`: `string`, `value`: `object`, `msg`: `AnyMessage`) => `Promise`<`void`\> ; `fail`: (`events`: [`Event`](E2E.Event.md)[], `debug?`: `boolean`) => `Promise`<`void`\> ; `pass`: (`events?`: [`Event`](E2E.Event.md)[], `debug?`: `boolean`) => `Promise`<[`DeliverTx`](E2E.DeliverTx.md)\> ; `toTx`: () => `Tx`  }\> |

#### Defined in

[bep-053/source/e2e/types.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/types.ts#L50)
