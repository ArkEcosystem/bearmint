@bearmint/bep-089 - v0.0.0

# @bearmint/bep-089 - v0.0.0

## Table of contents

### Functions

- [deriveEd25519Address](README.md#deriveed25519address)
- [deriveSecp256k1Address](README.md#derivesecp256k1address)
- [deriveSr25519Address](README.md#derivesr25519address)
- [makeServiceProvider](README.md#makeserviceprovider)

## Functions

### deriveEd25519Address

▸ **deriveEd25519Address**(`publicKey`): `Uint8Array`

**`See`**

https://github.com/tendermint/tendermint/blob/master/crypto/ed25519/ed25519.go#L160-L166

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[address.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-089/source/address.ts#L23)

___

### deriveSecp256k1Address

▸ **deriveSecp256k1Address**(`publicKey`): `Uint8Array`

**`See`**

https://github.com/tendermint/tendermint/blob/master/crypto/secp256k1/secp256k1.go#L148-L161

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[address.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-089/source/address.ts#L30)

___

### deriveSr25519Address

▸ **deriveSr25519Address**(`publicKey`): `Uint8Array`

**`See`**

https://github.com/tendermint/tendermint/blob/master/crypto/sr25519/pubkey.go#L28-L34

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[address.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-089/source/address.ts#L37)

___

### makeServiceProvider

▸ **makeServiceProvider**(`cradle`): `ServiceProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`ServiceProvider`

#### Defined in

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-089/source/service-provider.ts#L24)
