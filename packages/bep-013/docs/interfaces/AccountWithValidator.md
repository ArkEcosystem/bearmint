[@bearmint/bep-013 - v0.0.0](../README.md) / AccountWithValidator

# Interface: AccountWithValidator

## Hierarchy

- [`AccountWithMoniker`](AccountWithMoniker.md)

  ↳ **`AccountWithValidator`**

## Table of contents

### Properties

- [address](AccountWithValidator.md#address)
- [balances](AccountWithValidator.md#balances)
- [lockedBalances](AccountWithValidator.md#lockedbalances)
- [metadata](AccountWithValidator.md#metadata)
- [moniker](AccountWithValidator.md#moniker)
- [nonce](AccountWithValidator.md#nonce)
- [publicKey](AccountWithValidator.md#publickey)
- [stakes](AccountWithValidator.md#stakes)
- [validator](AccountWithValidator.md#validator)

## Properties

### address

• **address**: `string`

#### Inherited from

[AccountWithMoniker](AccountWithMoniker.md).[address](AccountWithMoniker.md#address)

#### Defined in

[packages/bep-013/source/account.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L38)

___

### balances

• **balances**: `Record`<`string`, `bigint`\>

#### Inherited from

[AccountWithMoniker](AccountWithMoniker.md).[balances](AccountWithMoniker.md#balances)

#### Defined in

[packages/bep-013/source/account.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L39)

___

### lockedBalances

• **lockedBalances**: `Record`<`string`, `bigint`\>

#### Inherited from

[AccountWithMoniker](AccountWithMoniker.md).[lockedBalances](AccountWithMoniker.md#lockedbalances)

#### Defined in

[packages/bep-013/source/account.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L40)

___

### metadata

• **metadata**: `Record`<`string`, `any`\>

#### Inherited from

[AccountWithMoniker](AccountWithMoniker.md).[metadata](AccountWithMoniker.md#metadata)

#### Defined in

[packages/bep-013/source/account.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L41)

___

### moniker

• **moniker**: `string`

#### Inherited from

[AccountWithMoniker](AccountWithMoniker.md).[moniker](AccountWithMoniker.md#moniker)

#### Defined in

[packages/bep-013/source/account.ts:54](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L54)

___

### nonce

• **nonce**: `bigint`

#### Inherited from

[AccountWithMoniker](AccountWithMoniker.md).[nonce](AccountWithMoniker.md#nonce)

#### Defined in

[packages/bep-013/source/account.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L43)

___

### publicKey

• **publicKey**: `string`

#### Inherited from

[AccountWithMoniker](AccountWithMoniker.md).[publicKey](AccountWithMoniker.md#publickey)

#### Defined in

[packages/bep-013/source/account.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L50)

___

### stakes

• **stakes**: [`AccountStakes`](../README.md#accountstakes)

#### Inherited from

[AccountWithMoniker](AccountWithMoniker.md).[stakes](AccountWithMoniker.md#stakes)

#### Defined in

[packages/bep-013/source/account.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L45)

___

### validator

• **validator**: [`AccountValidatorProperties`](AccountValidatorProperties.md)

#### Overrides

[AccountWithMoniker](AccountWithMoniker.md).[validator](AccountWithMoniker.md#validator)

#### Defined in

[packages/bep-013/source/account.ts:58](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L58)
