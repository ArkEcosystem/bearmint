import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP133Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP133Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP133Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						hash: '74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
						memo: 'Hello, World!',
					},
				],
			}),
	)
}
