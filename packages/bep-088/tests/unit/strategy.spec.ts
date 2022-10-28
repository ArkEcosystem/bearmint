import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { denominations } from '@bearmint/bep-006'
import { fakeAccountSerializer, fakeAddressFactory, fakeStateStore } from '@bearmint/bep-008'
import { blake3, bytesToHex } from '@bearmint/bep-009'
import type { Account, AccountSerializer, StateStore, ValidatorElector } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { BEP22Account } from '@bearmint/bep-018'
import { generateMnemonic } from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english.js'

import { makeStrategy } from '../../source/strategy.js'

async function createValidatorAccount({
	accountSerializer,
	moniker,
	power,
}: {
	accountSerializer: AccountSerializer
	moniker: string
	power: bigint
}) {
	const address = await fakeAddressFactory().fromMnemonic(generateMnemonic(wordlist))
	const publicKey = bytesToHex(blake3(moniker))

	return accountSerializer.deserialize(
		BEP22Account.fromJson({
			address: address.toString(),
			moniker,
			publicKey,
			stakes: { [moniker]: String(power) },
			validator: {
				address: bytesToHex(address.toBytes()),
				power: String(power),
				publicKey,
			},
		}),
	)
}

describe<{
	accountSerializer: AccountSerializer
	state: StateStore
	subject: ValidatorElector
	validator: Account
}>('Proof-of-Stake', () => {
	beforeEach(async (context) => {
		const container = makeContainer()

		context.accountSerializer = fakeAccountSerializer({ container })

		context.state = await fakeStateStore({
			accountSerializer: context.accountSerializer,
			container,
		})
		await context.state.getMultiStore().add('@bearmint/bep-058')
		await context.state.getMultiStore().add('@bearmint/bep-120')
		await context.state.getMultiStore().add('@bearmint/bep-121')

		container.bindValue(ContainerType.ExecuteTxState, context.state)

		await context.state.getAccountRepository().index([
			await createValidatorAccount({
				accountSerializer: context.accountSerializer,
				moniker: 'buckley',
				power: BigInt(1),
			}),
			await createValidatorAccount({
				accountSerializer: context.accountSerializer,
				moniker: 'bustley',
				power: BigInt(2),
			}),
			await createValidatorAccount({
				accountSerializer: context.accountSerializer,
				moniker: 'barkley',
				power: BigInt(3),
			}),
			await createValidatorAccount({
				accountSerializer: context.accountSerializer,
				moniker: 'borkley',
				power: BigInt(4),
			}),
			await createValidatorAccount({
				accountSerializer: context.accountSerializer,
				moniker: 'burkley',
				power: BigInt(5),
			}),
		])

		context.subject = makeStrategy({
			CommittedState: context.state,
			ExecuteTxState: context.state,
			EventDispatcher: { dispatchSerial() {} },
			GenesisParameters: {
				validators: [],
			},
			PublicKeyType: 'tendermint/PubKeySecp256k1',
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		})
	})

	it('should elect 2 validators if the min is 2 and max is 0', async (context) => {
		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {
					validator: {
						pubKeyTypes: ['ed25519'],
					},
				},
				denominations,
				modules: {
					mandatory: {
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 0,
										min: 2,
									},
								},
								range: {
									power: {
										max: 3,
										min: 1,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		const result = await context.subject.elect(context.state)

		expect(result).toHaveLength(2)
		expect(result).toSatisfy((value) => Array.isArray(value))
	})

	it('should elect 2 validators if the min and max is 2', async (context) => {
		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {
					validator: {
						pubKeyTypes: ['ed25519'],
					},
				},
				denominations,
				modules: {
					mandatory: {
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 3,
										min: 3,
									},
								},
								range: {
									power: {
										max: 3,
										min: 1,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		const result = await context.subject.elect(context.state)

		expect(result).toHaveLength(3)
		expect(result).toSatisfy((value) => Array.isArray(value))
	})
})
