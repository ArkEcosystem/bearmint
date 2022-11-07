import { ErrorCode } from '@bearmint/bep-109'

export function testTopMemoLength(
	name: string,
	it: CallableFunction,
	context?: string | undefined,
) {
	it('should fail if the top-level memo is too short', async (ctx) => {
		if (context !== undefined) {
			ctx = ctx[context]
		}

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg(name).execute({
				memo: '',
				ops: [
					{
						memo: 'John',
					},
					{
						memo: 'Deer',
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.memo', value: ErrorCode.TX_BYTE_LENGTH_MIN_NOT_SATISFIED },
				],
				type: `${name}/0.0.0/audit`,
			},
		])
	})

	it('should fail if the top-level memo is too long', async (ctx) => {
		if (context !== undefined) {
			ctx = ctx[context]
		}

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg(name).execute({
				memo: '#'.repeat(257),
				ops: [
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'John',
						recipient: ctx.accts.get('genesis_2').address,
					},
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'Deer',
						recipient: ctx.accts.get('genesis_2').address,
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.memo', value: ErrorCode.TX_BYTE_LENGTH_MAX_NOT_SATISFIED },
				],
				type: `${name}/0.0.0/audit`,
			},
		])
	})
}

export function testMemoLength(name: string, it: CallableFunction, context?: string | undefined) {
	testTopMemoLength(name, it, context)

	it('should fail if any child-level memo is too short', async (ctx) => {
		if (context !== undefined) {
			ctx = ctx[context]
		}

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg(name).execute({
				memo: 'Hello, World!',
				ops: [
					{
						memo: 'John',
					},
					{
						memo: '',
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.1.memo',
						value: ErrorCode.TX_BYTE_LENGTH_MIN_NOT_SATISFIED,
					},
				],
				type: `${name}/0.0.0/audit`,
			},
		])
	})

	it('should fail if any child-level memo is too long', async (ctx) => {
		if (context !== undefined) {
			ctx = ctx[context]
		}

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg(name).execute({
				memo: 'Hello, World!',
				ops: [
					{
						memo: 'John',
					},
					{
						memo: '#'.repeat(257),
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.1.memo',
						value: ErrorCode.TX_BYTE_LENGTH_MAX_NOT_SATISFIED,
					},
				],
				type: `${name}/0.0.0/audit`,
			},
		])
	})
}
