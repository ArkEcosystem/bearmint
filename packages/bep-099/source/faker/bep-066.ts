import { blake3 } from '@bearmint/bep-009'
import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP66Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP66Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP66Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						hash: 'hash',
						memo: 'Hello, World!',
						secret: blake3('secret'),
					},
				],
			}),
	)
}
