import type { TxBuilder } from '@bearmint/bep-013'
import { BEP57Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP57Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP57Msg(data),
		handler: '@bearmint/bep-057',
	})
}
