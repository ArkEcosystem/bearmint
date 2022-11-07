import type { TxBuilder } from '@bearmint/bep-013'
import { BEP110Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP110Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP110Msg(data),
		handler: '@bearmint/bep-110',
	})
}
