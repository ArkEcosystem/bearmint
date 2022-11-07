[@bearmint/bep-013 - v0.0.0](../README.md) / AddressFactory

# Interface: AddressFactory

## Table of contents

### Methods

- [fromBytes](AddressFactory.md#frombytes)
- [fromMnemonic](AddressFactory.md#frommnemonic)
- [fromPrivateKey](AddressFactory.md#fromprivatekey)
- [fromPublicKey](AddressFactory.md#frompublickey)
- [fromString](AddressFactory.md#fromstring)

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): `Promise`<[`Address`](Address.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`<[`Address`](Address.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L25)

___

### fromMnemonic

▸ **fromMnemonic**(`mnemonic`): `Promise`<[`Address`](Address.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`Promise`<[`Address`](Address.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L26)

___

### fromPrivateKey

▸ **fromPrivateKey**(`privateKey`): `Promise`<[`Address`](Address.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`PrivateKey`](PrivateKey.md) |

#### Returns

`Promise`<[`Address`](Address.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L27)

___

### fromPublicKey

▸ **fromPublicKey**(`publicKey`): `Promise`<[`Address`](Address.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKey`](PublicKey.md) |

#### Returns

`Promise`<[`Address`](Address.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L28)

___

### fromString

▸ **fromString**(`address`): `Promise`<[`Address`](Address.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`Address`](Address.md)\>

#### Defined in

[packages/bep-013/source/crypto.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/crypto.ts#L29)
