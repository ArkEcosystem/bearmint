[@bearmint/bep-013 - v0.0.0](../README.md) / AccountWithPublicKey

# Interface: AccountWithPublicKey

## Hierarchy

- [`Account`](Account.md)

  ↳ **`AccountWithPublicKey`**

  ↳↳ [`AccountWithMoniker`](AccountWithMoniker.md)

## Table of contents

### Properties

- [address](AccountWithPublicKey.md#address)
- [balances](AccountWithPublicKey.md#balances)
- [lockedBalances](AccountWithPublicKey.md#lockedbalances)
- [metadata](AccountWithPublicKey.md#metadata)
- [moniker](AccountWithPublicKey.md#moniker)
- [nonce](AccountWithPublicKey.md#nonce)
- [publicKey](AccountWithPublicKey.md#publickey)
- [stakes](AccountWithPublicKey.md#stakes)
- [validator](AccountWithPublicKey.md#validator)

## Properties

### address

• **address**: `string`

#### Inherited from

[Account](Account.md).[address](Account.md#address)

#### Defined in

[packages/bep-013/source/account.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L38)

___

### balances

• **balances**: `Record`<`string`, `bigint`\>

#### Inherited from

[Account](Account.md).[balances](Account.md#balances)

#### Defined in

[packages/bep-013/source/account.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L39)

___

### lockedBalances

• **lockedBalances**: `Record`<`string`, `bigint`\>

#### Inherited from

[Account](Account.md).[lockedBalances](Account.md#lockedbalances)

#### Defined in

[packages/bep-013/source/account.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L40)

___

### metadata

• **metadata**: `Record`<`string`, `any`\>

#### Inherited from

[Account](Account.md).[metadata](Account.md#metadata)

#### Defined in

[packages/bep-013/source/account.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L41)

___

### moniker

• `Optional` **moniker**: `string`

#### Inherited from

[Account](Account.md).[moniker](Account.md#moniker)

#### Defined in

[packages/bep-013/source/account.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L42)

___

### nonce

• **nonce**: `bigint`

#### Inherited from

[Account](Account.md).[nonce](Account.md#nonce)

#### Defined in

[packages/bep-013/source/account.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L43)

___

### publicKey

• **publicKey**: `string`

#### Overrides

[Account](Account.md).[publicKey](Account.md#publickey)

#### Defined in

[packages/bep-013/source/account.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L50)

___

### stakes

• **stakes**: [`AccountStakes`](../README.md#accountstakes)

#### Inherited from

[Account](Account.md).[stakes](Account.md#stakes)

#### Defined in

[packages/bep-013/source/account.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L45)

___

### validator

• `Optional` **validator**: [`AccountValidatorProperties`](AccountValidatorProperties.md)

#### Inherited from

[Account](Account.md).[validator](Account.md#validator)

#### Defined in

[packages/bep-013/source/account.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L46)
