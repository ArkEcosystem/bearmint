import { blake3 } from '@bearmint/bep-009'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import { PassThrough } from 'stream'
import * as t from 'typanion'

import {
	ACCOUNT_ALT,
	DEFAULT_AMOUNT,
	DEFAULT_DENOMINATION,
	DEFAULT_MEMO,
	DEFAULT_SECRET,
	MESSAGE_OPTIONS,
} from '../constants.js'
import { makeTx } from '../tx.js'
import { randomMoniker, randomNumber } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP64Command extends TxCommand {
	public static override paths = [['tx', 'bep-064']]

	public readonly description = 'Submit an `HTLC` Tx'

	public readonly amount = Option.String('--amount', DEFAULT_AMOUNT, {
		description: 'The amount of tokens to lock and eventually transfer if claimed',
		validator: t.isString(),
	})

	public readonly claim = Option.Boolean('--claim', false, {
		description: 'Claim the HTLC subsequent to its creation',
	})

	public readonly denomination = Option.String('--denomination', DEFAULT_DENOMINATION, {
		description: 'The denomination of the token to transfer',
		validator: t.isString(),
	})

	public readonly expiration = Option.String('--expiration', {
		description: 'The height at which the HTLC will expire',
		validator: t.isString(),
	})

	public readonly instructions = Option.Boolean('--instructions', false, {
		description:
			'Prints manual instructions for actions one can perform for the newly registered native token',
	})

	public readonly invalid = Option.Boolean('--invalid', false, {
		description: 'Create an HTLC with a random secret to prevent claims or refunds',
	})

	public readonly memo = Option.String('--memo', DEFAULT_MEMO, {
		description:
			'The message that the transaction should contain (for example, for display in an explorer)',
		validator: t.isString(),
	})

	public readonly recipient = Option.String('--recipient', ACCOUNT_ALT.address, {
		description:
			'The address of the recipient (also called the beneficiary or claimant) of the HTLC',
		validator: t.isString(),
	})

	public readonly refund = Option.Boolean('--refund', false, {
		description: 'Refund the HTLC subsequent to its creation',
	})

	public readonly secret = Option.String('--secret', DEFAULT_SECRET, {
		description: 'The secret that authorizes access to the HTLC',
		validator: t.isString(),
	})

	public readonly secretAlgorithm = Option.String('--secret-algorithm', 'blake3', {
		description: 'The algorithm to use in order to hash the secret',
		validator: t.isString(),
	})

	async makeTx() {
		const { events } = await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-064')
				.execute(
					{
						ops: [
							{
								amount: BigInt(this.random ? randomNumber(1e8, 10e8) : this.amount),
								denomination: this.denomination,
								expiration: BigInt(
									this.expiration ?? (await makeInstance().trpc().getCommittedBlockNumber()),
								),
								memo: this.random ? randomMoniker() : this.memo,
								recipient: this.recipient,
								secret: blake3(this.random ? randomMoniker() : this.secret),
								secretAlgorithm: this.secretAlgorithm,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)

		if (this.claim === true && this.refund === true) {
			console.log('Can only claim or refund. Please only specify either option')

			return
		}

		for (const { value: hash } of events) {
			if (this.instructions === true) {
				console.log('>>> HTLC Claim')
				console.log(`cub tx bep-065 --hash="${hash}"`)

				console.log('>>> HTLC Refund')
				console.log(`cub tx bep-066 --hash="${hash}"`)
			}

			if (this.claim === true) {
				await this.cli.run(
					[
						'tx',
						'bep-065',
						'--hash',
						hash,
						'--mnemonic',
						ACCOUNT_ALT.mnemonic,
						'--secret',
						this.invalid === true ? randomMoniker() : this.secret,
					],
					{
						stdout: new PassThrough(),
					},
				)
			}

			if (this.refund === true) {
				await this.cli.run(
					[
						'tx',
						'bep-066',
						'--hash',
						hash,
						'--secret',
						this.invalid === true ? randomMoniker() : this.secret,
					],
					{
						stdout: new PassThrough(),
					},
				)
			}
		}
	}
}
