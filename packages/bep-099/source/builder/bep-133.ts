import type { TxBuilder } from '@bearmint/bep-013'
import { BEP133Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP133Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP133Msg(data),
		handler: '@bearmint/bep-133',
	})
}
