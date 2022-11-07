import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { assert, bytesConcat, bytesToHex } from '@bearmint/bep-009'
import { BEP104MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { deriveEd25519Address } from '@bearmint/bep-089'
import { ErrorCode } from '@bearmint/bep-109'
import { getPublicKey as ed25519 } from '@noble/ed25519'
import { mnemonicToSeedSync } from '@scure/bip39'

import { makeServiceProvider } from '../../source/service-provider.js'

async function increaseStake(ctx: E2E.Context) {
	await (
		await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-104').execute({
				ops: [
					new BEP104MsgOp({
						moniker: 'genesis_1',
						stake: BigInt(1e8),
					}),
				],
			}),
		)
	).pass()
}

async function decreaseStake(ctx: E2E.Context) {
	await (
		await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-104').execute({
				ops: [
					new BEP104MsgOp({
						moniker: 'genesis_1',
						stake: BigInt(-1e8),
					}),
				],
			}),
		)
	).pass()
}

async function makeTendermintAccount(mnemonic: string) {
	let privateKey = mnemonicToSeedSync(mnemonic).subarray(0, 32)
	const publicKey = await ed25519(privateKey)

	privateKey = bytesConcat([privateKey, publicKey])

	assert.defined<Buffer>(privateKey)
	assert.defined<Buffer>(publicKey)

	return {
		address: bytesToHex(deriveEd25519Address(publicKey)),
		publicKey: bytesToHex(publicKey),
	}
}

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider))
	})

	it('should pass and I/I/D/I/D/D the stake for `genesis_1`', async (ctx) => {
		// Arrange
		const { address, publicKey } = await makeTendermintAccount(ctx.accts.get('genesis_1').mnemonic)

		// Before PASSED Increase
		await ctx.accts.get('genesis_1').expectProperty('validator', {
			address,
			power: '1',
			publicKey,
		})

		await ctx.accts.assertExpectations()

		// After PASSED Increase
		await ctx.accts.get('genesis_1').expectProperty('validator', {
			address,
			power: '100000000', // This won't be 100000000 because after the first staking the placeholder power is gone.
			publicKey,
		})

		await ctx.accts.get('genesis_1').expectModuleMetadataEquals('@bearmint/bep-088', {
			delegators: { [ctx.accts.get('genesis_2').address]: '100000000' },
		})

		await increaseStake(ctx)

		await ctx.accts.assertExpectations()

		// After PASSED Increase
		await ctx.accts.get('genesis_1').expectProperty('validator', {
			address,
			power: '200000000',
			publicKey,
		})

		await ctx.accts.get('genesis_1').expectModuleMetadataEquals('@bearmint/bep-088', {
			delegators: { [ctx.accts.get('genesis_2').address]: '200000000' },
		})

		await increaseStake(ctx)

		await ctx.accts.assertExpectations()

		// After PASSED Decrease
		await ctx.accts.get('genesis_1').expectProperty('validator', {
			address,
			power: '100000000',
			publicKey,
		})

		await ctx.accts.get('genesis_1').expectModuleMetadataEquals('@bearmint/bep-088', {
			delegators: { [ctx.accts.get('genesis_2').address]: '100000000' },
		})

		await decreaseStake(ctx)

		await ctx.accts.assertExpectations()

		// After PASSED Increase
		await ctx.accts.get('genesis_1').expectProperty('validator', {
			address,
			power: '200000000',
			publicKey,
		})

		await ctx.accts.get('genesis_1').expectModuleMetadataEquals('@bearmint/bep-088', {
			delegators: { [ctx.accts.get('genesis_2').address]: '200000000' },
		})

		await increaseStake(ctx)

		await ctx.accts.assertExpectations()

		// After PASSED Decrease
		await ctx.accts.get('genesis_1').expectProperty('validator', {
			address,
			power: '100000000',
			publicKey,
		})

		await ctx.accts.get('genesis_1').expectModuleMetadataEquals('@bearmint/bep-088', {
			delegators: { [ctx.accts.get('genesis_2').address]: '100000000' },
		})

		await decreaseStake(ctx)

		await ctx.accts.assertExpectations()

		// After FAILED decrease
		await ctx.accts.get('genesis_1').expectProperty('validator', {
			address,
			power: '100000000',
			publicKey,
		})

		await ctx.accts.get('genesis_1').expectModuleMetadataEquals('@bearmint/bep-088', {
			delegators: { [ctx.accts.get('genesis_2').address]: '100000000' },
		})

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_2').keypair,
				ctx.accts.get('genesis_2').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-104').execute({
					ops: [
						new BEP104MsgOp({
							moniker: 'genesis_1',
							stake: BigInt(-10e8),
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.stake',
						value: ErrorCode.TX_FORBIDDEN_ACTION,
					},
				],
				type: '@bearmint/bep-104/0.0.0/audit',
			},
		])

		await ctx.accts.assertExpectations()

		// After PASSED Decrease
		await ctx.accts.get('genesis_1').expectProperty('validator', {
			address,
			power: '0',
			publicKey,
		})

		// After the last stake has been removed the record gets removed from the module store
		await ctx.accts.get('genesis_1').expectModuleMetadataMissing('@bearmint/bep-088')

		await decreaseStake(ctx)

		await ctx.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-104', it)
	E2E.testMemoLength('@bearmint/bep-104', it)
	E2E.testOpCount('@bearmint/bep-104', it)

	it('should fail to decrease if the sender is not staking for the validator', async (ctx) => {
		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_9').keypair,
				ctx.accts.get('genesis_9').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-104').execute({
					ops: [
						new BEP104MsgOp({
							moniker: 'genesis_1',
							stake: BigInt(-1e8),
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.stake', value: 'ERR_TX_FORBIDDEN_ACTION' },
				],
				type: '@bearmint/bep-104/0.0.0/audit',
			},
		])
	})

	// todo('should pass and switch validators if it removes all stakes from one validator')

	it('should fail if there are duplicated ops', async (ctx) => {
		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_9').keypair,
				ctx.accts.get('genesis_9').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-104').execute({
					ops: [
						new BEP104MsgOp({
							moniker: 'genesis_1',
							stake: BigInt(-1e8),
						}),
						new BEP104MsgOp({
							moniker: 'genesis_1',
							stake: BigInt(-1e8),
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-104/0.0.0/audit',
			},
		])
	})

	it('should fail if there are ops with an internal stake (DPoS requires external stakes)', async (ctx) => {
		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-104').execute({
					ops: [
						new BEP104MsgOp({
							moniker: 'genesis_1',
							stake: BigInt(-1e8),
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [{ index: false, key: 'message.ops', value: 'ERR_TX_FORBIDDEN_ACTION' }],
				type: '@bearmint/bep-104/0.0.0/audit',
			},
		])
	})

	// todo('should fail if the maximum stake count would be exceeded')

	it('should fail if the sender is trying to stake more tokens than they available (non-locked)', async (ctx) => {
		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_9').keypair,
				ctx.accts.get('genesis_9').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-104').execute({
					ops: [
						new BEP104MsgOp({
							moniker: 'genesis_1',
							stake: BigInt('100000000000000000'),
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.stake', value: 'ERR_TX_INSUFFICIENT_BALANCE' },
				],
				type: '@bearmint/bep-104/0.0.0/audit',
			},
		])
	})
})
