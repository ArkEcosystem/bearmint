import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP134Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP134Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP134Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						decimals: 32,
						denomination: 'denomination',
						initialSupply: BigInt(`${5e8}`),
						memo: 'Hello, World!',
						name: 'name',
						policies: [
							{
								name: '@bearmint/bep-138',
								type: 1, // Mint
							},
							{
								name: '@bearmint/bep-140',
								type: 1, // Mint
							},
						],
					},
				],
			}),
	)
}
