@bearmint/bep5 - v0.0.0

# @bearmint/bep5 - v0.0.0

## Table of contents

### Variables

- [loader](README.md#loader)

### Functions

- [describe](README.md#describe)
- [describeEach](README.md#describeeach)
- [describeSkip](README.md#describeskip)
- [describeWithContext](README.md#describewithcontext)

## Variables

### loader

• `Const` **loader**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `json` | (`path`: `string`) => `Record`<`string`, `any`\> |

#### Defined in

[loader.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep5/source/loader.ts#L20)

## Functions

### describe

▸ **describe**<`T`\>(`title`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Context` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `callback` | `CallbackFunction`<`T`\> |

#### Returns

`void`

#### Defined in

[describe.ts:163](https://github.com/bearmint/bearmint/blob/main/packages/bep5/source/describe.ts#L163)

___

### describeEach

▸ **describeEach**<`T`\>(`title`, `callback`, `datasets`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Context` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `callback` | `CallbackFunction`<`T`\> |
| `datasets` | `unknown`[] |

#### Returns

`void`

#### Defined in

[describe.ts:181](https://github.com/bearmint/bearmint/blob/main/packages/bep5/source/describe.ts#L181)

___

### describeSkip

▸ **describeSkip**<`T`\>(`title`, `_`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Context` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `_` | `CallbackFunction`<`T`\> |

#### Returns

`void`

#### Defined in

[describe.ts:195](https://github.com/bearmint/bearmint/blob/main/packages/bep5/source/describe.ts#L195)

___

### describeWithContext

▸ **describeWithContext**<`T`\>(`title`, `context`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Context` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `context` | `Context` \| `ContextFunction`<`T`\> |
| `callback` | `CallbackFunction`<`T`\> |

#### Returns

`void`

#### Defined in

[describe.ts:170](https://github.com/bearmint/bearmint/blob/main/packages/bep5/source/describe.ts#L170)
