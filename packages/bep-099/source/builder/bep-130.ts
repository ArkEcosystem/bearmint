import type { TxBuilder } from '@bearmint/bep-013'
import { BEP130Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP130Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP130Msg(data),
		handler: '@bearmint/bep-130',
	})
}
