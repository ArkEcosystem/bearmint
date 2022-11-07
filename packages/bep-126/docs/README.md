@bearmint/bep-126 - v0.0.0

# @bearmint/bep-126 - v0.0.0

## Table of contents

### Enumerations

- [BEP126UserPermission](enums/BEP126UserPermission.md)
- [BEP126UserRole](enums/BEP126UserRole.md)
- [MintPolicy](enums/MintPolicy.md)

### Interfaces

- [PolicyArgs](interfaces/PolicyArgs.md)

### Type Aliases

- [CustomTxMsgFactory](README.md#customtxmsgfactory)

### Variables

- [HANDLER](README.md#handler)
- [MODULE\_VERSION](README.md#module_version)
- [VERSION](README.md#version)

### Functions

- [assertCollectionOwnership](README.md#assertcollectionownership)
- [assertCollectionPolicies](README.md#assertcollectionpolicies)
- [assertStewardCan](README.md#assertstewardcan)
- [assertStewardCannot](README.md#assertstewardcannot)
- [getCollection](README.md#getcollection)
- [getCollectionFromToken](README.md#getcollectionfromtoken)
- [getCollectionHash](README.md#getcollectionhash)
- [getCollectionKey](README.md#getcollectionkey)
- [getNameKey](README.md#getnamekey)
- [getSymbolKey](README.md#getsymbolkey)
- [hasCollection](README.md#hascollection)
- [hasCollectionOwnership](README.md#hascollectionownership)
- [isUnknownPermission](README.md#isunknownpermission)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeTxAuditor](README.md#maketxauditor)
- [makeTxExecutor](README.md#maketxexecutor)
- [makeTxManifest](README.md#maketxmanifest)
- [makeTxMsgFactory](README.md#maketxmsgfactory)
- [upsertCollection](README.md#upsertcollection)

## Type Aliases

### CustomTxMsgFactory

Ƭ **CustomTxMsgFactory**: `ReturnType`<typeof [`makeTxMsgFactory`](README.md#maketxmsgfactory)\>

#### Defined in

[tx-msg.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/tx-msg.ts#L33)

## Variables

### HANDLER

• `Const` **HANDLER**: ``"@bearmint/bep-126"``

#### Defined in

[types.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/types.ts#L22)

___

### MODULE\_VERSION

• `Const` **MODULE\_VERSION**: `string`

#### Defined in

[types.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/types.ts#L25)

___

### VERSION

• `Const` **VERSION**: ``"0.0.0"``

#### Defined in

[types.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/types.ts#L23)

## Functions

### assertCollectionOwnership

▸ **assertCollectionOwnership**(`state`, `hash`, `account`, `error`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `hash` | `string` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `error` | `TxAssertionsErrorStruct` |

#### Returns

`Promise`<`void`\>

#### Defined in

[collection.ts:63](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/collection.ts#L63)

___

### assertCollectionPolicies

▸ **assertCollectionPolicies**(`state`, `policyRegistry`, `actor`, `policyType`, `collectionHash`, `tokenHash`, `index`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `policyRegistry` | `PolicyRegistry` |
| `actor` | `Account`<`Record`<`string`, `any`\>\> |
| `policyType` | `number` |
| `collectionHash` | `string` |
| `tokenHash` | `undefined` \| `string` |
| `index` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[acl.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/acl.ts#L24)

___

### assertStewardCan

▸ **assertStewardCan**(`bep126Store`, `collectionHash`, `steward`, `permission`, `error`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep126Store` | `KVStore` |
| `collectionHash` | `string` |
| `steward` | `string` |
| `permission` | `number` |
| `error` | `TxAssertionsErrorStruct` |

#### Returns

`Promise`<`void`\>

#### Defined in

[steward.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/steward.ts#L37)

___

### assertStewardCannot

▸ **assertStewardCannot**(`bep126Store`, `collectionHash`, `steward`, `permission`, `error`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep126Store` | `KVStore` |
| `collectionHash` | `string` |
| `steward` | `string` |
| `permission` | `number` |
| `error` | `TxAssertionsErrorStruct` |

#### Returns

`Promise`<`void`\>

#### Defined in

[steward.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/steward.ts#L23)

___

### getCollection

▸ **getCollection**(`bep126Store`, `hash`): `Promise`<`BEP126Collection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep126Store` | `KVStore` |
| `hash` | `string` |

#### Returns

`Promise`<`BEP126Collection`\>

#### Defined in

[collection.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/collection.ts#L26)

___

### getCollectionFromToken

▸ **getCollectionFromToken**(`bep126Store`, `bep131Store`, `hash`): `Promise`<{ `collection`: `BEP126Collection` ; `collectionHash`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep126Store` | `KVStore` |
| `bep131Store` | `KVStore` |
| `hash` | `string` |

#### Returns

`Promise`<{ `collection`: `BEP126Collection` ; `collectionHash`: `string`  }\>

#### Defined in

[collection.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/collection.ts#L34)

___

### getCollectionHash

▸ **getCollectionHash**(`bep131Store`, `hash`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep131Store` | `KVStore` |
| `hash` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[collection.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/collection.ts#L30)

___

### getCollectionKey

▸ **getCollectionKey**(`hash`, `index`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `index` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/utils.ts#L30)

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

[utils.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/utils.ts#L22)

___

### getSymbolKey

▸ **getSymbolKey**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[utils.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/utils.ts#L26)

___

### hasCollection

▸ **hasCollection**(`bep126Store`, `hash`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep126Store` | `KVStore` |
| `hash` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[collection.ts:49](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/collection.ts#L49)

___

### hasCollectionOwnership

▸ **hasCollectionOwnership**(`state`, `hash`, `account`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `hash` | `string` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[collection.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/collection.ts#L53)

___

### isUnknownPermission

▸ **isUnknownPermission**(`permission`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | `number` |
| `error` | `TxAssertionsErrorStruct` |

#### Returns

`void`

#### Defined in

[collection.ts:76](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/collection.ts#L76)

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

[service-provider.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/service-provider.ts#L28)

___

### makeTxAuditor

▸ **makeTxAuditor**(`cradle`): `TxAuditor`<`BEP126Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`TxAuditor`<`BEP126Msg`\>

#### Defined in

[tx-auditor.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/tx-auditor.ts#L25)

___

### makeTxExecutor

▸ **makeTxExecutor**(): `TxExecutor`<`BEP126Msg`\>

#### Returns

`TxExecutor`<`BEP126Msg`\>

#### Defined in

[tx-executor.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/tx-executor.ts#L28)

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

[tx-manifest.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/tx-manifest.ts#L23)

___

### makeTxMsgFactory

▸ **makeTxMsgFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fromBytes` | (`bytes`: `Uint8Array`) => `Promise`<`BEP126Msg`\> |
| `fromTx` | (`tx`: `Tx`) => `Promise`<`BEP126Msg`\> |

#### Defined in

[tx-msg.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/tx-msg.ts#L22)

___

### upsertCollection

▸ **upsertCollection**(`bep126Store`, `collectionHash`, `collection`): `Promise`<`BEP126Collection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bep126Store` | `KVStore` |
| `collectionHash` | `string` |
| `collection` | `Plain`<`BEP126Collection`\> |

#### Returns

`Promise`<`BEP126Collection`\>

#### Defined in

[collection.ts:84](https://github.com/bearmint/bearmint/blob/main/packages/bep-126/source/collection.ts#L84)
