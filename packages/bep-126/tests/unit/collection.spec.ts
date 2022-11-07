import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP126Collection, BEP131Token } from '@bearmint/bep-018'

import {
	assertCollectionOwnership,
	getCollection,
	getCollectionFromToken,
	getCollectionHash,
	hasCollection,
	hasCollectionOwnership,
	isUnknownPermission,
} from '../../source/collection.js'
import { HANDLER } from '../../source/types.js'
import { STUB_TX_META } from '../fixtures.js'

describe('assertCollectionOwnership', () => {
	it('should pass', async () => {
		expect(
			await assertCollectionOwnership(
				{
					getMultiStore() {
						return {
							get() {
								return {
									getListHex() {
										return ['hash']
									},
								}
							},
						}
					},
				},
				'hash',
				{ address: 'address' },
			),
		).toBeUndefined()
	})

	it('should fail', async () => {
		await expect(() =>
			assertCollectionOwnership(
				{
					getMultiStore() {
						return {
							get() {
								return {
									getListHex() {
										return []
									},
								}
							},
						}
					},
				},
				'hash',
				{ address: 'address' },
			),
		).rejects.toThrow()
	})
})

describe('getCollection', () => {
	it('should pass', async () => {
		expect(
			await getCollection(
				{
					get() {
						return new BEP126Collection(STUB_TX_META).toBinary()
					},
				},
				STUB_TX_META.id,
			),
		).toStrictEqual(new BEP126Collection(STUB_TX_META))
	})
})

describe('getCollectionHash', () => {
	it('should pass', async () => {
		expect(
			await getCollectionHash(
				{
					get() {
						return new BEP131Token({ collection: STUB_TX_META.id }).toBinary()
					},
				},
				'hash',
			),
		).toStrictEqual(STUB_TX_META.id)
	})
})

describe('getCollectionFromToken', () => {
	it('should pass', async () => {
		const { collection, collectionHash } = await getCollectionFromToken(
			{
				get() {
					return new BEP126Collection(STUB_TX_META).toBinary()
				},
			},
			{
				get() {
					return new BEP131Token({ collection: STUB_TX_META.id }).toBinary()
				},
			},
			'74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
		)

		expect(collection).toStrictEqual(new BEP126Collection(STUB_TX_META))
		expect(collectionHash).toStrictEqual(STUB_TX_META.id)
	})
})

describe('hasCollection', () => {
	it('should pass', async () => {
		expect(
			await hasCollection(
				{
					has() {
						return true
					},
				},
				'hash',
			),
		).toBeTrue()
	})

	it('should fail', async () => {
		expect(
			await hasCollection(
				{
					has() {
						return false
					},
				},
				'hash',
			),
		).toBeFalse()
	})
})

describe('hasCollectionOwnership', () => {
	it('should pass if the account has ownership', async () => {
		expect(
			await hasCollectionOwnership(
				{
					getMultiStore() {
						return {
							get() {
								return {
									getListHex() {
										return ['hash']
									},
								}
							},
						}
					},
				},
				'hash',
				{ address: 'address' },
			),
		).toBeTrue()
	})

	it('should fail if the account has no ownership', async () => {
		expect(
			await hasCollectionOwnership(
				{
					getMultiStore() {
						return {
							get() {
								return {
									getListHex() {
										return []
									},
								}
							},
						}
					},
				},
				'hash',
				{ address: 'address' },
			),
		).toBeFalse()
	})

	it('should fail if an exception is encountered', async () => {
		expect(
			await hasCollectionOwnership(
				{
					getMultiStore() {
						throw new Error('Yikes!')
					},
				},
				'hash',
				{ address: 'address' },
			),
		).toBeFalse()
	})
})

describe('isUnknownPermission', () => {
	it('should pass', () => {
		expect(() => isUnknownPermission(0, {})).not.toThrow()
		expect(() => isUnknownPermission(1, {})).not.toThrow()
		expect(() => isUnknownPermission(2, {})).not.toThrow()
		expect(() => isUnknownPermission(3, {})).toThrow()
	})
})
