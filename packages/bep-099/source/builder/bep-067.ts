import type { TxBuilder } from '@bearmint/bep-013'
import { BEP67Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP67Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP67Msg(data),
		handler: '@bearmint/bep-067',
	})
}
