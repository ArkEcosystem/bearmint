import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { getSender } from '../../../source/utilities/get-sender.js'

describe('Sender', () => {
	it('getSender', async () => {
		expect(
			await getSender(
				{
					getAccountRepository() {
						return {
							findByPublicKey() {
								return { address: 'sender' }
							},
						}
					},
				},
				{ data: { recipient: 'recipient', sender: 'sender' } },
			),
		).toStrictEqual({ address: 'sender' })
	})
})
