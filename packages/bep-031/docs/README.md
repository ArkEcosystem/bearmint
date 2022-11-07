@bearmint/bep-031 - v0.0.0

# @bearmint/bep-031 - v0.0.0

## Table of contents

### Functions

- [benchKeyPair](README.md#benchkeypair)
- [createKeypairSuite](README.md#createkeypairsuite)
- [createSignatureSuite](README.md#createsignaturesuite)

## Functions

### benchKeyPair

▸ **benchKeyPair**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.beforeAll?` | `CallableFunction` |
| `args.makeKeyPairFactory` | `FunctionReturning`<`KeyPairFactory`\> |
| `args.makePrivateKeyFactory` | `FunctionReturning`<`PrivateKeyFactory`\> |
| `args.makePublicKeyFactory` | `FunctionReturning`<`PublicKeyFactory`\> |
| `args.makeSignatureFactory` | `FunctionReturning`<`SignatureFactory`\> |
| `args.privateKey` | `string` |
| `args.publicKey` | `string` |
| `args.signatureFail` | `string` |
| `args.signaturePass` | `string` |
| `args.title` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[benchmark.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-031/source/benchmark.ts#L27)

___

### createKeypairSuite

▸ **createKeypairSuite**(`__namedParameters`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters` | `Object` |
| `__namedParameters.callback?` | `CallableFunction` |
| `__namedParameters.keypair` | `Object` |
| `__namedParameters.keypair.privateKey` | `string` |
| `__namedParameters.keypair.publicKey` | `string` |
| `__namedParameters.keypair.secretKey?` | `string` |
| `__namedParameters.subject` | `Object` |
| `__namedParameters.subject.makeKeyPairFactory` | `FunctionReturning`<`KeyPairFactory`\> |
| `__namedParameters.subject.makePrivateKey` | `FunctionReturning`<`PrivateKey`\> |
| `__namedParameters.subject.makePrivateKeyFactory` | `FunctionReturning`<`PrivateKeyFactory`\> |
| `__namedParameters.subject.makePublicKey` | `FunctionReturning`<`PublicKey`\> |
| `__namedParameters.subject.makePublicKeyFactory` | `FunctionReturning`<`PublicKeyFactory`\> |
| `__namedParameters.title` | `string` |

#### Returns

`void`

#### Defined in

[unit/keypair.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-031/source/unit/keypair.ts#L30)

___

### createSignatureSuite

▸ **createSignatureSuite**(`__namedParameters`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters` | `Object` |
| `__namedParameters.callback?` | `CallableFunction` |
| `__namedParameters.keypair` | `Object` |
| `__namedParameters.keypair.privateKey` | `string` |
| `__namedParameters.keypair.publicKey` | `string` |
| `__namedParameters.subject` | `Object` |
| `__namedParameters.subject.makeKeyPair` | `FunctionReturning`<`KeyPair`\> |
| `__namedParameters.subject.makeSignatureFactory` | `FunctionReturning`<`SignatureFactory`\> |
| `__namedParameters.title` | `string` |

#### Returns

`void`

#### Defined in

[unit/sig.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-031/source/unit/sig.ts#L24)
