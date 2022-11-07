import type { TxBuilder } from '@bearmint/bep-013'
import { BEP55Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP55Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP55Msg(data),
		handler: '@bearmint/bep-055',
	})
}
