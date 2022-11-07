import { blake3, stringToHex } from '@bearmint/bep-009'
import { BEP59MsgHash } from '@bearmint/bep-018'
import { makeKeyPairFactory, makeSignatureFactory } from '@bearmint/bep-035'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { ACCOUNT, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { randomNumber } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP59Command extends TxCommand {
	public static override paths = [['tx', 'bep-059']]

	public readonly description = 'Submit a `Validator Distribution Parameters` Tx'

	public override readonly mnemonic = Option.String('--mnemonic', ACCOUNT.mnemonic, {
		description: 'The mnemonic of the validator in question',
		validator: t.isString(),
	})

	public readonly percentage = Option.String('--percentage', '50', {
		description: 'The percentage of rewards to share with delegators',
		validator: t.isNumber(),
	})

	public readonly strategy = Option.String('--strategy', '@bearmint/bep-085', {
		description: 'The strategy to use in order to share rewards with delegators',
		validator: t.isString(),
	})

	async makeTx() {
		const tendermint = await makeKeyPairFactory().fromMnemonic(this.mnemonic)

		const percentage = String(this.random ? Number(randomNumber(1, 10)) : this.percentage)

		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-059')
				.execute(
					{
						signature: (
							await makeSignatureFactory().sign(
								blake3(
									new BEP59MsgHash({
										strategy: this.strategy,
										strategyArgs: stringToHex(percentage),
									}).toBinary(),
								),
								tendermint,
							)
						).toBytes(),
						strategy: this.strategy,
						strategyArgs: stringToHex(percentage),
					},
					MESSAGE_OPTIONS,
				),
		)
	}
}
