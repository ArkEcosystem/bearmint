import { stringToBytes } from '@bearmint/bep-009'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { DEFAULT_SECRET, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP66Command extends TxCommand {
	public static override paths = [['tx', 'bep-066']]

	public readonly description = 'Submit an `HTLC Refund` Tx'

	public readonly hash = Option.String('--hash', {
		description: 'The hash of the HTLC that will receive the refund',
		required: true,
		validator: t.isString(),
	})

	public readonly secret = Option.String('--secret', DEFAULT_SECRET, {
		description: 'The secret that authorizes access to the HTLC',
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-066')
				.execute(
					{
						ops: [
							{
								hash: this.hash,
								secret: stringToBytes(this.secret),
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
