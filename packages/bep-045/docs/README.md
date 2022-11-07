@bearmint/bep-045 - v0.0.0

# @bearmint/bep-045 - v0.0.0

## Table of contents

### Functions

- [makeAddress](README.md#makeaddress)
- [makeAddressFactory](README.md#makeaddressfactory)
- [makeServiceProvider](README.md#makeserviceprovider)

## Functions

### makeAddress

▸ **makeAddress**(`prefix`, `bytes`): `Address`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `number` |
| `bytes` | `Uint8Array` |

#### Returns

`Address`

#### Defined in

[factory.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-045/source/factory.ts#L32)

___

### makeAddressFactory

▸ **makeAddressFactory**(`keyPairFactory`, `prefix`): `AddressFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPairFactory` | `KeyPairFactory` |
| `prefix` | `number` |

#### Returns

`AddressFactory`

#### Defined in

[factory.ts:52](https://github.com/bearmint/bearmint/blob/main/packages/bep-045/source/factory.ts#L52)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-045/source/service-provider.ts#L24)
