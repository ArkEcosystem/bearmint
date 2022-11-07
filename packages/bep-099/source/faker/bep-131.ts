import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP131Msg } from '@bearmint/bep-018'

import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker(): TxMsgFaker<BEP131Msg> {
	return wrapTxMsgFaker(
		async (data) =>
			new BEP131Msg({
				memo: data?.memo ?? 'Hello, World!',
				ops: data?.ops ?? [
					{
						collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
						memo: 'Hello, World!',
						recipient:
							'bear14g0pv9zq923zjruyukpl5yust3t520a8duxydn7qtguuzu0vjurpdxrkstpugwxk5xuhc59xuhseywgwghn',
					},
				],
			}),
	)
}
