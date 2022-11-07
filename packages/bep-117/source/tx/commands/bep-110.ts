import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { DEFAULT_MONIKER, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { randomMoniker } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP110Command extends TxCommand {
	public static override paths = [['tx', 'bep-110']]

	public readonly description = 'Submit a `Moniker Registration` Tx'

	public readonly moniker = Option.String('--moniker', DEFAULT_MONIKER, {
		description: 'The moniker to associate with the account in question',
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-110')
				.execute(
					{
						moniker: this.random ? randomMoniker() : this.moniker,
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
