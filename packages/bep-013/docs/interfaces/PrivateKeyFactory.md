[@bearmint/bep-013 - v0.0.0](../README.md) / PrivateKeyFactory

# Interface: PrivateKeyFactory

## Table of contents

### Methods

- [fromBytes](PrivateKeyFactory.md#frombytes)
- [fromString](PrivateKeyFactory.md#fromstring)

## Methods

### fromBytes

▸ **fromBytes**(`privateKey`): `Promise`<[`PrivateKey`](PrivateKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |

#### Returns

`Promise`<[`PrivateKey`](PrivateKey.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L50)

___

### fromString

▸ **fromString**(`privateKey`): `Promise`<[`PrivateKey`](PrivateKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Returns

`Promise`<[`PrivateKey`](PrivateKey.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:51](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L51)
