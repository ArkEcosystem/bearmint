import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP133Command extends TxCommand {
	public static override paths = [['tx', 'bep-133']]

	public readonly description = 'Submit an `NFT Burn` Tx'

	public readonly hash = Option.String('--hash', {
		description: 'The hash of the NFT to burn',
		required: true,
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-133')
				.execute(
					{
						ops: [{ hash: this.hash }],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
