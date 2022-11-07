import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { DEFAULT_AMOUNT, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { randomNumber } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP137Command extends TxCommand {
	public static override paths = [['tx', 'bep-137']]

	public readonly description = 'Submit a `NAT Mint` Tx'

	public readonly hash = Option.String('--hash', {
		description: 'The hash of the native token to mint',
		required: true,
		validator: t.isString(),
	})

	public readonly amount = Option.String('--amount', DEFAULT_AMOUNT, {
		description: 'The amount of native tokens to mint',
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-137')
				.execute(
					{
						ops: [
							{
								amount: BigInt(this.random ? randomNumber(1e8, 10e8) : this.amount),
								hash: this.hash,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
