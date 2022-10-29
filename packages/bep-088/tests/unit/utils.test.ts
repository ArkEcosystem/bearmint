import { abci, crypto } from '@bearmint/bep-018'
import { expect, describe, it } from 'vitest'

import { diffValidatorUpdates, formatValidatorUpdatesDiff } from '../../source/utils.js'

describe('diffValidatorUpdates', () => {
	it('should diff the sets and determine which validators were created, deleted and updated', () => {
		const { created, deleted, updated } = diffValidatorUpdates(
			[
				// DELETE
				new abci.ValidatorUpdate({
					power: BigInt(1),
					pubKey: new crypto.PublicKey({
						sum: {
							case: 'ed25519',
							value: new Uint8Array(8),
						},
					}),
				}),
				// UPDATE
				new abci.ValidatorUpdate({
					power: BigInt(2),
					pubKey: new crypto.PublicKey({
						sum: {
							case: 'ed25519',
							value: new Uint8Array(16),
						},
					}),
				}),
			],
			[
				// UPDATE
				new abci.ValidatorUpdate({
					power: BigInt(2),
					pubKey: new crypto.PublicKey({
						sum: {
							case: 'ed25519',
							value: new Uint8Array(16),
						},
					}),
				}),
				// CREATE
				new abci.ValidatorUpdate({
					power: BigInt(3),
					pubKey: new crypto.PublicKey({
						sum: {
							case: 'ed25519',
							value: new Uint8Array(32),
						},
					}),
				}),
			],
		)

		expect(created).toHaveLength(1)
		expect(created[0].toJson()).toStrictEqual({
			power: '3',
			pubKey: {
				ed25519: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
			},
		})

		expect(deleted).toHaveLength(1)
		expect(deleted[0].toJson()).toStrictEqual({
			power: '1',
			pubKey: {
				ed25519: 'AAAAAAAAAAA=',
			},
		})

		expect(updated).toHaveLength(1)
		expect(updated[0].toJson()).toStrictEqual({
			power: '2',
			pubKey: {
				ed25519: 'AAAAAAAAAAAAAAAAAAAAAA==',
			},
		})
	})
})

describe('formatValidatorUpdatesDiff', () => {
	it('should format the diff of created/deleted/updated', () => {
		const formatted = formatValidatorUpdatesDiff(
			diffValidatorUpdates(
				[
					// DELETE
					new abci.ValidatorUpdate({
						power: BigInt(1),
						pubKey: new crypto.PublicKey({
							sum: {
								case: 'ed25519',
								value: new Uint8Array(8),
							},
						}),
					}),
					// UPDATE
					new abci.ValidatorUpdate({
						power: BigInt(2),
						pubKey: new crypto.PublicKey({
							sum: {
								case: 'ed25519',
								value: new Uint8Array(16),
							},
						}),
					}),
				],
				[
					// UPDATE
					new abci.ValidatorUpdate({
						power: BigInt(2),
						pubKey: new crypto.PublicKey({
							sum: {
								case: 'ed25519',
								value: new Uint8Array(16),
							},
						}),
					}),
					// CREATE
					new abci.ValidatorUpdate({
						power: BigInt(3),
						pubKey: new crypto.PublicKey({
							sum: {
								case: 'ed25519',
								value: new Uint8Array(32),
							},
						}),
					}),
				],
			),
		)

		expect(formatted).toHaveLength(3)
		// Created
		expect(formatted[0].toJson()).toStrictEqual({
			power: '3',
			pubKey: {
				ed25519: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
			},
		})
		// Deleted
		expect(formatted[1].toJson()).toStrictEqual({
			// `pubKey` is omitted because it is 0
			pubKey: {
				ed25519: 'AAAAAAAAAAA=',
			},
		})
		// Updated
		expect(formatted[2].toJson()).toStrictEqual({
			power: '2',
			pubKey: {
				ed25519: 'AAAAAAAAAAAAAAAAAAAAAA==',
			},
		})
	})
})
