import type { TxBuilder } from '@bearmint/bep-013'
import { BEP56Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP56Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP56Msg(data),
		handler: '@bearmint/bep-056',
	})
}
