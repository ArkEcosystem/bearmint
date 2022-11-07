import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, mnemonics } from '@bearmint/bep-006'
import { hexToBytes, jsonToBytes, stringToBytes } from '@bearmint/bep-009'
import { BEP64MsgOp } from '@bearmint/bep-018'
import { Unit } from '@bearmint/bep-053'
import { getPrimaryKey, HANDLER, makeServiceProvider as BEP64 } from '@bearmint/bep-064'

import { makeServiceProvider } from '../source/service-provider.js'

export async function createTx(
	context: TxTestContext,
	payload?: Record<string, string>,
	actingAsLoopback = true,
	actingAsTrap = false,
) {
	// Arrange...
	const sender = await context.accountFromMnemonic(mnemonics[0])
	sender.account.balances[denominations.gas] = BigInt(1e8)
	sender.account.balances[denominations.token] = BigInt(0)
	sender.account.lockedBalances[denominations.token] = BigInt(1)

	const recipient = await context.accountFromMnemonic(mnemonics[1])
	recipient.account.balances[denominations.token] = BigInt(0)
	recipient.account.lockedBalances[denominations.token] = BigInt(0)

	await context.state.getAccountRepository().index([sender.account, recipient.account])

	const bep64 = await context.makeTx(
		(actingAsTrap ? recipient : sender).keypair,
		(actingAsTrap ? sender : recipient).keypair,
		await context.client.fakeTxMsg('@bearmint/bep-064').execute({
			ops: [
				new BEP64MsgOp({
					amount: BigInt('1'),
					denomination: denominations.token,
					expiration: BigInt(payload?.expiration ?? 1_893_448_800),
					memo: 'Hello, World!',
					recipient: payload?.recipient ?? recipient.account.address,
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
		.get('@bearmint/bep-064')
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
		recipient: recipient.account,
		sender: sender.account,
		tx: await context.makeTx(
			sender.keypair,
			(actingAsLoopback === true ? sender : recipient).keypair,
			await context.client.fakeTxMsg('@bearmint/bep-066').execute({
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
	})
}
