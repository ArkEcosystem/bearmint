import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { makeContainer } from '@bearmint/bep-014'

import { makePolicy } from '../../source/policy.js'
import type { Policy } from '../../source/types.js'
import { HANDLER } from '../../source/types.js'

describe<{ subject: Policy }>('BEP138', () => {
	beforeEach((context) => {
		context.subject = makePolicy({ Container: makeContainer() })
	})

	it('should pass', async (context) => {
		expect(
			await context.subject.allows({
				nativeTokenHash: 'nativeTokenHash',
				sender: {
					metadata: {
						[HANDLER]: ['nativeTokenHash'],
					},
				},
				state: {
					getMultiStore() {
						return {
							get() {
								return {
									getListHex() {
										return ['nativeTokenHash']
									},
								}
							},
						}
					},
				},
			}),
		).toBeTrue()
	})

	it('should fail', async (context) => {
		expect(
			await context.subject.allows({
				nativeTokenHash: 'nativeTokenHash',
				sender: {},
				state: {
					getMultiStore() {
						return {
							get() {
								return {
									getListHex() {
										return []
									},
								}
							},
						}
					},
				},
			}),
		).toBeFalse()

		expect(
			await context.subject.allows({
				nativeTokenHash: 'nativeTokenHash',
				sender: {},
				state: {
					getMultiStore() {
						throw new Error('Yikes!')
					},
				},
			}),
		).toBeFalse()
	})
})
