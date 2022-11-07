[@bearmint/bep-013 - v0.0.0](../README.md) / EventRecorder

# Interface: EventRecorder

## Table of contents

### Methods

- [actingAs](EventRecorder.md#actingas)
- [all](EventRecorder.md#all)
- [captureError](EventRecorder.md#captureerror)
- [captureErrors](EventRecorder.md#captureerrors)
- [captureEvent](EventRecorder.md#captureevent)
- [captureEvents](EventRecorder.md#captureevents)
- [errors](EventRecorder.md#errors)
- [events](EventRecorder.md#events)
- [hasErrors](EventRecorder.md#haserrors)
- [hasEvents](EventRecorder.md#hasevents)

## Methods

### actingAs

▸ **actingAs**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tendermint.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L40)

___

### all

▸ **all**(): `Event`

#### Returns

`Event`

#### Defined in

[packages/bep-013/source/tendermint.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L41)

___

### captureError

▸ **captureError**(`attribute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`EventRecorderAttribute`](EventRecorderAttribute.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tendermint.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L42)

___

### captureErrors

▸ **captureErrors**(`attributes`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`EventRecorderAttribute`](EventRecorderAttribute.md)[] |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/tendermint.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L43)

___

### captureEvent

▸ **captureEvent**(`attribute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | [`EventRecorderAttribute`](EventRecorderAttribute.md) |

#### Returns

`void`

#### Defined in

[packages/bep-013/source/tendermint.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L44)

___

### captureEvents

▸ **captureEvents**(`attributes`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | [`EventRecorderAttribute`](EventRecorderAttribute.md)[] |

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/tendermint.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L45)

___

### errors

▸ **errors**(): `Event`

#### Returns

`Event`

#### Defined in

[packages/bep-013/source/tendermint.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L46)

___

### events

▸ **events**(): `Event`

#### Returns

`Event`

#### Defined in

[packages/bep-013/source/tendermint.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L47)

___

### hasErrors

▸ **hasErrors**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/tendermint.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L48)

___

### hasEvents

▸ **hasEvents**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/bep-013/source/tendermint.ts:49](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L49)
