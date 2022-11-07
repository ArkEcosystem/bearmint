import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { bytesToHex, stringToBytes, stringToHex } from '@bearmint/bep-009'
import { BEP22Account } from '@bearmint/bep-018'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should pass verification', async (context) => {
		const { tx } = await createTx(context)

		await context.state.getAccountRepository().index([
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'bear1yenxkn0ln2se57zfsxprgua9fz3fvqwuj9twxq83vhvqtw6nn4ss6xhfdx',
					moniker: 'a',
					publicKey: 'a',
					validator: {
						address: stringToHex('a'),
						power: '5',
					},
				}),
			),
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
					moniker: 'b',
					publicKey: 'b',
					validator: {
						address: stringToHex('b'),
						power: '5',
					},
				}),
			),
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
					moniker: 'c',
					publicKey: 'c',
					validator: {
						address: stringToHex('c'),
						power: '5',
					},
				}),
			),
		])

		await expect(await context.execute(tx)).toPassAudit()
	})

	it('should fail if the account is not a validator', async (context) => {
		const { sender, tx } = await createTx(context)
		sender.validator = undefined

		await context.state.getAccountRepository().index([
			sender,
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'a',
					moniker: 'a',
					validator: { address: 'a' },
				}),
			),
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'b',
					moniker: 'b',
					validator: { address: 'b' },
				}),
			),
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'c',
					moniker: 'c',
					validator: { address: 'c' },
				}),
			),
		])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_NOT_FOUND,
			},
		])
	})

	it('should fail if the account is a genesis validator', async (context) => {
		const { sender, tx } = await createTx(context)

		await context.state
			.getAccountRepository()
			.index([{ ...sender, validator: { address: 'b8e4eac7074603e133b627aa01dcea4d131c6bc6' } }])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_FORBIDDEN_ACTION,
			},
		])
	})

	it('should fail if the validator keypair does not match', async (context) => {
		const { tx } = await createTx(context, {
			publicKey: stringToBytes('publicKey'),
			signature: stringToBytes('signature'),
		})

		await context.state.getAccountRepository().index([
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'bear1yenxkn0ln2se57zfsxprgua9fz3fvqwuj9twxq83vhvqtw6nn4ss6xhfdx',
					moniker: 'a',
					publicKey: 'a',
					validator: {
						address: bytesToHex(stringToBytes('a')),
					},
				}),
			),
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
					moniker: 'b',
					publicKey: 'b',
					validator: {
						address: bytesToHex(stringToBytes('b')),
					},
				}),
			),
			await context.accountSerializer.deserialize(
				BEP22Account.fromJson({
					address: 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
					moniker: 'c',
					publicKey: 'c',
					validator: {
						address: bytesToHex(stringToBytes('c')),
					},
				}),
			),
		])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.publicKey',
				value: ErrorCode.TX_SECP256K1_PUBLIC_KEY_DOES_NOT_VERIFY,
			},
		])
	})

	Unit.testTopMemoLength({ expect, createTx, it })
})
