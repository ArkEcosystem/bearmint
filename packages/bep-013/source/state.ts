import type { abci, BEP88Validator } from '@bearmint/bep-018'

import type { Account, AccountRepository, AccountWithValidator } from './account.js'
import type { Milestone } from './milestone.js'
import type { KVStore, KVStoreOpts } from './store.js'

export interface StateStore {
	// Mutation
	copy(): Promise<StateStore>

	// KVStore Checkpoints
	hasCheckpoints(): boolean
	checkpoint(): Promise<void>
	commit(candidateState?: StateStore | undefined): Promise<{ height: bigint; root: Uint8Array }>
	revert(): Promise<void>

	// Stores
	getMultiStore(): MultiStore
	getTxReceiptStore(): KVStore
	getTxStore(): KVStore

	// Accounts
	getAccountRepository(): AccountRepository
	setAccountRepository(values: AccountRepository): void

	// Gas Consumption
	setConsumedGas(gas: bigint): void
	getConsumedGas(): bigint

	// Milestones
	getMilestone<T = object>(): Milestone<T>
	setMilestone(milestone: Milestone): Promise<void>

	// The root of the
	getAppHash(): Uint8Array

	// A candidate block is a block that has not yet reached consensus
	hasCandidateBlock(): boolean
	getCandidateBlock(): abci.RequestFinalizeBlock
	setCandidateBlock(proposedBlock: abci.RequestFinalizeBlock): void
	getCandidateBlockHash(): Uint8Array
	getCandidateBlockNumber(): bigint
	getCandidateBlockProposer(): Uint8Array

	// A committed block is a block that has reached consensus and has been persisted
	getCommittedBlockNumber(): Promise<bigint>
	getCommittedBlock(): Promise<abci.RequestFinalizeBlock>
	setCommittedBlock(block: abci.RequestFinalizeBlock): Promise<void>
	getCommittedBlockAppHash(): Promise<Uint8Array>

	// The last set of validator updates
	getValidatorUpdates(): Promise<abci.ValidatorUpdate[]>
	setValidatorUpdates(updates: abci.ValidatorUpdate[]): Promise<void>
}

export interface AccountRepositoryFactory {
	make(tries: {
		account: KVStore
		accountMoniker: KVStore
		accountPublicKey: KVStore
		accountValidatorAddress: KVStore
	}): AccountRepository
}

export interface MultiStore {
	add(module: string, opts?: KVStoreOpts): Promise<void>
	all(): Record<string, KVStore>
	checkpoint(): void
	copy(): MultiStore
	get(module: string): KVStore
	hasCheckpoints(): boolean
	revert(): Promise<void>
	roots(): Record<string, Buffer>
	set(module: string, trie: KVStore): void
}

export interface MultiStoreFactory {
	make(): MultiStore
}

export interface StakingService {
	allByValidator(validator: AccountWithValidator): Promise<BEP88Validator>
	keysByValidator(validator: AccountWithValidator): Promise<string[]>
	valuesByValidator(validator: AccountWithValidator): Promise<bigint[]>

	increaseStake(validator: AccountWithValidator, delegator: Account, stake: bigint): Promise<void>
	decreaseStake(validator: AccountWithValidator, delegator: Account, stake: bigint): Promise<void>
	multiplyStake(
		validator: AccountWithValidator,
		delegator: Account,
		percentage: number,
	): Promise<void>

	attach(validator: AccountWithValidator, delegator: Account, stake: bigint): Promise<void>
	detach(validator: AccountWithValidator, delegator: Account): Promise<void>
}

export interface StakingServiceFactory {
	make(state: StateStore): StakingService
}
