import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP110Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP110Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP110Msg({
				memo: data?.memo ?? 'Hello, World!',
				moniker: data?.moniker ?? 'moniker',
			}),
	)
}
