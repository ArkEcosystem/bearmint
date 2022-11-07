import type { TxBuilder } from '@bearmint/bep-013'
import { BEP65Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP65Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP65Msg(data),
		handler: '@bearmint/bep-065',
	})
}
