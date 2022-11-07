[@bearmint/bep-013 - v0.0.0](../README.md) / AccountSerializer

# Interface: AccountSerializer

## Table of contents

### Methods

- [deserialize](AccountSerializer.md#deserialize)
- [macro](AccountSerializer.md#macro)
- [serialize](AccountSerializer.md#serialize)

## Methods

### deserialize

▸ **deserialize**(`account`): `Promise`<[`Account`](Account.md)<`Record`<`string`, `any`\>\>\>

Deerializes an account from Uint8Array to Protocol Buffers

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `BEP22Account` |

#### Returns

`Promise`<[`Account`](Account.md)<`Record`<`string`, `any`\>\>\>

#### Defined in

[packages/bep-013/source/account.ts:99](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L99)

___

### macro

▸ **macro**(`property`, `serializer`): `void`

Registers a macro that will (de)serialize the specified property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |
| `serializer` | [`ClassOrFunctionReturning`](../README.md#classorfunctionreturning)<[`AccountPropertySerializer`](AccountPropertySerializer.md)\> |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/account.ts:104](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L104)

___

### serialize

▸ **serialize**(`account`): `Promise`<`BEP22Account`\>

Serializes an account from Protocol Buffers to JSON

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](Account.md)<`Record`<`string`, `any`\>\> |

#### Returns

`Promise`<`BEP22Account`\>

#### Defined in

[packages/bep-013/source/account.ts:94](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L94)
