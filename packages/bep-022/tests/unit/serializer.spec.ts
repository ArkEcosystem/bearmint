import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { hexToBytes } from '@bearmint/bep-009'
import type { AccountSerializer } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { BEP120File, BEP22Account } from '@bearmint/bep-018'

import { makeAccountSerializer } from '../../source/serializer.js'

describe<{
	subject: AccountSerializer
}>('Repository', () => {
	beforeEach(async (context) => {
		context.subject = makeAccountSerializer({
			CommittedState: {
				getMilestone() {
					return {
						parameters: {
							denominations: {
								gas: 'FIRE',
								token: 'BEAR',
							},
						},
					}
				},
			},
			Container: makeContainer(),
		})
	})

	it('should serialize an account', async (context) => {
		const result = await context.subject.serialize({
			address: 'address',
			balances: { BEAR: BigInt(5) },
			lockedBalances: { BEAR: BigInt(5) },
			metadata: {},
			moniker: 'moniker',
			nonce: BigInt(5),
			publicKey: 'publicKey',
			stakes: { BEAR: BigInt(5) },
			validator: {
				address: 'address',
				publicKey: 'publicKey',
				power: BigInt(5),
			},
		})

		expect(result.toJson()).toStrictEqual({
			address: 'address',
			balances: {
				BEAR: '5',
			},
			lockedBalances: {
				BEAR: '5',
			},
			metadata: {},
			moniker: 'moniker',
			nonce: '5',
			publicKey: 'publicKey',
			stakes: {
				BEAR: '5',
			},
			validator: {
				address: 'address',
				power: '5',
				publicKey: 'publicKey',
			},
		})
	})

	it('should deserialize an account', async (context) => {
		const result = await context.subject.deserialize(
			await context.subject.serialize({
				address: 'address',
				balances: { BEAR: BigInt(5) },
				lockedBalances: { BEAR: BigInt(5) },
				metadata: {},
				moniker: 'moniker',
				nonce: BigInt(5),
				publicKey: 'publicKey',
				stakes: { BEAR: BigInt(5) },
				validator: {
					address: 'address',
					publicKey: 'publicKey',
					power: BigInt(5),
				},
			}),
		)

		expect(result).toStrictEqual({
			address: 'address',
			balances: {
				BEAR: BigInt(5),
				FIRE: BigInt(0),
			},
			lockedBalances: {
				BEAR: BigInt(5),
				FIRE: BigInt(0),
			},
			metadata: {},
			moniker: 'moniker',
			nonce: BigInt(5),
			publicKey: 'publicKey',
			stakes: {
				BEAR: BigInt(5),
			},
			validator: {
				address: 'address',
				power: BigInt(5),
				publicKey: 'publicKey',
			},
		})
	})

	it('should serialize an account with macros', async (context) => {
		context.subject.macro('metadata.@bearmint/bep-120', () => {
			return {
				async deserialize(value) {
					return value
				},
				async serialize(value) {
					return BEP120File.fromBinary(value)
				},
			}
		})

		const result = await context.subject.serialize({
			address: 'address',
			balances: { BEAR: BigInt(5) },
			lockedBalances: { BEAR: BigInt(5) },
			metadata: {
				'@bearmint/bep-120': new BEP120File({
					count: 1,
					jailed: true,
					records: [],
				}).toBinary(),
			},
			moniker: 'moniker',
			nonce: BigInt(5),
			publicKey: 'publicKey',
			stakes: { BEAR: BigInt(5) },
			validator: {
				address: 'address',
				publicKey: 'publicKey',
				power: BigInt(5),
			},
		})

		expect(result.toJson()).toStrictEqual({
			address: 'address',
			balances: {
				BEAR: '5',
			},
			lockedBalances: {
				BEAR: '5',
			},
			metadata: {
				'@bearmint/bep-120': {
					count: 1,
					jailed: true,
					records: [],
				},
			},
			moniker: 'moniker',
			nonce: '5',
			publicKey: 'publicKey',
			stakes: {
				BEAR: '5',
			},
			validator: {
				address: 'address',
				power: '5',
				publicKey: 'publicKey',
			},
		})
	})

	it('should deserialize an account with macros', async (context) => {
		context.subject.macro('metadata.@bearmint/bep-120', () => {
			return {
				async deserialize(value) {
					return value
				},
				async serialize(value) {
					return BEP120File.fromBinary(value)
				},
			}
		})

		const result = await context.subject.deserialize(
			BEP22Account.fromBinary(
				(
					await context.subject.serialize({
						address: 'address',
						balances: { BEAR: BigInt(5) },
						lockedBalances: { BEAR: BigInt(5) },
						metadata: {
							'@bearmint/bep-120': new BEP120File({
								count: 1,
								jailed: true,
								records: [],
							}).toBinary(),
						},
						moniker: 'moniker',
						nonce: BigInt(5),
						publicKey: 'publicKey',
						stakes: { BEAR: BigInt(5) },
						validator: {
							address: 'address',
							publicKey: 'publicKey',
							power: BigInt(5),
						},
					})
				).toBinary(),
			),
		)

		expect(result).toStrictEqual({
			address: 'address',
			balances: {
				BEAR: BigInt(5),
				FIRE: BigInt(0),
			},
			lockedBalances: {
				BEAR: BigInt(5),
				FIRE: BigInt(0),
			},
			metadata: {
				'@bearmint/bep-120': {
					count: 1,
					jailed: true,
					records: [],
				},
			},
			moniker: 'moniker',
			nonce: BigInt(5),
			publicKey: 'publicKey',
			stakes: {
				BEAR: BigInt(5),
			},
			validator: {
				address: 'address',
				power: BigInt(5),
				publicKey: 'publicKey',
			},
		})
	})
})
