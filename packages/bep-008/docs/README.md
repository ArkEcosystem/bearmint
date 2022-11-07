@bearmint/bep-008 - v0.0.0

# @bearmint/bep-008 - v0.0.0

## Table of contents

### Functions

- [fakeAccountRepositoryFactory](README.md#fakeaccountrepositoryfactory)
- [fakeAccountSerializer](README.md#fakeaccountserializer)
- [fakeAddressFactory](README.md#fakeaddressfactory)
- [fakeCommittedState](README.md#fakecommittedstate)
- [fakeEventDispatcher](README.md#fakeeventdispatcher)
- [fakeKVStores](README.md#fakekvstores)
- [fakeMilestoneKVStore](README.md#fakemilestonekvstore)
- [fakeMultiStore](README.md#fakemultistore)
- [fakeStateStore](README.md#fakestatestore)

## Functions

### fakeAccountRepositoryFactory

▸ **fakeAccountRepositoryFactory**(`context`): `AccountRepositoryFactory`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `TxTestContext` |

#### Returns

`AccountRepositoryFactory`

#### Defined in

[account.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/account.ts#L26)

___

### fakeAccountSerializer

▸ **fakeAccountSerializer**(`context?`): `AccountSerializer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `TxTestContext` |

#### Returns

`AccountSerializer`

#### Defined in

[account.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/account.ts#L36)

___

### fakeAddressFactory

▸ **fakeAddressFactory**(): `AddressFactory`

#### Returns

`AddressFactory`

#### Defined in

[address.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/address.ts#L21)

___

### fakeCommittedState

▸ **fakeCommittedState**(): `StateStore`

#### Returns

`StateStore`

#### Defined in

[states.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/states.ts#L21)

___

### fakeEventDispatcher

▸ **fakeEventDispatcher**(`context?`): `EventDispatcher`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `TxTestContext` |

#### Returns

`EventDispatcher`

#### Defined in

[event-dispatcher.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/event-dispatcher.ts#L22)

___

### fakeKVStores

▸ **fakeKVStores**(`tries?`): `Promise`<{ `account`: `KVStore` ; `accountMoniker`: `KVStore` ; `accountPublicKey`: `KVStore` ; `accountValidatorAddress`: `KVStore` ; `milestone`: `KVStore` ; `tx`: `KVStore` ; `txReceipt`: `KVStore` ; `world`: `KVStore`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tries?` | `Partial`<`StateStoreKVStores`\> |

#### Returns

`Promise`<{ `account`: `KVStore` ; `accountMoniker`: `KVStore` ; `accountPublicKey`: `KVStore` ; `accountValidatorAddress`: `KVStore` ; `milestone`: `KVStore` ; `tx`: `KVStore` ; `txReceipt`: `KVStore` ; `world`: `KVStore`  }\>

#### Defined in

[state.ts:92](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/state.ts#L92)

___

### fakeMilestoneKVStore

▸ **fakeMilestoneKVStore**(): `Promise`<`KVStore`\>

#### Returns

`Promise`<`KVStore`\>

#### Defined in

[state.ts:71](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/state.ts#L71)

___

### fakeMultiStore

▸ **fakeMultiStore**(`tries?`): `Promise`<`MultiStore`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tries?` | `Partial`<`StateStoreKVStores`\> |

#### Returns

`Promise`<`MultiStore`\>

#### Defined in

[state.ts:105](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/state.ts#L105)

___

### fakeStateStore

▸ **fakeStateStore**(`context`): `Promise`<`StateStore`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `TxTestContext` |

#### Returns

`Promise`<`StateStore`\>

#### Defined in

[state.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-008/source/state.ts#L40)
