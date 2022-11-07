import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'
// import { mnemonic } from '@bearmint/bep-006'
// import { blake3 , stringToBytes } from '@bearmint/bep-009'
// import { makeKeyPairFactory as ECDSA, makeSignatureFactory } from '@bearmint/bep-034'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the sender has no moniker', async (context) => {
		const { sender, tx } = await createTx(context)
		delete sender.moniker
		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender.moniker',
				value: ErrorCode.TX_FORBIDDEN_ACTION,
			},
		])
	})

	Unit.testTopMemoLength({ expect, createTx, it })

	// it('should fail if the public key is already registered as a validator', async (context) => {
	// 	const { tx, sender } = await createTx(context)
	// 	sender.validator = {
	// 		address: 'dcb78772861107d464ef57fd91dd3d04cfe4c864',
	// 		publicKey: '03134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
	// 	}
	// 	await context.state.getAccountRepository().index([sender])

	// 	await expect(await context.audit(tx)).toFailAudit([
	// 		{
	// 			key: 'message.publicKey',
	// 			value: ErrorCode.TX_FORBIDDEN_ACTION,
	// 		},
	// 	])
	// })

	// it('should pass verification', async (context) => {
	// 	const keyPair = await ECDSA().fromMnemonic(mnemonic)

	// 	const { tx } = await createTx({
	// 		context,
	// 		payload: {
	// 			publicKey: keyPair.toPublicKey().toString(),
	// 			signature: (
	// 				await makeSignatureFactory().sign({
	// 					hash: blake3(stringToBytes('buckley')),
	// 					keyPair,
	// 				})
	// 			).toString(),
	// 		},
	// 	})

	// 	await assert.tx.audit.resolves(audit)
	// })

	// it('should fail verification', async (context) => {
	// 	const { tx } = await createTx({
	// 		context,
	// 		payload: {
	// 			publicKey: 'publicKey',
	// 			signature: 'signature',
	// 		},
	// 	})

	// 	await expect(await context.audit(tx)).toFailAudit([
	// 		{
	// 			key: 'message.publicKey',
	// 			value: ErrorCode.TX_SECP256K1_PUBLIC_KEY_DOES_NOT_VERIFY,
	// 		},
	// 	])
	// })
})
