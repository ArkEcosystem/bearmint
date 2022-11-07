import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { Logger } from '@bearmint/bep-013'

import { makeLogger } from '../../source/logger.js'

describe<{
	subject: Logger
}>('Server', () => {
	beforeEach((context) => {
		context.subject = makeLogger()
	})

	it('should log a msg of each level', async (context) => {
		expect(() => context.subject.alert('hello')).not.toThrow()
		expect(() => context.subject.alert({ hello: 'world' })).not.toThrow()
		expect(() => context.subject.critical('hello')).not.toThrow()
		expect(() => context.subject.critical({ hello: 'world' })).not.toThrow()
		expect(() => context.subject.debug('hello')).not.toThrow()
		expect(() => context.subject.debug({ hello: 'world' })).not.toThrow()
		expect(() => context.subject.emergency('hello')).not.toThrow()
		expect(() => context.subject.emergency({ hello: 'world' })).not.toThrow()
		expect(() => context.subject.error('hello')).not.toThrow()
		expect(() => context.subject.error({ hello: 'world' })).not.toThrow()
		expect(() => context.subject.info('hello')).not.toThrow()
		expect(() => context.subject.info({ hello: 'world' })).not.toThrow()
		expect(() => context.subject.notice('hello')).not.toThrow()
		expect(() => context.subject.notice({ hello: 'world' })).not.toThrow()
		expect(() => context.subject.warning('hello')).not.toThrow()
		expect(() => context.subject.warning({ hello: 'world' })).not.toThrow()
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
