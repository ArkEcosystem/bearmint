import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should mark the validator as abandoned', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toBeValidator({
			attributes: {
				address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
				delegators: {
					bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl:
						'100000000',
				},
				power: '0',
				publicKey: '02188c4160b824e3eebab316434ee0b4e7aab254391e84d4a4f66dddc49c879247',
			},
			state: context.state,
			stakingService: context.stakingService,
		})

		await expect(sender).toHaveStake({
			moniker: 'moniker',
			state: context.state,
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toBeMissingStake({
			moniker: 'moniker',
			state: context.state,
		})

		await expect(sender).toBeValidator({
			attributes: {
				address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
				delegators: {},
				power: '0',
				publicKey: '02188c4160b824e3eebab316434ee0b4e7aab254391e84d4a4f66dddc49c879247',
			},
			state: context.state,
			stakingService: context.stakingService,
		})

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-058').has(sender.address),
		).toBeTrue()
	})
})
