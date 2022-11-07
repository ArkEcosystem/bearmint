import type { TxBuilder } from '@bearmint/bep-013'
import { BEP126Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP126Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP126Msg(data),
		handler: '@bearmint/bep-126',
	})
}
