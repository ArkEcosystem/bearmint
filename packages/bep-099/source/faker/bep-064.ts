import { blake3 } from '@bearmint/bep-009'
import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP64Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP64Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP64Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: 0,
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					},
				],
			}),
	)
}
