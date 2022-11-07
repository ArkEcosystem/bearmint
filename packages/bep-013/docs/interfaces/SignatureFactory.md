[@bearmint/bep-013 - v0.0.0](../README.md) / SignatureFactory

# Interface: SignatureFactory

## Table of contents

### Methods

- [from](SignatureFactory.md#from)
- [sign](SignatureFactory.md#sign)

## Methods

### from

▸ **from**(`hash`, `publicKey`, `signature`): `Promise`<[`Signature`](Signature.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Uint8Array` |
| `publicKey` | `Uint8Array` |
| `signature` | `Uint8Array` |

#### Returns

`Promise`<[`Signature`](Signature.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:71](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L71)

___

### sign

▸ **sign**(`hash`, `keyPair`): `Promise`<[`Signature`](Signature.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Uint8Array` |
| `keyPair` | [`KeyPair`](KeyPair.md) |

#### Returns

`Promise`<[`Signature`](Signature.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:72](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L72)
