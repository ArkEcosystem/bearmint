import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { mnemonics } from '@bearmint/bep-006'
import { bytesToHex, stringToBytes } from '@bearmint/bep-009'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { sender, tx } = await createTx(context)

		await context.state.getAccountRepository().index([
			{
				...(await context.accountFromMnemonic(mnemonics[1])).account,
				moniker: 'a',
				validator: {
					address: bytesToHex(stringToBytes('a')),
					power: '5',
					publicKey: 'a',
				},
			},
			{
				...(await context.accountFromMnemonic(mnemonics[2])).account,
				moniker: 'b',
				validator: {
					address: bytesToHex(stringToBytes('b')),
					power: '5',
					publicKey: 'b',
				},
			},
		])

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

		await context.executeFull(tx)

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
