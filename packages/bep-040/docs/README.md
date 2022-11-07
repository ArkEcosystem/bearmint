@bearmint/bep-040 - v0.0.0

# @bearmint/bep-040 - v0.0.0

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

[factory.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-040/source/factory.ts#L32)

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

[factory.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-040/source/factory.ts#L46)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-040/source/service-provider.ts#L24)
