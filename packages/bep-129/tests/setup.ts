import {
	BEP126UserPermission,
	upsertCollection,
	makeServiceProvider as BEP126,
} from '@bearmint/bep-126'
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(context: TxTestContext, payload?: object) {
	// Arrange...
	const sender = await context.accountFromMnemonic(mnemonics[0])
	sender.account.balances[denominations.gas] = BigInt(1e8)

	const recipient = await context.accountFromMnemonic(mnemonics[1])

	await context.state.getAccountRepository().index([sender.account, recipient.account])

	// Stub collection
	await context.state
		.getMultiStore()
		.get('@bearmint/bep-126')
		.attach(
			sender.account.address,
			'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
		)
	await upsertCollection(
		context.state.getMultiStore().get('@bearmint/bep-126'),
		'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
		{
			accessControlList: {
				[sender.account.address]: {
					permissions: [
						BEP126UserPermission.BURN,
						BEP126UserPermission.MINT,
						BEP126UserPermission.TRANSFER,
					],
					role: 0,
				},
			},
			currentOwner: sender.account.address,
			id: 'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
			initialOwner: sender.account.address,
			name: 'name',
			policies: [],
			symbol: 'symbol',
			tokens: [],
			uriPrefix: 'uriPrefix',
			uriSuffix: 'uriSuffix',
		},
	)

	// Act...
	return {
		recipient: recipient.account,
		sender: sender.account,
		tx: await context.makeTx(
			sender.keypair,
			sender.keypair,
			await context.client.fakeTxMsg('@bearmint/bep-129').execute({
				memo: payload?.memo ?? 'Hello, World!',
				ops: payload?.ops ?? [
					{
						hash: 'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
						memo: payload?.memoChild ?? 'Hello, World!',
						permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
						steward: recipient.account.address,
					},
				],
			}),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider, [BEP126])
	})
}
