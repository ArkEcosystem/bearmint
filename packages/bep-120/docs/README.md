@bearmint/bep-120 - v0.0.0

# @bearmint/bep-120 - v0.0.0

## Table of contents

### Functions

- [endSentence](README.md#endsentence)
- [getFile](README.md#getfile)
- [getSentenceEnd](README.md#getsentenceend)
- [isJailed](README.md#isjailed)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeStrategy](README.md#makestrategy)
- [recordMisbehavior](README.md#recordmisbehavior)

## Functions

### endSentence

▸ **endSentence**(`state`, `account`): `Promise`<`BEP120File`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`BEP120File`\>

#### Defined in

[utils.ts:97](https://github.com/bearmint/bearmint/blob/main/packages/bep-120/source/utils.ts#L97)

___

### getFile

▸ **getFile**(`state`, `account`): `Promise`<`BEP120File`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`BEP120File`\>

#### Defined in

[utils.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-120/source/utils.ts#L27)

___

### getSentenceEnd

▸ **getSentenceEnd**(`state`, `account`): `Promise`<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`bigint`\>

#### Defined in

[utils.ts:115](https://github.com/bearmint/bearmint/blob/main/packages/bep-120/source/utils.ts#L115)

___

### isJailed

▸ **isJailed**(`state`, `account`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[utils.ts:111](https://github.com/bearmint/bearmint/blob/main/packages/bep-120/source/utils.ts#L111)

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

[service-provider.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-120/source/service-provider.ts#L27)

___

### makeStrategy

▸ **makeStrategy**(`cradle`): `Slasher`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`Slasher`

#### Defined in

[strategy.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-120/source/strategy.ts#L25)

___

### recordMisbehavior

▸ **recordMisbehavior**(`cradle`, `state`, `account`, `misbehavior`): `Promise`<`undefined` \| `BEP120Record`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Pick`<`Cradle`<`Record`<`string`, `unknown`\>\>, ``"CommittedState"`` \| ``"ServiceProviderRepository"``\> |
| `state` | `StateStore` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `misbehavior` | `Misbehavior` |

#### Returns

`Promise`<`undefined` \| `BEP120Record`\>

#### Defined in

[utils.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-120/source/utils.ts#L40)
