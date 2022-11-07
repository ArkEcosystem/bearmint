import { stringToBytes } from '@bearmint/bep-009'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { DEFAULT_MEMO, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { randomMoniker } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP68Command extends TxCommand {
	public static override paths = [['tx', 'bep-068']]

	public readonly description = 'Register an arbitrary blob of data'

	public readonly data = Option.String('--data', DEFAULT_MEMO, {
		description: 'The data to store',
		validator: t.isString(),
	})

	public readonly mimeType = Option.String('--mime-type', 'text/plain', {
		description: 'The type of data to store',
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-068')
				.execute(
					{
						ops: [
							{
								data: stringToBytes(this.random ? randomMoniker() : this.data),
								mimeType: this.mimeType,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
