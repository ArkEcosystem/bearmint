import { genesisParameters, milestone } from '@bearmint/bep-006'
import { assert, file, Paths } from '@bearmint/bep-009'
import type { FactoryFunction, ServiceProvider, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import * as BEP15 from '@bearmint/bep-015'
import { makeServiceProviderRepository } from '@bearmint/bep-016'
import * as BEP20 from '@bearmint/bep-020'
import * as BEP22 from '@bearmint/bep-022'
import * as BEP23 from '@bearmint/bep-023'
import * as BEP30 from '@bearmint/bep-030'
import * as BEP33 from '@bearmint/bep-033'
import * as BEP35 from '@bearmint/bep-035'
import * as BEP38 from '@bearmint/bep-038'
import * as BEP42 from '@bearmint/bep-042'
import * as BEP48 from '@bearmint/bep-048'
import * as BEP49 from '@bearmint/bep-049'
import * as BEP50 from '@bearmint/bep-050'
import * as BEP51 from '@bearmint/bep-051'
import { makeInstance } from '@bearmint/bep-099'
import * as BEP146 from '@bearmint/bep-146'

import { makeAcctFactory, makeAcctRepository } from './account.js'
import { makeTxFactory } from './tx.js'
import type { Context } from './types.js'

export async function createEnvironment(
	txServiceProvider: FactoryFunction<ServiceProvider>,
	txServiceProviders?: Array<FactoryFunction<ServiceProvider>>,
) {
	const ctx: Context = {} as any

	ctx.acctFactory = makeAcctFactory()

	// Make dummy accounts
	const { accounts } = file.readJsonSafe<{ accounts: Array<{ mnemonic: string }> }>(
		Paths.BM_PATH_ACCS,
	)

	assert.defined(accounts)

	ctx.accts = makeAcctRepository()
	await ctx.accts.fromMnemonic('genesis_1', accounts[9]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_2', accounts[0]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_3', accounts[1]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_4', accounts[2]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_5', accounts[3]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_6', accounts[4]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_7', accounts[5]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_8', accounts[6]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_9', accounts[7]!.mnemonic)
	await ctx.accts.fromMnemonic('genesis_10', accounts[8]!.mnemonic)
	await ctx.accts.fromMnemonic('validator', accounts[9]!.mnemonic)

	// Create our tiny world
	const container = makeContainer()
	container.bindValue(ContainerType.Container, container)
	container.bindValue(ContainerType.GenesisParameters, genesisParameters)

	// Bootstrap the architectural building blocks
	await container.build(BEP15.makeServiceProvider).register()
	await container.build(BEP146.makeServiceProvider).register()

	const ServiceProviderRepository = makeServiceProviderRepository({
		Container: container,
		EventDispatcher: container.resolve(ContainerType.EventDispatcher),
	})
	// @ts-ignore
	ServiceProviderRepository.get = function () {
		return {
			version() {
				return '0.0.0'
			},
		}
	}

	container.bindValue(ContainerType.ServiceProviderRepository, ServiceProviderRepository)

	// Register paths
	container.bindValue(ContainerType.Paths, {
		cache: process.env['BM_CACHE_PATH'] ?? `${Paths.BM_PATH_HOME}/cache`,
		config: process.env['BM_CONFIG_PATH'] ?? `${Paths.BM_PATH_HOME}/config`,
		data: process.env['BM_DATA_PATH'] ?? `${Paths.BM_PATH_HOME}/data`,
		log: process.env['BM_LOG_PATH'] ?? `${Paths.BM_PATH_HOME}/log`,
		temp: process.env['BM_TEMP_PATH'] ?? `${Paths.BM_PATH_HOME}/temp`,
	})

	// Bootstrap the gas module
	await container.build(BEP23.makeServiceProvider).register()
	await container.build(BEP48.makeServiceProvider).register()
	await container.build(BEP49.makeServiceProvider).register()
	await container.build(BEP50.makeServiceProvider).register()
	await container.build(BEP30.makeServiceProvider).register()
	await container.build(BEP38.makeServiceProvider).register()
	await container.build(BEP33.makeServiceProvider).register()
	await container.build(BEP42.makeServiceProvider).register()
	await container.build(BEP51.makeServiceProvider).register()
	await container.build(BEP22.makeServiceProvider).register()
	await container.build(BEP20.makeServiceProvider).register()

	// Fake state stores
	container.bindValue(ContainerType.DeliverTxState, container.resolve(ContainerType.CommittedState))

	// Few quick access values that are used a lot
	await container.resolve<StateStore>(ContainerType.CommittedState).setMilestone(milestone as any)

	// Bootstrap the tx module
	await container.build(txServiceProvider).register()

	if (txServiceProviders !== undefined) {
		for (const serviceProvider of txServiceProviders) {
			await container.build(serviceProvider).register()
		}
	}

	// Register all service providers that are pending
	for (const serviceProvider of ServiceProviderRepository.all().values()) {
		await serviceProvider.register()
	}

	// Quickly build and sign transactions
	ctx.txFactory = makeTxFactory(
		container,
		file.readJsonSafe<{ app_hash: string }>(Paths.TM_PATH_CONF_GENESIS).app_hash,
	)

	// Quickly fake transactions
	ctx.client = makeInstance({
		cryptography: {
			account: {
				addressFactory: container.resolve(ContainerType.AddressFactory),
				keyPairFactory: container.resolve(ContainerType.KeyPairFactory),
				privateKeyFactory: container.resolve(ContainerType.PrivateKeyFactory),
				publicKeyFactory: container.resolve(ContainerType.PublicKeyFactory),
				signatureFactory: container.resolve(ContainerType.SignatureFactory),
			},
			validator: {
				keyPairFactory: BEP35.makeKeyPairFactory(),
				signatureFactory: BEP35.makeSignatureFactory(),
			},
		},
	})

	return ctx
}
