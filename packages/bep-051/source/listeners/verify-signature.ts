import { blake3 } from '@bearmint/bep-009'
import type { Cradle, EventListener } from '@bearmint/bep-013'
import { TxBody } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import type { TxListenerPayload } from './types.js'

export function makeVerifySignatureListener(cradle: Cradle): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			const signature = await cradle.SignatureFactory.from(
				blake3(new TxBody(data.tx.raw).toBinary()),
				data.tx.data.sender.toBytes(),
				data.tx.data.signature,
			)

			if (await signature.verify()) {
				return
			}

			throw new TxAuditException({
				key: 'signature',
				value: ErrorCode.TX_SIGNATURE_DOES_NOT_VERIFY,
			})
		},
	}
}
