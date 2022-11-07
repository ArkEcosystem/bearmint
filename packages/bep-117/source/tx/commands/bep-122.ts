import { assert, blake3 } from '@bearmint/bep-009'
import { BEP122MsgHash } from '@bearmint/bep-018'
import { makeKeyPairFactory, makeSignatureFactory } from '@bearmint/bep-035'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { DEFAULT_MONIKER, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP122Command extends TxCommand {
	public static override paths = [['tx', 'bep-122']]

	public readonly description = 'Submit a `Validator Release` Tx'

	public readonly moniker = Option.String('--moniker', DEFAULT_MONIKER, {
		description: 'The moniker of the validator to release from jail',
		validator: t.isString(),
	})

	async makeTx() {
		assert.defined(this.mnemonic)

		const tendermint = await makeKeyPairFactory().fromMnemonic(this.mnemonic)

		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-122')
				.execute(
					{
						moniker: this.moniker,
						signature: (
							await makeSignatureFactory().sign(
								blake3(
									new BEP122MsgHash({
										moniker: this.moniker,
									}).toBinary(),
								),
								tendermint,
							)
						).toBytes(),
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
