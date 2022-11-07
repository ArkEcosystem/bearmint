import type { TxBuilder } from '@bearmint/bep-013'
import { BEP122Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP122Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP122Msg(data),
		handler: '@bearmint/bep-122',
	})
}
