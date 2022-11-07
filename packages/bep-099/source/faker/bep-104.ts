import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP104Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP104Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP104Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						memo: 'Hello, World!',
						moniker: 'buckley',
						stake: BigInt(-1e8),
					},
				],
			}),
	)
}
