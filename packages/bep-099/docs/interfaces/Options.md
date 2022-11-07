[@bearmint/bep-099 - v0.0.0](../README.md) / Options

# Interface: Options

## Table of contents

### Properties

- [cryptography](Options.md#cryptography)
- [rails](Options.md#rails)

## Properties

### cryptography

• **cryptography**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | { `addressFactory`: `AddressFactory` ; `keyPairFactory`: `KeyPairFactory` ; `privateKeyFactory`: `PrivateKeyFactory` ; `publicKeyFactory`: `PublicKeyFactory` ; `signatureFactory`: `SignatureFactory`  } |
| `account.addressFactory` | `AddressFactory` |
| `account.keyPairFactory` | `KeyPairFactory` |
| `account.privateKeyFactory` | `PrivateKeyFactory` |
| `account.publicKeyFactory` | `PublicKeyFactory` |
| `account.signatureFactory` | `SignatureFactory` |
| `validator` | { `keyPairFactory`: `KeyPairFactory` ; `signatureFactory`: `SignatureFactory`  } |
| `validator.keyPairFactory` | `KeyPairFactory` |
| `validator.signatureFactory` | `SignatureFactory` |

#### Defined in

[types.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/types.ts#L38)

___

### rails

• `Optional` **rails**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host` | `string` |

#### Defined in

[types.ts:51](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/types.ts#L51)
