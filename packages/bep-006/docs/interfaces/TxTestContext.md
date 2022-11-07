[@bearmint/bep-006 - v0.0.0](../README.md) / TxTestContext

# Interface: TxTestContext

## Table of contents

### Properties

- [accountFromMnemonic](TxTestContext.md#accountfrommnemonic)
- [accountSerializer](TxTestContext.md#accountserializer)
- [addressFactory](TxTestContext.md#addressfactory)
- [audit](TxTestContext.md#audit)
- [client](TxTestContext.md#client)
- [container](TxTestContext.md#container)
- [eventDispatcher](TxTestContext.md#eventdispatcher)
- [eventRecorder](TxTestContext.md#eventrecorder)
- [execute](TxTestContext.md#execute)
- [executeFull](TxTestContext.md#executefull)
- [makeTx](TxTestContext.md#maketx)
- [receipt](TxTestContext.md#receipt)
- [serviceProviderRepository](TxTestContext.md#serviceproviderrepository)
- [stakingService](TxTestContext.md#stakingservice)
- [state](TxTestContext.md#state)

## Properties

### accountFromMnemonic

• **accountFromMnemonic**: (`mnemonic`: `string`) => `Promise`<{ `account`: `Account`<`Record`<`string`, `any`\>\> ; `keypair`: `KeyPair`  }\>

#### Type declaration

▸ (`mnemonic`): `Promise`<{ `account`: `Account`<`Record`<`string`, `any`\>\> ; `keypair`: `KeyPair`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

##### Returns

`Promise`<{ `account`: `Account`<`Record`<`string`, `any`\>\> ; `keypair`: `KeyPair`  }\>

#### Defined in

[types.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L36)

___

### accountSerializer

• **accountSerializer**: `AccountSerializer`

#### Defined in

[types.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L35)

___

### addressFactory

• **addressFactory**: `AddressFactory`

#### Defined in

[types.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L37)

___

### audit

• **audit**: (`tx`: `Tx`) => `Promise`<`VoidPromiseFn`\>

#### Type declaration

▸ (`tx`): `Promise`<`VoidPromiseFn`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Tx` |

##### Returns

`Promise`<`VoidPromiseFn`\>

#### Defined in

[types.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L38)

___

### client

• **client**: `any`

#### Defined in

[types.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L39)

___

### container

• **container**: `Container`

#### Defined in

[types.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L40)

___

### eventDispatcher

• **eventDispatcher**: `EventDispatcher`

#### Defined in

[types.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L41)

___

### eventRecorder

• **eventRecorder**: `EventRecorder`

#### Defined in

[types.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L42)

___

### execute

• **execute**: (`tx`: `Tx`) => `Promise`<`VoidPromiseFn`\>

#### Type declaration

▸ (`tx`): `Promise`<`VoidPromiseFn`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Tx` |

##### Returns

`Promise`<`VoidPromiseFn`\>

#### Defined in

[types.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L43)

___

### executeFull

• **executeFull**: (`tx`: `Tx`) => `Promise`<`void`\>

#### Type declaration

▸ (`tx`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Tx` |

##### Returns

`Promise`<`void`\>

#### Defined in

[types.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L44)

___

### makeTx

• **makeTx**: (`sender`: `KeyPair`, `recipient`: `KeyPair`, `content`: `Uint8Array`, `handler?`: `string`, `version?`: `string`) => `Promise`<`Tx`\>

#### Type declaration

▸ (`sender`, `recipient`, `content`, `handler?`, `version?`): `Promise`<`Tx`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `KeyPair` |
| `recipient` | `KeyPair` |
| `content` | `Uint8Array` |
| `handler?` | `string` |
| `version?` | `string` |

##### Returns

`Promise`<`Tx`\>

#### Defined in

[types.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L45)

___

### receipt

• **receipt**: `TxReceipt`

#### Defined in

[types.ts:52](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L52)

___

### serviceProviderRepository

• **serviceProviderRepository**: `ServiceProviderRepository`

#### Defined in

[types.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L53)

___

### stakingService

• **stakingService**: `StakingService`

#### Defined in

[types.ts:54](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L54)

___

### state

• **state**: `StateStore`

#### Defined in

[types.ts:55](https://github.com/bearmint/bearmint/blob/main/packages/bep-006/source/types.ts#L55)
