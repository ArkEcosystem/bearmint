import { bytesToHex } from '@bearmint/bep-009'
import type { AccountWithValidator, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP57Msg } from '@bearmint/bep-018'
import { getPublicKeyType } from '@bearmint/bep-021'

import { HANDLER } from './types.js'
import { deriveAddress } from './utils.js'

export function makeTxExecutor(): TxExecutor<BEP57Msg> {
	return {
		async execute({ msg, receipt, state, toolkit }) {
			// Arrange
			const sender = (await toolkit.getSender()) as AccountWithValidator
			const publicKeyType: string = getPublicKeyType(state.getMilestone())
			const address = bytesToHex(deriveAddress(msg.publicKey, publicKeyType))

			// Act
			sender.validator = {
				address,
				power: BigInt(0),
				publicKey: bytesToHex(msg.publicKey),
			}

			receipt.log(TxReceiptEvent.AccountUpdated, {
				_modelKey: sender.address,
				_modelType: TxReceiptModelType.Account,
				_module: HANDLER,
				validator: sender.validator,
			})

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
