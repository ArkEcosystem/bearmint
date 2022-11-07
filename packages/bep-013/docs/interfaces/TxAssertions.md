[@bearmint/bep-013 - v0.0.0](../README.md) / TxAssertions

# Interface: TxAssertions

## Table of contents

### Methods

- [accountHasValidator](TxAssertions.md#accounthasvalidator)
- [byteLength](TxAssertions.md#bytelength)
- [byteLengthFromString](TxAssertions.md#bytelengthfromstring)
- [charLength](TxAssertions.md#charlength)
- [count](TxAssertions.md#count)
- [equity](TxAssertions.md#equity)
- [future](TxAssertions.md#future)
- [hashEquality](TxAssertions.md#hashequality)
- [hashLength](TxAssertions.md#hashlength)
- [knownByList](TxAssertions.md#knownbylist)
- [loopback](TxAssertions.md#loopback)
- [memoLength](TxAssertions.md#memolength)
- [notPrincipalCurrency](TxAssertions.md#notprincipalcurrency)
- [notTombstoned](TxAssertions.md#nottombstoned)
- [past](TxAssertions.md#past)
- [positiveNumber](TxAssertions.md#positivenumber)
- [range](TxAssertions.md#range)
- [recipientAddress](TxAssertions.md#recipientaddress)
- [regex](TxAssertions.md#regex)
- [relational](TxAssertions.md#relational)
- [relationalRecipient](TxAssertions.md#relationalrecipient)
- [uniqueList](TxAssertions.md#uniquelist)
- [uniqueModuleStoreKey](TxAssertions.md#uniquemodulestorekey)
- [uniqueOps](TxAssertions.md#uniqueops)
- [validatorAuthenticity](TxAssertions.md#validatorauthenticity)
- [validatorExists](TxAssertions.md#validatorexists)

## Methods

### accountHasValidator

▸ **accountHasValidator**(`account`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:63](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L63)

___

### byteLength

▸ **byteLength**(`propertyKey`, `value`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `value` | `Uint8Array` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:64](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L64)

___

### byteLengthFromString

▸ **byteLengthFromString**(`propertyKey`, `value`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `value` | `undefined` \| `string` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:69](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L69)

___

### charLength

▸ **charLength**(`propertyKey`, `value`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `value` | `string` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:74](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L74)

___

### count

▸ **count**(`propertyKey`, `values`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `values` | `number` \| `unknown`[] |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:75](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L75)

___

### equity

▸ **equity**(`value`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `bigint` |
| `error` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:80](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L80)

___

### future

▸ **future**(`value`, `error`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `error` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:81](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L81)

___

### hashEquality

▸ **hashEquality**(`algorithm`, `actual`, `expected`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `actual` | `Uint8Array` |
| `expected` | `Uint8Array` |
| `error` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:82](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L82)

___

### hashLength

▸ **hashLength**(`algorithm`, `value`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | `string` |
| `value` | `Uint8Array` |
| `error` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:88](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L88)

___

### knownByList

▸ **knownByList**(`key`, `value`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `unknown` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:89](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L89)

___

### loopback

▸ **loopback**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:90](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L90)

___

### memoLength

▸ **memoLength**(`memo`, `ops?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `memo` | `undefined` \| `string` |
| `ops?` | { `memo?`: `string`  }[] |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:91](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L91)

___

### notPrincipalCurrency

▸ **notPrincipalCurrency**(`value`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `error` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:92](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L92)

___

### notTombstoned

▸ **notTombstoned**(`account`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:93](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L93)

___

### past

▸ **past**(`value`, `error`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `error` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L94)

___

### positiveNumber

▸ **positiveNumber**(`value`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `bigint` |
| `error` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:95](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L95)

___

### range

▸ **range**(`propertyKey`, `value`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `value` | `string` \| `number` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:96](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L96)

___

### recipientAddress

▸ **recipientAddress**(`address`, `error?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| [`Address`](Address.md) |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:101](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L101)

___

### regex

▸ **regex**(`propertyKey`, `value`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `value` | `string` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:105](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L105)

___

### relational

▸ **relational**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:106](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L106)

___

### relationalRecipient

▸ **relationalRecipient**(`sender`, `recipient`, `error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `recipient` | `string` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:107](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L107)

___

### uniqueList

▸ **uniqueList**<`T`\>(`items`, `compositeKey`, `error?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T`[] |
| `compositeKey` | (`item`: `T`) => `string` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:112](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L112)

___

### uniqueModuleStoreKey

▸ **uniqueModuleStoreKey**(`moduleName`, `key`, `error`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |
| `error` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:117](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L117)

___

### uniqueOps

▸ **uniqueOps**<`T`\>(`ops`, `compositeKey`, `error?`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ops` | `T`[] |
| `compositeKey` | (`item`: `T`) => `string` |
| `error?` | [`TxAssertionsErrorStruct`](TxAssertionsErrorStruct.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tx.ts:122](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L122)

___

### validatorAuthenticity

▸ **validatorAuthenticity**(`msg`, `publicKey`, `signature`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `Uint8Array` |
| `publicKey` | `Uint8Array` |
| `signature` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:127](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L127)

___

### validatorExists

▸ **validatorExists**(`moniker`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `moniker` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/tx.ts:132](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L132)
