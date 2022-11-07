[@bearmint/bep-013 - v0.0.0](../README.md) / KVStore

# Interface: KVStore

## Table of contents

### Methods

- [addCheckpoint](KVStore.md#addcheckpoint)
- [attach](KVStore.md#attach)
- [batch](KVStore.md#batch)
- [checkpoint](KVStore.md#checkpoint)
- [checkpoints](KVStore.md#checkpoints)
- [clear](KVStore.md#clear)
- [commit](KVStore.md#commit)
- [copy](KVStore.md#copy)
- [detach](KVStore.md#detach)
- [entries](KVStore.md#entries)
- [forget](KVStore.md#forget)
- [get](KVStore.md#get)
- [getList](KVStore.md#getlist)
- [getListHex](KVStore.md#getlisthex)
- [has](KVStore.md#has)
- [hasCheckpoints](KVStore.md#hascheckpoints)
- [keys](KVStore.md#keys)
- [missing](KVStore.md#missing)
- [persistRoot](KVStore.md#persistroot)
- [revert](KVStore.md#revert)
- [root](KVStore.md#root)
- [set](KVStore.md#set)
- [setRoot](KVStore.md#setroot)
- [snapshot](KVStore.md#snapshot)
- [values](KVStore.md#values)
- [verifyIntegrity](KVStore.md#verifyintegrity)

## Methods

### addCheckpoint

▸ **addCheckpoint**(`checkpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checkpoint` | [`KVStoreCheckpoint`](KVStoreCheckpoint.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/store.ts:72](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L72)

___

### attach

▸ **attach**(`key`, `value`): `Promise`<`Uint8Array`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |
| `value` | `string` |

#### Returns

`Promise`<`Uint8Array`[]\>

#### Defined in

[packages/bep-013/source/store.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L53)

___

### batch

▸ **batch**(`ops`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ops` | { `key`: `Buffer` ; `type`: `string` ; `value`: `Buffer`  }[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/store.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L36)

___

### checkpoint

▸ **checkpoint**(): `void`

#### Returns

`void`

#### Defined in

[packages/bep-013/source/store.ts:68](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L68)

___

### checkpoints

▸ **checkpoints**(): [`KVStoreCheckpoint`](KVStoreCheckpoint.md)[]

#### Returns

[`KVStoreCheckpoint`](KVStoreCheckpoint.md)[]

#### Defined in

[packages/bep-013/source/store.ts:69](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L69)

___

### clear

▸ **clear**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/store.ts:75](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L75)

___

### commit

▸ **commit**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/store.ts:70](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L70)

___

### copy

▸ **copy**(): [`KVStore`](KVStore.md)

#### Returns

[`KVStore`](KVStore.md)

#### Defined in

[packages/bep-013/source/store.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L48)

___

### detach

▸ **detach**(`key`, `value`): `Promise`<`Uint8Array`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |
| `value` | `string` |

#### Returns

`Promise`<`Uint8Array`[]\>

#### Defined in

[packages/bep-013/source/store.ts:54](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L54)

___

### entries

▸ **entries**(): `Promise`<{ `key`: `Buffer` ; `value`: `Buffer`  }[]\>

#### Returns

`Promise`<{ `key`: `Buffer` ; `value`: `Buffer`  }[]\>

#### Defined in

[packages/bep-013/source/store.ts:58](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L58)

___

### forget

▸ **forget**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/store.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L43)

___

### get

▸ **get**(`key`): `Promise`<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |

#### Returns

`Promise`<`Uint8Array`\>

#### Defined in

[packages/bep-013/source/store.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L44)

___

### getList

▸ **getList**(`key`): `Promise`<`Uint8Array`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |

#### Returns

`Promise`<`Uint8Array`[]\>

#### Defined in

[packages/bep-013/source/store.ts:51](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L51)

___

### getListHex

▸ **getListHex**(`key`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/bep-013/source/store.ts:52](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L52)

___

### has

▸ **has**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/store.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L46)

___

### hasCheckpoints

▸ **hasCheckpoints**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/store.ts:67](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L67)

___

### keys

▸ **keys**(): `Promise`<`Buffer`[]\>

#### Returns

`Promise`<`Buffer`[]\>

#### Defined in

[packages/bep-013/source/store.ts:57](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L57)

___

### missing

▸ **missing**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/store.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L47)

___

### persistRoot

▸ **persistRoot**(`hash`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/store.ts:64](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L64)

___

### revert

▸ **revert**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/store.ts:71](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L71)

___

### root

▸ **root**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[packages/bep-013/source/store.ts:62](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L62)

___

### set

▸ **set**(`key`, `value`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KVStoreKey`](../README.md#kvstorekey) |
| `value` | [`KVStoreValue`](../README.md#kvstorevalue) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/store.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L45)

___

### setRoot

▸ **setRoot**(`hash`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/store.ts:63](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L63)

___

### snapshot

▸ **snapshot**(`target`, `root?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`KVStore`](KVStore.md) |
| `root?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/store.ts:76](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L76)

___

### values

▸ **values**(): `Promise`<`Buffer`[]\>

#### Returns

`Promise`<`Buffer`[]\>

#### Defined in

[packages/bep-013/source/store.ts:59](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L59)

___

### verifyIntegrity

▸ **verifyIntegrity**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/bep-013/source/store.ts:79](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L79)
