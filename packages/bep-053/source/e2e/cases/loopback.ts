import { ErrorCode } from '@bearmint/bep-109'

export function testLoopback(name: string, it: CallableFunction, context?: string | undefined) {
	it('should fail if it is not acting as a loopback', async (ctx) => {
		if (context !== undefined) {
			ctx = ctx[context]
		}

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg(name).execute(),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'sender', value: ErrorCode.TX_UNEXPECTED_RELATIONAL_DIRECTION },
				],
				type: `${name}/0.0.0/audit`,
			},
		])
	})
}
