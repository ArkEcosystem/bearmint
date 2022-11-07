import type { TxBuilder } from '@bearmint/bep-013'
import { BEP66Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP66Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP66Msg(data),
		handler: '@bearmint/bep-066',
	})
}
