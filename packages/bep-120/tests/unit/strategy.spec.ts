import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { denominations } from '@bearmint/bep-006'
import { fakeAccountSerializer, fakeAddressFactory, fakeStateStore } from '@bearmint/bep-008'
import { hexToBytes } from '@bearmint/bep-009'
import type { Account, Container, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { abci, BEP120File } from '@bearmint/bep-018'
import { makeKeyPairFactory } from '@bearmint/bep-032'
import { generateMnemonic } from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english.js'

import { makeStrategy } from '../../source/strategy.js'
import { endSentence } from '../../source/utils.js'

async function createValidatorAccount({
	container,
	moniker,
	power,
	state,
}: {
	container: Container
	moniker: string
	power: bigint
	state: StateStore
}) {
	const publicKey = (
		await makeKeyPairFactory().fromMnemonic(generateMnemonic(wordlist))
	).toPublicKey()
	const address = (await fakeAddressFactory().fromPublicKey(publicKey)).toString()

	const result = await fakeAccountSerializer({ container, state }).deserialize({
		address,
		publicKey: publicKey.toString(),
	})
	result.balances[denominations.stake] = power
	result.lockedBalances[denominations.stake] = power
	result.moniker = moniker
	result.stakes[moniker] = power
	result.validator = {
		address: publicKey.toString(),
		delegators: {
			[address]: BigInt(5),
		},
		power,
		publicKey: publicKey.toString(),
	}

	await state.getAccountRepository().index([result])

	return result
}

async function executeStrategy(context) {
	await makeStrategy({
		CommittedState: context.container.resolve(ContainerType.CommittedState),
		Container: context.container,
		DataSink: { put() {} },
		GenesisParameters: {
			validators: [],
		},
		ServiceProviderRepository: {
			get() {
				return {
					version() {
						return '0.0.0'
					},
				}
			},
		},
	}).execute(
		context.state,
		new abci.Misbehavior({
			type: 1,
			validator: { address: hexToBytes(context.account.validator?.address) },
		}),
	)
}

describe<{
	account: Account
	container: Container
	state: StateStore
}>('Slasher', () => {
	beforeEach(async (context) => {
		context.container = makeContainer()

		context.state = await fakeStateStore({
			accountSerializer: fakeAccountSerializer({ container: context.container }),
			container: context.container,
		})
		context.state.setCommittedBlock(new abci.RequestBeginBlock({ header: { height: BigInt(1) } }))
		await context.state.getMultiStore().add('@bearmint/bep-120')
		await context.state.getMultiStore().add('@bearmint/bep-121')

		context.container.bindValue(ContainerType.CommittedState, context.state)
		context.container.bindValue(ContainerType.ServiceProviderRepository, {
			get() {
				return {
					version() {
						return '0.0.0'
					},
				}
			},
		})

		context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						'@bearmint/bep-102': {
							'*': {
								strategies: {
									'@bearmint/bep-118': [
										abci.MisbehaviorType.UNKNOWN,
										abci.MisbehaviorType.DUPLICATE_VOTE,
										abci.MisbehaviorType.LIGHT_CLIENT_ATTACK,
									],
								},
							},
						},
						'@bearmint/bep-118': {
							'*': {
								punishments: [
									{
										denomination: denominations.stake,
										percentage: 75,
										type: abci.MisbehaviorType.UNKNOWN,
									},
									{
										denomination: denominations.stake,
										percentage: 50,
										type: abci.MisbehaviorType.DUPLICATE_VOTE,
									},
									{
										denomination: denominations.stake,
										percentage: 101,
										type: abci.MisbehaviorType.LIGHT_CLIENT_ATTACK,
									},
								],
							},
						},
						'@bearmint/bep-120': {
							'*': {
								punishments: [{ durations: [256, 512, 1024], type: '*' }],
							},
						},
					},
				},
				transactions: {},
			},
		})

		context.account = await createValidatorAccount({
			container: context.container,
			moniker: 'buckley',
			power: BigInt(50),
			state: context.state,
		})
	})

	it('should jail the validator if it is not currently jailed', async (context) => {
		expect(
			await context.state.getMultiStore().get('@bearmint/bep-120').has(context.account.address),
		).toBeFalse()

		// Jail for 240 blocks
		await executeStrategy(context)

		expect(
			BEP120File.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-120').get(context.account.address),
			).toJson(),
		).toStrictEqual({
			count: 1,
			jailed: true,
			records: [{ misbehavior: { type: 1 }, sentence: { start: '1', end: '257' } }],
		})

		// The sentence will still be the same because we can't jail someone that is already in jail
		await executeStrategy(context)

		expect(
			BEP120File.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-120').get(context.account.address),
			).toJson(),
		).toStrictEqual({
			count: 1,
			jailed: true,
			records: [{ misbehavior: { type: 1 }, sentence: { start: '1', end: '257' } }],
		})
	})

	it('should increase the sentence durations for each sentence until no more durations are specified', async (context) => {
		expect(
			await context.state.getMultiStore().get('@bearmint/bep-120').has(context.account.address),
		).toBeFalse()

		// Jail for 240 blocks
		await executeStrategy(context)

		expect(
			BEP120File.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-120').get(context.account.address),
			).toJson(),
		).toStrictEqual({
			count: 1,
			jailed: true,
			records: [{ misbehavior: { type: 1 }, sentence: { start: '1', end: '257' } }],
		})

		await endSentence(context.state, context.account)

		// Jail for 480 blocks
		await executeStrategy(context)

		expect(
			BEP120File.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-120').get(context.account.address),
			).toJson(),
		).toStrictEqual({
			count: 2,
			jailed: true,
			records: [
				{ misbehavior: { type: 1 }, sentence: { start: '1', end: '257' } },
				{ misbehavior: { type: 1 }, sentence: { start: '1', end: '513' } },
			],
		})

		await endSentence(context.state, context.account)

		// Jail for 1440 blocks
		await executeStrategy(context)

		expect(
			BEP120File.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-120').get(context.account.address),
			).toJson(),
		).toStrictEqual({
			count: 3,
			jailed: true,
			records: [
				{ misbehavior: { type: 1 }, sentence: { start: '1', end: '257' } },
				{ misbehavior: { type: 1 }, sentence: { start: '1', end: '513' } },
				{ misbehavior: { type: 1 }, sentence: { start: '1', end: '1025' } },
			],
		})

		await endSentence(context.state, context.account)

		// We can't jail them again because we only specified 3 durations
		await executeStrategy(context)

		expect(
			BEP120File.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-120').get(context.account.address),
			).toJson(),
		).toStrictEqual({
			count: 3,
			records: [
				{ misbehavior: { type: 1 }, sentence: { start: '1', end: '257' } },
				{ misbehavior: { type: 1 }, sentence: { start: '1', end: '513' } },
				{ misbehavior: { type: 1 }, sentence: { start: '1', end: '1025' } },
			],
		})
	})

	it('should not slash the validator if it is a genesis validator', async (context) => {
		expect(
			await context.state.getMultiStore().get('@bearmint/bep-120').has(context.account.address),
		).toBeFalse()

		await makeStrategy({
			CommittedState: context.container.resolve(ContainerType.CommittedState),
			Container: context.container,
			DataSink: { put() {} },
			GenesisParameters: {
				validators: [
					{
						address: context.account.validator?.address,
					},
				],
			},
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		}).execute(
			context.state,
			new abci.Misbehavior({
				type: 1,
				validator: { address: hexToBytes(context.account.validator?.address) },
			}),
		)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-120').has(context.account.address),
		).toBeFalse()
	})
})
