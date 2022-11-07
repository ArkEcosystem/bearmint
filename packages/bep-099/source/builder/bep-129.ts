import type { TxBuilder } from '@bearmint/bep-013'
import { BEP129Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP129Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP129Msg(data),
		handler: '@bearmint/bep-129',
	})
}
