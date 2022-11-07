import { stringToBytes } from '@bearmint/bep-009'
import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP68Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP68Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP68Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						data: stringToBytes('Hello, World!'),
						memo: 'Hello, World!',
						mimeType: 'application/json',
					},
				],
			}),
	)
}
