@bearmint/bep-097 - v0.0.0

# @bearmint/bep-097 - v0.0.0

## Table of contents

### Interfaces

- [GenesisAccount](interfaces/GenesisAccount.md)

### Functions

- [assertTotalSupply](README.md#asserttotalsupply)
- [generateAccount](README.md#generateaccount)
- [generateAccounts](README.md#generateaccounts)
- [generateNodeKeys](README.md#generatenodekeys)
- [generateTendermintAccount](README.md#generatetendermintaccount)
- [generateValidators](README.md#generatevalidators)
- [getHomePath](README.md#gethomepath)
- [getMoniker](README.md#getmoniker)
- [makeNode](README.md#makenode)
- [makeNodes](README.md#makenodes)
- [makeState](README.md#makestate)
- [persistBearmint](README.md#persistbearmint)
- [persistGenesis](README.md#persistgenesis)
- [persistMilestones](README.md#persistmilestones)
- [persistValidatorKey](README.md#persistvalidatorkey)
- [writeNodeKey](README.md#writenodekey)

## Functions

### assertTotalSupply

▸ **assertTotalSupply**(`initialSupply`, `accounts`, `distributeInitialSupply`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialSupply` | `bigint` |
| `accounts` | [`GenesisAccount`](interfaces/GenesisAccount.md)[] |
| `distributeInitialSupply` | `boolean` |

#### Returns

`void`

#### Defined in

[genesis.ts:80](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/genesis.ts#L80)

___

### generateAccount

▸ **generateAccount**(`__namedParameters`): `Promise`<{ `address`: `Address` ; `mnemonic`: `string` ; `privateKey`: `Uint8Array` ; `publicKey`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.addressFactory` | `AddressFactory` |
| `__namedParameters.keyPairFactory` | `KeyPairFactory` |
| `__namedParameters.mnemonic?` | `string` |

#### Returns

`Promise`<{ `address`: `Address` ; `mnemonic`: `string` ; `privateKey`: `Uint8Array` ; `publicKey`: `Uint8Array`  }\>

#### Defined in

[account.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/account.ts#L30)

___

### generateAccounts

▸ **generateAccounts**(`__namedParameters`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.addressFactory` | `AddressFactory` |
| `__namedParameters.countAccounts` | `number` |
| `__namedParameters.countValidators` | `number` |
| `__namedParameters.distributeInitialSupply` | `boolean` |
| `__namedParameters.initialSupply` | `string` |
| `__namedParameters.keyPairFactory` | `KeyPairFactory` |
| `__namedParameters.milestones` | `Milestones` |
| `__namedParameters.state` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[account.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/account.ts#L53)

___

### generateNodeKeys

▸ **generateNodeKeys**(`__namedParameters`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[node-key.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/node-key.ts#L42)

___

### generateTendermintAccount

▸ **generateTendermintAccount**(`__namedParameters`): `Promise`<{ `address`: `string` ; `mnemonic`: `string` ; `privateKey`: `Buffer` ; `publicKey`: `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.keyPairType` | `string` |
| `__namedParameters.mnemonic?` | `string` |

#### Returns

`Promise`<{ `address`: `string` ; `mnemonic`: `string` ; `privateKey`: `Buffer` ; `publicKey`: `Buffer`  }\>

#### Defined in

[account.ts:103](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/account.ts#L103)

___

### generateValidators

▸ **generateValidators**(`__namedParameters`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.accounts` | `any`[] |
| `__namedParameters.addressFactory` | `AddressFactory` |
| `__namedParameters.countAccounts` | `number` |
| `__namedParameters.countValidators` | `number` |
| `__namedParameters.distributeInitialSupply` | `boolean` |
| `__namedParameters.initialSupply` | `string` |
| `__namedParameters.keyPairFactory` | `KeyPairFactory` |
| `__namedParameters.keyPairType` | `string` |
| `__namedParameters.milestones` | `Milestones` |
| `__namedParameters.state` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[validator.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/validator.ts#L47)

___

### getHomePath

▸ **getHomePath**(`count`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

`string`

#### Defined in

[genesis.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/genesis.ts#L39)

___

### getMoniker

▸ **getMoniker**(`index`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`string`

#### Defined in

[utils.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/utils.ts#L18)

___

### makeNode

▸ **makeNode**(`options`): `Promise`<`void`\>

This function generates configuration for a single node in the `~/.tendermint` directory.

**`Remarks`**

- We keep this as a separate function to avoid too many flags that dictate behaviour.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `GenesisOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[genesis.ts:111](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/genesis.ts#L111)

___

### makeNodes

▸ **makeNodes**(`options`): `Promise`<`void`\>

This function generates configuration for a many nodes in the `~/.bearmint/genesis_{n}` directories.

**`Remarks`**

- We keep this as a separate function to avoid too many options that dictate behaviour.
- The `persistent_peers` will use monikers which need to be replaced with IP addresses.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `GenesisOptions` |

#### Returns

`Promise`<`void`\>

#### Defined in

[genesis.ts:188](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/genesis.ts#L188)

___

### makeState

▸ **makeState**(`options`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `GenesisOptions` |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[genesis.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/genesis.ts#L47)

___

### persistBearmint

▸ **persistBearmint**(`__namedParameters`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[bearmint.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/bearmint.ts#L22)

___

### persistGenesis

▸ **persistGenesis**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`void`

#### Defined in

[genesis.ts:69](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/genesis.ts#L69)

___

### persistMilestones

▸ **persistMilestones**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`void`

#### Defined in

[milestones.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/milestones.ts#L20)

___

### persistValidatorKey

▸ **persistValidatorKey**(`__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`void`

#### Defined in

[validator.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/validator.ts#L25)

___

### writeNodeKey

▸ **writeNodeKey**(`__namedParameters`): `Promise`<{ `address`: `string` ; `mnemonic`: `string` ; `privateKey`: `Buffer` ; `publicKey`: `Buffer`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |

#### Returns

`Promise`<{ `address`: `string` ; `mnemonic`: `string` ; `privateKey`: `Buffer` ; `publicKey`: `Buffer`  }\>

#### Defined in

[node-key.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-097/source/node-key.ts#L24)
