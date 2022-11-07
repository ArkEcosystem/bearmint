import type { BEP55MsgOp, Plain } from '@bearmint/bep-018'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import {
	ACCOUNT_ALT,
	DEFAULT_AMOUNT,
	DEFAULT_DENOMINATION,
	DEFAULT_MEMO,
	MESSAGE_OPTIONS,
} from '../constants.js'
import { makeTx } from '../tx.js'
import { randomMnemonic, randomMoniker, randomNumber } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP55Command extends TxCommand {
	public static override paths = [['tx', 'bep-055']]

	public readonly description = 'Submit a `Token Transfer` Tx'

	public readonly amount = Option.String('--amount', DEFAULT_AMOUNT, {
		description: 'The amount of tokens to transfer',
		validator: t.isString(),
	})

	public readonly denomination = Option.String('--denomination', DEFAULT_DENOMINATION, {
		description: 'The denomination of the token to transfer',
		validator: t.isString(),
	})

	public readonly memo = Option.String('--memo', DEFAULT_MEMO, {
		description:
			'The message that the transaction should contain (for example, for display on an explorer)',
		validator: t.isString(),
	})

	public readonly recipient = Option.String('--recipient', ACCOUNT_ALT.address, {
		description: 'The address of the recipient',
		validator: t.isString(),
	})

	public readonly recipients = Option.String('--recipients', {
		description:
			'The total number of recipients that should receive funds. If set, [--load-duration] is ignored',
		validator: t.isNumber(),
	})

	async makeTx() {
		const ops: Array<Plain<BEP55MsgOp>> = []

		if (this.recipients !== undefined) {
			const recipients = await this.#generateRecipients(this.recipients)

			for (const recipient of recipients) {
				if (this.verbose === true) {
					console.log(
						`Preparing token transfer address=${recipient.address} mnemonic=${recipient.mnemonic}`,
					)
				}

				ops.push({
					amount: BigInt(this.random ? randomNumber(1e8, 10e8) : this.amount),
					denomination: this.denomination,
					memo: this.random ? randomMoniker() : this.memo,
					recipient: recipient.address,
				})
			}
		} else {
			ops.push({
				amount: BigInt(this.random ? randomNumber(1e8, 10e8) : this.amount),
				denomination: this.denomination,
				memo: this.random ? randomMoniker() : this.memo,
				recipient: this.recipient,
			})
		}

		await makeTx(
			this,
			await makeInstance().buildTx('@bearmint/bep-055').execute(
				{
					ops,
				},
				MESSAGE_OPTIONS,
			),
		)
	}

	async #generateRecipients(count: number) {
		const { addressFactory } = await this.makeCrypto()

		const result: Array<{
			address: string
			mnemonic: string
		}> = []

		for (let index = 0; index <= count; index++) {
			const mnemonic = randomMnemonic()

			result.push({
				address: (await addressFactory.fromMnemonic(mnemonic)).toString(),
				mnemonic,
			})
		}

		return result
	}
}
