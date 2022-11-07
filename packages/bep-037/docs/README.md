@bearmint/bep-037 - v0.0.0

# @bearmint/bep-037 - v0.0.0

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

[keypair.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/keypair.ts#L31)

___

### makeKeyPairFactory

▸ **makeKeyPairFactory**(): `KeyPairFactory`

#### Returns

`KeyPairFactory`

#### Defined in

[keypair.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/keypair.ts#L42)

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

[keypair.ts:57](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/keypair.ts#L57)

___

### makePrivateKeyFactory

▸ **makePrivateKeyFactory**(): `PrivateKeyFactory`

#### Returns

`PrivateKeyFactory`

#### Defined in

[keypair.ts:71](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/keypair.ts#L71)

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

[keypair.ts:82](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/keypair.ts#L82)

___

### makePublicKeyFactory

▸ **makePublicKeyFactory**(): `PublicKeyFactory`

#### Returns

`PublicKeyFactory`

#### Defined in

[keypair.ts:96](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/keypair.ts#L96)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/service-provider.ts#L24)

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

[sig.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/sig.ts#L22)

___

### makeSignatureFactory

▸ **makeSignatureFactory**(): `SignatureFactory`

#### Returns

`SignatureFactory`

#### Defined in

[sig.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-037/source/sig.ts#L46)
