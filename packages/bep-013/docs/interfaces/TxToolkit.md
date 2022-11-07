[@bearmint/bep-013 - v0.0.0](../README.md) / TxToolkit

# Interface: TxToolkit

## Table of contents

### Methods

- [findOrCreateAccountByAddress](TxToolkit.md#findorcreateaccountbyaddress)
- [getActiveValidatorAddresses](TxToolkit.md#getactivevalidatoraddresses)
- [getBalance](TxToolkit.md#getbalance)
- [getModuleMilestone](TxToolkit.md#getmodulemilestone)
- [getRecipientsFromOps](TxToolkit.md#getrecipientsfromops)
- [getSender](TxToolkit.md#getsender)
- [getSenderWithRecipient](TxToolkit.md#getsenderwithrecipient)

## Methods

### findOrCreateAccountByAddress

▸ **findOrCreateAccountByAddress**(`address`): `Promise`<[`Account`](Account.md)<`Record`<`string`, `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`Account`](Account.md)<`Record`<`string`, `any`\>\>\>

#### Defined in

[packages/bep-013/source/tx.ts:136](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L136)

___

### getActiveValidatorAddresses

▸ **getActiveValidatorAddresses**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/bep-013/source/tx.ts:137](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L137)

___

### getBalance

▸ **getBalance**(`account`, `denomination`, `errorKey?`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |
| `denomination` | `string` |
| `errorKey?` | `string` |

#### Returns

`bigint`

#### Defined in

[packages/bep-013/source/tx.ts:142](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L142)

___

### getModuleMilestone

▸ **getModuleMilestone**<`T`\>(`name?`, `version?`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `version?` | `string` |

#### Returns

`Object`

#### Defined in

[packages/bep-013/source/tx.ts:138](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L138)

___

### getRecipientsFromOps

▸ **getRecipientsFromOps**(`sender?`): `Promise`<[`NonNullableMap`](NonNullableMap.md)<[`Account`](Account.md)<`Record`<`string`, `any`\>\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender?` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<[`NonNullableMap`](NonNullableMap.md)<[`Account`](Account.md)<`Record`<`string`, `any`\>\>\>\>

#### Defined in

[packages/bep-013/source/tx.ts:143](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L143)

___

### getSender

▸ **getSender**(): `Promise`<[`AccountWithPublicKey`](AccountWithPublicKey.md)\>

#### Returns

`Promise`<[`AccountWithPublicKey`](AccountWithPublicKey.md)\>

#### Defined in

[packages/bep-013/source/tx.ts:144](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L144)

___

### getSenderWithRecipient

▸ **getSenderWithRecipient**(): `Promise`<{ `recipient`: [`Account`](Account.md)<`Record`<`string`, `any`\>\> ; `sender`: [`AccountWithPublicKey`](AccountWithPublicKey.md)  }\>

#### Returns

`Promise`<{ `recipient`: [`Account`](Account.md)<`Record`<`string`, `any`\>\> ; `sender`: [`AccountWithPublicKey`](AccountWithPublicKey.md)  }\>

#### Defined in

[packages/bep-013/source/tx.ts:145](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L145)
