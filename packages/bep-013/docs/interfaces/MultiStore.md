[@bearmint/bep-013 - v0.0.0](../README.md) / MultiStore

# Interface: MultiStore

## Table of contents

### Methods

- [add](MultiStore.md#add)
- [all](MultiStore.md#all)
- [checkpoint](MultiStore.md#checkpoint)
- [copy](MultiStore.md#copy)
- [get](MultiStore.md#get)
- [hasCheckpoints](MultiStore.md#hascheckpoints)
- [revert](MultiStore.md#revert)
- [roots](MultiStore.md#roots)
- [set](MultiStore.md#set)

## Methods

### add

▸ **add**(`module`, `opts?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `opts?` | [`KVStoreOpts`](KVStoreOpts.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:79](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L79)

___

### all

▸ **all**(): `Record`<`string`, [`KVStore`](KVStore.md)\>

#### Returns

`Record`<`string`, [`KVStore`](KVStore.md)\>

#### Defined in

[packages/bep-013/source/state.ts:80](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L80)

___

### checkpoint

▸ **checkpoint**(): `void`

#### Returns

`void`

#### Defined in

[packages/bep-013/source/state.ts:81](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L81)

___

### copy

▸ **copy**(): [`MultiStore`](MultiStore.md)

#### Returns

[`MultiStore`](MultiStore.md)

#### Defined in

[packages/bep-013/source/state.ts:82](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L82)

___

### get

▸ **get**(`module`): [`KVStore`](KVStore.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |

#### Returns

[`KVStore`](KVStore.md)

#### Defined in

[packages/bep-013/source/state.ts:83](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L83)

___

### hasCheckpoints

▸ **hasCheckpoints**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/state.ts:84](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L84)

___

### revert

▸ **revert**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/state.ts:85](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L85)

___

### roots

▸ **roots**(): `Record`<`string`, `Buffer`\>

#### Returns

`Record`<`string`, `Buffer`\>

#### Defined in

[packages/bep-013/source/state.ts:86](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L86)

___

### set

▸ **set**(`module`, `trie`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `trie` | [`KVStore`](KVStore.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/state.ts:87](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/state.ts#L87)
