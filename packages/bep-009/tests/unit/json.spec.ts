import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { bytesToJson } from '../../source/bytes.js'
import { canonicalizeJson, jsonToBytes, jsonToHex } from '../../source/json.js'

describe('JSON', () => {
	it('should convert JSON to bytes and back to JSON', () => {
		expect(jsonToBytes({ key: 'value' })).toBeInstanceOf(Uint8Array)
	})

	it('should convert JSON to a hex and back to JSON', () => {
		expect(jsonToHex({ key: 'value' })).toBeTypeOf('string')
	})

	it('should canonicalize an object', async () => {
		expect(
			canonicalizeJson({
				a: BigInt(0),
				b: BigInt(0),
				c: new Map(),
				d: 'Hello, World!',
				e: { toString: () => 'verifyToString', verify: () => {} },
				g: undefined,
				h: new Set([1, 2, 3]),
				i: new Uint8Array([1, 2, 3]),
				j: Buffer.from([1, 2, 3]),
				k: {},
				l: [new Uint8Array([1, 2, 3]), new Uint8Array([4, 5, 6]), new Uint8Array([7, 8, 9])],
			}),
		).toStrictEqual({
			a: '0',
			b: '0',
			c: {},
			d: 'Hello, World!',
			e: 'verifyToString',
			h: [1, 2, 3],
			i: '010203',
			j: '010203',
			k: {},
			l: ['010203', '040506', '070809'],
		})
	})

	it('should canonicalize an account', async () => {
		expect(
			canonicalizeJson({
				address: 'address',
				attributes: { a: BigInt(1), b: { c: BigInt(1) } },
				balances: { a: BigInt(1) },
				lockedBalances: { a: BigInt(1) },
				moniker: 'moniker',
				nonce: BigInt(1),
				publicKey: 'publicKey',
				stakes: {
					moniker: { amount: BigInt(1), meta: { a: BigInt(1) } },
				},
				validator: {
					address: 'address',
					delegators: {
						moniker: { amount: BigInt(1), meta: { a: BigInt(1) } },
					},
					power: BigInt(1),
					publicKey: 'publicKey',
				},
			}),
		).toStrictEqual({
			address: 'address',
			attributes: { a: '1', b: { c: '1' } },
			balances: { a: '1' },
			lockedBalances: { a: '1' },
			moniker: 'moniker',
			nonce: '1',
			publicKey: 'publicKey',
			stakes: {
				moniker: { amount: '1', meta: { a: '1' } },
			},
			validator: {
				address: 'address',
				delegators: {
					moniker: { amount: '1', meta: { a: '1' } },
				},
				power: '1',
				publicKey: 'publicKey',
			},
		})

		expect(
			canonicalizeJson({
				address: 'address',
				attributes: { a: BigInt(1), b: { c: BigInt(1) } },
				balances: { a: BigInt(1) },
				lockedBalances: { a: BigInt(1) },
				moniker: 'moniker',
				nonce: BigInt(1),
				publicKey: 'publicKey',
				stakes: {
					moniker: { amount: BigInt(1), meta: { a: BigInt(1) } },
				},
				validator: {
					address: 'address',
					delegators: {},
					power: BigInt(1),
					publicKey: 'publicKey',
				},
			}),
		).toStrictEqual({
			address: 'address',
			attributes: { a: '1', b: { c: '1' } },
			balances: { a: '1' },
			lockedBalances: { a: '1' },
			moniker: 'moniker',
			nonce: '1',
			publicKey: 'publicKey',
			stakes: {
				moniker: { amount: '1', meta: { a: '1' } },
			},
			validator: {
				address: 'address',
				delegators: {},
				power: '1',
				publicKey: 'publicKey',
			},
		})

		expect(
			bytesToJson(
				jsonToBytes(
					canonicalizeJson({
						address: 'address',
						attributes: { a: BigInt(1), b: { c: BigInt(1) } },
						balances: { a: BigInt(1) },
						lockedBalances: { a: BigInt(1) },
						moniker: 'moniker',
						nonce: BigInt(1),
						publicKey: 'publicKey',
						stakes: {
							moniker: { amount: BigInt(1), meta: { a: BigInt(1) } },
						},
						validator: {
							address: 'address',
							delegators: {},
							power: BigInt(1),
							publicKey: 'publicKey',
						},
					}),
				),
			),
		).toStrictEqual({
			address: 'address',
			attributes: { a: '1', b: { c: '1' } },
			balances: { a: '1' },
			lockedBalances: { a: '1' },
			moniker: 'moniker',
			nonce: '1',
			publicKey: 'publicKey',
			stakes: {
				moniker: { amount: '1', meta: { a: '1' } },
			},
			validator: {
				address: 'address',
				delegators: {},
				power: '1',
				publicKey: 'publicKey',
			},
		})
	})

	it('should canonicalize a tx', async () => {
		expect(
			canonicalizeJson({
				gas: BigInt(1),
				hash: 'hash',
				message: {
					content: new Uint8Array([1, 2, 3]),
					handler: 'handler',
					network: 'network',
					version: 'version',
				},
				nonce: BigInt(1),
				recipient: {
					toString() {
						return 'recipient'
					},

					verify() {
						return true
					},
				},
				sender: {
					toString() {
						return 'sender'
					},

					verify() {
						return true
					},
				},
				signature: Buffer.from('signature'),
				version: 'version',
			}),
		).toStrictEqual({
			gas: '1',
			hash: 'hash',
			message: {
				content: '010203',
				handler: 'handler',
				network: 'network',
				version: 'version',
			},
			nonce: '1',
			recipient: 'recipient',
			sender: 'sender',
			signature: '7369676e6174757265',
			version: 'version',
		})
	})
})
