import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { BEP88Validator } from '@bearmint/bep-018'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(context: TxTestContext, payload?: Record<string, string>) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	// account.address = 'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl';
	account.balances[denominations.gas] = BigInt(1e8)
	account.moniker = 'moniker'
	// account.publicKey = '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e';
	// account.publicKey = '02188c4160b824e3eebab316434ee0b4e7aab254391e84d4a4f66dddc49c879247';
	account.stakes = { moniker: BigInt(1e8) }
	account.validator = {
		address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
		publicKey:
			payload?.publicKey ?? '02188c4160b824e3eebab316434ee0b4e7aab254391e84d4a4f66dddc49c879247',
	}

	await context.state.getAccountRepository().index([account])

	await context.state
		.getMultiStore()
		.get('@bearmint/bep-088')
		.set(
			account.address,
			new BEP88Validator({
				address: account.address,
				delegators: {
					[account.address]: BigInt(1e8),
				},
			}).toBinary(),
		)

	// Act...
	return {
		recipient: account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			keypair,
			await context.client.fakeTxMsg('@bearmint/bep-058').execute(payload),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)
	})
}
