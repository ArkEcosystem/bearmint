import type { TxBuilder } from '@bearmint/bep-013'
import { BEP135Msg } from '@bearmint/bep-018'

import { wrapTxBuilder } from './base.js'

export function makeTxBuilder(): TxBuilder<BEP135Msg> {
	return wrapTxBuilder({
		content: async (data) => new BEP135Msg(data),
		handler: '@bearmint/bep-135',
	})
}
