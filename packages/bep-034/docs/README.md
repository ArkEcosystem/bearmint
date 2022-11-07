@bearmint/bep-034 - v0.0.0

# @bearmint/bep-034 - v0.0.0

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

[keypair.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/keypair.ts#L30)

___

### makeKeyPairFactory

▸ **makeKeyPairFactory**(): `KeyPairFactory`

#### Returns

`KeyPairFactory`

#### Defined in

[keypair.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/keypair.ts#L41)

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

[keypair.ts:55](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/keypair.ts#L55)

___

### makePrivateKeyFactory

▸ **makePrivateKeyFactory**(): `PrivateKeyFactory`

#### Returns

`PrivateKeyFactory`

#### Defined in

[keypair.ts:69](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/keypair.ts#L69)

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

[keypair.ts:80](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/keypair.ts#L80)

___

### makePublicKeyFactory

▸ **makePublicKeyFactory**(): `PublicKeyFactory`

#### Returns

`PublicKeyFactory`

#### Defined in

[keypair.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/keypair.ts#L94)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/service-provider.ts#L24)

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

[sig.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/sig.ts#L22)

___

### makeSignatureFactory

▸ **makeSignatureFactory**(): `SignatureFactory`

#### Returns

`SignatureFactory`

#### Defined in

[sig.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-034/source/sig.ts#L46)
