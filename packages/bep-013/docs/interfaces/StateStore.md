[@bearmint/bep-013 - v0.0.0](../README.md) / StateStore

# Interface: StateStore

## Table of contents

### Methods

- [checkpoint](StateStore.md#checkpoint)
- [commit](StateStore.md#commit)
- [copy](StateStore.md#copy)
- [getAccountRepository](StateStore.md#getaccountrepository)
- [getAppHash](StateStore.md#getapphash)
- [getCandidateBlock](StateStore.md#getcandidateblock)
- [getCandidateBlockHash](StateStore.md#getcandidateblockhash)
- [getCandidateBlockNumber](StateStore.md#getcandidateblocknumber)
- [getCandidateBlockProposer](StateStore.md#getcandidateblockproposer)
- [getCommittedBlock](StateStore.md#getcommittedblock)
- [getCommittedBlockAppHash](StateStore.md#getcommittedblockapphash)
- [getCommittedBlockNumber](StateStore.md#getcommittedblocknumber)
- [getConsumedGas](StateStore.md#getconsumedgas)
- [getMilestone](StateStore.md#getmilestone)
- [getMultiStore](StateStore.md#getmultistore)
- [getTxReceiptStore](StateStore.md#gettxreceiptstore)
- [getTxStore](StateStore.md#gettxstore)
- [hasCandidateBlock](StateStore.md#hascandidateblock)
- [hasCheckpoints](StateStore.md#hascheckpoints)
- [revert](StateStore.md#revert)
- [setAccountRepository](StateStore.md#setaccountrepository)
- [setCandidateBlock](StateStore.md#setcandidateblock)
- [setCommittedBlock](StateStore.md#setcommittedblock)
- [setConsumedGas](StateStore.md#setconsumedgas)
- [setMilestone](StateStore.md#setmilestone)

## Methods

### checkpoint

▸ **checkpoint**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L30)

___

### commit

▸ **commit**(`candidateState?`): `Promise`<{ `height`: `bigint` ; `root`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `candidateState?` | [`StateStore`](StateStore.md) |

#### Returns

`Promise`<{ `height`: `bigint` ; `root`: `Uint8Array`  }\>

#### Defined in

[packages/bep-013/source/state.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L31)

___

### copy

▸ **copy**(): `Promise`<[`StateStore`](StateStore.md)\>

#### Returns

`Promise`<[`StateStore`](StateStore.md)\>

#### Defined in

[packages/bep-013/source/state.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L26)

___

### getAccountRepository

▸ **getAccountRepository**(): [`AccountRepository`](AccountRepository.md)

#### Returns

[`AccountRepository`](AccountRepository.md)

#### Defined in

[packages/bep-013/source/state.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L40)

___

### getAppHash

▸ **getAppHash**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-013/source/state.ts:52](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L52)

___

### getCandidateBlock

▸ **getCandidateBlock**(): `RequestBeginBlock`

#### Returns

`RequestBeginBlock`

#### Defined in

[packages/bep-013/source/state.ts:56](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L56)

___

### getCandidateBlockHash

▸ **getCandidateBlockHash**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-013/source/state.ts:58](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L58)

___

### getCandidateBlockNumber

▸ **getCandidateBlockNumber**(): `bigint`

#### Returns

`bigint`

#### Defined in

[packages/bep-013/source/state.ts:59](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L59)

___

### getCandidateBlockProposer

▸ **getCandidateBlockProposer**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-013/source/state.ts:60](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L60)

___

### getCommittedBlock

▸ **getCommittedBlock**(): `Promise`<`RequestBeginBlock`\>

#### Returns

`Promise`<`RequestBeginBlock`\>

#### Defined in

[packages/bep-013/source/state.ts:64](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L64)

___

### getCommittedBlockAppHash

▸ **getCommittedBlockAppHash**(): `Promise`<`Uint8Array`\>

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/bep-013/source/state.ts:66](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L66)

___

### getCommittedBlockNumber

▸ **getCommittedBlockNumber**(): `Promise`<`bigint`\>

#### Returns

`Promise`<`bigint`\>

#### Defined in

[packages/bep-013/source/state.ts:63](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L63)

___

### getConsumedGas

▸ **getConsumedGas**(): `bigint`

#### Returns

`bigint`

#### Defined in

[packages/bep-013/source/state.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L45)

___

### getMilestone

▸ **getMilestone**<`T`\>(): [`Milestone`](Milestone.md)<`T`, `object`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Returns

[`Milestone`](Milestone.md)<`T`, `object`\>

#### Defined in

[packages/bep-013/source/state.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L48)

___

### getMultiStore

▸ **getMultiStore**(): [`MultiStore`](MultiStore.md)

#### Returns

[`MultiStore`](MultiStore.md)

#### Defined in

[packages/bep-013/source/state.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L35)

___

### getTxReceiptStore

▸ **getTxReceiptStore**(): [`KVStore`](KVStore.md)

#### Returns

[`KVStore`](KVStore.md)

#### Defined in

[packages/bep-013/source/state.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L36)

___

### getTxStore

▸ **getTxStore**(): [`KVStore`](KVStore.md)

#### Returns

[`KVStore`](KVStore.md)

#### Defined in

[packages/bep-013/source/state.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L37)

___

### hasCandidateBlock

▸ **hasCandidateBlock**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/state.ts:55](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L55)

___

### hasCheckpoints

▸ **hasCheckpoints**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/state.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L29)

___

### revert

▸ **revert**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L32)

___

### setAccountRepository

▸ **setAccountRepository**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`AccountRepository`](AccountRepository.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/state.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L41)

___

### setCandidateBlock

▸ **setCandidateBlock**(`proposedBlock`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proposedBlock` | `RequestBeginBlock` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/state.ts:57](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L57)

___

### setCommittedBlock

▸ **setCommittedBlock**(`block`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `RequestBeginBlock` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:65](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L65)

___

### setConsumedGas

▸ **setConsumedGas**(`gas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gas` | `bigint` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/state.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L44)

___

### setMilestone

▸ **setMilestone**(`milestone`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `milestone` | [`Milestone`](Milestone.md)<`object`, `object`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:49](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L49)
