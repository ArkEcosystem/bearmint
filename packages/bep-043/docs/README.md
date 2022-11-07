@bearmint/bep-043 - v0.0.0

# @bearmint/bep-043 - v0.0.0

## Table of contents

### Functions

- [makeAddress](README.md#makeaddress)
- [makeAddressFactory](README.md#makeaddressfactory)
- [makeServiceProvider](README.md#makeserviceprovider)

## Functions

### makeAddress

▸ **makeAddress**(`bytes`): `Address`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Address`

#### Defined in

[factory.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-043/source/factory.ts#L28)

___

### makeAddressFactory

▸ **makeAddressFactory**(`keyPairFactory`): `AddressFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPairFactory` | `KeyPairFactory` |

#### Returns

`AddressFactory`

#### Defined in

[factory.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-043/source/factory.ts#L44)

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

[service-provider.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-043/source/service-provider.ts#L23)
