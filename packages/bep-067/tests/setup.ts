import type { BEP67Msg, PlainMessage } from '@bearmint/bep-018'
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'
import { getPrimaryKey } from '../source/utils.js'

export async function createTx(context: TxTestContext, payload?: PlainMessage<BEP67Msg>) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)

	await context.state.getAccountRepository().index([account])

	// Act...
	return {
		primaryKey:
			Object.keys(payload?.ops ?? {}).length > 0
				? getPrimaryKey(payload.ops[0].type, payload.ops[0].value)
				: undefined,
		recipient: account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			keypair,
			await context.client.fakeTxMsg('@bearmint/bep-067').execute(
				payload?.memoChild !== undefined
					? {
							ops: [
								{
									memo: payload?.memoChild ?? 'Hello, World!',
								},
							],
					  }
					: payload,
			),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)
	})
}
