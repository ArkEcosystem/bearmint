import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { E2E } from '@bearmint/bep-053'

import { makeServiceProvider } from '../../source/service-provider.js'

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider))
	})

	it('should pass', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-110').execute({
				moniker: 'buckley',
			}),
		)

		await ctx.accts.get('genesis_1').expectProperty('moniker', 'buckley')

		await tx.pass()

		await ctx.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-110', it)
	E2E.testTopMemoLength('@bearmint/bep-110', it)

	it('should fail if the moniker is malformed', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-110').execute({
				moniker: '!@#$!@#$@!#$',
			}),
		)

		await tx.fail([
			{
				attributes: [{ index: false, key: 'message.moniker', value: 'ERR_TX_MALFORMED_VALUE' }],
				type: '@bearmint/bep-110/0.0.0/audit',
			},
		])
	})

	it('should fail if the account already has a moniker', async (ctx) => {
		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_3').keypair,
				ctx.accts.get('genesis_3').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-110').execute({
					moniker: 'alreadyhasamoniker',
				}),
			)
		).pass()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_3').keypair,
				ctx.accts.get('genesis_3').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-110').execute({
					moniker: 'alreadyhasamoniker',
				}),
			)
		).fail([
			{
				attributes: [{ index: false, key: 'message.moniker', value: 'ERR_TX_FORBIDDEN_ACTION' }],
				type: '@bearmint/bep-110/0.0.0/audit',
			},
		])
	})

	it('should fail if the moniker is already registered', async (ctx) => {
		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_4').keypair,
				ctx.accts.get('genesis_4').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-110').execute({
					moniker: 'alreadyregistered',
				}),
			)
		).pass()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_5').keypair,
				ctx.accts.get('genesis_5').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-110').execute({
					moniker: 'alreadyregistered',
				}),
			)
		).fail([
			{
				attributes: [{ index: false, key: 'message.moniker', value: 'ERR_TX_DUPLICATED_VALUE' }],
				type: '@bearmint/bep-110/0.0.0/audit',
			},
		])
	})
})
