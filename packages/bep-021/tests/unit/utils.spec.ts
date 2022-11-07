import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { getPublicKeyType } from '../../source/utils.js'

describe('Utils', () => {
	it('should get the validator public key type', async () => {
		expect(
			getPublicKeyType({
				parameters: { consensus: { validator: { pubKeyTypes: ['secp256k1'] } } },
			}),
		).toStrictEqual('secp256k1')
	})
})
