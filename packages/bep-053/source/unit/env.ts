import type { TxTestContext } from '@bearmint/bep-006'
import { genesisParameters, milestone } from '@bearmint/bep-006'
import { fakeStateStore } from '@bearmint/bep-008'
import { assert } from '@bearmint/bep-009'
import type {
	AccountSerializer,
	AddressFactory,
	FactoryFunction,
	KeyPair,
	KeyPairFactory,
	ServiceProvider,
	StakingServiceFactory,
	StrategyRegistry,
	Tx,
	TxAuditorRegistry,
	TxExecutorRegistry,
	TxManifestRegistry,
	TxMsgFactoryRegistry,
	TxProcessor,
} from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import * as BEP15 from '@bearmint/bep-015'
import { makeServiceProviderRepository } from '@bearmint/bep-016'
import { BEP22Account } from '@bearmint/bep-018'
import * as BEP22 from '@bearmint/bep-022'
import * as BEP30 from '@bearmint/bep-030'
import * as BEP33 from '@bearmint/bep-033'
import * as BEP34 from '@bearmint/bep-034'
import * as BEP38 from '@bearmint/bep-038'
import * as BEP42 from '@bearmint/bep-042'
import * as BEP48 from '@bearmint/bep-048'
import * as BEP49 from '@bearmint/bep-049'
import * as BEP50 from '@bearmint/bep-050'
import * as BEP51 from '@bearmint/bep-051'
import { createAssertionFunctions, createToolkit, TxReceipt } from '@bearmint/bep-051'
import { makeStrategy as BEP84 } from '@bearmint/bep-084'
import { makeStrategy as BEP85 } from '@bearmint/bep-085'
import { makeStrategy as BEP86 } from '@bearmint/bep-086'
import * as BEP87 from '@bearmint/bep-087'
import * as BEP88 from '@bearmint/bep-088'
import { makeEventRecorder } from '@bearmint/bep-090'
import { makeInstance, signTx } from '@bearmint/bep-099'
import * as BEP146 from '@bearmint/bep-146'

// Create the audit and execute functions
async function createFunc(
	context: TxTestContext,
	tx: Tx,
	txRegistry: TxAuditorRegistry | TxExecutorRegistry,
) {
	const manifest = context.container
		.resolve<TxManifestRegistry>(ContainerType.TxManifestRegistry)
		.getFromTx(tx)

	const msg = await context.container
		.resolve<TxMsgFactoryRegistry>(ContainerType.TxMsgFactoryRegistry)
		.get(manifest.name(), manifest.version())
		.fromTx(tx)

	return () =>
		txRegistry.get(manifest.name(), manifest.version()).execute({
			assert: createAssertionFunctions(
				{
					AddressFactory: context.container.resolve(ContainerType.AddressFactory),
					CommittedState: context.state,
					ServiceProviderRepository: context.container.resolve(
						ContainerType.ServiceProviderRepository,
					),
				},
				manifest,
				context.state,
				tx,
			),
			eventRecorder: context.eventRecorder,
			msg,
			// @ts-ignore
			receipt: context.receipt,
			state: context.state,
			toolkit: createToolkit(
				{
					AccountSerializer: context.container.resolve(ContainerType.AccountSerializer),
					AddressFactory: context.container.resolve(ContainerType.AddressFactory),
					CommittedState: context.state,
					ServiceProviderRepository: context.container.resolve(
						ContainerType.ServiceProviderRepository,
					),
				},
				manifest,
				msg,
				context.state,
				tx,
			),
			tx,
		})
}

export async function createEnvironment(
	context: TxTestContext,
	txServiceProvider: FactoryFunction<ServiceProvider>,
	txServiceProviders?: Array<FactoryFunction<ServiceProvider>>,
) {
	// Create our tiny world
	context.container = makeContainer()
	context.container.bindValue(ContainerType.Container, context.container)
	context.container.bindValue(ContainerType.GenesisParameters, genesisParameters)

	// Bootstrap the architectural building blocks
	await context.container.build(BEP15.makeServiceProvider).register()
	await context.container.build(BEP146.makeServiceProvider).register()

	const ServiceProviderRepository = makeServiceProviderRepository({
		Container: context.container,
		EventDispatcher: context.container.resolve(ContainerType.EventDispatcher),
	})
	// @ts-ignore
	ServiceProviderRepository.get = function () {
		return {
			version() {
				return '0.0.0'
			},
		}
	}

	context.container.bindValue(ContainerType.ServiceProviderRepository, ServiceProviderRepository)

	// Bootstrap a few modules we rely on
	await context.container.build(BEP48.makeServiceProvider).register()
	await context.container.build(BEP49.makeServiceProvider).register()
	await context.container.build(BEP50.makeServiceProvider).register()
	await context.container.build(BEP30.makeServiceProvider).register()
	await context.container.build(BEP38.makeServiceProvider).register()
	await context.container.build(BEP33.makeServiceProvider).register()
	await context.container.build(BEP42.makeServiceProvider).register()
	await context.container.build(BEP51.makeServiceProvider).register()
	await context.container.build(BEP22.makeServiceProvider).register()
	await context.container.build(BEP87.makeServiceProvider).register()

	// Fake state stores
	context.container.bindValue(ContainerType.CommittedState, {
		getCommittedBlockAppHash() {
			return Buffer.from('deadbeef')
		},
		getMilestone() {
			return milestone
		},
	})

	context.container.bindValue(ContainerType.DeliverTxState, {
		getCommittedBlockAppHashpHash() {
			return Buffer.from('deadbeef')
		},
		getMilestone() {
			return milestone
		},
	})

	// Few quick access values that are used a lot
	context.accountSerializer = context.container.resolve(ContainerType.AccountSerializer)
	context.eventRecorder = makeEventRecorder()
	context.state = await fakeStateStore(context)
	await context.state.setMilestone(milestone as any)

	// Fake state stores
	context.container.bindValue(ContainerType.CommittedState, context.state)
	context.container.bindValue(ContainerType.DeliverTxState, context.state)

	// PoS and Staking Service
	await context.container.build(BEP88.makeServiceProvider).register()
	context.stakingService = context.container
		.resolve<StakingServiceFactory>(ContainerType.StakingServiceFactory)
		.make(context.state)

	// Bootstrap the tx module
	await context.container.build(txServiceProvider).register()

	if (txServiceProviders !== undefined) {
		for (const serviceProvider of txServiceProviders) {
			await context.container.build(serviceProvider).register()
		}
	}

	// Register all service providers that are pending
	for (const serviceProvider of ServiceProviderRepository.all().values()) {
		await serviceProvider.register()
	}

	// Should be removed at some point
	context.container
		.resolve<StrategyRegistry>(ContainerType.StrategyRegistry)
		.set('@bearmint/bep-083', '@bearmint/bep-084', BEP84)

	context.container
		.resolve<StrategyRegistry>(ContainerType.StrategyRegistry)
		.set('@bearmint/bep-083', '@bearmint/bep-085', BEP85)

	context.container
		.resolve<StrategyRegistry>(ContainerType.StrategyRegistry)
		.set('@bearmint/bep-083', '@bearmint/bep-086', BEP86)

	// Prepare the receipt so we can inspect it later
	context.receipt = new TxReceipt(context.state)

	// Quickly create an account from an mnemonic
	context.accountFromMnemonic = async function makeAccount(mnemonic: string) {
		const keypair = await context.container
			.resolve<KeyPairFactory>(ContainerType.KeyPairFactory)
			.fromMnemonic(mnemonic)

		return {
			account: await context.container
				.resolve<AccountSerializer>(ContainerType.AccountSerializer)
				.deserialize(
					BEP22Account.fromJson({
						address: (
							await context.container
								.resolve<AddressFactory>(ContainerType.AddressFactory)
								.fromMnemonic(mnemonic)
						).toString(),
						publicKey: keypair.toPublicKey().toString(),
					}),
				),
			keypair,
		}
	}

	// Audit a transaction without any listeners
	context.audit = function (tx: Tx) {
		return createFunc(
			context,
			tx,
			context.container.resolve<TxAuditorRegistry>(ContainerType.TxAuditorRegistry),
		)
	}

	// Execute a transaction without any listeners
	context.execute = function (tx: Tx) {
		return createFunc(
			context,
			tx,
			context.container.resolve<TxExecutorRegistry>(ContainerType.TxExecutorRegistry),
		)
	}

	// Execute a transaction with all listeners
	context.executeFull = async function (tx: Tx) {
		await context.container
			.resolve<TxProcessor>(ContainerType.TxProcessor)
			.execute(context.eventRecorder, BEP48.makeGasMeter(), context.state, tx)
	}

	// Quickly build and sign transactions
	context.makeTx = async function (
		sender: KeyPair,
		recipient: KeyPair,
		content: Uint8Array,
		handler?: string | undefined,
		version?: string | undefined,
	) {
		const addressFactory = BEP42.makeAddressFactory(BEP33.makeKeyPairFactory(), 'bear')

		const manifests = context.container
			.resolve<TxManifestRegistry>(ContainerType.TxManifestRegistry)
			.all()
		const manifest = manifests[handler ?? Object.keys(manifests)[0]!]![version ?? '0.0.0']

		assert.defined(manifest)

		return signTx({
			addressFactory,
			data: {
				gas: `${1e8}`,
				message: {
					content,
					// @ts-ignore
					handler: manifest.name(),
					network: genesisParameters.app_hash,
					// @ts-ignore
					version: manifest.version(),
				},
				nonce: '1',
			},
			publicKeyFactory: BEP33.makePublicKeyFactory(),
			recipient: await addressFactory.fromPublicKey(recipient.toPublicKey()),
			sender,
			signatureFactory: BEP33.makeSignatureFactory(),
		})
	}

	// Quickly fake transactions
	context.client = makeInstance({
		cryptography: {
			account: {
				addressFactory: context.container.resolve(ContainerType.AddressFactory),
				keyPairFactory: context.container.resolve(ContainerType.KeyPairFactory),
				privateKeyFactory: context.container.resolve(ContainerType.PrivateKeyFactory),
				publicKeyFactory: context.container.resolve(ContainerType.PublicKeyFactory),
				signatureFactory: context.container.resolve(ContainerType.SignatureFactory),
			},
			validator: {
				keyPairFactory: BEP34.makeKeyPairFactory(),
				signatureFactory: BEP34.makeSignatureFactory(),
			},
		},
	})
}
