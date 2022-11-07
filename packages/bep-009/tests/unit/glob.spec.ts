import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { glob } from '../../source/glob.js'

describe('Glob', () => {
	it('should return matching items with a pattern', () => {
		expect(
			glob(
				[
					'htlc',
					'htlc-faulty',
					'native-tokens',
					'native-tokens-faulty',
					'nft',
					'nft-faulty',
					'registration',
					'registration-faulty',
					'stake',
					'stake-faulty',
					'tokens',
					'tokens-faulty',
					'validator',
				],
				'*faulty',
			),
		).toStrictEqual([
			'htlc-faulty',
			'native-tokens-faulty',
			'nft-faulty',
			'registration-faulty',
			'stake-faulty',
			'tokens-faulty',
		])
	})

	it('should return matching items with multiple patterns', () => {
		expect(
			glob(
				[
					'htlc',
					'htlc-faulty',
					'native-tokens',
					'native-tokens-faulty',
					'nft',
					'nft-faulty',
					'registration',
					'registration-faulty',
					'stake',
					'stake-faulty',
					'tokens',
					'tokens-faulty',
					'validator',
				],
				['htlc*', 'nft*'],
			),
		).toStrictEqual(['htlc', 'htlc-faulty', 'nft', 'nft-faulty'])
	})
})
