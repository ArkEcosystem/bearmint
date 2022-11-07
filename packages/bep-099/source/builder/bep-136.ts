import type { TxBuilder } from '@bearmint/bep-013'
import { BEP136Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP136Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP136Msg(data),
		handler: '@bearmint/bep-136',
	})
}
