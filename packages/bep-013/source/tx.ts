import type {
	abci,
	AnyMessage,
	Message,
	Plain,
	SignedTx,
	TxChecksum,
	TxMsg,
	TxReceiptLog,
} from '@bearmint/bep-018'
import type { ClassOrFunctionReturning } from 'awilix'

import type { Account, AccountWithPublicKey } from './account.js'
import type { Address, PublicKey } from './crypto.js'
import type { GasMeter } from './gas.js'
import type { StateStore } from './state.js'
import type { KVStoreKey } from './store.js'
import type { EventRecorder } from './tendermint.js'
import type { NonNullableMap } from './utils.js'

export interface Tx {
	bytes: Uint8Array
	checksum: TxChecksum
	data: TxData
	hash: string
	raw: SignedTx
	type: string // blake3 of TxChecksum
}

export interface TxData {
	version: string
	sender: PublicKey
	recipient: Address
	nonce: bigint
	gas: bigint
	message: TxMsg
	signature: Uint8Array
}

export interface TxAssertionsErrorStruct {
	key: string
	value?: string
}

export interface TxAssertions {
	accountHasValidator(account: Account, error?: TxAssertionsErrorStruct | undefined): void
	byteLength(
		propertyKey: string,
		value: Uint8Array,
		error?: TxAssertionsErrorStruct | undefined,
	): void
	byteLengthFromString(
		propertyKey: string,
		value: string | undefined,
		error?: TxAssertionsErrorStruct | undefined,
	): void
	charLength(propertyKey: string, value: string, error?: TxAssertionsErrorStruct | undefined): void
	count(
		propertyKey: string,
		values: unknown[] | number,
		error?: TxAssertionsErrorStruct | undefined,
	): void
	equity(value: bigint | undefined, error: TxAssertionsErrorStruct): void
	future(value: bigint, error: TxAssertionsErrorStruct): Promise<void>
	hashEquality(
		algorithm: string,
		actual: Uint8Array,
		expected: Uint8Array,
		error: TxAssertionsErrorStruct,
	): void
	hashLength(algorithm: string, value: Uint8Array, error: TxAssertionsErrorStruct): void
	knownByList(key: string, value: unknown, error?: TxAssertionsErrorStruct | undefined): void
	loopback(): Promise<void>
	memoLength(memo: string | undefined, ops?: Array<{ memo?: string | undefined }>): void
	notPrincipalCurrency(value: string, error: TxAssertionsErrorStruct): void
	notTombstoned(account: Account): Promise<void>
	past(value: bigint, error: TxAssertionsErrorStruct): Promise<void>
	positiveNumber(value: bigint | undefined, error: TxAssertionsErrorStruct): void
	range(
		propertyKey: string,
		value: number | string,
		error?: TxAssertionsErrorStruct | undefined,
	): void
	recipientAddress(
		address: Address | string,
		error?: TxAssertionsErrorStruct | undefined,
	): Promise<void>
	regex(propertyKey: string, value: string, error?: TxAssertionsErrorStruct | undefined): void
	relational(): Promise<void>
	relationalRecipient(
		sender: string,
		recipient: string,
		error?: TxAssertionsErrorStruct | undefined,
	): void
	uniqueList<T>(
		items: T[],
		compositeKey: (item: T) => string,
		error?: TxAssertionsErrorStruct | undefined,
	): void
	uniqueModuleStoreKey(
		moduleName: string,
		key: KVStoreKey,
		error: TxAssertionsErrorStruct,
	): Promise<void>
	uniqueOps<T>(
		ops: T[],
		compositeKey: (item: T) => string,
		error?: TxAssertionsErrorStruct | undefined,
	): void
	validatorAuthenticity(
		msg: Uint8Array,
		publicKey: Uint8Array,
		signature: Uint8Array,
	): Promise<void>
	validatorExists(moniker: string): Promise<void>
}

export interface TxToolkit {
	findOrCreateAccountByAddress(address: string): Promise<Account>
	getActiveValidatorAddresses(): Promise<string[]>
	getModuleMilestone<T = Record<string, any>>(
		name?: string | undefined,
		version?: string | undefined,
	): T & ({} | null)
	getBalance(account: Account, denomination: string, errorKey?: string | undefined): bigint
	getRecipientsFromOps(sender?: Account): Promise<NonNullableMap<Account>>
	getSender(): Promise<AccountWithPublicKey>
	getSenderWithRecipient(): Promise<{ recipient: Account; sender: AccountWithPublicKey }>
}

/**
 * Ensures that the transaction is applicable to the application state.
 */
export interface TxAuditor<TMsg = object> {
	execute(args: {
		assert: TxAssertions
		eventRecorder: EventRecorder
		msg: TMsg
		state: StateStore
		toolkit: TxToolkit
		tx: Tx
	}): Promise<void>
}

/**
 * Executes the transaction and mutates the application state.
 */
export interface TxExecutor<TMsg = object> {
	execute(args: {
		assert: TxAssertions
		eventRecorder: EventRecorder
		receipt: TxReceipt
		msg: TMsg
		state: StateStore
		toolkit: TxToolkit
		tx: Tx
	}): Promise<void>
}

export interface TxTestContext {
	/**
	 * Verifies the structural and logical integrity of the given tx.
	 */
	verify(): Promise<abci.Event>

	/**
	 * Mutates application state based on the given tx.
	 */
	execute(): Promise<abci.Event>
}

export interface TxFactory {
	fromBytes(bytes: Uint8Array): Promise<Tx>
}

export interface TxAuditorRegistry {
	all(): Record<string, Record<string, TxAuditor>>
	forget(handler: string, version: string): void
	get(handler: string, version: string): TxAuditor
	getFromTx(tx: Tx): TxAuditor
	set(handler: string, version: string, constructor: ClassOrFunctionReturning<TxAuditor>): void
}

export interface TxExecutorRegistry {
	all(): Record<string, Record<string, TxExecutor>>
	forget(handler: string, version: string): void
	get(handler: string, version: string): TxExecutor
	getFromTx(tx: Tx): TxExecutor
	set(handler: string, version: string, constructor: ClassOrFunctionReturning<TxExecutor>): void
}

export interface TxProcessor {
	execute(
		eventRecorder: EventRecorder,
		gasMeter: GasMeter,
		state: StateStore,
		tx: Tx,
	): Promise<{ events: abci.Event[]; receipt: TxReceipt }>
}

export interface TxPrioritizer {
	execute(tx: Tx): Promise<bigint>
}

export interface FakerProvider<I, O> {
	execute(args: I): Promise<O>
}

export interface TxMsgFaker<T extends Message = AnyMessage, O = object> {
	execute(data: Plain<T>, options?: O | undefined): Promise<Uint8Array>
}

export interface TxBuilder<T extends Message = AnyMessage> {
	execute(
		data: Plain<T>,
		options: {
			network: string
			version: string
		},
	): Promise<TxMsg>
}

export interface TxMsgFactory {
	fromTx(tx: Tx)
	fromBytes(bytes: Uint8Array)
}

export interface TxMsgFactoryRegistry {
	all(): Record<string, Record<string, TxMsgFactory>>
	forget(handler: string, version: string): void
	get<T = TxMsgFactory>(handler: string, version: string): T
	getFromTx<T = TxMsgFactory>(tx: Tx): T
	set(handler: string, version: string, constructor: ClassOrFunctionReturning<TxMsgFactory>): void
}

export interface TxManifest {
	name(): string
	version(): string
	checksum(): string
}

export interface TxManifestRegistry {
	all(): Record<string, Record<string, TxManifest>>
	forget(handler: string, version: string): void
	get(handler: string, version: string): TxManifest
	getFromTx(tx: Tx): TxManifest
	set(handler: string, version: string, constructor: ClassOrFunctionReturning<TxManifest>): void
}

export interface TxDataSink {
	metadata: {
		account: {
			del(account: Account, key: string, value: object, moduleName?: string | undefined): void
			put(account: Account, key: string, value: object, moduleName?: string | undefined): void
		}
		tx: {
			del(key: string, value: object, moduleName?: string | undefined): void
			put(key: string, value: object, moduleName?: string | undefined): void
		}
	}
}

export interface TxReceipt {
	log(event: string, args: object): void
	logs(): TxReceiptLog[]
	toBinary(): Uint8Array
	toJson(): object
	toJsonString(): string
}

export enum TxReceiptEvent {
	AccountCreated = 'AccountCreated',
	AccountPropertyUpdated = 'AccountPropertyUpdated',
	AccountUpdated = 'AccountUpdated',
	BalanceDecreased = 'BalanceDecreased',
	BalanceIncreased = 'BalanceIncreased',
	DataCreated = 'DataCreated',
	DataDeleted = 'DataDeleted',
	DataUpdated = 'DataUpdated',
	DelegatorDeleted = 'DelegatorDeleted',
	DelegatorUpdated = 'DelegatorUpdated',
	LockedBalanceDecreased = 'LockedBalanceDecreased',
	LockedBalanceIncreased = 'LockedBalanceIncreased',
	MetadataCreated = 'MetadataCreated',
	MetadataDeleted = 'MetadataDeleted',
	MetadataUpdated = 'MetadataUpdated',
	OwnerChanged = 'OwnerChanged',
	PowerDecreased = 'PowerDecreased',
	PowerIncreased = 'PowerIncreased',
	StakeDecreased = 'StakeDecreased',
	StakeDeleted = 'StakeDeleted',
	StakeIncreased = 'StakeIncreased',
}

export enum TxReceiptModelType {
	Account = 'account',
	Tx = 'tx',
}

export enum TxReceiptModelSubType {
	Metadata = 'metadata',
	Receipt = 'receipt',
}
