import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP130Msg } from '@bearmint/bep-018'

import { BEP126UserPermission } from '../types.js'
import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP130Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP130Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
						memo: 'Hello, World!',
						permissions: [BEP126UserPermission.BURN],
						steward: 'bear17ggusr8sg53hsxs5fxy6vzgekk45axnu4xjv3dftaf5kkqdcglgqa8yg5a',
					},
				],
			}),
	)
}
