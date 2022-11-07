import { expect, describe, it } from 'vitest'
import { extendExpect, spyFn } from '@bearmint/bep-005'
extendExpect(expect)
import { hexToBytes } from '@bearmint/bep-009'
import { SignedTx } from '@bearmint/bep-018'

import { makeTxFactory } from '../../source/factory.js'

describe('Tx Factory', () => {
	it('should create the context functions', async () => {
		expect(
			await makeTxFactory({
				AddressFactory: { fromString: spyFn().toFunction() },
				PublicKeyFactory: { fromString: spyFn().toFunction() },
			}).fromBytes(
				new SignedTx({
					gas: BigInt(1),
					hash: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
					message: {
						content: Buffer.alloc(0),
						handler: 'handler',
						network: 'network',
						version: 'version',
					},
					nonce: BigInt(1),
					recipient: 'recipient',
					sender: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
					signature: hexToBytes(
						'134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
					),
					version: '1.0.0',
				}).toBinary(),
			),
		).toMatchSnapshot()
	})
})
