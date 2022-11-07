[@bearmint/bep-013 - v0.0.0](../README.md) / PublicKeyFactory

# Interface: PublicKeyFactory

## Table of contents

### Methods

- [fromBytes](PublicKeyFactory.md#frombytes)
- [fromString](PublicKeyFactory.md#fromstring)

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): `Promise`<[`PublicKey`](PublicKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`PublicKey`](PublicKey.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L39)

___

### fromString

▸ **fromString**(`publicKey`): `Promise`<[`PublicKey`](PublicKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`Promise`<[`PublicKey`](PublicKey.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L40)
