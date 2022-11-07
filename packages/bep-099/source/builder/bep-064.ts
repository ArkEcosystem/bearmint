import type { TxBuilder } from '@bearmint/bep-013'
import { BEP64Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP64Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP64Msg(data),
		handler: '@bearmint/bep-064',
	})
}
