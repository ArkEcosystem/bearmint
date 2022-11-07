import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect, nock } from '@bearmint/bep-005'
extendExpect(expect)

import { makeAsteriskListener } from '../../source/listeners.js'

describe('Listener', () => {
	beforeEach(() => {
		nock.fake('https://bearmint.com/').post('/api')
	})

	it('should broadcast an account without an error', async () => {
		await expect(
			makeAsteriskListener({
				Container: {
					resolve() {
						return {
							hooks: [
								{
									events: ['event'],
									host: ['http://localhost/api'],
									token: ['token'],
								},
							],
						}
					},
				},
			}).execute({ key: 'value' }, 'event'),
		).resolves.not.toThrow()
	})
})
