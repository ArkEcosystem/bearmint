@bearmint/bep-042 - v0.0.0

# @bearmint/bep-042 - v0.0.0

## Table of contents

### Functions

- [makeAddress](README.md#makeaddress)
- [makeAddressFactory](README.md#makeaddressfactory)
- [makeServiceProvider](README.md#makeserviceprovider)

## Functions

### makeAddress

▸ **makeAddress**(`prefix`, `decoded`): `Address`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `decoded` | `Bech32DecodedWithArray` |

#### Returns

`Address`

#### Defined in

[factory.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-042/source/factory.ts#L32)

___

### makeAddressFactory

▸ **makeAddressFactory**(`keyPairFactory`, `prefix`): `AddressFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPairFactory` | `KeyPairFactory` |
| `prefix` | `string` |

#### Returns

`AddressFactory`

#### Defined in

[factory.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-042/source/factory.ts#L48)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-042/source/service-provider.ts#L24)
