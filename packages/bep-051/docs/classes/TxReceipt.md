[@bearmint/bep-051 - v0.0.0](../README.md) / TxReceipt

# Class: TxReceipt

## Implements

- `TxReceipt`

## Table of contents

### Constructors

- [constructor](TxReceipt.md#constructor)

### Methods

- [log](TxReceipt.md#log)
- [logs](TxReceipt.md#logs)
- [toBinary](TxReceipt.md#tobinary)
- [toJson](TxReceipt.md#tojson)
- [toJsonString](TxReceipt.md#tojsonstring)

## Constructors

### constructor

• **new TxReceipt**(`state`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `StateStore` |

#### Defined in

[receipt.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/receipt.ts#L26)

## Methods

### log

▸ **log**(`event`, `args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `args` | `object` |

#### Returns

`void`

#### Implementation of

Contract.log

#### Defined in

[receipt.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/receipt.ts#L30)

___

### logs

▸ **logs**(): `TxReceiptLog`[]

#### Returns

`TxReceiptLog`[]

#### Implementation of

Contract.logs

#### Defined in

[receipt.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/receipt.ts#L34)

___

### toBinary

▸ **toBinary**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Implementation of

Contract.toBinary

#### Defined in

[receipt.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/receipt.ts#L38)

___

### toJson

▸ **toJson**(): `object`

#### Returns

`object`

#### Implementation of

Contract.toJson

#### Defined in

[receipt.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/receipt.ts#L42)

___

### toJsonString

▸ **toJsonString**(): `string`

#### Returns

`string`

#### Implementation of

Contract.toJsonString

#### Defined in

[receipt.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-051/source/receipt.ts#L47)
