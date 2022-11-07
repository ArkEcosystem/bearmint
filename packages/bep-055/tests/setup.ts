import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(
	context: TxTestContext,
	payload?: Record<string, string>,
	actingAsLoopback = true,
) {
	// Arrange...
	const sender = await context.accountFromMnemonic(mnemonics[0])
	sender.account.balances[denominations.gas] = BigInt(2e8)
	sender.account.balances[denominations.token] = BigInt(`${3e8}`)

	const recipient = await context.accountFromMnemonic(mnemonics[1])

	recipient.account.balances[denominations.token] = BigInt(0)

	await context.state.getAccountRepository().index([sender.account, recipient.account])

	// Act...
	return {
		recipient: recipient.account,
		sender: sender.account,
		tx: await context.makeTx(
			sender.keypair,
			(actingAsLoopback === true ? sender : recipient).keypair,
			await context.client.fakeTxMsg('@bearmint/bep-055').execute({
				memo: payload?.memo ?? 'Hello, World!',
				ops: payload?.ops ?? [
					{
						amount: BigInt(payload?.amount !== undefined ? payload.amount : 2e8),
						denomination: payload?.denomination ?? 'BEAR',
						memo: payload?.memoChild ?? 'Hello, World!',
						recipient: payload?.recipient ?? recipient.account.address,
					},
				],
			}),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)
	})
}
