@bearmint/bep-083 - v0.0.0

# @bearmint/bep-083 - v0.0.0

## Table of contents

### Functions

- [makeRewarder](README.md#makerewarder)
- [makeServiceProvider](README.md#makeserviceprovider)

## Functions

### makeRewarder

▸ **makeRewarder**(`cradle`): `DelegatorRewarder`

`getCandidateBlockProposer` can't be trusted to be the original proposer

**`See`**

 - https://github.com/tendermint/tendermint/discussions/8326
 - https://github.com/cosmos/cosmos-sdk/blob/main/x/distribution/abci.go

#### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | `Cradle`<`Record`<`string`, `unknown`\>\> |

#### Returns

`DelegatorRewarder`

#### Defined in

[rewarder.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-083/source/rewarder.ts#L35)

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

[service-provider.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-083/source/service-provider.ts#L24)
