import type {
	Account,
	AccountWithValidator,
	StakingService,
	StateStore,
	TxReceipt,
	VoidPromiseFn,
} from '@bearmint/bep-013'
import type { abci, PlainMessage } from '@bearmint/bep-018'
import { deepStrictEqual, notDeepStrictEqual } from 'assert'
import { existsSync } from 'fs'
import { readdir } from 'fs/promises'
import get from 'lodash.get'
import has from 'lodash.has'
import { TextDecoder } from 'util'

type EventAttribute = Partial<PlainMessage<abci.EventAttribute>>
type EventAttributes = EventAttribute[]

function normaliseEventAttributes(attributes: EventAttributes) {
	return attributes.map((attr) => ({
		index: attr.index ?? false,
		key: attr.key!,
		value: attr.value!,
	}))
}

async function shouldPass(callback: CallableFunction) {
	let pass = false

	try {
		await callback()

		pass = true
	} catch (error) {
		console.log(error)
		pass = false
	}

	return pass
}

function shouldPassSync(callback: CallableFunction) {
	let pass = false

	try {
		callback()

		pass = true
	} catch {
		pass = false
	}

	return pass
}

export function extendExpect(expect: Vi.ExpectStatic) {
	expect.extend({
		async notToBeValidator(received: Account, expected: StateStore) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						(await expected.getAccountRepository().findByAddress(received.address)).validator,
						undefined,
					)
				}),
			}
		},
		toBeBuffer(received: unknown) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: received instanceof Buffer,
			}
		},
		toBeBytes(received: unknown) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: received instanceof Uint8Array,
			}
		},
		toBeFalse(received: unknown) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: received === false,
			}
		},
		async toBeMissingAttribute(
			received: Account,
			expected: {
				attribute: string
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						has(
							await expected.state.getAccountRepository().findByAddress(received.address),
							expected.attribute,
						),
						false,
					)
				}),
			}
		},
		async toBeMissingBalance(
			received: Account,
			expected: {
				denomination: string
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						(await expected.state.getAccountRepository().findByAddress(received.address)).balances[
							expected.denomination
						],
						undefined,
					)
				}),
			}
		},
		toBeMissingFile(received: string) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: existsSync(received) === false,
			}
		},
		async toBeMissingProperty(
			received: Account,
			expected: {
				attribute: string
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						has(
							await expected.state.getAccountRepository().findByAddress(received.address),
							expected.attribute,
						),
						false,
					)
				}),
			}
		},
		async toBeMissingStake(
			received: Account,
			expected: {
				moniker: string
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						(await expected.state.getAccountRepository().findByAddress(received.address)).stakes[
							expected.moniker
						],
						undefined,
					)
				}),
			}
		},
		toBeTrue(received: unknown) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: received === true,
			}
		},
		async toBeValidator(
			received: Account,
			expected: {
				attributes?: Record<string, any>
				state: StateStore
				stakingService: StakingService
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					const account = await expected.state
						.getAccountRepository()
						.findByAddress(received.address)

					deepStrictEqual(typeof account.validator, 'object')

					if (expected.attributes !== undefined) {
						if (account.validator?.power !== undefined) {
							// @ts-ignore
							account.validator.power = account.validator.power.toString()
						}

						const staking = await expected.stakingService.allByValidator(
							account as AccountWithValidator,
						)

						if (expected.attributes['delegators'] !== undefined) {
							const delegators = {}

							if (Object.keys(staking.delegators).length > 0) {
								for (const [delegatorAddress, delegator] of Object.entries(staking.delegators)) {
									delegators[delegatorAddress] = delegator.toString()
								}
							}

							deepStrictEqual(delegators, expected.attributes['delegators'])
						}

						delete expected.attributes['delegators']

						deepStrictEqual(account.validator, expected.attributes)
					}
				}),
			}
		},
		async toFailAudit(received: VoidPromiseFn, expected: EventAttributes) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					try {
						await received()
					} catch (error) {
						if (error.toString() === 'TxAuditException') {
							let normalised: EventAttribute[] = []

							if (Array.isArray(error.attributes)) {
								normalised = [...normalised, ...normaliseEventAttributes(error.attributes)]
							}

							deepStrictEqual(normalised, normaliseEventAttributes(expected))
						} else {
							throw error
						}
					}
				}),
			}
		},
		async toFailExecution(received: VoidPromiseFn, expected: string) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					try {
						await received()
					} catch (error) {
						deepStrictEqual(error.message, expected)
					}
				}),
			}
		},

		toHaveFile(received: string) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: existsSync(received) === true,
			}
		},
		async toHaveProperty(
			received: Account,
			expected: {
				attribute: string
				state: StateStore
				value?: string
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					const account = await expected.state
						.getAccountRepository()
						.findByAddress(received.address)

					deepStrictEqual(has(account, expected.attribute), true)

					if (expected.value !== undefined) {
						deepStrictEqual(get(account, expected.attribute), expected.value)
					}
				}),
			}
		},
		async toHaveStake(
			received: Account,
			expected: {
				moniker: string
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					notDeepStrictEqual(
						(await expected.state.getAccountRepository().findByAddress(received.address)).stakes[
							expected.moniker
						],
						undefined,
					)
				}),
			}
		},
		async toMatchBalance(received: Account, expected) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () =>
					deepStrictEqual(
						(
							await expected.state.getAccountRepository().findByAddress(received.address)
						).balances[expected.denomination]?.toString(),
						expected.amount,
					),
				),
			}
		},
		async toMatchBalances(received: Account, expected) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					for (const [denomination, amount] of Object.entries(expected.balances)) {
						deepStrictEqual(
							(
								await expected.state.getAccountRepository().findByAddress(received.address)
							).balances[denomination]?.toString(),
							amount,
						)
					}
				}),
			}
		},
		async toMatchFileCount(received: string, expected: number) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: (await readdir(received)).length === expected,
			}
		},
		toMatchJsonBytes(received: Uint8Array, expected: Uint8Array) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: shouldPassSync(() =>
					deepStrictEqual(JSON.parse(new TextDecoder().decode(received)), expected),
				),
			}
		},
		async toMatchLockedBalance(
			received: Account,
			expected: {
				amount: string
				denomination: string
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						(
							await expected.state.getAccountRepository().findByAddress(received.address)
						).lockedBalances[expected.denomination]?.toString(),
						expected.amount,
					)
				}),
			}
		},
		async toMatchMetadata(
			received: Account,
			expected: {
				attributes: object
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						(await expected.state.getAccountRepository().findByAddress(received.address)).metadata,
						expected.attributes,
					)
				}),
			}
		},
		async toMatchPower(
			received: string,
			expected: {
				amount: string
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						(
							await expected.state.getAccountRepository().findByMoniker(received)
						).validator?.power.toString(),
						expected.amount,
					)
				}),
			}
		},
		async toMatchProperties(
			received: Account,
			expected: {
				properties: object
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					const account = await expected.state
						.getAccountRepository()
						.findByAddress(received.address)

					for (const [key, value] of Object.entries(expected.properties)) {
						deepStrictEqual(account[key], value)
					}
				}),
			}
		},
		async toMatchProperty(
			received: Account,
			expected: {
				key: string
				state: StateStore
				value: unknown
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						(await expected.state.getAccountRepository().findByAddress(received.address))[
							expected.key
						],
						expected.value,
					)
				}),
			}
		},
		toMatchReceiptLogs(received: TxReceipt, expected: object) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: shouldPassSync(() =>
					deepStrictEqual(
						received.logs().map((log) => log.toJson()),
						expected,
					),
				),
			}
		},
		async toMatchStake(
			received: Account,
			expected: {
				amount: string
				moniker: string
				state: StateStore
			},
		) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					deepStrictEqual(
						(await expected.state.getAccountRepository().findByAddress(received.address)).stakes[
							expected.moniker
						]?.toString(),
						expected.amount,
					)
				}),
			}
		},
		async toPassAudit(received: VoidPromiseFn) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(received),
			}
		},
		async toPassExecution(received: VoidPromiseFn) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(received),
			}
		},
		async toThrowAttributes(received: VoidPromiseFn, expected: unknown[]) {
			return {
				message: () => `${received} is${this.isNot ? ' not' : ''} foo`,
				pass: await shouldPass(async () => {
					try {
						await received
					} catch (error) {
						// eslint-disable-next-line @typescript-eslint/dot-notation
						if (Array.isArray(expected['attributes'])) {
							deepStrictEqual(
								// eslint-disable-next-line @typescript-eslint/dot-notation
								normaliseEventAttributes(error['attributes']),
								// eslint-disable-next-line @typescript-eslint/dot-notation
								normaliseEventAttributes(expected['attributes']),
							)
						} else {
							deepStrictEqual(error, expected)
						}
					}
				}),
			}
		},
	})
}
