import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP67Command extends TxCommand {
	public static override paths = [['tx', 'bep-067']]

	public readonly description = 'Register an IPFS identifier or URL'

	public readonly type = Option.String('--type', 'multihash', {
		description: 'The type of IPFS identifier to store',
		validator: t.isString(),
	})

	public readonly value = Option.String(
		'--value',
		'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
		{ description: 'The IPFS identifier to store', validator: t.isString() },
	)

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-067')
				.execute(
					{
						ops: [
							{
								type: this.type,
								value: this.value,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
