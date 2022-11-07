@bearmint/bep-013 - v0.0.0

# @bearmint/bep-013 - v0.0.0

## Table of contents

### Enumerations

- [AccountMetadata](enums/AccountMetadata.md)
- [ContainerType](enums/ContainerType.md)
- [Event](enums/Event.md)
- [TendermintHandler](enums/TendermintHandler.md)
- [TxReceiptEvent](enums/TxReceiptEvent.md)
- [TxReceiptModelSubType](enums/TxReceiptModelSubType.md)
- [TxReceiptModelType](enums/TxReceiptModelType.md)

### Interfaces

- [ABCIController](interfaces/ABCIController.md)
- [Account](interfaces/Account.md)
- [AccountPropertySerializer](interfaces/AccountPropertySerializer.md)
- [AccountRepository](interfaces/AccountRepository.md)
- [AccountRepositoryFactory](interfaces/AccountRepositoryFactory.md)
- [AccountSerializer](interfaces/AccountSerializer.md)
- [AccountValidatorProperties](interfaces/AccountValidatorProperties.md)
- [AccountWithMoniker](interfaces/AccountWithMoniker.md)
- [AccountWithPublicKey](interfaces/AccountWithPublicKey.md)
- [AccountWithValidator](interfaces/AccountWithValidator.md)
- [Address](interfaces/Address.md)
- [AddressFactory](interfaces/AddressFactory.md)
- [Application](interfaces/Application.md)
- [ApplicationManifest](interfaces/ApplicationManifest.md)
- [BEP88Milestone](interfaces/BEP88Milestone.md)
- [BearmintConfiguration](interfaces/BearmintConfiguration.md)
- [BlockchainInitialiser](interfaces/BlockchainInitialiser.md)
- [Bootstrapper](interfaces/Bootstrapper.md)
- [Container](interfaces/Container.md)
- [DataSink](interfaces/DataSink.md)
- [DataSinkDescriptor](interfaces/DataSinkDescriptor.md)
- [DataSinkOp](interfaces/DataSinkOp.md)
- [DelegatorRewarder](interfaces/DelegatorRewarder.md)
- [DelegatorRewarderStrategy](interfaces/DelegatorRewarderStrategy.md)
- [EventDispatcher](interfaces/EventDispatcher.md)
- [EventListener](interfaces/EventListener.md)
- [EventRecorder](interfaces/EventRecorder.md)
- [EventRecorderAttribute](interfaces/EventRecorderAttribute.md)
- [EventRecorderFactory](interfaces/EventRecorderFactory.md)
- [FakerProvider](interfaces/FakerProvider.md)
- [GasCalculator](interfaces/GasCalculator.md)
- [GasMeter](interfaces/GasMeter.md)
- [GasMeterFactory](interfaces/GasMeterFactory.md)
- [GenesisParameters](interfaces/GenesisParameters.md)
- [GenesisValidator](interfaces/GenesisValidator.md)
- [JsonObject](interfaces/JsonObject.md)
- [KVStore](interfaces/KVStore.md)
- [KVStoreCheckpoint](interfaces/KVStoreCheckpoint.md)
- [KVStoreFactory](interfaces/KVStoreFactory.md)
- [KVStoreOpts](interfaces/KVStoreOpts.md)
- [KeyPair](interfaces/KeyPair.md)
- [KeyPairFactory](interfaces/KeyPairFactory.md)
- [Logger](interfaces/Logger.md)
- [Milestone](interfaces/Milestone.md)
- [MilestoneParameters](interfaces/MilestoneParameters.md)
- [MilestoneStrategy](interfaces/MilestoneStrategy.md)
- [MultiStore](interfaces/MultiStore.md)
- [MultiStoreFactory](interfaces/MultiStoreFactory.md)
- [NonNullableMap](interfaces/NonNullableMap.md)
- [Paths](interfaces/Paths.md)
- [Policy](interfaces/Policy.md)
- [PolicyRegistry](interfaces/PolicyRegistry.md)
- [PolicyRegistryFactory](interfaces/PolicyRegistryFactory.md)
- [PrivateKey](interfaces/PrivateKey.md)
- [PrivateKeyFactory](interfaces/PrivateKeyFactory.md)
- [PublicKey](interfaces/PublicKey.md)
- [PublicKeyFactory](interfaces/PublicKeyFactory.md)
- [QueryHandler](interfaces/QueryHandler.md)
- [QueryHandlerOpts](interfaces/QueryHandlerOpts.md)
- [ServiceProvider](interfaces/ServiceProvider.md)
- [ServiceProviderConfig](interfaces/ServiceProviderConfig.md)
- [ServiceProviderDependency](interfaces/ServiceProviderDependency.md)
- [ServiceProviderRepository](interfaces/ServiceProviderRepository.md)
- [Signature](interfaces/Signature.md)
- [SignatureFactory](interfaces/SignatureFactory.md)
- [Slasher](interfaces/Slasher.md)
- [SlasherExecutor](interfaces/SlasherExecutor.md)
- [StakingService](interfaces/StakingService.md)
- [StakingServiceFactory](interfaces/StakingServiceFactory.md)
- [StateStore](interfaces/StateStore.md)
- [StrategyRegistry](interfaces/StrategyRegistry.md)
- [StrategyRegistryFactory](interfaces/StrategyRegistryFactory.md)
- [Tendermint](interfaces/Tendermint.md)
- [TendermintConfiguration](interfaces/TendermintConfiguration.md)
- [Tx](interfaces/Tx.md)
- [TxAssertions](interfaces/TxAssertions.md)
- [TxAssertionsErrorStruct](interfaces/TxAssertionsErrorStruct.md)
- [TxAuditor](interfaces/TxAuditor.md)
- [TxAuditorRegistry](interfaces/TxAuditorRegistry.md)
- [TxBuilder](interfaces/TxBuilder.md)
- [TxData](interfaces/TxData.md)
- [TxDataSink](interfaces/TxDataSink.md)
- [TxExecutor](interfaces/TxExecutor.md)
- [TxExecutorRegistry](interfaces/TxExecutorRegistry.md)
- [TxFactory](interfaces/TxFactory.md)
- [TxManifest](interfaces/TxManifest.md)
- [TxManifestRegistry](interfaces/TxManifestRegistry.md)
- [TxMsgFactory](interfaces/TxMsgFactory.md)
- [TxMsgFactoryRegistry](interfaces/TxMsgFactoryRegistry.md)
- [TxMsgFaker](interfaces/TxMsgFaker.md)
- [TxPrioritizer](interfaces/TxPrioritizer.md)
- [TxProcessor](interfaces/TxProcessor.md)
- [TxReceipt](interfaces/TxReceipt.md)
- [TxTestContext](interfaces/TxTestContext.md)
- [TxToolkit](interfaces/TxToolkit.md)
- [ValidatorElector](interfaces/ValidatorElector.md)
- [ValidatorRewarder](interfaces/ValidatorRewarder.md)
- [ValidatorRewarderStrategy](interfaces/ValidatorRewarderStrategy.md)

### Type Aliases

- [AccountStakes](README.md#accountstakes)
- [BootstrapperConstructor](README.md#bootstrapperconstructor)
- [ClassOrFunctionReturning](README.md#classorfunctionreturning)
- [Constructor](README.md#constructor)
- [Cradle](README.md#cradle)
- [Denomination](README.md#denomination)
- [DenominationType](README.md#denominationtype)
- [FactoryFunction](README.md#factoryfunction)
- [FunctionReturning](README.md#functionreturning)
- [GasCalculatorStrategy](README.md#gascalculatorstrategy)
- [JsonValue](README.md#jsonvalue)
- [KVStoreKey](README.md#kvstorekey)
- [KVStoreValue](README.md#kvstorevalue)
- [Milestones](README.md#milestones)
- [Policies](README.md#policies)
- [PoliciesByModule](README.md#policiesbymodule)
- [QueryHandlerRegistry](README.md#queryhandlerregistry)
- [Strategies](README.md#strategies)
- [StrategiesByModule](README.md#strategiesbymodule)
- [Strategy](README.md#strategy)
- [VoidPromiseFn](README.md#voidpromisefn)

### Variables

- [PROTO\_OPTS](README.md#proto_opts)

## Type Aliases

### AccountStakes

Ƭ **AccountStakes**: `Record`<`string`, `bigint`\>

#### Defined in

[packages/bep-013/source/account.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L24)

___

### BootstrapperConstructor

Ƭ **BootstrapperConstructor**: [`ClassOrFunctionReturning`](README.md#classorfunctionreturning)<[`Bootstrapper`](interfaces/Bootstrapper.md)\>

#### Defined in

[packages/bep-013/source/app.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/app.ts#L24)

___

### ClassOrFunctionReturning

Ƭ **ClassOrFunctionReturning**<`T`\>: [`FunctionReturning`](README.md#functionreturning)<`T`\> \| [`Constructor`](README.md#constructor)<`T`\>

A class or function returning T.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

node_modules/.pnpm/awilix@8.0.0/node_modules/awilix/lib/container.d.ts:150

___

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• **new Constructor**(...`args`): `T`

A class constructor. For example:

   class MyClass {}

   container.registerClass('myClass', MyClass)
                                      ^^^^^^^

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

node_modules/.pnpm/awilix@8.0.0/node_modules/awilix/lib/resolvers.d.ts:93

___

### Cradle

Ƭ **Cradle**<`T`\>: { `AccountRepositoryFactory`: [`AccountRepositoryFactory`](interfaces/AccountRepositoryFactory.md) ; `AccountSerializer`: [`AccountSerializer`](interfaces/AccountSerializer.md) ; `AddressFactory`: [`AddressFactory`](interfaces/AddressFactory.md) ; `Application`: [`Application`](interfaces/Application.md) ; `ApplicationManifest`: [`ApplicationManifest`](interfaces/ApplicationManifest.md) ; `BearmintConfiguration`: [`BearmintConfiguration`](interfaces/BearmintConfiguration.md) ; `CheckTxState`: [`StateStore`](interfaces/StateStore.md) ; `CommittedState`: [`StateStore`](interfaces/StateStore.md) ; `Container`: [`Container`](interfaces/Container.md) ; `DataSink`: [`DataSink`](interfaces/DataSink.md) ; `DelegatorRewarder`: [`DelegatorRewarder`](interfaces/DelegatorRewarder.md) ; `DelegatorSlasher`: [`SlasherExecutor`](interfaces/SlasherExecutor.md) ; `DeliverTxState`: [`StateStore`](interfaces/StateStore.md) ; `EventDispatcher`: [`EventDispatcher`](interfaces/EventDispatcher.md) ; `EventRecorderFactory`: [`EventRecorderFactory`](interfaces/EventRecorderFactory.md) ; `GasCalculator`: [`GasCalculator`](interfaces/GasCalculator.md) ; `GasMeterFactory`: [`GasMeterFactory`](interfaces/GasMeterFactory.md) ; `GenesisParameters`: [`GenesisParameters`](interfaces/GenesisParameters.md) ; `KVStoreFactory`: [`KVStoreFactory`](interfaces/KVStoreFactory.md) ; `KeyPairFactory`: [`KeyPairFactory`](interfaces/KeyPairFactory.md) ; `Logger`: [`Logger`](interfaces/Logger.md) ; `MilestoneStrategy`: [`MilestoneStrategy`](interfaces/MilestoneStrategy.md) ; `Milestones`: [`Milestones`](README.md#milestones) ; `MultiStoreFactory`: [`MultiStoreFactory`](interfaces/MultiStoreFactory.md) ; `Paths`: [`Paths`](interfaces/Paths.md) ; `PolicyRegistry`: [`PolicyRegistry`](interfaces/PolicyRegistry.md) ; `PrivateKeyFactory`: [`PrivateKeyFactory`](interfaces/PrivateKeyFactory.md) ; `PublicKeyFactory`: [`PublicKeyFactory`](interfaces/PublicKeyFactory.md) ; `QueryHandlerRegistry`: [`QueryHandlerRegistry`](README.md#queryhandlerregistry) ; `ServiceProviderRepository`: [`ServiceProviderRepository`](interfaces/ServiceProviderRepository.md) ; `SignatureFactory`: [`SignatureFactory`](interfaces/SignatureFactory.md) ; `StakingServiceFactory`: [`StakingServiceFactory`](interfaces/StakingServiceFactory.md) ; `StrategyRegistry`: [`StrategyRegistry`](interfaces/StrategyRegistry.md) ; `Tendermint`: [`Tendermint`](interfaces/Tendermint.md) ; `TendermintConfiguration`: [`TendermintConfiguration`](interfaces/TendermintConfiguration.md) ; `TxAuditorRegistry`: [`TxAuditorRegistry`](interfaces/TxAuditorRegistry.md) ; `TxExecutorRegistry`: [`TxExecutorRegistry`](interfaces/TxExecutorRegistry.md) ; `TxFactory`: [`TxFactory`](interfaces/TxFactory.md) ; `TxManifestRegistry`: [`TxManifestRegistry`](interfaces/TxManifestRegistry.md) ; `TxMsgFactoryRegistry`: [`TxMsgFactoryRegistry`](interfaces/TxMsgFactoryRegistry.md) ; `TxPrioritizer`: [`TxPrioritizer`](interfaces/TxPrioritizer.md) ; `TxProcessor`: [`TxProcessor`](interfaces/TxProcessor.md) ; `ValidatorElector`: [`ValidatorElector`](interfaces/ValidatorElector.md) ; `ValidatorRewarder`: [`ValidatorRewarder`](interfaces/ValidatorRewarder.md) ; `ValidatorSlasher`: [`SlasherExecutor`](interfaces/SlasherExecutor.md) ; `VersionedRegistryFactory`: `VersionedRegistryFactory`  } & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `unknown`\> |

#### Defined in

[packages/bep-013/source/container.ts:128](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L128)

___

### Denomination

Ƭ **Denomination**: `string`

#### Defined in

[packages/bep-013/source/account.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L21)

___

### DenominationType

Ƭ **DenominationType**: ``"gas"`` \| ``"reward"`` \| ``"stake"`` \| ``"token"``

#### Defined in

[packages/bep-013/source/account.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/account.ts#L22)

___

### FactoryFunction

Ƭ **FactoryFunction**<`T`\>: (`cradle`: [`Cradle`](README.md#cradle)) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`cradle`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cradle` | [`Cradle`](README.md#cradle) |

##### Returns

`T`

#### Defined in

[packages/bep-013/source/container.ts:68](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L68)

___

### FunctionReturning

Ƭ **FunctionReturning**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (...`args`): `T`

Function that returns T.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

node_modules/.pnpm/awilix@8.0.0/node_modules/awilix/lib/container.d.ts:146

___

### GasCalculatorStrategy

Ƭ **GasCalculatorStrategy**: [`GasCalculator`](interfaces/GasCalculator.md)

#### Defined in

[packages/bep-013/source/gas.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/gas.ts#L33)

___

### JsonValue

Ƭ **JsonValue**: `number` \| `string` \| `boolean` \| ``null`` \| [`JsonObject`](interfaces/JsonObject.md) \| [`JsonValue`](README.md#jsonvalue)[]

#### Defined in

[packages/bep-013/source/json.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/json.ts#L18)

___

### KVStoreKey

Ƭ **KVStoreKey**: `Uint8Array` \| `string`

#### Defined in

[packages/bep-013/source/store.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L18)

___

### KVStoreValue

Ƭ **KVStoreValue**: `Uint8Array` \| `string`

#### Defined in

[packages/bep-013/source/store.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/store.ts#L19)

___

### Milestones

Ƭ **Milestones**: `Record`<`string`, { `blockNumber`: `string` ; `milestones`: [`Milestone`](interfaces/Milestone.md)[]  }\>

#### Defined in

[packages/bep-013/source/milestone.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/milestone.ts#L43)

___

### Policies

Ƭ **Policies**: `Record`<`string`, [`Policy`](interfaces/Policy.md)\>

#### Defined in

[packages/bep-013/source/policies.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L26)

___

### PoliciesByModule

Ƭ **PoliciesByModule**: `Record`<`string`, [`Policies`](README.md#policies)\>

#### Defined in

[packages/bep-013/source/policies.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/policies.ts#L28)

___

### QueryHandlerRegistry

Ƭ **QueryHandlerRegistry**: `Set`<[`ClassOrFunctionReturning`](README.md#classorfunctionreturning)<[`QueryHandler`](interfaces/QueryHandler.md)\>\>

#### Defined in

[packages/bep-013/source/tendermint.ts:127](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/tendermint.ts#L127)

___

### Strategies

Ƭ **Strategies**<`T`\>: `Record`<`string`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[packages/bep-013/source/strategies.ts:2](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L2)

___

### StrategiesByModule

Ƭ **StrategiesByModule**: `Record`<`string`, [`Strategies`](README.md#strategies)\>

#### Defined in

[packages/bep-013/source/strategies.ts:3](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L3)

___

### Strategy

Ƭ **Strategy**: `unknown`

#### Defined in

[packages/bep-013/source/strategies.ts:1](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/strategies.ts#L1)

___

### VoidPromiseFn

Ƭ **VoidPromiseFn**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/bep-013/source/container.ts:66](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/container.ts#L66)

## Variables

### PROTO\_OPTS

• `Const` **PROTO\_OPTS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `readUnknownFields` | `boolean` |

#### Defined in

[packages/bep-013/source/index.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/index.ts#L42)
