import type { TxBuilder } from '@bearmint/bep-013'
import { BEP59Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP59Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP59Msg(data),
		handler: '@bearmint/bep-059',
	})
}
