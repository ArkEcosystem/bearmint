import type { TxBuilder } from '@bearmint/bep-013'
import { BEP137Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP137Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP137Msg(data),
		handler: '@bearmint/bep-137',
	})
}
