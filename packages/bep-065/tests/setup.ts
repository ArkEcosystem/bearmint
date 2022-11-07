import { getPrimaryKey, HANDLER, makeServiceProvider as BEP64 } from '@bearmint/bep-064'
import { hexToBytes, jsonToBytes, stringToBytes } from '@bearmint/bep-009'
import { abci, BEP64MsgOp } from '@bearmint/bep-018'
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'

import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(
	context: TxTestContext,
	payload?: Record<string, string>,
	actingAsLoopback?: boolean,
) {
	// Arrange...
	const benefactor = await context.accountFromMnemonic(mnemonics[1])
	benefactor.account.balances[denominations.token] = BigInt(0)
	benefactor.account.lockedBalances[denominations.token] = BigInt(1e8)

	const beneficiary = await context.accountFromMnemonic(mnemonics[0])
	beneficiary.account.balances[denominations.gas] = BigInt(1e8)
	beneficiary.account.balances[denominations.token] = BigInt(0)

	await context.state.getAccountRepository().index([beneficiary.account, benefactor.account])

	const bep64 = await context.makeTx(
		benefactor.keypair,
		(actingAsLoopback === false ? benefactor : beneficiary).keypair,
		await context.client.fakeTxMsg('@bearmint/bep-064').execute({
			ops: [
				new BEP64MsgOp({
					amount: BigInt(1e8),
					denomination: denominations.token,
					expiration: Number(payload?.expiration ?? 25),
					memo: 'Hello, World!',
					recipient: payload?.recipient ?? beneficiary.account.address,
					secret: hexToBytes('6b746182a8819e9945b406e9f7ae711617d009aeb9844248922e0b60786fd7bc'),
					secretAlgorithm: 'blake3',
				}),
			],
		}),
		'@bearmint/bep-064',
	)

	await context.state.getTxStore().set(bep64.hash, bep64.bytes)

	// Simulates what BEP64 does to create a hash for claims and refunds
	const lockHash = getPrimaryKey(bep64.hash, '0')

	await context.state
		.getMultiStore()
		.get(HANDLER)
		.set(
			lockHash,
			jsonToBytes({
				hash: bep64.hash,
				index: 0,
			}),
		)

	// Act...
	return {
		bep64,
		context,
		lockHash,
		recipient: benefactor.account,
		sender: beneficiary.account,
		tx: await context.makeTx(
			beneficiary.keypair,
			(actingAsLoopback === false ? benefactor : beneficiary).keypair,
			await context.client.fakeTxMsg('@bearmint/bep-065').execute({
				memo: payload?.memo ?? 'Hello, World!',
				ops: [
					{
						hash: lockHash,
						memo: payload?.memoChild ?? 'Hello, World!',
						secret: payload?.secret !== undefined ? payload.secret : stringToBytes('honey'),
					},
				],
			}),
		),
	}
}

export function setUp(beforeEach: CallableFunction) {
	beforeEach(async (context) => {
		await Unit.createEnvironment(context, makeServiceProvider)

		await context.container.build(BEP64).register()

		await context.state.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(10) } }),
		)
	})
}
