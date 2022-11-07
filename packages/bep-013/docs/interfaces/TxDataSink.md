[@bearmint/bep-013 - v0.0.0](../README.md) / TxDataSink

# Interface: TxDataSink

## Table of contents

### Properties

- [metadata](TxDataSink.md#metadata)

## Properties

### metadata

• **metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `account` | { `del`: (`account`: [`Account`](Account.md)<`Record`<`string`, `any`\>\>, `key`: `string`, `value`: `object`, `moduleName?`: `string`) => `void` ; `put`: (`account`: [`Account`](Account.md)<`Record`<`string`, `any`\>\>, `key`: `string`, `value`: `object`, `moduleName?`: `string`) => `void`  } |
| `account.del` | [object Object] |
| `account.put` | [object Object] |
| `tx` | { `del`: (`key`: `string`, `value`: `object`, `moduleName?`: `string`) => `void` ; `put`: (`key`: `string`, `value`: `object`, `moduleName?`: `string`) => `void`  } |
| `tx.del` | [object Object] |
| `tx.put` | [object Object] |

#### Defined in

[packages/bep-013/source/tx.ts:268](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tx.ts#L268)
