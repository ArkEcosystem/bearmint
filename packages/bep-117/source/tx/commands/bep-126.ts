import { PassThrough } from 'node:stream'

import { BEP126UserPermission, makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { ACCOUNT_ALT, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { randomMoniker } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP126Command extends TxCommand {
	public static override paths = [['tx', 'bep-126']]

	public readonly description = 'Submit an `NFT Collection Registration` Tx'

	public readonly grant = Option.Boolean('--grant', false, {
		description: 'Grant permissions subsequent to the registration of the NFT collection',
	})

	public readonly instructions = Option.Boolean('--instructions', false, {
		description:
			'Prints manual instructions for actions one can perform for the newly registered NFT collection',
	})

	public readonly mint = Option.Boolean('--mint', false, {
		description: 'Mint into the NFT collection subsequent to having registered it',
	})

	public readonly name = Option.String('--name', 'BEAR', {
		description: 'The unique name of the NFT collection in question',
		validator: t.isString(),
	})

	public readonly resign = Option.Boolean('--resign', false, {
		description: 'Resign the NFT collection subsequent to having registered it',
	})

	public readonly revoke = Option.Boolean('--revoke', false, {
		description: 'Revoke permissions subsequent to the registration of the NFT collection',
	})

	public readonly symbol = Option.String('--symbol', 'BEAR', {
		description: 'The unique symbol of the NFT collection in question',
		validator: t.isString(),
	})

	public readonly transfer = Option.Boolean('--transfer', false, {
		description: 'Transfer the NFT collection subsequent to having registered it',
	})

	public readonly uriPrefix = Option.String('--uri-prefix', 'https://bearmint.com/', {
		description: 'The prefix to use for NFT URIs found in this collection',
		validator: t.isString(),
	})

	public readonly uriSuffix = Option.String('--uri-suffix', '.json', {
		description: 'The suffix to use for NFT URIs found in this collection',
		validator: t.isString(),
	})

	async makeTx() {
		const { events } = await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-126')
				.execute(
					{
						ops: [
							{
								name: this.random ? randomMoniker() : this.name,
								policies: [
									{ args: '', name: '@bearmint/bep-145', type: 0 },
									{ args: '', name: '@bearmint/bep-145', type: 1 },
									{ args: '', name: '@bearmint/bep-145', type: 2 },
								],
								symbol: this.random ? randomMoniker() : this.symbol,
								uriPrefix: this.uriPrefix,
								uriSuffix: this.uriSuffix,
							},
						],
					},
					MESSAGE_OPTIONS,
				),
		)

		for (const { value: hash } of events) {
			if (this.instructions === true) {
				console.log('>>> Ownership Transfer')
				console.log(`cub tx bep-127 --hash="${hash}" --owner="${ACCOUNT_ALT.address}"`)

				console.log('>>> Ownership Resignation')
				console.log(`cub tx bep-128 --hash="${hash}"`)

				console.log('>>> Permission Grant')
				console.log(
					`cub tx bep-129 --hash="${hash}" --permissions="mint" --steward="${ACCOUNT_ALT.address}"`,
				)

				console.log('>>> Permission Revocation')
				console.log(
					`cub tx bep-130 --hash="${hash}" --permissions="mint" --steward="${ACCOUNT_ALT.address}"`,
				)
			}

			if (this.transfer === true) {
				await this.cli.run(['tx', 'bep-127', '--hash', hash, '--recipient', ACCOUNT_ALT.address], {
					stdout: new PassThrough(),
				})

				continue
			}

			if (this.resign === true) {
				await this.cli.run(['tx', 'bep-128', '--hash', hash], {
					stdout: new PassThrough(),
				})

				continue
			}

			if (this.grant === true) {
				await this.cli.run(
					[
						'tx',
						'bep-129',
						'--hash',
						hash,
						'--permissions',
						BEP126UserPermission.BURN,
						'--steward',
						ACCOUNT_ALT.address,
					],
					{
						stdout: new PassThrough(),
					},
				)

				continue
			}

			if (this.revoke === true) {
				await this.cli.run(
					[
						'tx',
						'bep-130',
						'--hash',
						hash,
						'--permissions',
						BEP126UserPermission.BURN,
						'--steward',
						ACCOUNT_ALT.address,
					],
					{
						stdout: new PassThrough(),
					},
				)
			}

			if (this.mint === true) {
				await this.cli.run(['tx', 'bep-131', '--collection', hash], {
					stdout: new PassThrough(),
				})
			}
		}
	}
}
