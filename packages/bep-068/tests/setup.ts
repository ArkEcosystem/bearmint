import { hexToBytes, stringToBytes } from '@bearmint/bep-009'
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'
import { getPrimaryKey } from '../source/utils.js'

export async function createTx(context: TxTestContext, payload?: Record<string, string>) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)

	await context.state.getAccountRepository().index([account])

	const op = {
		memo: payload?.memoChild ?? 'Hello, World!',
		data:
			payload?.data !== undefined
				? hexToBytes(payload?.data)
				: stringToBytes('The quick brown fox jumps over the lazy dog'),
		mimeType: payload?.mimeType !== undefined ? payload.mimeType : 'application/json',
	}

	// Act...
	return {
		primaryKey: getPrimaryKey(op.data),
		recipient: account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			keypair,
			await context.client.fakeTxMsg('@bearmint/bep-068').execute({
				memo: payload?.memo ?? 'Hello, World!',
				ops: [op],
			}),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)
	})
}
