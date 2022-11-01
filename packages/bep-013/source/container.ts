import type { ClassOrFunctionReturning, Constructor, FunctionReturning, Resolver } from 'awilix'

import type { AccountSerializer } from './account.js'
import type { Application } from './app.js'
import type { BearmintConfiguration, TendermintConfiguration } from './config.js'
import type { ValidatorElector } from './consensus.js'
import type {
	AddressFactory,
	KeyPairFactory,
	PrivateKeyFactory,
	PublicKeyFactory,
	SignatureFactory,
} from './crypto.js'
import type { DataSink } from './data.js'
import type { EventDispatcher } from './event.js'
import type { GasCalculator, GasMeterFactory } from './gas.js'
import type { Logger } from './logger.js'
import type { Milestones, MilestoneStrategy } from './milestone.js'
import type { PolicyRegistry } from './policies.js'
import type { VersionedRegistryFactory } from './registry.js'
import type { DelegatorRewarder, ValidatorRewarder } from './reward.js'
import type { ServiceProviderRepository } from './service-provider.js'
import type { SlasherExecutor } from './slash.js'
import type { SnapshotService } from './snapshot.js'
import type {
	AccountRepositoryFactory,
	MultiStoreFactory,
	StakingServiceFactory,
	StateStore,
} from './state.js'
import type { KVStoreFactory } from './store.js'
import type { StrategyRegistry } from './strategies.js'
import type {
	ApplicationManifest,
	EventRecorderFactory,
	GenesisParameters,
	QueryHandlerRegistry,
	Tendermint,
} from './tendermint.js'
import type {
	TxAuditorRegistry,
	TxExecutorRegistry,
	TxFactory,
	TxManifestRegistry,
	TxMsgFactoryRegistry,
	TxPrioritizer,
	TxProcessor,
} from './tx.js'

export type VoidPromiseFn = () => Promise<void>

export type FactoryFunction<T> = (cradle: Cradle) => T

export interface Paths {
	readonly data: string
	readonly config: string
	readonly cache: string
	readonly log: string
	readonly temp: string
}

export enum ContainerType {
	AccountRepositoryFactory = 'AccountRepositoryFactory',
	AccountSerializer = 'AccountSerializer',
	AddressFactory = 'AddressFactory',
	Application = 'Application',
	ApplicationManifest = 'ApplicationManifest',
	BearmintConfiguration = 'BearmintConfiguration',
	CheckTxState = 'CheckTxState',
	CommittedState = 'CommittedState',
	Consensus = 'Consensus',
	Container = 'Container',
	DataSink = 'DataSink',
	DelegatorRewarder = 'DelegatorRewarder',
	DelegatorSlasher = 'DelegatorSlasher',
	EventDispatcher = 'EventDispatcher',
	EventRecorderFactory = 'EventRecorderFactory',
	ExecuteTxState = 'ExecuteTxState',
	GasCalculator = 'GasCalculator',
	GasMeterFactory = 'GasMeterFactory',
	GenesisParameters = 'GenesisParameters',
	KeyPairFactory = 'KeyPairFactory',
	KVStoreFactory = 'KVStoreFactory',
	Logger = 'Logger',
	Milestones = 'Milestones',
	MilestoneStrategy = 'MilestoneStrategy',
	MultiStoreFactory = 'MultiStoreFactory',
	Paths = 'Paths',
	PolicyRegistry = 'PolicyRegistry',
	PrivateKeyFactory = 'PrivateKeyFactory',
	PublicKeyFactory = 'PublicKeyFactory',
	QueryHandlerRegistry = 'QueryHandlerRegistry',
	ServiceProviderRepository = 'ServiceProviderRepository',
	SignatureFactory = 'SignatureFactory',
	SnapshotService = 'SnapshotService',
	StakingServiceFactory = 'StakingServiceFactory',
	StrategyRegistry = 'StrategyRegistry',
	Tendermint = 'Tendermint',
	TendermintConfiguration = 'TendermintConfiguration',
	TxAuditorRegistry = 'TxAuditorRegistry',
	TxExecutorRegistry = 'TxExecutorRegistry',
	TxFactory = 'TxFactory',
	TxManifestRegistry = 'TxManifestRegistry',
	TxMsgFactoryRegistry = 'TxMsgFactoryRegistry',
	TxPrioritizer = 'TxPrioritizer',
	TxProcessor = 'TxProcessor',
	ValidatorElector = 'ValidatorElector',
	ValidatorRewarder = 'ValidatorRewarder',
	ValidatorSlasher = 'ValidatorSlasher',
	VersionedRegistryFactory = 'VersionedRegistryFactory',
}

export type Cradle<T = Record<string, unknown>> = {
	AccountRepositoryFactory: AccountRepositoryFactory
	AccountSerializer: AccountSerializer
	AddressFactory: AddressFactory
	Application: Application
	ApplicationManifest: ApplicationManifest
	BearmintConfiguration: BearmintConfiguration
	CheckTxState: StateStore
	CommittedState: StateStore
	Container: Container
	DataSink: DataSink
	DelegatorRewarder: DelegatorRewarder
	DelegatorSlasher: SlasherExecutor
	EventDispatcher: EventDispatcher
	EventRecorderFactory: EventRecorderFactory
	ExecuteTxState: StateStore
	GasCalculator: GasCalculator
	GasMeterFactory: GasMeterFactory
	GenesisParameters: GenesisParameters
	KeyPairFactory: KeyPairFactory
	KVStoreFactory: KVStoreFactory
	Logger: Logger
	Milestones: Milestones
	MilestoneStrategy: MilestoneStrategy
	MultiStoreFactory: MultiStoreFactory
	Paths: Paths
	PolicyRegistry: PolicyRegistry
	PrivateKeyFactory: PrivateKeyFactory
	PublicKeyFactory: PublicKeyFactory
	QueryHandlerRegistry: QueryHandlerRegistry
	ServiceProviderRepository: ServiceProviderRepository
	SignatureFactory: SignatureFactory
	SnapshotService: SnapshotService
	StakingServiceFactory: StakingServiceFactory
	StrategyRegistry: StrategyRegistry
	Tendermint: Tendermint
	TendermintConfiguration: TendermintConfiguration
	TxAuditorRegistry: TxAuditorRegistry
	TxExecutorRegistry: TxExecutorRegistry
	TxFactory: TxFactory
	TxManifestRegistry: TxManifestRegistry
	TxMsgFactoryRegistry: TxMsgFactoryRegistry
	TxPrioritizer: TxPrioritizer
	TxProcessor: TxProcessor
	ValidatorElector: ValidatorElector
	ValidatorRewarder: ValidatorRewarder
	ValidatorSlasher: SlasherExecutor
	VersionedRegistryFactory: VersionedRegistryFactory
} & T

export interface Container {
	bindClass<T>(key: string, value: Constructor<T>): void
	bindClassSingleton<T>(key: string, value: Constructor<T>): void
	bindFunction<T>(key: string, value: FunctionReturning<T>): void
	bindFunctionSingleton<T>(key: string, value: FunctionReturning<T>): void
	bindValue<T>(key: string, value: T): void
	build<T>(value: ClassOrFunctionReturning<T> | Resolver<T>): T
	createScope(): Container
	resolve<T>(key: string): T
	has(key: string): boolean
	missing(key: string): boolean
}
