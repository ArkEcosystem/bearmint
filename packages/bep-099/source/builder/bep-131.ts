import type { TxBuilder } from '@bearmint/bep-013'
import { BEP131Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP131Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP131Msg(data),
		handler: '@bearmint/bep-131',
	})
}
