[@bearmint/bep-013 - v0.0.0](../README.md) / DataSink

# Interface: DataSink

## Table of contents

### Methods

- [all](DataSink.md#all)
- [clear](DataSink.md#clear)
- [del](DataSink.md#del)
- [put](DataSink.md#put)
- [values](DataSink.md#values)

## Methods

### all

▸ **all**(): `Set`<[`DataSinkOp`](DataSinkOp.md)\>

#### Returns

`Set`<[`DataSinkOp`](DataSinkOp.md)\>

#### Defined in

[packages/bep-013/source/data.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/data.ts#L33)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/bep-013/source/data.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/data.ts#L34)

___

### del

▸ **del**(`module`, `descriptor`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `descriptor` | [`DataSinkDescriptor`](DataSinkDescriptor.md) |
| `data?` | `object` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/data.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/data.ts#L35)

___

### put

▸ **put**(`module`, `descriptor`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `string` |
| `descriptor` | [`DataSinkDescriptor`](DataSinkDescriptor.md) |
| `data?` | `object` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/data.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/data.ts#L36)

___

### values

▸ **values**(): [`DataSinkOp`](DataSinkOp.md)[]

#### Returns

[`DataSinkOp`](DataSinkOp.md)[]

#### Defined in

[packages/bep-013/source/data.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/data.ts#L37)
