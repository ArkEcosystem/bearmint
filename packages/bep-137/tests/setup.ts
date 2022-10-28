import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { stringToHex } from '@bearmint/bep-009'
import { ContainerType } from '@bearmint/bep-013'
import { abci, BEP134Policy } from '@bearmint/bep-018'
import { Unit } from '@bearmint/bep-053'
import {
	BEP134UserPermission,
	MintPolicy,
	upsertNAT,
	makeServiceProvider as BEP134,
} from '@bearmint/bep-134'

import { makePolicy as BEP138 } from '../../bep-138/distribution/index.js'
import { makePolicy as BEP139 } from '../../bep-139/distribution/index.js'
import { makePolicy as BEP140 } from '../../bep-140/distribution/index.js'
import { makeServiceProvider } from '../source/service-provider.js'

export const STUB_NATIVE_TOKEN = {
	currentOwner:
		'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
	decimals: 32,
	denomination: 'CACTUS',
	initialOwner:
		'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
	initialSupply: BigInt(5e8),
	name: 'name',
	policies: [
		BEP134Policy.fromJson({
			args: '',
			name: MintPolicy.ONLY_OWNER,
			type: BEP134UserPermission.MINT,
		}),
		BEP134Policy.fromJson({
			args: stringToHex('50000'),
			name: MintPolicy.HEIGHT_LOCKED,
			type: BEP134UserPermission.MINT,
		}),
	],
}

export async function createTx(context: TxTestContext, payload?: object) {
	// Arrange...
	const { account, keypair } = await context.accountFromMnemonic(mnemonics[0])
	account.balances[denominations.gas] = BigInt(1e8)
	account.balances.CACTUS = BigInt(10e8)

	await context.state.getAccountRepository().index([account])

	// Stub native token
	await context.state
		.getMultiStore()
		.get('@bearmint/bep-134')
		.attach(account.address, 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85')

	await upsertNAT(
		context.state.getMultiStore().get('@bearmint/bep-134'),
		'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
		STUB_NATIVE_TOKEN,
	)

	await context.state.setCommittedBlock(
		new abci.RequestFinalizeBlock({ header: { height: BigInt(5) } }),
	)

	// Act...
	return {
		recipient: account,
		sender: account,
		tx: await context.makeTx(
			keypair,
			keypair,
			await context.client.fakeTxMsg('@bearmint/bep-137').execute({
				memo: payload?.memo ?? 'Hello, World!',
				ops: [
					{
						memo: payload?.memoChild ?? 'Hello, World!',
						amount: BigInt(`${5e8}`),
						hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
					},
				],
			}),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider, [BEP134])

		context.container
			.resolve(ContainerType.PolicyRegistry)
			.set('@bearmint/bep-134', BEP134UserPermission.MINT, '@bearmint/bep-138', BEP138)

		context.container
			.resolve(ContainerType.PolicyRegistry)
			.set('@bearmint/bep-134', BEP134UserPermission.MINT, '@bearmint/bep-139', BEP139)

		context.container
			.resolve(ContainerType.PolicyRegistry)
			.set('@bearmint/bep-134', BEP134UserPermission.MINT, '@bearmint/bep-140', BEP140)
	})
}
