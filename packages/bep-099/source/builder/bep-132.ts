import type { TxBuilder } from '@bearmint/bep-013'
import { BEP132Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP132Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP132Msg(data),
		handler: '@bearmint/bep-132',
	})
}
