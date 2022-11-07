[@bearmint/bep-013 - v0.0.0](../README.md) / AccountWithMoniker

# Interface: AccountWithMoniker

## Hierarchy

- [`AccountWithPublicKey`](AccountWithPublicKey.md)

  ↳ **`AccountWithMoniker`**

  ↳↳ [`AccountWithValidator`](AccountWithValidator.md)

## Table of contents

### Properties

- [address](AccountWithMoniker.md#address)
- [balances](AccountWithMoniker.md#balances)
- [lockedBalances](AccountWithMoniker.md#lockedbalances)
- [metadata](AccountWithMoniker.md#metadata)
- [moniker](AccountWithMoniker.md#moniker)
- [nonce](AccountWithMoniker.md#nonce)
- [publicKey](AccountWithMoniker.md#publickey)
- [stakes](AccountWithMoniker.md#stakes)
- [validator](AccountWithMoniker.md#validator)

## Properties

### address

• **address**: `string`

#### Inherited from

[AccountWithPublicKey](AccountWithPublicKey.md).[address](AccountWithPublicKey.md#address)

#### Defined in

[packages/bep-013/source/account.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L38)

___

### balances

• **balances**: `Record`<`string`, `bigint`\>

#### Inherited from

[AccountWithPublicKey](AccountWithPublicKey.md).[balances](AccountWithPublicKey.md#balances)

#### Defined in

[packages/bep-013/source/account.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L39)

___

### lockedBalances

• **lockedBalances**: `Record`<`string`, `bigint`\>

#### Inherited from

[AccountWithPublicKey](AccountWithPublicKey.md).[lockedBalances](AccountWithPublicKey.md#lockedbalances)

#### Defined in

[packages/bep-013/source/account.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L40)

___

### metadata

• **metadata**: `Record`<`string`, `any`\>

#### Inherited from

[AccountWithPublicKey](AccountWithPublicKey.md).[metadata](AccountWithPublicKey.md#metadata)

#### Defined in

[packages/bep-013/source/account.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L41)

___

### moniker

• **moniker**: `string`

#### Overrides

[AccountWithPublicKey](AccountWithPublicKey.md).[moniker](AccountWithPublicKey.md#moniker)

#### Defined in

[packages/bep-013/source/account.ts:54](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L54)

___

### nonce

• **nonce**: `bigint`

#### Inherited from

[AccountWithPublicKey](AccountWithPublicKey.md).[nonce](AccountWithPublicKey.md#nonce)

#### Defined in

[packages/bep-013/source/account.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L43)

___

### publicKey

• **publicKey**: `string`

#### Inherited from

[AccountWithPublicKey](AccountWithPublicKey.md).[publicKey](AccountWithPublicKey.md#publickey)

#### Defined in

[packages/bep-013/source/account.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L50)

___

### stakes

• **stakes**: [`AccountStakes`](../README.md#accountstakes)

#### Inherited from

[AccountWithPublicKey](AccountWithPublicKey.md).[stakes](AccountWithPublicKey.md#stakes)

#### Defined in

[packages/bep-013/source/account.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L45)

___

### validator

• `Optional` **validator**: [`AccountValidatorProperties`](AccountValidatorProperties.md)

#### Inherited from

[AccountWithPublicKey](AccountWithPublicKey.md).[validator](AccountWithPublicKey.md#validator)

#### Defined in

[packages/bep-013/source/account.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L46)
