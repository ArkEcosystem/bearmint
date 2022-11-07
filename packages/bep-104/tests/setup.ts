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
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)
	account.balances[denominations.stake] = BigInt(10e8)
	account.lockedBalances[denominations.stake] = BigInt(1e8)
	account.moniker = 'buckley'
	account.validator = { power: BigInt(1e8) }

	if (payload?.integration === undefined) {
		account.stakes.borkley = BigInt(1e8)
	}

	delete payload?.integration

	let recipient = { account, keypair }

	if (actingAsLoopback !== true) {
		recipient = await context.accountFromMnemonic(mnemonics[1])
	}

	const { account: borkley } = await context.accountFromMnemonic(mnemonics[2])
	borkley.moniker = 'borkley'
	borkley.validator = { power: BigInt(1e8) }

	await context.state.getAccountRepository().index([account, recipient.account, borkley])

	// Act...
	return {
		borkley,
		context,
		recipient: account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			recipient.keypair,
			await context.client.fakeTxMsg('@bearmint/bep-104').execute({
				memo: payload?.memo ?? 'Hello, World!',
				ops: payload?.ops ?? [
					{
						moniker: 'borkley',
						stake: BigInt(-1e8),
						memo: payload?.memoChild ?? 'Hello, World!',
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
