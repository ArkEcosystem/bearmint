import { ErrorCode } from '@bearmint/bep-109'

export function testTopMemoLength({ createTx, expect, it }) {
	it('should fail if the top-level memo is too short', async (context) => {
		const { tx } = await createTx(context, {
			memo: '',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.memo',
				value: ErrorCode.TX_BYTE_LENGTH_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the top-level memo is too long', async (context) => {
		const { tx } = await createTx(context, {
			memo: '#'.repeat(257),
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.memo',
				value: ErrorCode.TX_BYTE_LENGTH_MAX_NOT_SATISFIED,
			},
		])
	})
}

export function testMemoLength({ createTx, expect, it }) {
	testTopMemoLength({ createTx, expect, it })

	it('should fail if the child-level memo is too short', async (context) => {
		const { tx } = await createTx(context, {
			memoChild: '',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.memo',
				value: ErrorCode.TX_BYTE_LENGTH_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the child-level memo is too long', async (context) => {
		const { tx } = await createTx(context, {
			memoChild: '#'.repeat(257),
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.memo',
				value: ErrorCode.TX_BYTE_LENGTH_MAX_NOT_SATISFIED,
			},
		])
	})
}
