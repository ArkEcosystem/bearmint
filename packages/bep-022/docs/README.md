@bearmint/bep-022 - v0.0.0

# @bearmint/bep-022 - v0.0.0

## Table of contents

### Functions

- [assertPositiveBalance](README.md#assertpositivebalance)
- [attachMetadata](README.md#attachmetadata)
- [decreaseBalance](README.md#decreasebalance)
- [decreaseLockedBalance](README.md#decreaselockedbalance)
- [detachMetadata](README.md#detachmetadata)
- [forgetMetadata](README.md#forgetmetadata)
- [getMetadata](README.md#getmetadata)
- [hasMetadata](README.md#hasmetadata)
- [increaseBalance](README.md#increasebalance)
- [increaseLockedBalance](README.md#increaselockedbalance)
- [isGenesis](README.md#isgenesis)
- [makeAccountRepository](README.md#makeaccountrepository)
- [makeAccountSerializer](README.md#makeaccountserializer)
- [makeServiceProvider](README.md#makeserviceprovider)
- [missingMetadata](README.md#missingmetadata)
- [multiplyBalance](README.md#multiplybalance)
- [multiplyLockedBalance](README.md#multiplylockedbalance)
- [setMetadata](README.md#setmetadata)
- [transferMetadata](README.md#transfermetadata)

## Functions

### assertPositiveBalance

▸ **assertPositiveBalance**(`account`, `balance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `balance` | `undefined` \| `bigint` |

#### Returns

`void`

#### Defined in

[balance.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/balance.ts#L21)

___

### attachMetadata

▸ **attachMetadata**(`account`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `key` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Defined in

[metadata.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/metadata.ts#L48)

___

### decreaseBalance

▸ **decreaseBalance**(`account`, `amount`, `denomination`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `amount` | `bigint` |
| `denomination` | `string` |

#### Returns

`void`

#### Defined in

[balance.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/balance.ts#L45)

___

### decreaseLockedBalance

▸ **decreaseLockedBalance**(`account`, `amount`, `denomination`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `amount` | `bigint` |
| `denomination` | `string` |

#### Returns

`void`

#### Defined in

[locked-balance.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/locked-balance.ts#L36)

___

### detachMetadata

▸ **detachMetadata**(`account`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `key` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Defined in

[metadata.ts:59](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/metadata.ts#L59)

___

### forgetMetadata

▸ **forgetMetadata**(`account`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[metadata.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/metadata.ts#L38)

___

### getMetadata

▸ **getMetadata**<`T`\>(`account`, `key`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `key` | `string` |

#### Returns

`T`

#### Defined in

[metadata.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/metadata.ts#L22)

___

### hasMetadata

▸ **hasMetadata**(`account`, `key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[metadata.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/metadata.ts#L30)

___

### increaseBalance

▸ **increaseBalance**(`account`, `amount`, `denomination`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `amount` | `bigint` |
| `denomination` | `string` |

#### Returns

`void`

#### Defined in

[balance.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/balance.ts#L31)

___

### increaseLockedBalance

▸ **increaseLockedBalance**(`account`, `amount`, `denomination`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `amount` | `bigint` |
| `denomination` | `string` |

#### Returns

`void`

#### Defined in

[locked-balance.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/locked-balance.ts#L22)

___

### isGenesis

▸ **isGenesis**(`validators`, `account`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `validators` | `GenesisValidator`[] |
| `account` | `AccountWithValidator` |

#### Returns

`boolean`

#### Defined in

[utils.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/utils.ts#L20)

___

### makeAccountRepository

▸ **makeAccountRepository**(`cradle`): `AccountRepositoryFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`AccountRepositoryFactory`

#### Defined in

[repository.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/repository.ts#L31)

___

### makeAccountSerializer

▸ **makeAccountSerializer**(`cradle`): `AccountSerializer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`AccountSerializer`

#### Defined in

[serializer.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/serializer.ts#L28)

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

[service-provider.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/service-provider.ts#L25)

___

### missingMetadata

▸ **missingMetadata**(`account`, `key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[metadata.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/metadata.ts#L34)

___

### multiplyBalance

▸ **multiplyBalance**(`account`, `percentage`, `denomination`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `percentage` | `number` |
| `denomination` | `string` |

#### Returns

`void`

#### Defined in

[balance.ts:55](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/balance.ts#L55)

___

### multiplyLockedBalance

▸ **multiplyLockedBalance**(`account`, `percentage`, `denomination`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `percentage` | `number` |
| `denomination` | `string` |

#### Returns

`void`

#### Defined in

[locked-balance.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/locked-balance.ts#L46)

___

### setMetadata

▸ **setMetadata**<`T`\>(`account`, `key`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `key` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[metadata.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/metadata.ts#L26)

___

### transferMetadata

▸ **transferMetadata**(`sender`, `recipient`, `key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `Account`<`Record`<`string`, `any`\>\> |
| `recipient` | `Account`<`Record`<`string`, `any`\>\> |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[metadata.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-022/source/metadata.ts#L42)
