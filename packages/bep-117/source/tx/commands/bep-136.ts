import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP136Command extends TxCommand {
	public static override paths = [['tx', 'bep-136']]

	public readonly description = 'Submit a `NAT Ownership Resignation` Tx'

	public readonly hash = Option.String('--hash', {
		description: 'The hash of the native token to resign',
		required: true,
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-136')
				.execute(
					{
						ops: [{ hash: this.hash }],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
