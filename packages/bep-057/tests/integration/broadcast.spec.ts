import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { mnemonic } from '@bearmint/bep-006'
import { blake3 } from '@bearmint/bep-009'
import { BEP57MsgHash } from '@bearmint/bep-018'
import { makeKeyPairFactory as ECDSA, makeSignatureFactory } from '@bearmint/bep-034'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const keyPair = await ECDSA().fromMnemonic(mnemonic)

		const { sender, tx } = await createTx(context, {
			publicKey: keyPair.toPublicKey().toString(),
			signature: (
				await makeSignatureFactory().sign(
					blake3(
						new BEP57MsgHash({
							memo: 'Hello, World!',
							moniker: 'buckley',
						}).toBinary(),
					),
					keyPair,
				)
			).toString(),
		})

		await expect(sender).notToBeValidator(context.state)

		await context.executeFull(tx)

		await expect(sender).toBeValidator({
			attributes: {
				address: 'dcb78772861107d464ef57fd91dd3d04cfe4c864',
				delegators: {},
				power: '0',
				publicKey: '03134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
			},
			state: context.state,
			stakingService: context.stakingService,
		})
	})
})
