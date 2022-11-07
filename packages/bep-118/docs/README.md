@bearmint/bep-118 - v0.0.0

# @bearmint/bep-118 - v0.0.0

## Table of contents

### Functions

- [getFile](README.md#getfile)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeStrategy](README.md#makestrategy)
- [recordMisbehavior](README.md#recordmisbehavior)

## Functions

### getFile

▸ **getFile**(`state`, `account`): `Promise`<`BEP118File`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`BEP118File`\>

#### Defined in

[utils.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-118/source/utils.ts#L23)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-118/source/service-provider.ts#L24)

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

[strategy.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-118/source/strategy.ts#L25)

___

### recordMisbehavior

▸ **recordMisbehavior**(`state`, `account`, `misbehavior`, `punishment`): `Promise`<`BEP118Record`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |
| `account` | `Account`<`Record`<`string`, `any`\>\> |
| `misbehavior` | `Misbehavior` |
| `punishment` | `Plain`<`BEP118Punishment`\> |

#### Returns

`Promise`<`BEP118Record`\>

#### Defined in

[utils.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-118/source/utils.ts#L36)
