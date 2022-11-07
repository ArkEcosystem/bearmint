@bearmint/bep-033 - v0.0.0

# @bearmint/bep-033 - v0.0.0

## Table of contents

### Functions

- [makeKeyPair](README.md#makekeypair)
- [makeKeyPairFactory](README.md#makekeypairfactory)
- [makePrivateKey](README.md#makeprivatekey)
- [makePrivateKeyFactory](README.md#makeprivatekeyfactory)
- [makePublicKey](README.md#makepublickey)
- [makePublicKeyFactory](README.md#makepublickeyfactory)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeSignature](README.md#makesignature)
- [makeSignatureFactory](README.md#makesignaturefactory)

## Functions

### makeKeyPair

▸ **makeKeyPair**(`privateKey`, `publicKey`): `KeyPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |
| `publicKey` | `Uint8Array` |

#### Returns

`KeyPair`

#### Defined in

[keypair.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/keypair.ts#L31)

___

### makeKeyPairFactory

▸ **makeKeyPairFactory**(): `KeyPairFactory`

#### Returns

`KeyPairFactory`

#### Defined in

[keypair.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/keypair.ts#L42)

___

### makePrivateKey

▸ **makePrivateKey**(`bytes`): `PrivateKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`PrivateKey`

#### Defined in

[keypair.ts:56](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/keypair.ts#L56)

___

### makePrivateKeyFactory

▸ **makePrivateKeyFactory**(): `PrivateKeyFactory`

#### Returns

`PrivateKeyFactory`

#### Defined in

[keypair.ts:70](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/keypair.ts#L70)

___

### makePublicKey

▸ **makePublicKey**(`bytes`): `PublicKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`PublicKey`

#### Defined in

[keypair.ts:81](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/keypair.ts#L81)

___

### makePublicKeyFactory

▸ **makePublicKeyFactory**(): `PublicKeyFactory`

#### Returns

`PublicKeyFactory`

#### Defined in

[keypair.ts:101](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/keypair.ts#L101)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/service-provider.ts#L24)

___

### makeSignature

▸ **makeSignature**(`hash`, `publicKey`, `signature`): `Signature`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Uint8Array` |
| `publicKey` | `Uint8Array` |
| `signature` | `Uint8Array` |

#### Returns

`Signature`

#### Defined in

[sig.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/sig.ts#L22)

___

### makeSignatureFactory

▸ **makeSignatureFactory**(): `SignatureFactory`

#### Returns

`SignatureFactory`

#### Defined in

[sig.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-033/source/sig.ts#L48)
