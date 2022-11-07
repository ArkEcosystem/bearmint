import type {
	Account,
	AccountSerializer,
	AddressFactory,
	Container,
	EventDispatcher,
	EventRecorder,
	KeyPair,
	ServiceProviderRepository,
	StakingService,
	StateStore,
	Tx,
	TxReceipt,
	VoidPromiseFn,
} from '@bearmint/bep-013'

export interface TxTestContext {
	accountSerializer: AccountSerializer
	accountFromMnemonic: (mnemonic: string) => Promise<{ account: Account; keypair: KeyPair }>
	addressFactory: AddressFactory
	audit: (tx: Tx) => Promise<VoidPromiseFn>
	client: any
	container: Container
	eventDispatcher: EventDispatcher
	eventRecorder: EventRecorder
	execute: (tx: Tx) => Promise<VoidPromiseFn>
	executeFull: (tx: Tx) => Promise<void>
	makeTx: (
		sender: KeyPair,
		recipient: KeyPair,
		content: Uint8Array,
		handler?: string | undefined,
		version?: string | undefined,
	) => Promise<Tx>
	receipt: TxReceipt
	serviceProviderRepository: ServiceProviderRepository
	stakingService: StakingService
	state: StateStore
}
