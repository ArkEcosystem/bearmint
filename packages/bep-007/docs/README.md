@bearmint/bep-007 - v0.0.0

# @bearmint/bep-007 - v0.0.0

## Table of contents

### Variables

- [ACCOUNT](README.md#account)
- [MESSAGE](README.md#message)
- [VALIDATOR](README.md#validator)

### Functions

- [makeTx](README.md#maketx)

## Variables

### ACCOUNT

• `Const` **ACCOUNT**: `undefined` \| { `address`: `string` ; `mnemonic`: `string` ; `privateKey`: `string` ; `publicKey`: `string`  }

#### Defined in

[bep-007/source/constants.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-007/source/constants.ts#L20)

___

### MESSAGE

• `Const` **MESSAGE**: ``"Hello, World!"``

#### Defined in

[bep-007/source/constants.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-007/source/constants.ts#L24)

___

### VALIDATOR

• `Const` **VALIDATOR**: `undefined` \| { `address`: `string` ; `mnemonic`: `string` ; `moniker`: `string` ; `privateKey`: `string` ; `publicKey`: `string`  }

#### Defined in

[bep-007/source/constants.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-007/source/constants.ts#L22)

## Functions

### makeTx

▸ **makeTx**(`sender`, `recipient`, `message`, `data?`): `Promise`<`Tx`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `KeyPair` |
| `recipient` | `KeyPair` |
| `message` | `Object` |
| `message.content` | `Uint8Array` |
| `message.handler` | `string` |
| `message.version` | `string` |
| `data?` | `object` |

#### Returns

`Promise`<`Tx`\>

#### Defined in

[bep-007/source/tx.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-007/source/tx.ts#L24)
