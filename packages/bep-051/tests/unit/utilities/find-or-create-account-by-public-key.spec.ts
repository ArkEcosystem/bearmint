import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { stringToBytes } from '@bearmint/bep-009'
import { ErrorCode } from '@bearmint/bep-109'

import { findOrCreateAccountByPublicKey } from '../../../source/utilities/find-or-create-account-by-public-key.js'

describe('findOrCreateAccountByPublicKey', () => {
	it('should return early if the account exists', async () => {
		await expect(
			findOrCreateAccountByPublicKey(
				{
					//
				},
				'address',
				{},
				{},
				{
					getAccountRepository() {
						return {
							findByPublicKey() {
								return {}
							},
							hasByPublicKey() {
								return true
							},
						}
					},
				},
			),
		).resolves.not.toThrow()
	})

	it('should throw if the public key is not valid', async () => {
		await expect(async () =>
			findOrCreateAccountByPublicKey(
				{
					//
				},
				{},
				stringToBytes('publicKey'),
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
					getAccountRepository() {
						return {
							hasByPublicKey() {
								return false
							},
						}
					},
				},
			),
		).rejects.toThrow(ErrorCode.TX_MALFORMED_PUBLIC_KEY)
	})
})
