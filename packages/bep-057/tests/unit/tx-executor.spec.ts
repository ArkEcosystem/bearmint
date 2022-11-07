import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should attach the validator information to the account', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).notToBeValidator(context.state)

		await expect(await context.execute(tx)).toPassExecution()

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
