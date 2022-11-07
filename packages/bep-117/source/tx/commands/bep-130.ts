import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP130Command extends TxCommand {
	public static override paths = [['tx', 'bep-130']]

	public readonly description = 'Submit an `NFT Collection Permission Revocation` Tx'

	public readonly hash = Option.String('--hash', {
		description: 'The hash of the NFT collection in question',
		required: true,
		validator: t.isString(),
	})

	public readonly permissions = Option.String('--permissions', {
		description: 'A comma-separated list of permissions to revoke from the steward',
		required: true,
		validator: t.isString(),
	})

	public readonly steward = Option.String('--steward', {
		description: 'The address of the account that is having its permissions revoked',
		required: true,
		validator: t.isString(),
	})

	async makeTx() {
		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-130')
				.execute(
					{
						ops: [
							{
								hash: this.hash,
								permissions: this.permissions.split(',').map(Number),
								steward: this.steward,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
