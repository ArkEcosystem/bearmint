import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP67Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP67Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP67Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						memo: 'Hello, World!',
						type: 'multihash',
						value: 'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
					},
				],
			}),
	)
}
