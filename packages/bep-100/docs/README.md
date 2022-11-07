@bearmint/bep-100 - v0.0.0

# @bearmint/bep-100 - v0.0.0

## Table of contents

### Enumerations

- [InternalContainerType](enums/InternalContainerType.md)

### Interfaces

- [Host](interfaces/Host.md)

### Type Aliases

- [Buckets](README.md#buckets)
- [Cradle](README.md#cradle)

### Functions

- [makeAccountListener](README.md#makeaccountlistener)
- [makeBlockListener](README.md#makeblocklistener)
- [makeCommitListener](README.md#makecommitlistener)
- [makeServiceProvider](README.md#makeserviceprovider)
- [makeTxListener](README.md#maketxlistener)

## Type Aliases

### Buckets

Ƭ **Buckets**: { `database`: `LevelDB` ; `host`: [`Host`](interfaces/Host.md)  }[]

#### Defined in

[types.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-100/source/types.ts#L35)

___

### Cradle

Ƭ **Cradle**: `Base`<{ `@bearmint/bep-100/buckets`: [`Buckets`](README.md#buckets)  }\>

#### Defined in

[types.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-100/source/types.ts#L26)

## Functions

### makeAccountListener

▸ **makeAccountListener**(`cradle`): `EventListener`<`Account`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | [`Cradle`](README.md#cradle) |

#### Returns

`EventListener`<`Account`\>

#### Defined in

[listeners.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-100/source/listeners.ts#L25)

___

### makeBlockListener

▸ **makeBlockListener**(`cradle`): `EventListener`<{ `method`: `string` ; `request`: `abci.RequestBeginBlock`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | [`Cradle`](README.md#cradle) |

#### Returns

`EventListener`<{ `method`: `string` ; `request`: `abci.RequestBeginBlock`  }\>

#### Defined in

[listeners.ts:49](https://github.com/bearmint/bearmint/blob/main/packages/bep-100/source/listeners.ts#L49)

___

### makeCommitListener

▸ **makeCommitListener**(`cradle`): `EventListener`<{ `method`: `string`  }\>

This function persists the cache because Tendermint
signaled that we can commit to our latest changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | [`Cradle`](README.md#cradle) |

#### Returns

`EventListener`<{ `method`: `string`  }\>

#### Defined in

[listeners.ts:114](https://github.com/bearmint/bearmint/blob/main/packages/bep-100/source/listeners.ts#L114)

___

### makeServiceProvider

▸ **makeServiceProvider**(`cradle`): `ServiceProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | [`Cradle`](README.md#cradle) |

#### Returns

`ServiceProvider`

#### Defined in

[service-provider.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-100/source/service-provider.ts#L40)

___

### makeTxListener

▸ **makeTxListener**(`cradle`): `EventListener`<`Tx`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | [`Cradle`](README.md#cradle) |

#### Returns

`EventListener`<`Tx`\>

#### Defined in

[listeners.ts:79](https://github.com/bearmint/bearmint/blob/main/packages/bep-100/source/listeners.ts#L79)
