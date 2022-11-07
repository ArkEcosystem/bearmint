import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP126Msg } from '@bearmint/bep-018'

import { BEP126UserPermission } from '../types.js'
import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP126Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP126Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						memo: 'Hello, World!',
						name: 'name',
						policies: [
							{ name: '@bearmint/bep-145', type: BEP126UserPermission.BURN },
							{ name: '@bearmint/bep-145', type: BEP126UserPermission.MINT },
							{ name: '@bearmint/bep-145', type: BEP126UserPermission.TRANSFER },
						],
						symbol: 'symbol',
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					},
				],
			}),
	)
}
