[@bearmint/bep-053 - v0.0.0](../README.md) / E2E

# Namespace: E2E

## Table of contents

### Interfaces

- [Account](../interfaces/E2E.Account.md)
- [BroadcastTxResponse](../interfaces/E2E.BroadcastTxResponse.md)
- [CheckTx](../interfaces/E2E.CheckTx.md)
- [Context](../interfaces/E2E.Context.md)
- [DeliverTx](../interfaces/E2E.DeliverTx.md)
- [Event](../interfaces/E2E.Event.md)

### Type Aliases

- [AcctFactory](E2E.md#acctfactory)
- [AcctRepository](E2E.md#acctrepository)
- [AssertedAccount](E2E.md#assertedaccount)
- [TxFactory](E2E.md#txfactory)

### Functions

- [broadcastSignedTx](E2E.md#broadcastsignedtx)
- [createEnvironment](E2E.md#createenvironment)
- [fetchAccount](E2E.md#fetchaccount)
- [fetchAccountByAddress](E2E.md#fetchaccountbyaddress)
- [getCurrentBlockNumber](E2E.md#getcurrentblocknumber)
- [getHexString](E2E.md#gethexstring)
- [getJSON](E2E.md#getjson)
- [getMixedString](E2E.md#getmixedstring)
- [getNextNonce](E2E.md#getnextnonce)
- [getProto](E2E.md#getproto)
- [getString](E2E.md#getstring)
- [makeAcctFactory](E2E.md#makeacctfactory)
- [makeAcctRepository](E2E.md#makeacctrepository)
- [makeTxFactory](E2E.md#maketxfactory)
- [plainRequest](E2E.md#plainrequest)
- [testLoopback](E2E.md#testloopback)
- [testMemoLength](E2E.md#testmemolength)
- [testOpCount](E2E.md#testopcount)
- [testTopMemoLength](E2E.md#testtopmemolength)

## Type Aliases

### AcctFactory

Ƭ **AcctFactory**: `ReturnType`<typeof [`makeAcctFactory`](E2E.md#makeacctfactory)\>

#### Defined in

[bep-053/source/e2e/account.ts:252](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L252)

___

### AcctRepository

Ƭ **AcctRepository**: `ReturnType`<typeof [`makeAcctRepository`](E2E.md#makeacctrepository)\>

#### Defined in

[bep-053/source/e2e/account.ts:254](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L254)

___

### AssertedAccount

Ƭ **AssertedAccount**: `ReturnType`<typeof `makeAssertedAccount`\>

#### Defined in

[bep-053/source/e2e/account.ts:265](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L265)

___

### TxFactory

Ƭ **TxFactory**: `ReturnType`<typeof [`makeTxFactory`](E2E.md#maketxfactory)\>

#### Defined in

[bep-053/source/e2e/tx.ts:143](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/tx.ts#L143)

## Functions

### broadcastSignedTx

▸ **broadcastSignedTx**(`signedTx`): `Promise`<[`BroadcastTxResponse`](../interfaces/E2E.BroadcastTxResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTx` | `Tx` |

#### Returns

`Promise`<[`BroadcastTxResponse`](../interfaces/E2E.BroadcastTxResponse.md)\>

#### Defined in

[bep-053/source/e2e/http.ts:103](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L103)

___

### createEnvironment

▸ **createEnvironment**(`txServiceProvider`, `txServiceProviders?`): `Promise`<[`Context`](../interfaces/E2E.Context.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txServiceProvider` | `FactoryFunction`<`ServiceProvider`\> |
| `txServiceProviders?` | `FactoryFunction`<`ServiceProvider`\>[] |

#### Returns

`Promise`<[`Context`](../interfaces/E2E.Context.md)\>

#### Defined in

[bep-053/source/e2e/env.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/env.ts#L44)

___

### fetchAccount

▸ **fetchAccount**(`publicKey`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[bep-053/source/e2e/http.ts:87](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L87)

___

### fetchAccountByAddress

▸ **fetchAccountByAddress**(`address`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[bep-053/source/e2e/http.ts:91](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L91)

___

### getCurrentBlockNumber

▸ **getCurrentBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[bep-053/source/e2e/http.ts:111](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L111)

___

### getHexString

▸ **getHexString**(`method`, `params?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `object` |

#### Returns

`Promise`<`string`\>

#### Defined in

[bep-053/source/e2e/http.ts:75](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L75)

___

### getJSON

▸ **getJSON**<`T`\>(`method`, `params?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `object` |

#### Returns

`Promise`<`T`\>

#### Defined in

[bep-053/source/e2e/http.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L53)

___

### getMixedString

▸ **getMixedString**(`method`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[bep-053/source/e2e/http.ts:65](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L65)

___

### getNextNonce

▸ **getNextNonce**(`publicKey`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[bep-053/source/e2e/http.ts:95](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L95)

___

### getProto

▸ **getProto**(`method`, `params?`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `object` |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[bep-053/source/e2e/http.ts:81](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L81)

___

### getString

▸ **getString**(`method`, `params?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `object` |

#### Returns

`Promise`<`string`\>

#### Defined in

[bep-053/source/e2e/http.ts:59](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L59)

___

### makeAcctFactory

▸ **makeAcctFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `asserted` | (`mnemonic`: `string`) => `Promise`<{ `address`: `string` ; `fetchByAddress`: () => `Promise`<`object`\> ; `getBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `getPendingLockedBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `keypair`: `KeyPair` ; `mnemonic`: `string` ; `assertExpectations`: () => `Promise`<`void`\> ; `expectLessLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectLessTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMetadata`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataNotContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEquals`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEqualsHex`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataMissing`: (`moduleName`: `string`) => `Promise`<`void`\> ; `expectModuleMetadataNotContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectMoreLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMoreTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectProperty`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectSameLockedTokens`: (`denomination`: `string`) => `Promise`<`void`\> ; `expectSameTokens`: (`denomination`: `string`) => `Promise`<`void`\>  }\> |
| `random` | () => `Promise`<{ `address`: `string` ; `fetchByAddress`: () => `Promise`<`object`\> ; `getBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `getPendingLockedBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `keypair`: `KeyPair` ; `mnemonic`: `string` ; `assertExpectations`: () => `Promise`<`void`\> ; `expectLessLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectLessTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMetadata`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataNotContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEquals`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEqualsHex`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataMissing`: (`moduleName`: `string`) => `Promise`<`void`\> ; `expectModuleMetadataNotContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectMoreLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMoreTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectProperty`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectSameLockedTokens`: (`denomination`: `string`) => `Promise`<`void`\> ; `expectSameTokens`: (`denomination`: `string`) => `Promise`<`void`\>  }\> |

#### Defined in

[bep-053/source/e2e/account.ts:218](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L218)

___

### makeAcctRepository

▸ **makeAcctRepository**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `assertExpectations` | () => `Promise`<`void`\> |
| `fromMnemonic` | (`moniker`: `string`, `mnemonic`: `string`) => `Promise`<`void`\> |
| `fromRandom` | (`moniker`: `string`) => `Promise`<`void`\> |
| `get` | (`moniker`: `string`) => { `address`: `string` ; `fetchByAddress`: () => `Promise`<`object`\> ; `getBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `getPendingLockedBalance`: (`denomination?`: `string`) => `Promise`<`bigint`\> ; `keypair`: `KeyPair` ; `mnemonic`: `string` ; `assertExpectations`: () => `Promise`<`void`\> ; `expectLessLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectLessTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMetadata`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectMetadataNotContains`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEquals`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataEqualsHex`: (`moduleName`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectModuleMetadataMissing`: (`moduleName`: `string`) => `Promise`<`void`\> ; `expectModuleMetadataNotContains`: (`moduleName`: `string`, `key`: `unknown`) => `Promise`<`void`\> ; `expectMoreLockedTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectMoreTokens`: (`amount`: `number`, `denomination`: `string`) => `Promise`<`void`\> ; `expectProperty`: (`key`: `string`, `value`: `unknown`) => `Promise`<`void`\> ; `expectSameLockedTokens`: (`denomination`: `string`) => `Promise`<`void`\> ; `expectSameTokens`: (`denomination`: `string`) => `Promise`<`void`\>  } |

#### Defined in

[bep-053/source/e2e/account.ts:227](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L227)

___

### makeTxFactory

▸ **makeTxFactory**(`container`, `appHash`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `Container` |
| `appHash` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `plain` | (`sender`: `KeyPair`, `recipient`: `KeyPair`, `content`: `Uint8Array`, `handler?`: `string`, `version?`: `string`) => `Promise`<`Tx`\> |
| `asserted` | (`sender`: `KeyPair`, `recipient`: `KeyPair`, `content`: `Uint8Array`, `handler?`: `string`, `version?`: `string`) => `Promise`<{ `confirmMeta`: (`key`: `string`, `value?`: `object`) => `Promise`<`void`\> ; `confirmMetaMsg`: (`key`: `string`, `value`: `object`, `msg`: `AnyMessage`) => `Promise`<`void`\> ; `fail`: (`events`: [`Event`](../interfaces/E2E.Event.md)[], `debug?`: `boolean`) => `Promise`<`void`\> ; `pass`: (`events?`: [`Event`](../interfaces/E2E.Event.md)[], `debug?`: `boolean`) => `Promise`<[`DeliverTx`](../interfaces/E2E.DeliverTx.md)\> ; `toTx`: () => `Tx`  }\> |

#### Defined in

[bep-053/source/e2e/tx.ts:95](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/tx.ts#L95)

___

### plainRequest

▸ **plainRequest**(`method`, `params?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[bep-053/source/e2e/http.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/http.ts#L31)

___

### testLoopback

▸ **testLoopback**(`name`, `it`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `it` | `CallableFunction` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[bep-053/source/e2e/cases/loopback.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/cases/loopback.ts#L20)

___

### testMemoLength

▸ **testMemoLength**(`name`, `it`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `it` | `CallableFunction` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[bep-053/source/e2e/cases/memo.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/cases/memo.ts#L94)

___

### testOpCount

▸ **testOpCount**(`name`, `it`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `it` | `CallableFunction` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[bep-053/source/e2e/cases/ops.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/cases/ops.ts#L20)

___

### testTopMemoLength

▸ **testTopMemoLength**(`name`, `it`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `it` | `CallableFunction` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[bep-053/source/e2e/cases/memo.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/cases/memo.ts#L20)
