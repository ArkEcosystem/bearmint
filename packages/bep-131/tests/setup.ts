import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { ContainerType } from '@bearmint/bep-013'
import { Unit } from '@bearmint/bep-053'
import {
	BEP126UserPermission,
	BEP126UserRole,
	MintPolicy,
	upsertCollection,
	makeServiceProvider as BEP126,
} from '@bearmint/bep-126'

import { makePolicy as BEP145 } from '../../bep-145/distribution/index.js'
import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(
	context: TxTestContext,
	payload?: Record<string, string>,
	ownedByBuyer?: boolean,
) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)

	const recipient = await context.accountFromMnemonic(mnemonics[1])

	await context.state.getAccountRepository().index([account, recipient.account])

	// Stub collection
	await context.state
		.getMultiStore()
		.get('@bearmint/bep-126')
		.attach(account.address, 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85')
	await upsertCollection(
		context.state.getMultiStore().get('@bearmint/bep-126'),
		'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
		{
			accessControlList: {
				[account.address]: {
					permissions: [
						BEP126UserPermission.BURN,
						BEP126UserPermission.MINT,
						BEP126UserPermission.TRANSFER,
					],
					role: BEP126UserRole.OWNER,
				},
			},
			currentOwner: account.address,
			id: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			initialOwner: account.address,
			name: 'name',
			policies: [
				{ name: MintPolicy.ONLY_TEAM, type: 0 },
				{ name: MintPolicy.ONLY_TEAM, type: 1 },
				{ name: MintPolicy.ONLY_TEAM, type: 2 },
			],
			symbol: 'symbol',
			tokens: [],
			uriPrefix: 'uriPrefix',
			uriSuffix: 'uriSuffix',
		},
	)

	// Act...
	return {
		recipient: recipient.account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			keypair,
			await context.client.fakeTxMsg('@bearmint/bep-131').execute({
				memo: payload?.memo ?? 'Hello, World!',
				ops: payload?.ops ?? [
					{
						memo: payload?.memoChild ?? 'Hello, World!',
						hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
						recipient: ownedByBuyer === true ? recipient.account.address : account.address,
					},
				],
			}),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider, [BEP126])

		context.container
			.resolve(ContainerType.PolicyRegistry)
			.set('@bearmint/bep-126', '0', MintPolicy.ONLY_TEAM, BEP145)

		context.container
			.resolve(ContainerType.PolicyRegistry)
			.set('@bearmint/bep-126', '1', MintPolicy.ONLY_TEAM, BEP145)

		context.container
			.resolve(ContainerType.PolicyRegistry)
			.set('@bearmint/bep-126', '2', MintPolicy.ONLY_TEAM, BEP145)
	})
}
