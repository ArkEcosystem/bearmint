import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP128Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP128Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP128Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
						memo: 'Hello, World!',
					},
				],
			}),
	)
}
