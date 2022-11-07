import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { ErrorCode } from '@bearmint/bep-109'

import { findOrCreateAccountByAddress } from '../../../source/utilities/find-or-create-account-by-address.js'

describe('Utils', () => {
	it('findOrCreateAccountByAddress', async () => {
		await expect(
			async () =>
				findOrCreateAccountByAddress(
					{
						getAccountRepository() {
							return {
								hasByAddress() {
									return false
								},
							}
						},
					},
					{
						fromString() {
							return {
								verify() {
									return false
								},
							}
						},
					},
					{
						//
					},
					'address',
				),
			ErrorCode.TX_MALFORMED_ADDRESS,
		).rejects.toThrow()
	})
})
