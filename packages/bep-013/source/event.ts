import type { ClassOrFunctionReturning } from 'awilix'

export enum Event {
	AbciRequestProcessed = 'AbciRequestProcessed',
	AbciRequestProcessing = 'AbciRequestProcessing',
	AccountIndexed = 'AccountIndexed',
	BalanceDecreased = 'BalanceDecreased',
	BalanceIncreased = 'BalanceIncreased',
	Bootstrapped = 'Bootstrapped',
	Bootstrapping = 'Bootstrapping',
	CommittedStateCreated = 'CommittedStateCreated',
	LockedBalanceDecreased = 'LockedBalanceDecreased',
	LockedBalanceIncreased = 'LockedBalanceIncreased',
	MilestoneChanged = 'MilestoneChanged',
	MilestoneChanging = 'MilestoneChanging',
	ServiceProviderBooted = 'ServiceProviderBooted',
	ServiceProviderBooting = 'ServiceProviderBooting',
	ServiceProviderDisposed = 'ServiceProviderDisposed',
	ServiceProviderDisposing = 'ServiceProviderDisposing',
	ServiceProviderRegistered = 'ServiceProviderRegistered',
	ServiceProviderRegistering = 'ServiceProviderRegistering',
	StakeDecreased = 'StakeDecreased',
	StakeIncreased = 'StakeIncreased',
	TransactionAudited = 'TransactionAudited',
	TransactionAuditing = 'TransactionAuditing',
	TransactionExecuted = 'TransactionExecuted',
	TransactionExecuting = 'TransactionExecuting',
	TransactionIndexed = 'TransactionIndexed',
	ValidatorCandidateElected = 'ValidatorCandidateElected',
	ValidatorCandidateElecting = 'ValidatorCandidateElecting',
	ValidatorPowerDecreased = 'ValidatorPowerDecreased',
	ValidatorPowerIncreased = 'ValidatorPowerIncreased',
}

export interface EventListener<T = any> {
	execute(data: T, name: string): Promise<void>
}

export interface EventDispatcher {
	dispatch(eventName: string, eventData?: unknown | undefined): Promise<void>
	dispatchSerial(eventName: string, eventData?: unknown | undefined): Promise<void>
	listen(eventName: string, eventListener: ClassOrFunctionReturning<EventListener>): () => void
}
