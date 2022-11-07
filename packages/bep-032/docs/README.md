@bearmint/bep-032 - v0.0.0

# @bearmint/bep-032 - v0.0.0

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

[keypair.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/keypair.ts#L36)

___

### makeKeyPairFactory

▸ **makeKeyPairFactory**(): `KeyPairFactory`

#### Returns

`KeyPairFactory`

#### Defined in

[keypair.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/keypair.ts#L47)

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

[keypair.ts:61](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/keypair.ts#L61)

___

### makePrivateKeyFactory

▸ **makePrivateKeyFactory**(): `PrivateKeyFactory`

#### Returns

`PrivateKeyFactory`

#### Defined in

[keypair.ts:75](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/keypair.ts#L75)

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

[keypair.ts:86](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/keypair.ts#L86)

___

### makePublicKeyFactory

▸ **makePublicKeyFactory**(): `PublicKeyFactory`

#### Returns

`PublicKeyFactory`

#### Defined in

[keypair.ts:106](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/keypair.ts#L106)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/service-provider.ts#L24)

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

[sig.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/sig.ts#L22)

___

### makeSignatureFactory

▸ **makeSignatureFactory**(): `SignatureFactory`

#### Returns

`SignatureFactory`

#### Defined in

[sig.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-032/source/sig.ts#L40)
