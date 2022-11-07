import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { denom } from '../../source/denom.js'

describe('denom', () => {
	it('should get denomination from state by type', () => {
		expect(
			denom(
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								denominations: {
									gas: 'FIRE',
								},
							},
						}
					},
				},
				'gas',
			),
		).toStrictEqual('FIRE')
	})
})
