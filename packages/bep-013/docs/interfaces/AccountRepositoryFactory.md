[@bearmint/bep-013 - v0.0.0](../README.md) / AccountRepositoryFactory

# Interface: AccountRepositoryFactory

## Table of contents

### Methods

- [make](AccountRepositoryFactory.md#make)

## Methods

### make

▸ **make**(`tries`): [`AccountRepository`](AccountRepository.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tries` | `Object` |
| `tries.account` | [`KVStore`](KVStore.md) |
| `tries.accountMoniker` | [`KVStore`](KVStore.md) |
| `tries.accountPublicKey` | [`KVStore`](KVStore.md) |
| `tries.accountValidatorAddress` | [`KVStore`](KVStore.md) |

#### Returns

[`AccountRepository`](AccountRepository.md)

#### Defined in

[packages/bep-013/source/state.ts:70](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L70)
