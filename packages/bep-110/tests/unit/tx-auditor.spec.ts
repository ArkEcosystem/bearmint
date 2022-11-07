import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the sender already has a moniker', async (context) => {
		const { sender, tx } = await createTx(context)
		sender.moniker = 'moniker'
		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.moniker',
				value: ErrorCode.TX_FORBIDDEN_ACTION,
			},
		])
	})

	it('should fail if the moniker is already registered', async (context) => {
		const { recipient, sender, tx } = await createTx(context)
		sender.moniker = undefined
		recipient.moniker = 'moniker'
		await context.state.getAccountRepository().index([sender, recipient])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.moniker',
				value: ErrorCode.TX_DUPLICATED_VALUE,
			},
		])
	})

	it('should fail if the moniker is malformed', async (context) => {
		const { tx } = await createTx(context, {
			moniker: '$^%$&&^*^&*',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.moniker',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	Unit.testTopMemoLength({ expect, createTx, it })

	// it('should fail verification', async (context) => {
	//   const { tx } = await createTx({
	//     context,
	//     payload: {
	//       publicKey: 'publicKey',
	//       signature: 'signature',
	//     },
	//   });

	//   await assert.tx.audit.rejects({
	//     context: await audit(),
	//     event: {
	//       attributes: [
	//         {
	//           index: false,
	//           key: 'message.publicKey',
	//           value: 'Public key failed to verify (tendermint/PubKeySecp256k1/)',
	//         },
	//         {
	//           index: false,
	//           key: 'message.signature',
	//           value: 'Signature failed to verify (tendermint/PubKeySecp256k1/)',
	//         },
	//       ],
	//       type: '@bearmint/bep-110/0.0.0/verify',
	//     },
	//   });
	// });
})
