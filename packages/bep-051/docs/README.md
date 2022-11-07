@bearmint/bep-051 - v0.0.0

# @bearmint/bep-051 - v0.0.0

## Table of contents

### Classes

- [TxReceipt](classes/TxReceipt.md)

### Interfaces

- [TxListenerPayload](interfaces/TxListenerPayload.md)

### Variables

- [TX\_LISTENERS](README.md#tx_listeners)

### Functions

- [allRecipients](README.md#allrecipients)
- [createAssertionFunctions](README.md#createassertionfunctions)
- [createToolkit](README.md#createtoolkit)
- [findOrCreateAccountByAddress](README.md#findorcreateaccountbyaddress)
- [findOrCreateAccountByPublicKey](README.md#findorcreateaccountbypublickey)
- [getRecipient](README.md#getrecipient)
- [getSender](README.md#getsender)
- [getSenderWithRecipient](README.md#getsenderwithrecipient)
- [isSameAccount](README.md#issameaccount)
- [makeDeductGasListener](README.md#makedeductgaslistener)
- [makeFindOrCreateRecipientListener](README.md#makefindorcreaterecipientlistener)
- [makeFindOrCreateSenderListener](README.md#makefindorcreatesenderlistener)
- [makeIncrementNonceListener](README.md#makeincrementnoncelistener)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeTxAuditorRegistry](README.md#maketxauditorregistry)
- [makeTxExecutorRegistry](README.md#maketxexecutorregistry)
- [makeTxFactory](README.md#maketxfactory)
- [makeTxManifestFactory](README.md#maketxmanifestfactory)
- [makeTxManifestRegistry](README.md#maketxmanifestregistry)
- [makeTxMsgFactoryRegistry](README.md#maketxmsgfactoryregistry)
- [makeTxProcessor](README.md#maketxprocessor)
- [makeVerifyGasListener](README.md#makeverifygaslistener)
- [makeVerifyNetworkListener](README.md#makeverifynetworklistener)
- [makeVerifyNonceListener](README.md#makeverifynoncelistener)
- [makeVerifySignatureListener](README.md#makeverifysignaturelistener)
- [makeVerifyTxMsgVersionListener](README.md#makeverifytxmsgversionlistener)
- [makeVerifyTxVersionListener](README.md#makeverifytxversionlistener)
- [positiveNumber](README.md#positivenumber)

## Variables

### TX\_LISTENERS

• `Const` **TX\_LISTENERS**: [`string`, `ClassOrFunctionReturning`<`EventListener`\>][]

#### Defined in

[listeners/index.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/index.ts#L34)

## Functions

### allRecipients

▸ **allRecipients**(`state`, `addressFactory`, `accountSerializer`, `ops`, `sender?`): `Promise`<`NonNullableMap`<`Account`<`Record`<`string`, `any`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `addressFactory` | `AddressFactory` |
| `accountSerializer` | `AccountSerializer` |
| `ops` | { `recipient`: `string`  }[] |
| `sender?` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`NonNullableMap`<`Account`<`Record`<`string`, `any`\>\>\>\>

#### Defined in

[utilities/find-or-create-account-by-address.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/utilities/find-or-create-account-by-address.ts#L50)

___

### createAssertionFunctions

▸ **createAssertionFunctions**(`cradle`, `manifest`, `state`, `tx`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Pick`<`Cradle`<`Record`<`string`, `unknown`\>\>, ``"AddressFactory"`` \| ``"CommittedState"`` \| ``"ServiceProviderRepository"``\> |
| `manifest` | `TxManifest` |
| `state` | `StateStore` |
| `tx` | `Tx` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `byteLength` | (`propertyKey`: `string`, `value`: `Uint8Array`, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `byteLengthFromString` | (`propertyKey`: `string`, `value`: `undefined` \| `string`, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `positiveNumber` | (`value`: `undefined` \| `bigint`, `error`: `TxAssertionsErrorStruct`) => `void` |
| `accountHasValidator` | (`account`: `Account`<`Record`<`string`, `any`\>\>, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `charLength` | (`propertyKey`: `string`, `value`: `string`, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `count` | (`propertyKey`: `string`, `values`: `number` \| `unknown`[], `error?`: `TxAssertionsErrorStruct`) => `void` |
| `equity` | (`value`: `undefined` \| `bigint`, `error`: `TxAssertionsErrorStruct`) => `void` |
| `future` | (`expectedBlockNumber`: `bigint`, `error`: `TxAssertionsErrorStruct`) => `Promise`<`void`\> |
| `hashEquality` | (`algorithm`: `string`, `actual`: `Uint8Array`, `expected`: `Uint8Array`, `error`: `TxAssertionsErrorStruct`) => `void` |
| `hashLength` | (`algorithm`: `string`, `value`: `Uint8Array`, `error`: `TxAssertionsErrorStruct`) => `void` |
| `knownByList` | (`key`: `string`, `value`: `unknown`, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `loopback` | () => `Promise`<`void`\> |
| `memoLength` | (`memo`: `undefined` \| `string`, `ops?`: { `memo?`: `string`  }[]) => `void` |
| `notPrincipalCurrency` | (`value`: `string`, `error`: `TxAssertionsErrorStruct`) => `void` |
| `notTombstoned` | (`account`: `Account`<`Record`<`string`, `any`\>\>) => `Promise`<`void`\> |
| `past` | (`expectedBlockNumber`: `bigint`, `error`: `TxAssertionsErrorStruct`) => `Promise`<`void`\> |
| `range` | (`propertyKey`: `string`, `value`: `string` \| `number`, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `recipientAddress` | (`address`: `string` \| `Address`, `error?`: `TxAssertionsErrorStruct`) => `Promise`<`void`\> |
| `regex` | (`propertyKey`: `string`, `value`: `string`, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `relational` | () => `Promise`<`void`\> |
| `relationalRecipient` | (`sender`: `string`, `recipient`: `string`, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `uniqueList` | <T\>(`items`: `T`[], `compositeKey`: (`item`: `T`) => `string`, `error`: `TxAssertionsErrorStruct`) => `void` |
| `uniqueModuleStoreKey` | (`moduleName`: `string`, `key`: `KVStoreKey`, `error`: `TxAssertionsErrorStruct`) => `Promise`<`void`\> |
| `uniqueOps` | <T\>(`ops`: `T`[], `compositeKey`: (`item`: `T`) => `string`, `error?`: `TxAssertionsErrorStruct`) => `void` |
| `validatorAuthenticity` | (`msg`: `Uint8Array`, `publicKey`: `Uint8Array`, `signature`: `Uint8Array`) => `Promise`<`void`\> |
| `validatorExists` | (`moniker`: `string`) => `Promise`<`void`\> |

#### Defined in

[assert.ts:62](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/assert.ts#L62)

___

### createToolkit

▸ **createToolkit**(`cradle`, `manifest`, `msg`, `candidateState`, `tx`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Pick`<`Cradle`<`Record`<`string`, `unknown`\>\>, ``"AddressFactory"`` \| ``"CommittedState"`` \| ``"ServiceProviderRepository"`` \| ``"AccountSerializer"``\> |
| `manifest` | `TxManifest` |
| `msg` | `AnyMessage` |
| `candidateState` | `StateStore` |
| `tx` | `Tx` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `findOrCreateAccountByAddress` | (`address`: `string`) => `Promise`<`Account`<`Record`<`string`, `any`\>\>\> |
| `getActiveValidatorAddresses` | () => `Promise`<`string`[]\> |
| `getBalance` | (`account`: `Account`<`Record`<`string`, `any`\>\>, `denomination`: `string`, `errorKey?`: `string`) => `bigint` |
| `getModuleMilestone` | <T\>(`name?`: `string`, `version?`: `string`) => `Object` |
| `getRecipientsFromOps` | (`sender?`: `Account`<`Record`<`string`, `any`\>\>) => `Promise`<`NonNullableMap`<`Account`<`Record`<`string`, `any`\>\>\>\> |
| `getSender` | () => `Promise`<`AccountWithPublicKey`\> |
| `getSenderWithRecipient` | () => `Promise`<{ `recipient`: `Account`<`Record`<`string`, `any`\>\> ; `sender`: `AccountWithPublicKey`  }\> |

#### Defined in

[context.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/context.ts#L31)

___

### findOrCreateAccountByAddress

▸ **findOrCreateAccountByAddress**(`state`, `addressFactory`, `accountSerializer`, `address`): `Promise`<`Account`<`Record`<`string`, `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `addressFactory` | `AddressFactory` |
| `accountSerializer` | `AccountSerializer` |
| `address` | `string` |

#### Returns

`Promise`<`Account`<`Record`<`string`, `any`\>\>\>

#### Defined in

[utilities/find-or-create-account-by-address.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/utilities/find-or-create-account-by-address.ts#L23)

___

### findOrCreateAccountByPublicKey

▸ **findOrCreateAccountByPublicKey**(`accountSerializer`, `addressFactory`, `publicKey`, `publicKeyFactory`, `state`): `Promise`<`Account`<`Record`<`string`, `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountSerializer` | `AccountSerializer` |
| `addressFactory` | `AddressFactory` |
| `publicKey` | `string` |
| `publicKeyFactory` | `PublicKeyFactory` |
| `state` | `StateStore` |

#### Returns

`Promise`<`Account`<`Record`<`string`, `any`\>\>\>

#### Defined in

[utilities/find-or-create-account-by-public-key.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/utilities/find-or-create-account-by-public-key.ts#L27)

___

### getRecipient

▸ **getRecipient**(`state`, `tx`): `Promise`<`Account`<`Record`<`string`, `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `tx` | `Tx` |

#### Returns

`Promise`<`Account`<`Record`<`string`, `any`\>\>\>

#### Defined in

[utilities/get-recipient.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/utilities/get-recipient.ts#L20)

___

### getSender

▸ **getSender**(`state`, `tx`): `Promise`<`AccountWithPublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `tx` | `Tx` |

#### Returns

`Promise`<`AccountWithPublicKey`\>

#### Defined in

[utilities/get-sender.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/utilities/get-sender.ts#L20)

___

### getSenderWithRecipient

▸ **getSenderWithRecipient**(`state`, `tx`): `Promise`<{ `recipient`: `Account`<`Record`<`string`, `any`\>\> ; `sender`: `AccountWithPublicKey`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `tx` | `Tx` |

#### Returns

`Promise`<{ `recipient`: `Account`<`Record`<`string`, `any`\>\> ; `sender`: `AccountWithPublicKey`  }\>

#### Defined in

[utilities/get-sender-with-recipient.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/utilities/get-sender-with-recipient.ts#L23)

___

### isSameAccount

▸ **isSameAccount**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Account`<`Record`<`string`, `any`\>\> |
| `b` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`boolean`

#### Defined in

[utilities/is-same-account.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/utilities/is-same-account.ts#L20)

___

### makeDeductGasListener

▸ **makeDeductGasListener**(): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

**`Remarks`**

This mutates the sender account. If you store the sender account during the `context` to avoid
retrieving it again during `verify` (they don't mutate) you'll need to make
sure that you retrieve the sender account again at the top of `execute` to have a fresh instance.

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/deduct-gas.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/deduct-gas.ts#L31)

___

### makeFindOrCreateRecipientListener

▸ **makeFindOrCreateRecipientListener**(`cradle`): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/find-or-create-recipient.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/find-or-create-recipient.ts#L24)

___

### makeFindOrCreateSenderListener

▸ **makeFindOrCreateSenderListener**(`cradle`): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Pick`<`Cradle`<`Record`<`string`, `unknown`\>\>, ``"AddressFactory"`` \| ``"AccountSerializer"`` \| ``"PublicKeyFactory"``\> |

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/find-or-create-sender.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/find-or-create-sender.ts#L24)

___

### makeIncrementNonceListener

▸ **makeIncrementNonceListener**(): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/increment-nonce.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/increment-nonce.ts#L23)

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

[service-provider.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/service-provider.ts#L31)

___

### makeTxAuditorRegistry

▸ **makeTxAuditorRegistry**(`cradle`): `TxAuditorRegistry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxAuditorRegistry`

#### Defined in

[registry.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/registry.ts#L31)

___

### makeTxExecutorRegistry

▸ **makeTxExecutorRegistry**(`cradle`): `TxExecutorRegistry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxExecutorRegistry`

#### Defined in

[registry.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/registry.ts#L35)

___

### makeTxFactory

▸ **makeTxFactory**(`cradle`): `TxFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Pick`<`Cradle`<`Record`<`string`, `unknown`\>\>, ``"AddressFactory"`` \| ``"PublicKeyFactory"``\> |

#### Returns

`TxFactory`

#### Defined in

[factory.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/factory.ts#L24)

___

### makeTxManifestFactory

▸ **makeTxManifestFactory**(`cradle`, `handler`, `version`): `TxManifest`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |
| `handler` | `string` |
| `version` | `string` |

#### Returns

`TxManifest`

#### Defined in

[tx-manifest-factory.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/tx-manifest-factory.ts#L22)

___

### makeTxManifestRegistry

▸ **makeTxManifestRegistry**(`cradle`): `TxManifestRegistry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxManifestRegistry`

#### Defined in

[registry.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/registry.ts#L39)

___

### makeTxMsgFactoryRegistry

▸ **makeTxMsgFactoryRegistry**(`cradle`): `TxMsgFactoryRegistry`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxMsgFactoryRegistry`

#### Defined in

[registry.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/registry.ts#L43)

___

### makeTxProcessor

▸ **makeTxProcessor**(`cradle`): `TxProcessor`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxProcessor`

#### Defined in

[tx-processor.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/tx-processor.ts#L31)

___

### makeVerifyGasListener

▸ **makeVerifyGasListener**(`cradle`): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/verify-gas.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/verify-gas.ts#L23)

___

### makeVerifyNetworkListener

▸ **makeVerifyNetworkListener**(`cradle`): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/verify-network.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/verify-network.ts#L23)

___

### makeVerifyNonceListener

▸ **makeVerifyNonceListener**(): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/verify-nonce.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/verify-nonce.ts#L23)

___

### makeVerifySignatureListener

▸ **makeVerifySignatureListener**(`cradle`): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/verify-signature.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/verify-signature.ts#L25)

___

### makeVerifyTxMsgVersionListener

▸ **makeVerifyTxMsgVersionListener**(): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/verify-tx-handler-version.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/verify-tx-handler-version.ts#L24)

___

### makeVerifyTxVersionListener

▸ **makeVerifyTxVersionListener**(`cradle`): `EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`EventListener`<[`TxListenerPayload`](interfaces/TxListenerPayload.md)\>

#### Defined in

[listeners/verify-tx-version.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/listeners/verify-tx-version.ts#L24)

___

### positiveNumber

▸ **positiveNumber**(`value`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `bigint` |
| `error` | `TxAssertionsErrorStruct` |

#### Returns

`void`

#### Defined in

[assert.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/assert.ts#L46)
