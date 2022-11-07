import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP88Validator } from '@bearmint/bep-018'

import { MILESTONE } from '../fixtures.js'
import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should increase the stake (PoS)', async (context) => {
		const { sender, tx } = await createTx(context, {
			ops: [
				{
					moniker: 'buckley',
					stake: BigInt(1e8),
				},
			],
		})
		sender.stakes.buckley = BigInt(1e8)
		await context.state.getAccountRepository().index([sender])

		await context.state.setMilestone(MILESTONE)

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-088')
			.set(
				sender.address,
				new BEP88Validator({
					address: sender.address,
					delegators: {
						[sender.address]: BigInt(1e8),
					},
				}).toBinary(),
			)

		await expect(sender).toMatchStake({
			amount: '100000000',
			moniker: 'buckley',
			state: context.state,
		})

		await expect(sender).toBeValidator({
			attributes: {
				address: '',
				delegators: {
					[sender.address]: '100000000',
				},
				power: '100000000',
				publicKey: '',
			},
			state: context.state,
			stakingService: context.stakingService,
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toMatchStake({
			amount: `${2e8}`,
			moniker: 'buckley',
			state: context.state,
		})

		await expect(sender).toBeValidator({
			attributes: {
				address: '',
				delegators: {
					[sender.address]: '200000000',
				},
				power: '200000000',
				publicKey: '',
			},
			state: context.state,
			stakingService: context.stakingService,
		})
	})

	it('should decrease the stake (PoS)', async (context) => {
		const { sender, tx } = await createTx(context, {
			ops: [
				{
					moniker: 'buckley',
					stake: BigInt(-1e8),
				},
			],
		})
		sender.stakes.buckley = BigInt(1e8)
		await context.state.getAccountRepository().index([sender])

		await context.state.setMilestone(MILESTONE)

		await expect(sender).toMatchStake({
			amount: '100000000',
			moniker: 'buckley',
			state: context.state,
		})

		await expect(sender).toBeValidator({
			attributes: {
				address: '',
				delegators: {},
				power: '100000000',
				publicKey: '',
			},
			state: context.state,
			stakingService: context.stakingService,
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toBeMissingStake({
			moniker: 'buckley',
			state: context.state,
		})

		await expect(sender).toBeValidator({
			attributes: {
				address: '',
				delegators: {},
				power: '0',
				publicKey: '',
			},
			state: context.state,
			stakingService: context.stakingService,
		})
	})

	it('should increase the stake (DPoS)', async (context) => {
		const { borkley, sender, tx } = await createTx(context, {
			ops: [
				{
					moniker: 'borkley',
					stake: BigInt(1e8),
				},
			],
		})

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-088')
			.set(
				borkley.address,
				new BEP88Validator({
					address: borkley.address,
					delegators: {
						[sender.address]: BigInt(1e8),
					},
				}).toBinary(),
			)

		await expect(sender).toMatchStake({
			amount: '100000000',
			moniker: 'borkley',
			state: context.state,
		})

		await expect(borkley).toBeValidator({
			attributes: {
				address: '',
				delegators: {
					[sender.address]: '100000000',
				},
				power: '100000000',
				publicKey: '',
			},
			state: context.state,
			stakingService: context.stakingService,
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toMatchStake({
			amount: `${2e8}`,
			moniker: 'borkley',
			state: context.state,
		})

		await expect(borkley).toBeValidator({
			attributes: {
				address: '',
				delegators: {
					[sender.address]: '200000000',
				},
				power: '200000000',
				publicKey: '',
			},
			state: context.state,
			stakingService: context.stakingService,
		})
	})

	it('should decrease the stake (DPoS)', async (context) => {
		const { borkley, sender, tx } = await createTx(context)

		await expect(sender).toMatchStake({
			amount: '100000000',
			moniker: 'borkley',
			state: context.state,
		})

		await expect(borkley).toBeValidator({
			attributes: {
				address: '',
				delegators: {},
				power: '100000000',
				publicKey: '',
			},
			state: context.state,
			stakingService: context.stakingService,
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toBeMissingStake({
			moniker: 'borkley',
			state: context.state,
		})

		await expect(borkley).toBeValidator({
			attributes: {
				address: '',
				delegators: {},
				power: '0',
				publicKey: '',
			},
			state: context.state,
			stakingService: context.stakingService,
		})
	})
})
