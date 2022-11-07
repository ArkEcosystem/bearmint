[@bearmint/bep-013 - v0.0.0](../README.md) / KeyPairFactory

# Interface: KeyPairFactory

## Table of contents

### Methods

- [fromMnemonic](KeyPairFactory.md#frommnemonic)
- [fromPrivateKey](KeyPairFactory.md#fromprivatekey)

## Methods

### fromMnemonic

▸ **fromMnemonic**(`mnemonic`): `Promise`<[`KeyPair`](KeyPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`Promise`<[`KeyPair`](KeyPair.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:60](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L60)

___

### fromPrivateKey

▸ **fromPrivateKey**(`privateKey`): `Promise`<[`KeyPair`](KeyPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |

#### Returns

`Promise`<[`KeyPair`](KeyPair.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:61](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L61)
