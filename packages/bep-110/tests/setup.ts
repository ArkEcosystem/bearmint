import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(context: TxTestContext, payload?: Record<string, string>) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)

	await context.state.getAccountRepository().index([account])

	// Act...
	return {
		recipient: (await context.accountFromMnemonic(mnemonics[1])).account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			keypair,
			await context.client.fakeTxMsg('@bearmint/bep-110').execute(payload),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)
	})
}
