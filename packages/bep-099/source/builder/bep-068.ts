import type { TxBuilder } from '@bearmint/bep-013'
import { BEP68Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP68Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP68Msg(data),
		handler: '@bearmint/bep-068',
	})
}
