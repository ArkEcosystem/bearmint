@bearmint/bep-093 - v0.0.0

# @bearmint/bep-093 - v0.0.0

## Table of contents

### Functions

- [makeServer](README.md#makeserver)

## Functions

### makeServer

▸ **makeServer**(`host`, `port`, `concrete`): `Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `concrete` | `Object` |
| `concrete.addressFactory` | `AddressFactory` |
| `concrete.keyPairFactory` | `KeyPairFactory` |
| `concrete.privateKeyFactory` | `PrivateKeyFactory` |
| `concrete.publicKeyFactory` | `PublicKeyFactory` |
| `concrete.signatureFactory` | `SignatureFactory` |

#### Returns

`Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Defined in

[server/index.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-093/source/server/index.ts#L37)
