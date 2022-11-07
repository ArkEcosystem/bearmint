import { assert, blake3 } from '@bearmint/bep-009'
import { BEP58MsgHash } from '@bearmint/bep-018'
import { makeKeyPairFactory, makeSignatureFactory } from '@bearmint/bep-035'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { ACCOUNT, MESSAGE_OPTIONS } from '../constants.js'
import { getMoniker } from '../http.js'
import { makeTx } from '../tx.js'
import { makeCrypto } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP58Command extends TxCommand {
	public static override paths = [['tx', 'bep-058']]

	public readonly description = 'Submit a `Validator Resignation` Tx'

	public override readonly mnemonic = Option.String('--mnemonic', ACCOUNT.mnemonic, {
		description: 'The mnemonic of the validator in question',
		validator: t.isString(),
	})

	async makeTx() {
		assert.defined(this.addressModule)
		assert.defined(this.addressPrefix)
		assert.defined(this.keypairModule)
		assert.defined(this.rpcHost)

		const crypto = await makeCrypto(this.addressModule, this.addressPrefix, this.keypairModule)
		const tendermint = await makeKeyPairFactory().fromMnemonic(this.mnemonic)

		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-058')
				.execute(
					{
						signature: (
							await makeSignatureFactory().sign(
								blake3(
									new BEP58MsgHash({
										moniker: await getMoniker(
											this.rpcHost,
											(await crypto.keyPairFactory.fromMnemonic(this.mnemonic))
												.toPublicKey()
												.toString(),
										),
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
