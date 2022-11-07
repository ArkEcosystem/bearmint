import type { TxBuilder } from '@bearmint/bep-013'
import { BEP58Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP58Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP58Msg(data),
		handler: '@bearmint/bep-058',
	})
}
