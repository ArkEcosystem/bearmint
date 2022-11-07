import { upsertNAT, makeServiceProvider as BEP134 } from '@bearmint/bep-134'
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'

export const STUB_NATIVE_TOKEN = {
	currentOwner:
		'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
	decimals: 8,
	denomination: 'denomination',
	initialOwner:
		'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
	initialSupply: BigInt(1e8),
	name: 'name',
	policies: [
		{ name: '@bearmint/bep-138', type: 1 },
		{ name: '@bearmint/bep-140', type: 1 },
	],
}

export async function createTx(context: TxTestContext, payload?: object) {
	// Arrange...
	const sender = await context.accountFromMnemonic(mnemonics[0])
	sender.account.balances[denominations.gas] = BigInt(1e8)

	await context.state.getAccountRepository().index([sender.account])

	// Stub native token
	await context.state
		.getMultiStore()
		.get('@bearmint/bep-134')
		.attach(
			sender.account.address,
			'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
		)

	await upsertNAT(
		context.state.getMultiStore().get('@bearmint/bep-134'),
		'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
		STUB_NATIVE_TOKEN,
	)

	// Act...
	return {
		recipient: sender.account,
		sender: sender.account,
		tx: await context.makeTx(
			sender.keypair,
			sender.keypair,
			await context.client.fakeTxMsg('@bearmint/bep-136').execute(
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
		await Unit.createEnvironment(context, makeServiceProvider, [BEP134])
	})
}
