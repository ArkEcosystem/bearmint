import { ErrorCode } from '@bearmint/bep-109'

export function testOpCount(name: string, it: CallableFunction, context?: string | undefined) {
	it('should fail if there are too few ops', async (ctx) => {
		if (context !== undefined) {
			ctx = ctx[context]
		}

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg(name).execute({
				memo: 'Hello, World!',
				ops: [],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: ErrorCode.TX_COUNT_MIN_NOT_SATISFIED },
				],
				type: `${name}/0.0.0/audit`,
			},
		])
	})

	it('should fail if there are too many ops', async (ctx) => {
		if (context !== undefined) {
			ctx = ctx[context]
		}

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg(name).execute({
				memo: 'Hello, World!',
				ops: Array.from({ length: 420 }).fill({}),
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: ErrorCode.TX_COUNT_MAX_NOT_SATISFIED },
				],
				type: `${name}/0.0.0/audit`,
			},
		])
	})
}
