[@bearmint/bep-013 - v0.0.0](../README.md) / AccountRepository

# Interface: AccountRepository

## Table of contents

### Methods

- [allMonikers](AccountRepository.md#allmonikers)
- [allValidatorAddresses](AccountRepository.md#allvalidatoraddresses)
- [findByAddress](AccountRepository.md#findbyaddress)
- [findByMoniker](AccountRepository.md#findbymoniker)
- [findByPublicKey](AccountRepository.md#findbypublickey)
- [findByValidatorAddress](AccountRepository.md#findbyvalidatoraddress)
- [forgetByAddress](AccountRepository.md#forgetbyaddress)
- [forgetByMoniker](AccountRepository.md#forgetbymoniker)
- [forgetByPublicKey](AccountRepository.md#forgetbypublickey)
- [forgetByValidatorAddress](AccountRepository.md#forgetbyvalidatoraddress)
- [hasByAddress](AccountRepository.md#hasbyaddress)
- [hasByMonkiker](AccountRepository.md#hasbymonkiker)
- [hasByPublicKey](AccountRepository.md#hasbypublickey)
- [hasByValidatorAddress](AccountRepository.md#hasbyvalidatoraddress)
- [index](AccountRepository.md#index)

## Methods

### allMonikers

▸ **allMonikers**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/bep-013/source/account.ts:62](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L62)

___

### allValidatorAddresses

▸ **allValidatorAddresses**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/bep-013/source/account.ts:63](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L63)

___

### findByAddress

▸ **findByAddress**(`address`): `Promise`<[`Account`](Account.md)<`Record`<`string`, `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`Account`](Account.md)<`Record`<`string`, `any`\>\>\>

#### Defined in

[packages/bep-013/source/account.ts:65](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L65)

___

### findByMoniker

▸ **findByMoniker**<`T`\>(`moniker`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`AccountWithMoniker`](AccountWithMoniker.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `moniker` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/bep-013/source/account.ts:66](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L66)

___

### findByPublicKey

▸ **findByPublicKey**(`publicKey`): `Promise`<[`AccountWithPublicKey`](AccountWithPublicKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`Promise`<[`AccountWithPublicKey`](AccountWithPublicKey.md)\>

#### Defined in

[packages/bep-013/source/account.ts:67](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L67)

___

### findByValidatorAddress

▸ **findByValidatorAddress**(`address`): `Promise`<[`AccountWithValidator`](AccountWithValidator.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`AccountWithValidator`](AccountWithValidator.md)\>

#### Defined in

[packages/bep-013/source/account.ts:68](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L68)

___

### forgetByAddress

▸ **forgetByAddress**(`address`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/account.ts:70](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L70)

___

### forgetByMoniker

▸ **forgetByMoniker**(`moniker`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `moniker` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/account.ts:71](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L71)

___

### forgetByPublicKey

▸ **forgetByPublicKey**(`publicKey`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/account.ts:72](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L72)

___

### forgetByValidatorAddress

▸ **forgetByValidatorAddress**(`address`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/account.ts:73](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L73)

___

### hasByAddress

▸ **hasByAddress**(`address`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/account.ts:75](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L75)

___

### hasByMonkiker

▸ **hasByMonkiker**(`moniker`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `moniker` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/account.ts:76](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L76)

___

### hasByPublicKey

▸ **hasByPublicKey**(`publicKey`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/account.ts:77](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L77)

___

### hasByValidatorAddress

▸ **hasByValidatorAddress**(`address`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/account.ts:78](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L78)

___

### index

▸ **index**(`accounts`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | [`Account`](Account.md)<`Record`<`string`, `any`\>\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/account.ts:80](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L80)
