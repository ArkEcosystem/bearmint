[@bearmint/bep-053 - v0.0.0](../README.md) / [E2E](../modules/E2E.md) / Account

# Interface: Account

[E2E](../modules/E2E.md).Account

## Table of contents

### Properties

- [address](E2E.Account.md#address)
- [fetchByAddress](E2E.Account.md#fetchbyaddress)
- [getBalance](E2E.Account.md#getbalance)
- [getPendingLockedBalance](E2E.Account.md#getpendinglockedbalance)
- [keypair](E2E.Account.md#keypair)
- [mnemonic](E2E.Account.md#mnemonic)

## Properties

### address

• **address**: `string`

#### Defined in

[bep-053/source/e2e/account.ts:257](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L257)

___

### fetchByAddress

• **fetchByAddress**: () => `Promise`<`object`\>

#### Type declaration

▸ (): `Promise`<`object`\>

##### Returns

`Promise`<`object`\>

#### Defined in

[bep-053/source/e2e/account.ts:258](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L258)

___

### getBalance

• **getBalance**: (`denomination?`: `string`) => `Promise`<`bigint`\>

#### Type declaration

▸ (`denomination?`): `Promise`<`bigint`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `denomination?` | `string` |

##### Returns

`Promise`<`bigint`\>

#### Defined in

[bep-053/source/e2e/account.ts:259](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L259)

___

### getPendingLockedBalance

• **getPendingLockedBalance**: (`denomination?`: `string`) => `Promise`<`bigint`\>

#### Type declaration

▸ (`denomination?`): `Promise`<`bigint`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `denomination?` | `string` |

##### Returns

`Promise`<`bigint`\>

#### Defined in

[bep-053/source/e2e/account.ts:260](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L260)

___

### keypair

• **keypair**: `KeyPair`

#### Defined in

[bep-053/source/e2e/account.ts:261](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L261)

___

### mnemonic

• **mnemonic**: `string`

#### Defined in

[bep-053/source/e2e/account.ts:262](https://github.com/bearmint/bearmint/blob/main/packages/bep-053/source/e2e/account.ts#L262)
