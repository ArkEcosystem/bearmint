@bearmint/bep-020 - v0.0.0

# @bearmint/bep-020 - v0.0.0

## Table of contents

### Variables

- [STORE\_ACCOUNT](README.md#store_account)
- [STORE\_ACCOUNT\_MONIKER](README.md#store_account_moniker)
- [STORE\_ACCOUNT\_PUBLIC\_KEY](README.md#store_account_public_key)
- [STORE\_ACCOUNT\_VALIDATOR\_ADDRESS](README.md#store_account_validator_address)
- [STORE\_MILESTONE](README.md#store_milestone)
- [STORE\_TX](README.md#store_tx)
- [STORE\_TX\_RECEIPT](README.md#store_tx_receipt)
- [STORE\_WORLD](README.md#store_world)
- [TK\_COMMITTED\_BLOCK](README.md#tk_committed_block)
- [TK\_MILESTONE](README.md#tk_milestone)

### Functions

- [makeMultiStore](README.md#makemultistore)
- [makeMultiStoreFactory](README.md#makemultistorefactory)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeState](README.md#makestate)

## Variables

### STORE\_ACCOUNT

• `Const` **STORE\_ACCOUNT**: ``"@bearmint/bep-020/account"``

#### Defined in

[constants.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/constants.ts#L18)

___

### STORE\_ACCOUNT\_MONIKER

• `Const` **STORE\_ACCOUNT\_MONIKER**: ``"@bearmint/bep-020/account_moniker"``

#### Defined in

[constants.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/constants.ts#L19)

___

### STORE\_ACCOUNT\_PUBLIC\_KEY

• `Const` **STORE\_ACCOUNT\_PUBLIC\_KEY**: ``"@bearmint/bep-020/account_public_key"``

#### Defined in

[constants.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/constants.ts#L20)

___

### STORE\_ACCOUNT\_VALIDATOR\_ADDRESS

• `Const` **STORE\_ACCOUNT\_VALIDATOR\_ADDRESS**: ``"@bearmint/bep-020/account_validator_address"``

#### Defined in

[constants.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/constants.ts#L21)

___

### STORE\_MILESTONE

• `Const` **STORE\_MILESTONE**: ``"@bearmint/bep-020/milestone"``

#### Defined in

[constants.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/constants.ts#L22)

___

### STORE\_TX

• `Const` **STORE\_TX**: ``"@bearmint/bep-020/tx"``

#### Defined in

[constants.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/constants.ts#L23)

___

### STORE\_TX\_RECEIPT

• `Const` **STORE\_TX\_RECEIPT**: ``"@bearmint/bep-020/tx_receipt"``

#### Defined in

[constants.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/constants.ts#L24)

___

### STORE\_WORLD

• `Const` **STORE\_WORLD**: ``"@bearmint/bep-020/world"``

#### Defined in

[constants.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/constants.ts#L25)

___

### TK\_COMMITTED\_BLOCK

• `Const` **TK\_COMMITTED\_BLOCK**: ``"@bearmint/bep-089/committed_block"``

#### Defined in

[types.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/types.ts#L19)

___

### TK\_MILESTONE

• `Const` **TK\_MILESTONE**: ``"@bearmint/bep-021/milestone"``

#### Defined in

[types.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/types.ts#L22)

## Functions

### makeMultiStore

▸ **makeMultiStore**(`cradle`): `MultiStore`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`MultiStore`

#### Defined in

[multi-store.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/multi-store.ts#L25)

___

### makeMultiStoreFactory

▸ **makeMultiStoreFactory**(`cradle`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `make` | () => `MultiStore` |

#### Defined in

[multi-store.ts:101](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/multi-store.ts#L101)

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

[service-provider.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/service-provider.ts#L37)

___

### makeState

▸ **makeState**(`accountRepositoryFactory`, `multiStore`): `Promise`<`StateStore`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountRepositoryFactory` | `AccountRepositoryFactory` |
| `multiStore` | `MultiStore` |

#### Returns

`Promise`<`StateStore`\>

#### Defined in

[state-store.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-020/source/state-store.ts#L44)
