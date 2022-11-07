import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'
import { BEP120File, BEP120Record } from '@bearmint/bep-018'

export async function createTx(
	context: TxTestContext,
	payload?: Record<string, string>,
	actingAsLoopback?: boolean,
) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)
	account.moniker = 'buckley'
	account.validator = {
		address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
		publicKey:
			payload?.publicKey ?? '02188c4160b824e3eebab316434ee0b4e7aab254391e84d4a4f66dddc49c879247',
	}

	await context.state
		.getMultiStore()
		.get('@bearmint/bep-120')
		.set(
			account.address,
			new BEP120File({
				count: 1,
				jailed: true,
				records: [
					new BEP120Record({
						misbehavior: {
							height: BigInt(0),
							totalVotingPower: BigInt(0),
							type: 0,
						},
						sentence: {
							end: BigInt(payload?.jailedUntil ?? 10),
							start: BigInt(0),
						},
					}),
				],
			}).toBinary(),
		)

	const recipient =
		actingAsLoopback === undefined
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
			await context.client
				.fakeTxMsg('@bearmint/bep-122')
				.execute(payload ?? { moniker: 'buckley' }),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)

		await context.state.getMultiStore().add('@bearmint/bep-120')
		await context.state.getMultiStore().add('@bearmint/bep-121')
	})
}
