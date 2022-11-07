import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP56Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP56Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP56Msg({
				memo: data?.memo ?? 'Some men are not looking for anything logical, like money.',
				ops: data?.ops ?? [
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'Some men just want to watch the world burn.',
					},
				],
			}),
	)
}
