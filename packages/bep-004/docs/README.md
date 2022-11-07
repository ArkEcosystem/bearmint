@bearmint/bep-004 - v0.0.0

# @bearmint/bep-004 - v0.0.0

## Table of contents

### Variables

- [mnemonic](README.md#mnemonic)

### Functions

- [bench](README.md#bench)
- [benchEach](README.md#bencheach)

## Variables

### mnemonic

• `Const` **mnemonic**: ``"oil absorb party draft trash stamp today together rent enhance vendor tray nut unlock family wrap chapter flight latin antenna record sugar avoid judge"``

#### Defined in

[bench.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-004/source/bench.ts#L20)

## Functions

### bench

▸ **bench**(`title`, `callback`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `callback` | (`__namedParameters`: `Object`) => `Promise`<`void`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[bench.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-004/source/bench.ts#L23)

___

### benchEach

▸ **benchEach**(`title`, `callback`, `scenarios`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `callback` | (`__namedParameters`: `Object`) => `Promise`<`void`\> |
| `scenarios` | `Record`<`string`, `CallableFunction`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[bench.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-004/source/bench.ts#L29)
