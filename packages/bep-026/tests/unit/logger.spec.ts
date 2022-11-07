import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { dirname } from '@bearmint/bep-009'
import type { Logger } from '@bearmint/bep-013'

import { makeLogger } from '../../source/logger.js'

describe<{
	subject: Logger
}>('Server', () => {
	beforeEach((context) => {
		context.subject = makeLogger({
			Paths: { log: dirname() },
			ServiceProviderRepository: {
				get() {
					return {
						config() {
							return {
								get() {
									//
								},
							}
						},
					}
				},
			},
		})
	})

	it('should log a msg of each level', async (context) => {
		expect(() => context.subject.alert('hello')).not.toThrow()
		expect(() => context.subject.critical('hello')).not.toThrow()
		expect(() => context.subject.debug('hello')).not.toThrow()
		expect(() => context.subject.emergency('hello')).not.toThrow()
		expect(() => context.subject.error('hello')).not.toThrow()
		expect(() => context.subject.info('hello')).not.toThrow()
		expect(() => context.subject.notice('hello')).not.toThrow()
		expect(() => context.subject.warning('hello')).not.toThrow()
	})

	it('should log key=value msgs', async (context) => {
		expect(() =>
			context.subject.debug('New Roots: %s', {
				accounts: '2',
				application: '1',
				txs: '3',
				world: '4',
			}),
		).not.toThrow()
	})
})
