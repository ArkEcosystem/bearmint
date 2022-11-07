import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP132Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP132Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP132Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						hash: '74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
						memo: 'Hello, World!',
						recipient: 'bear17ggusr8sg53hsxs5fxy6vzgekk45axnu4xjv3dftaf5kkqdcglgqa8yg5a',
					},
				],
			}),
	)
}
