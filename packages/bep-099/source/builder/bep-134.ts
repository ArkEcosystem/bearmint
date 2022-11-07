import type { TxBuilder } from '@bearmint/bep-013'
import { BEP134Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP134Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP134Msg(data),
		handler: '@bearmint/bep-134',
	})
}
