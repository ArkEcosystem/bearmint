import type { TxBuilder } from '@bearmint/bep-013'
import { BEP127Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP127Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP127Msg(data),
		handler: '@bearmint/bep-127',
	})
}
