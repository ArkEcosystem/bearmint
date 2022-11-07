[@bearmint/bep-013 - v0.0.0](../README.md) / QueryHandler

# Interface: QueryHandler

## Table of contents

### Methods

- [execute](QueryHandler.md#execute)
- [isMatch](QueryHandler.md#ismatch)

## Methods

### execute

▸ **execute**(`opts`): `Promise`<`PartialMessage`<`ResponseQuery`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QueryHandlerOpts`](QueryHandlerOpts.md) |

#### Returns

`Promise`<`PartialMessage`<`ResponseQuery`\>\>

#### Defined in

[packages/bep-013/source/tendermint.ts:124](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L124)

___

### isMatch

▸ **isMatch**(`opts`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QueryHandlerOpts`](QueryHandlerOpts.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/tendermint.ts:123](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L123)
