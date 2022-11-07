import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP126Collection, BEP131Token } from '@bearmint/bep-018'
import { BEP126UserPermission } from '@bearmint/bep-126'

import {
	allowsCollectionAccess,
	deniesCollectionAccess,
	deniesTokenAccess,
	ownedByMinter,
} from '../../source/acl.js'
import { STUB_TX_META, TOKEN_ID } from '../fixtures.js'

describe('allowsCollectionAccess', () => {
	it('should grant access if the actor is known and has the right permission', async () => {
		expect(
			await allowsCollectionAccess(
				{
					get() {
						return new BEP126Collection({
							accessControlList: {
								address: {
									permissions: [BEP126UserPermission.MINT, BEP126UserPermission.BURN],
								},
							},
						}).toBinary()
					},
				},
				STUB_TX_META.id,
				'address',
				BEP126UserPermission.MINT,
			),
		).toBeTrue()
	})

	it('should deny access if the actor is known but has the wrong permissions', async () => {
		expect(
			await allowsCollectionAccess(
				{
					get() {
						return new BEP126Collection({
							...STUB_TX_META,
							accessControlList: {
								address: {
									permissions: [BEP126UserPermission.MINT, BEP126UserPermission.BURN],
								},
							},
						}).toBinary()
					},
				},
				STUB_TX_META.id,
				'address',
				BEP126UserPermission.TRANSFER,
			),
		).toBeFalse()
	})

	it('should deny access if the actor is unknown', async () => {
		expect(
			await allowsCollectionAccess(
				{
					get() {
						return new BEP126Collection({
							...STUB_TX_META,
							accessControlList: {},
						}).toBinary()
					},
				},
				STUB_TX_META.id,
				'address',
				BEP126UserPermission.TRANSFER,
			),
		).toBeFalse()
	})

	it('should deny access if any unexpected exception occurs', async () => {
		expect(
			await allowsCollectionAccess(
				{
					get() {
						throw new Error('Yikes!')
					},
				},
				STUB_TX_META.id,
				'address',
				BEP126UserPermission.TRANSFER,
			),
		).toBeFalse()
	})
})

describe('deniesCollectionAccess', () => {
	it('should grant access if the actor is known and has the right permission', async () => {
		expect(
			await deniesCollectionAccess(
				{
					get() {
						return new BEP126Collection({
							...STUB_TX_META,
							accessControlList: {
								address: {
									permissions: [BEP126UserPermission.MINT, BEP126UserPermission.BURN],
								},
							},
						}).toBinary()
					},
				},
				STUB_TX_META.id,
				'address',
				BEP126UserPermission.MINT,
			),
		).toBeFalse()
	})

	it('should deny access if the actor is known but has the wrong permissions', async () => {
		expect(
			await deniesCollectionAccess(
				{
					get() {
						return new BEP126Collection({
							...STUB_TX_META,
							accessControlList: {
								address: {
									permissions: [BEP126UserPermission.MINT, BEP126UserPermission.BURN],
								},
							},
						}).toBinary()
					},
				},
				STUB_TX_META.id,
				'address',
				BEP126UserPermission.TRANSFER,
			),
		).toBeTrue()
	})

	it('should deny access if the actor is unknown', async () => {
		expect(
			await deniesCollectionAccess(
				{
					get() {
						return new BEP126Collection({
							...STUB_TX_META,
							accessControlList: {},
						}).toBinary()
					},
				},
				STUB_TX_META.id,
				'address',
				BEP126UserPermission.TRANSFER,
			),
		).toBeTrue()
	})

	it('should deny access if any unexpected exception occurs', async () => {
		expect(
			await deniesCollectionAccess(
				{
					get() {
						throw new Error('Yikes!')
					},
				},
				STUB_TX_META.id,
				'address',
				BEP126UserPermission.TRANSFER,
			),
		).toBeTrue()
	})
})

describe('deniesTokenAccess', () => {
	const HANDLER = '@bearmint/bep-131'

	it('should grant access if the account has ownership of the NFT', async () => {
		expect(
			await deniesTokenAccess(
				{
					get() {
						return BEP126Collection.fromJson({
							accessControlList: {
								address: {
									permissions: [BEP126UserPermission.MINT, BEP126UserPermission.BURN],
								},
							},
						}).toBinary()
					},
				},
				{
					get() {
						return BEP131Token.fromJson({
							collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
							owner: 'address',
						}).toBinary()
					},
				},
				TOKEN_ID,
				{
					address: 'address',
					metadata: {
						[HANDLER]: [TOKEN_ID],
					},
				},
				BEP126UserPermission.MINT,
			),
		).toBeFalse()
	})

	it('should forbid access if the account has no ownership of the NFT', async () => {
		expect(
			await deniesTokenAccess(
				{
					get() {
						return BEP126Collection.fromJson({
							accessControlList: {
								someone: [BEP126UserPermission.MINT, BEP126UserPermission.BURN],
							},
						}).toBinary()
					},
				},
				{
					get() {
						return BEP131Token.fromJson({
							collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
							owner: 'address',
						}).toBinary()
					},
				},
				TOKEN_ID,
				{
					address: 'address',
					metadata: {
						[HANDLER]: {},
					},
				},
				BEP126UserPermission.MINT,
			),
		).toBeTrue()
	})

	it('should grant access if the account has stewardship of the NFT with the right permission', async () => {
		expect(
			await deniesTokenAccess(
				{
					get() {
						return BEP126Collection.fromJson({
							accessControlList: {
								address: {
									permissions: [BEP126UserPermission.MINT, BEP126UserPermission.BURN],
								},
							},
						}).toBinary()
					},
				},
				{
					get() {
						return BEP131Token.fromJson({
							collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
							owner: 'address',
						}).toBinary()
					},
				},
				TOKEN_ID,
				{
					address: 'address',
					metadata: {
						[HANDLER]: [TOKEN_ID],
					},
				},
				BEP126UserPermission.MINT,
			),
		).toBeFalse()
	})

	it('should forbid access if the account has stewardship of the NFT with the wrong permission', async () => {
		expect(
			await deniesTokenAccess(
				{
					get() {
						return BEP126Collection.fromJson({
							accessControlList: {
								address: {
									permissions: [BEP126UserPermission.BURN],
								},
							},
							initialOwner: 'maker',
							tokens: [],
						}).toBinary()
					},
				},
				{
					get() {
						return BEP131Token.fromJson({
							collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
							owner: 'maker',
						}).toBinary()
					},
				},
				TOKEN_ID,
				{
					address: 'address',
					metadata: {
						[HANDLER]: [],
					},
				},
				BEP126UserPermission.MINT,
			),
		).toBeTrue()
	})

	it('should forbid access if any unexpected errors are encountered', async () => {
		expect(
			await deniesTokenAccess(
				{
					get() {
						throw new Error('Yikes!')
					},
				},
				{
					get() {
						throw new Error('Yikes!')
					},
				},
				TOKEN_ID,
				{
					address: 'address',
					metadata: {
						[HANDLER]: [TOKEN_ID],
					},
				},
				BEP126UserPermission.MINT,
			),
		).toBeTrue()
	})
})

describe('ownedByMinter', () => {
	it('should be viewed as owned by the minter if the owner address is the same as the minter address', async () => {
		expect(
			await ownedByMinter(
				{
					get() {
						return new BEP126Collection({
							...STUB_TX_META,
							tokens: [],
						}).toBinary()
					},
				},
				{
					get() {
						return new BEP131Token({
							owner: STUB_TX_META.initialOwner,
						}).toBinary()
					},
				},
				STUB_TX_META.id,
				TOKEN_ID,
			),
		).toBeTrue()
	})

	it('should not be viewed as owned by the minter if the owner address is not the same as the minter address', async () => {
		expect(
			await ownedByMinter(
				{
					get() {
						return new BEP126Collection({
							...STUB_TX_META,
							tokens: [],
						}).toBinary()
					},
				},
				{
					get() {
						return new BEP131Token({
							owner: 'someone',
						}).toBinary()
					},
				},
				STUB_TX_META.id,
				TOKEN_ID,
			),
		).toBeFalse()
	})

	it('should not be viewed as owned by anyone if an unexpected exception is encountered', async () => {
		expect(
			await ownedByMinter(
				{
					get() {
						throw new Error('Yikes!')
					},
				},
				{
					get() {
						throw new Error('Yikes!')
					},
				},
				STUB_TX_META.id,
				TOKEN_ID,
			),
		).toBeFalse()
	})
})
