import { bytesToHex, hexToBytes } from '@bearmint/bep-009'
import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import {
	deriveEd25519Address,
	deriveSecp256k1Address,
	deriveSr25519Address,
} from '../../source/address.js'

const publicKey = hexToBytes('134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e')

describe('Address', () => {
	it('should derive a ed25519 address', async () => {
		expect(bytesToHex(deriveEd25519Address(publicKey))).toStrictEqual(
			'2dd8f7c08f3faa8a602532d05a041b5a76652515',
		)
	})

	it('should derive a secp256k1 address', async () => {
		expect(bytesToHex(deriveSecp256k1Address(publicKey))).toStrictEqual(
			'51998c25d6735208d5d31c9195b4f1390daa4d80',
		)
	})

	it('should derive a sr25519 address', async () => {
		expect(bytesToHex(deriveSr25519Address(publicKey))).toStrictEqual(
			'2dd8f7c08f3faa8a602532d05a041b5a76652515',
		)
	})
})
