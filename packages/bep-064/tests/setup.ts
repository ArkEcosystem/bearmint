import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { blake3 } from '@bearmint/bep-009'
import { abci, BEP64MsgOp } from '@bearmint/bep-018'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(
	context: TxTestContext,
	payload?: Record<string, string>,
	actingAsLoopback = true,
) {
	// Arrange...
	const sender = await context.accountFromMnemonic(mnemonics[0])
	sender.account.balances[denominations.gas] = BigInt(1e8)
	sender.account.balances[denominations.token] = BigInt(1e8)
	sender.account.lockedBalances[denominations.token] = BigInt(0)

	const recipient = await context.accountFromMnemonic(mnemonics[1])

	recipient.account.balances[denominations.token] = BigInt(0)
	recipient.account.lockedBalances[denominations.token] = BigInt(0)

	await context.state.getAccountRepository().index([sender.account, recipient.account])

	// Act...
	return {
		recipient: recipient.account,
		sender: sender.account,
		tx: await context.makeTx(
			sender.keypair,
			(actingAsLoopback === true ? sender : recipient).keypair,
			await context.client.fakeTxMsg('@bearmint/bep-064').execute({
				memo: payload?.memo ?? 'Hello, World!',
				ops: payload?.ops ?? [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(payload?.expiration ?? 1_893_448_800),
						memo: payload?.memoChild ?? 'Hello, World!',
						recipient: payload?.recipient ?? recipient.account.address,
						secret: payload?.secret !== undefined ? payload.secret : blake3('honey'),
						secretAlgorithm:
							payload?.secretAlgorithm !== undefined ? payload.secretAlgorithm : 'blake3',
					}),
				],
			}),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)

		await context.state.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(10) } }),
		)
	})
}
