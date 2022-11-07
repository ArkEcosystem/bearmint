import type { TxBuilder } from '@bearmint/bep-013'
import { BEP128Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP128Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP128Msg(data),
		handler: '@bearmint/bep-128',
	})
}
