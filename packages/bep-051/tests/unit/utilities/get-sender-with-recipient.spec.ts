import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { getSenderWithRecipient } from '../../../source/utilities/get-sender-with-recipient.js'

describe('Sender & Recipient', () => {
	it('getSenderWithRecipient', async () => {
		expect(
			await getSenderWithRecipient(
				{
					getAccountRepository() {
						return {
							findByAddress() {
								return { address: 'recipient' }
							},
							findByPublicKey() {
								return { address: 'sender' }
							},
						}
					},
				},
				{ data: { recipient: 'recipient', sender: 'sender' } },
			),
		).toStrictEqual({ recipient: { address: 'recipient' }, sender: { address: 'sender' } })
	})
})
