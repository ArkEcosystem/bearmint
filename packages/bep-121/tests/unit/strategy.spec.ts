import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { denominations } from '@bearmint/bep-006'
import { fakeAccountSerializer, fakeAddressFactory, fakeStateStore } from '@bearmint/bep-008'
import { hexToBytes } from '@bearmint/bep-009'
import type { Account, Container, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { abci, BEP101Misbehavior } from '@bearmint/bep-018'
import { makeKeyPairFactory } from '@bearmint/bep-032'
import { endSentence, recordMisbehavior } from '@bearmint/bep-120'
import { generateMnemonic } from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english.js'

import { makeStrategy } from '../../source/strategy.js'

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

async function jail(context) {
	await recordMisbehavior(
		{
			CommittedState: context.state,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		},
		context.state,
		context.account,
		new abci.Misbehavior({
			type: 1,
			validator: { address: hexToBytes(context.account.validator?.address) },
		}),
	)

	await endSentence(context.state, context.account)
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
						'@bearmint/bep-121': {
							'*': {
								punishments: [{ jailSentences: 3, type: '*' }],
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

	it('should tombstone the validator if the number of sentences matches the configured limit', async (context) => {
		expect(
			await context.state.getMultiStore().get('@bearmint/bep-121').has(context.account.address),
		).toBeFalse()

		// 1st offence
		await executeStrategy(context)
		expect(
			await context.state.getMultiStore().get('@bearmint/bep-121').has(context.account.address),
		).toBeFalse()
		await jail(context)

		// 2nd offence
		await executeStrategy(context)
		expect(
			await context.state.getMultiStore().get('@bearmint/bep-121').has(context.account.address),
		).toBeFalse()
		await jail(context)

		// 3rd offence
		await executeStrategy(context)
		expect(
			await context.state.getMultiStore().get('@bearmint/bep-121').has(context.account.address),
		).toBeFalse()
		await jail(context)

		// 4th offence (╯°□°)╯︵ ┻━┻
		await executeStrategy(context)

		expect(
			BEP101Misbehavior.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-121').get(context.account.address),
			).toJson(),
		).toStrictEqual({
			type: 1,
		})
	})

	it('should not slash the validator if it is a genesis validator', async (context) => {
		expect(
			await context.state.getMultiStore().get('@bearmint/bep-121').has(context.account.address),
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
			await context.state.getMultiStore().get('@bearmint/bep-121').has(context.account.address),
		).toBeFalse()
	})
})
