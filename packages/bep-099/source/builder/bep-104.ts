import type { TxBuilder } from '@bearmint/bep-013'
import { BEP104Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP104Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP104Msg(data),
		handler: '@bearmint/bep-104',
	})
}
