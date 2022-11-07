import { config } from '@bearmint/bep-006'
import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP55Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP55Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP55Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'Hello, World!',
						recipient: config.bearmint.accounts[0]!.address,
					},
				],
			}),
	)
}
