import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP137Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP137Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP137Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						amount: BigInt(`${5e8}`),
						hash: 'hash',
						memo: 'Hello, World!',
					},
				],
			}),
	)
}
