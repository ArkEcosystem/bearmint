import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { abci, BEP59Strategy } from '@bearmint/bep-018'
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
	account.validator = {
		address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
		publicKey:
			payload?.publicKey ?? '02188c4160b824e3eebab316434ee0b4e7aab254391e84d4a4f66dddc49c879247',
	}

	await context.state
		.getMultiStore()
		.get('@bearmint/bep-059')
		.set(
			account.address,
			new BEP59Strategy({
				strategyArgs: '50',
				strategy: '@bearmint/bep-086',
			}).toBinary(),
		)

	const recipient =
		actingAsLoopback === true
			? { account, keypair }
			: await context.accountFromMnemonic(mnemonics[1])

	await context.state.getAccountRepository().index([account, recipient.account])

	// Act...
	return {
		recipient: account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			recipient.keypair,
			await context.client.fakeTxMsg('@bearmint/bep-059').execute(payload),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)

		await context.state.getMultiStore().add('@bearmint/bep-058')
		await context.state.getMultiStore().add('@bearmint/bep-059')

		await context.state.setCommittedBlock(
			new abci.RequestFinalizeBlock(
				new abci.RequestFinalizeBlock({ header: { height: BigInt(10) } }),
			),
		)
	})
}
