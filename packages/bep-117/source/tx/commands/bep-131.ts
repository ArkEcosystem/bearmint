import { randomUUID } from 'node:crypto'
import { PassThrough } from 'node:stream'

import { assert } from '@bearmint/bep-009'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { ACCOUNT, ACCOUNT_ALT, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { TxCommand } from './base.js'

export class BEP131Command extends TxCommand {
	public static override paths = [['tx', 'bep-131']]

	public readonly description = 'Submit an `NFT Mint` Tx'

	public readonly burn = Option.Boolean('--burn', false, {
		description: 'Burn the NFT subsequent to it being minted',
	})

	public readonly collection = Option.String('--collection', {
		description: 'The hash of the NFT collection to resign',
		validator: t.isString(),
	})

	public readonly instructions = Option.Boolean('--instructions', false, {
		description:
			'Prints manual instructions for actions one can perform for the newly registered native token',
	})

	public readonly recipient = Option.String('--recipient', ACCOUNT.address, {
		description: 'The initial owner of the newly minted NFT',
		validator: t.isString(),
	})

	public readonly transfer = Option.Boolean('--transfer', false, {
		description: 'Transfer the NFT subsequent to it being minted',
	})

	async makeTx() {
		let collection = this.collection

		if (collection === undefined) {
			collection = (
				await makeTx(
					this,
					await makeInstance()
						.buildTx('@bearmint/bep-126')
						.execute(
							{
								ops: [
									{
										name: randomUUID(),
										policies: [
											{ args: '', name: '@bearmint/bep-145', type: 0 },
											{ args: '', name: '@bearmint/bep-145', type: 1 },
											{ args: '', name: '@bearmint/bep-145', type: 2 },
										],
										symbol: randomUUID(),
										uriPrefix: 'https://bearmint.com/',
										uriSuffix: '.json',
									},
								],
							},
							MESSAGE_OPTIONS,
						),
				)
			).events[0].value
		}

		assert.defined(collection)

		const { events } = await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-131')
				.execute(
					{
						ops: [
							{
								hash: collection,
								recipient: this.recipient,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)

		if (this.transfer === true && this.burn === true) {
			console.log('Can only transfer or burn. Please only specify either option.')

			return
		}

		for (const { key, value } of events) {
			if ((key as string).endsWith('.id')) {
				continue
			}

			if (this.instructions === true) {
				console.log('>>> NFT Transfer')
				console.log(`cub tx bep-132 --hash="${value}"`)

				console.log('>>> NFT Burn')
				console.log(`cub tx bep-133 --hash="${value}"`)
			}

			if (this.transfer === true) {
				await this.cli.run(
					['tx', 'bep-132', '--hash', events[1].value, '--hash', ACCOUNT_ALT.address],
					{
						stdout: new PassThrough(),
					},
				)

				return
			}

			if (this.burn === true) {
				await this.cli.run(['tx', 'bep-133', '--hash', events[1].value], {
					stdout: new PassThrough(),
				})
			}
		}
	}
}
