[@bearmint/bep-013 - v0.0.0](../README.md) / Account

# Interface: Account<Metadata\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Metadata` | `Record`<`string`, `any`\> |

## Hierarchy

- **`Account`**

  ↳ [`AccountWithPublicKey`](AccountWithPublicKey.md)

## Table of contents

### Properties

- [address](Account.md#address)
- [balances](Account.md#balances)
- [lockedBalances](Account.md#lockedbalances)
- [metadata](Account.md#metadata)
- [moniker](Account.md#moniker)
- [nonce](Account.md#nonce)
- [publicKey](Account.md#publickey)
- [stakes](Account.md#stakes)
- [validator](Account.md#validator)

## Properties

### address

• **address**: `string`

#### Defined in

[packages/bep-013/source/account.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L38)

___

### balances

• **balances**: `Record`<`string`, `bigint`\>

#### Defined in

[packages/bep-013/source/account.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L39)

___

### lockedBalances

• **lockedBalances**: `Record`<`string`, `bigint`\>

#### Defined in

[packages/bep-013/source/account.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L40)

___

### metadata

• **metadata**: `Metadata`

#### Defined in

[packages/bep-013/source/account.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L41)

___

### moniker

• `Optional` **moniker**: `string`

#### Defined in

[packages/bep-013/source/account.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L42)

___

### nonce

• **nonce**: `bigint`

#### Defined in

[packages/bep-013/source/account.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L43)

___

### publicKey

• `Optional` **publicKey**: `string`

#### Defined in

[packages/bep-013/source/account.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L44)

___

### stakes

• **stakes**: [`AccountStakes`](../README.md#accountstakes)

#### Defined in

[packages/bep-013/source/account.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L45)

___

### validator

• `Optional` **validator**: [`AccountValidatorProperties`](AccountValidatorProperties.md)

#### Defined in

[packages/bep-013/source/account.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L46)
