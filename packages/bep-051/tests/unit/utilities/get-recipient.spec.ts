import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { getRecipient } from '../../../source/utilities/get-recipient.js'

describe('Recipient', () => {
	it('getRecipient', async () => {
		expect(
			await getRecipient(
				{
					getAccountRepository() {
						return {
							findByAddress() {
								return { address: 'recipient' }
							},
						}
					},
				},
				{ data: { recipient: 'recipient', sender: 'sender' } },
			),
		).toStrictEqual({ address: 'recipient' })
	})
})
