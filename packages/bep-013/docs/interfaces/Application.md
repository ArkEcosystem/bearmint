[@bearmint/bep-013 - v0.0.0](../README.md) / Application

# Interface: Application

## Table of contents

### Methods

- [boot](Application.md#boot)
- [dispose](Application.md#dispose)

## Methods

### boot

▸ **boot**(`bootstrappers`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bootstrappers` | [`BootstrapperConstructor`](../README.md#bootstrapperconstructor)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/app.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/app.ts#L27)

___

### dispose

▸ **dispose**(`reason?`, `error?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `error?` | `Error` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/app.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/app.ts#L28)
