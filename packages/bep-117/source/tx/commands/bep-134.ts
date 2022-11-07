import { makeInstance } from '@bearmint/bep-099'
import { BEP134UserPermission } from '@bearmint/bep-134'
import { Option } from 'clipanion'
import { PassThrough } from 'stream'
import * as t from 'typanion'

import { ACCOUNT_ALT, DEFAULT_AMOUNT, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { randomMoniker, randomNumber } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP134Command extends TxCommand {
	public static override paths = [['tx', 'bep-134']]

	public readonly description = 'Submit a `NAT Registration` Tx'

	public readonly decimals = Option.String('--decimals', '8', {
		description: 'The number of decimals that the native token uses',
		validator: t.isNumber(),
	})

	public readonly denomination = Option.String('--denomination', 'DEER', {
		description: 'The denomination of the native token (for example, DEER)',
		validator: t.isString(),
	})

	public readonly initialSupply = Option.String('--initial-supply', `${50e8}`, {
		description:
			'The initial supply of the native token. The sender of the registration transaction will receive these tokens',
		validator: t.isString(),
	})

	public readonly instructions = Option.Boolean('--instructions', false, {
		description:
			'Prints manual instructions for actions one can perform for the newly registered native token',
	})

	public readonly mint = Option.Boolean('--mint', false, {
		description: 'Mint more native tokens subsequent to having registered it',
	})

	public readonly name = Option.String('--name', 'DEER', {
		description: 'The name of the native token (for example, Bearmint)',
		validator: t.isString(),
	})

	public readonly resign = Option.Boolean('--resign', false, {
		description: 'Resign ownership of the native token subsequent to having registered it',
	})

	public readonly transfer = Option.Boolean('--transfer', false, {
		description: 'Transfer ownership of the native token subsequent to having registered it',
	})

	async makeTx() {
		const { events } = await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-134')
				.execute(
					{
						ops: [
							{
								decimals: this.decimals,
								denomination: this.random ? this.name.toUpperCase() : this.denomination,
								initialSupply: BigInt(this.random ? randomNumber(50e8, 100e8) : this.initialSupply),
								name: this.random ? randomMoniker() : this.name,
								policies: [
									{
										args: '',
										name: '@bearmint/bep-138',
										type: BEP134UserPermission.MINT,
									},
								],
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)

		for (const { value: hash } of events) {
			if (this.instructions === true) {
				console.log('>>> Transferring')
				console.log(`cub tx bep-055 --denomination="${this.denomination}"`)

				console.log('>>> Burning')
				console.log(`cub tx bep-056 --denomination="${this.denomination}"`)

				console.log('>>> Ownership Transfer')
				console.log(`cub tx bep-135 --hash="${hash}"`)

				console.log('>>> Ownership Resignation')
				console.log(`cub tx bep-136 --hash="${hash}"`)

				console.log('>>> Minting')
				console.log(`cub tx bep-136 --hash="${hash}"`)
			}

			if (this.transfer === true) {
				await this.cli.run(['tx', 'bep-135', '--hash', hash, '--recipient', ACCOUNT_ALT.address], {
					stdout: new PassThrough(),
				})
			}

			if (this.resign === true) {
				await this.cli.run(['tx', 'bep-136', '--hash', hash], {
					stdout: new PassThrough(),
				})
			}

			if (this.mint === true) {
				await this.cli.run(['tx', 'bep-137', '--amount', DEFAULT_AMOUNT, '--hash', hash], {
					stdout: new PassThrough(),
				})
			}
		}
	}
}
