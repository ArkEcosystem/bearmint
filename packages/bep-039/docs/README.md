@bearmint/bep-039 - v0.0.0

# @bearmint/bep-039 - v0.0.0

## Table of contents

### Functions

- [benchAddress](README.md#benchaddress)
- [createSuite](README.md#createsuite)

## Functions

### benchAddress

▸ **benchAddress**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.address` | `string` |
| `args.beforeAll?` | `CallableFunction` |
| `args.makeAddressFactory` | `FunctionReturning`<`AddressFactory`\> |
| `args.makePrivateKeyFactory` | `FunctionReturning`<`PrivateKeyFactory`\> |
| `args.makePublicKeyFactory` | `FunctionReturning`<`PublicKeyFactory`\> |
| `args.privateKey` | `string` |
| `args.publicKey` | `string` |
| `args.title` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[benchmark.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-039/source/benchmark.ts#L26)

___

### createSuite

▸ **createSuite**(`__namedParameters`, `title`, `expected`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `title` | `string` |
| `expected` | `string` |
| `callback` | `CallableFunction` |

#### Returns

`void`

#### Defined in

[unit.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-039/source/unit.ts#L23)
