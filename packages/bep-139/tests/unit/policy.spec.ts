import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { stringToHex } from '@bearmint/bep-009'
import { makeContainer } from '@bearmint/bep-014'

import { makePolicy } from '../../source/policy.js'
import type { Policy } from '../../source/types.js'
import { MintPolicy } from '../../source/types.js'

describe<{ subject: Policy }>('BEP139', () => {
	beforeEach((context) => {
		context.subject = makePolicy({ Container: makeContainer() })
	})

	it('should pass', async (context) => {
		expect(
			await context.subject.allows({
				policy: {
					args: stringToHex('10'),
					type: MintPolicy.HEIGHT_LOCKED,
				},
				state: {
					getCommittedBlockNumber() {
						return BigInt(5)
					},
				},
			}),
		).toBeTrue()

		expect(
			await context.subject.allows({
				policy: {
					args: stringToHex('10'),
					type: MintPolicy.HEIGHT_LOCKED,
				},
				state: {
					getCommittedBlockNumber() {
						return BigInt(10)
					},
				},
			}),
		).toBeTrue()
	})

	it('should fail', async (context) => {
		expect(
			await context.subject.allows({
				policy: {
					args: stringToHex('10'),
					type: MintPolicy.HEIGHT_LOCKED,
				},
				state: {
					getCommittedBlockNumber() {
						return BigInt(11)
					},
				},
			}),
		).toBeFalse()

		expect(
			await context.subject.allows({
				policy: {
					args: stringToHex('10'),
					type: MintPolicy.HEIGHT_LOCKED,
				},
				state: {
					getCommittedBlockNumber() {
						throw new Error('Yikes!')
					},
				},
			}),
		).toBeFalse()
	})
})
