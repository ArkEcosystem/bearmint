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
import { upsertNFT, makeServiceProvider as BEP131 } from '@bearmint/bep-131'

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

	// Make a recipient fore
	const recipient = await context.accountFromMnemonic(mnemonics[1])
	recipient.account.balances[denominations.gas] = BigInt(1e8)

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
			metadata: 'https://google.com',
			mintingTx: 'does-not-matter',
			policies: [
				{ name: MintPolicy.ONLY_TEAM, type: 0 },
				{ name: MintPolicy.ONLY_TEAM, type: 1 },
				{ name: MintPolicy.ONLY_TEAM, type: 2 },
			],
			tokens: ['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'],
		},
	)

	if (ownedByBuyer === true) {
		await upsertNFT(
			context.state.getMultiStore().get('@bearmint/bep-131'),
			'74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
			{
				collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				id: 0,
				owner: recipient.account.address,
			},
		)

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-131')
			.attach(
				recipient.account.address,
				'74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
			)
	} else {
		await upsertNFT(
			context.state.getMultiStore().get('@bearmint/bep-131'),
			'74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
			{
				collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				id: 0,
				owner: account.address,
			},
		)

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-131')
			.attach(account.address, '74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276')
	}

	await context.state.getAccountRepository().index([account, recipient.account])

	// Act...
	return {
		recipient: recipient.account,
		sender: account,
		tx: await context.makeTx(
			ownedByBuyer === true ? recipient.keypair : keypair,
			ownedByBuyer === true ? recipient.keypair : keypair,
			await context.client.fakeTxMsg('@bearmint/bep-133').execute(
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
		await Unit.createEnvironment(context, makeServiceProvider, [BEP126, BEP131])

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
