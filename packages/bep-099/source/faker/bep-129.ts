import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP129Msg } from '@bearmint/bep-018'

import { BEP126UserPermission } from '../types.js'
import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP129Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP129Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
						memo: 'Hello, World!',
						permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
						steward:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
					},
				],
			}),
	)
}
