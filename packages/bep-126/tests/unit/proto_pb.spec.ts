import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP126Collection, BEP131Token, BEP126User } from '@bearmint/bep-018'

import { BEP126UserPermission, BEP126UserRole } from '../../source/types.js'
import { STUB_TX_META } from '../fixtures.js'

describe('Collection', () => {
	it('should serialize and deserialize', () => {
		const actual = BEP126Collection.fromBinary(new BEP126Collection(STUB_TX_META).toBinary())

		expect(actual.toBinary()).toMatchSnapshot()
		expect(actual.toJson()).toMatchSnapshot()
		expect(actual.toJsonString()).toMatchSnapshot()
	})
})

describe('BEP131Token', () => {
	it('should serialize and deserialize', () => {
		const actual = BEP131Token.fromBinary(
			new BEP131Token({
				collection: 'collection',
				id: 1,
				owner: 'owner',
			}).toBinary(),
		)

		expect(actual.toBinary()).toMatchSnapshot()
		expect(actual.toJson()).toMatchSnapshot()
		expect(actual.toJsonString()).toMatchSnapshot()
	})
})

describe('User', () => {
	it('should serialize and deserialize', () => {
		const actual = BEP126User.fromBinary(
			new BEP126User({
				permissions: [
					BEP126UserPermission.BURN,
					BEP126UserPermission.MINT,
					BEP126UserPermission.TRANSFER,
				],
				role: BEP126UserRole.OWNER,
			}).toBinary(),
		)

		expect(actual.toBinary()).toMatchSnapshot()
		expect(actual.toJson()).toMatchSnapshot()
		expect(actual.toJsonString()).toMatchSnapshot()
	})
})
