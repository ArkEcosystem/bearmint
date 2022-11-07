import { makeContainer } from '@bearmint/bep-014'
import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { StateStore } from '@bearmint/bep-013'

import { FilterPeer } from '../../../../source/methods/p2p/filter.js'

describe<{ state: StateStore }>('FilterPeer', () => {
	it('should determine if the handler is a match', async () => {
		expect(
			await new FilterPeer().isMatch({
				data: undefined,
				path: ['p2p', 'filter', 'addr', '<ip:port>'],
			}),
		).toBeTrue()

		expect(
			await new FilterPeer().isMatch({
				data: undefined,
				path: ['p2p', 'filter', 'id', '<id>'],
			}),
		).toBeTrue()

		expect(
			await new FilterPeer().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})

	it('should execute a request against the p2p store to filter by address', async () => {
		expect(
			await new FilterPeer({ Container: makeContainer() }).execute({
				path: '/p2p/filter/addr/<ip:port>',
			}),
		).toStrictEqual({
			code: 0,
		})
	})

	it('should execute a request against the p2p store to filter by id', async () => {
		expect(
			await new FilterPeer({ Container: makeContainer() }).execute({
				path: '/p2p/filter/id/<id>',
			}),
		).toStrictEqual({
			code: 0,
		})
	})
})
