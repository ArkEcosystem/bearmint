import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider as BEP141 } from '../../bep-141/distribution/index.js'
import { makeServiceProvider as BEP142 } from '../../bep-142/distribution/index.js'
import { makeServiceProvider as BEP143 } from '../../bep-143/distribution/index.js'
import { makeServiceProvider as BEP144 } from '../../bep-144/distribution/index.js'
import { makeServiceProvider as BEP145 } from '../../bep-145/distribution/index.js'
import { makeServiceProvider } from '../source/service-provider.js'
import { HANDLER } from '../source/types.js'
import { getNameKey, getSymbolKey } from '../source/utils.js'

export async function createTx(
	context: TxTestContext,
	payload?: object,
	actingAsRelational?: boolean,
) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)

	await context.state.getAccountRepository().index([account])

	// Act...
	return {
		recipient: account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			actingAsRelational === true
				? (
						await context.accountFromMnemonic(mnemonics[1])
				  ).keypair
				: keypair,
			await context.client.fakeTxMsg(HANDLER).execute(
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
		await Unit.createEnvironment(context, makeServiceProvider)

		await context.state.getMultiStore().add(HANDLER)

		await context.container.build(BEP141).register()
		await context.container.build(BEP142).register()
		await context.container.build(BEP143).register()
		await context.container.build(BEP144).register()
		await context.container.build(BEP145).register()
	})
}

export function tearDown(afterEach: CallableFunction) {
	afterEach(async (context) => {
		await context.state.getMultiStore().get(HANDLER).forget(getNameKey('https://google.com'))

		await context.state.getMultiStore().get(HANDLER).forget(getSymbolKey('https://google.com'))
	})
}
