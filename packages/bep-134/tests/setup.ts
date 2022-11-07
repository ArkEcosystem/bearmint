import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider as BEP138 } from '../../bep-138/distribution/index.js'
import { makeServiceProvider as BEP139 } from '../../bep-139/distribution/index.js'
import { makeServiceProvider as BEP140 } from '../../bep-140/distribution/index.js'
import { makeServiceProvider } from '../source/service-provider.js'
import { BEP134UserPermission, MintPolicy } from '../source/types.js'
import { getDenominationKey, getNameKey, getPrimaryKey } from '../source/utils.js'

export async function createTx(context: TxTestContext, payload?: Record<string, any>) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)

	await context.state.getAccountRepository().index([account])

	const tx = await context.makeTx(
		keypair,
		keypair,
		await context.client.fakeTxMsg('@bearmint/bep-134').execute({
			memo: payload?.memo ?? 'Hello, World!',
			ops: [
				{
					memo: payload?.memoChild ?? 'Hello, World!',
					decimals: 32,
					denomination: payload?.denomination ?? 'denomination',
					initialSupply: payload?.initialSupply ?? BigInt(`${5e8}`),
					name: payload?.name ?? 'name',
					policies: payload?.policies ?? [
						{
							name: MintPolicy.ONLY_OWNER,
							type: BEP134UserPermission.MINT,
						},
						{
							name: MintPolicy.IMMUTABLE,
							type: BEP134UserPermission.MINT,
						},
					],
				},
			],
		}),
	)

	// Act...
	return {
		primaryKey: getPrimaryKey(tx.hash, '0'),
		recipient: account,
		sender: account,
		tx,
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)

		await context.container.build(BEP138).register()
		await context.container.build(BEP139).register()
		await context.container.build(BEP140).register()
	})
}

export function tearDown(afterEach: CallableFunction) {
	afterEach(async (context) => {
		await context.state.getMultiStore().get('@bearmint/bep-134').forget(getNameKey('name'))
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-134')
			.forget(getDenominationKey('denomination'))
	})
}
