import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { DEFAULT_AMOUNT, DEFAULT_DENOMINATION, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { randomNumber } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP56Command extends TxCommand {
	public static override paths = [['tx', 'bep-056']]

	public readonly description = 'Submit a `Token Burn` Tx'

	public readonly amount = Option.String('--amount', DEFAULT_AMOUNT, {
		description: 'The amount of tokens to transfer',
		validator: t.isString(),
	})

	public readonly denomination = Option.String('--denomination', DEFAULT_DENOMINATION, {
		description: 'The denomination of the token to transfer',
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-056')
				.execute(
					{
						ops: [
							{
								amount: BigInt(this.random ? randomNumber(1e8, 10e8) : this.amount),
								denomination: this.denomination,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
