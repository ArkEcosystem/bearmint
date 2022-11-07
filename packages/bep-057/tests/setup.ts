import { hexToBytes } from '@bearmint/bep-009'
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(context: TxTestContext, payload?: Record<string, string>) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)
	account.moniker = 'buckley'

	await context.state.getAccountRepository().index([account])

	// Act...
	return {
		recipient: account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			keypair,
			await context.client.fakeTxMsg('@bearmint/bep-057').execute(
				{
					memo: payload?.memo ?? 'Hello, World!',
					publicKey: hexToBytes(
						payload?.publicKey ??
							'03134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
					),
					signature: payload?.signature ? hexToBytes(payload?.signature) : undefined,
				},
				{
					moniker: account.moniker,
				},
			),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)
	})
}
