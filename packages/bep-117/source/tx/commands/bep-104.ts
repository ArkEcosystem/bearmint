import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { DEFAULT_AMOUNT, DEFAULT_MONIKER, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP104Command extends TxCommand {
	public static override paths = [['tx', 'bep-104']]

	public readonly description = 'Submit a `Stake` Tx'

	public readonly moniker = Option.String('--moniker', DEFAULT_MONIKER, {
		description: 'The moniker of the validator to stake with or unstake from',
		validator: t.isString(),
	})

	public readonly stake = Option.String('--stake', DEFAULT_AMOUNT, {
		description: 'The amount of tokens to stake with the validator',
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-104')
				.execute(
					{
						ops: [
							{
								moniker: this.moniker,
								stake: BigInt(this.stake),
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
