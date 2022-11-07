import { PassThrough } from 'node:stream'

import { blake3, bytesConcat, bytesToBase64, bytesToHex, Paths, sha256 } from '@bearmint/bep-009'
import { BEP57MsgHash } from '@bearmint/bep-018'
import { makeKeyPairFactory, makeSignatureFactory } from '@bearmint/bep-035'
import { makeInstance } from '@bearmint/bep-099'
import { Option } from 'clipanion'
import * as t from 'typanion'

import { DEFAULT_MONIKER, MESSAGE_OPTIONS } from '../constants.js'
import { makeTx } from '../tx.js'
import { randomMoniker } from '../utils.js'
import { TxCommand } from './base.js'

export class BEP57Command extends TxCommand {
	public static override paths = [['tx', 'bep-057']]

	public readonly description = 'Submit a `Validator Registration` Tx'

	public readonly distribution = Option.Boolean('--distribution', false, {
		description: 'Adjust the distribution parameters of the validator once you have registered it',
	})

	public readonly moniker = Option.String('--moniker', DEFAULT_MONIKER, {
		description: 'The moniker of the validator that is being registered',
		validator: t.isString(),
	})

	public readonly resign = Option.Boolean('--resign', false, {
		description: 'Resign the validator once you have registered it',
	})

	public readonly stake = Option.Boolean('--stake', false, {
		description: 'Stake with the validator once you have registered it',
	})

	public readonly validatorMnemonic = Option.String('--validator-mnemonic', {
		description: 'The mnemonic of the validator in question',
		required: true,
		validator: t.isString(),
	})

	async makeTx() {
		const tendermint = await makeKeyPairFactory().fromMnemonic(this.validatorMnemonic)

		console.log(`Store this JSON in (${Paths.TM_PATH_CONF}/priv_validator_key.json) for Tendermint`)

		console.log(
			JSON.stringify(
				{
					address: bytesToHex(sha256(tendermint.toPublicKey().toBytes()).slice(0, 20)),
					priv_key: {
						type: 'tendermint/PrivKeyEd25519',
						value: bytesToBase64(
							bytesConcat([
								tendermint.toPrivateKey().toBytes(),
								tendermint.toPublicKey().toBytes(),
							]),
						),
					},
					pub_key: {
						type: 'tendermint/PubKeyEd25519',
						value: bytesToBase64(tendermint.toPublicKey().toBytes()),
					},
				},
				undefined,
				4,
			),
		)

		console.log(
			JSON.stringify(
				{
					privateKey: bytesToHex(
						Buffer.concat([
							tendermint.toPrivateKey().toBytes(),
							tendermint.toPublicKey().toBytes(),
						]),
					),
					publicKey: bytesToHex(tendermint.toPublicKey().toBytes()),
				},
				undefined,
				4,
			),
		)

		await makeTx(
			this,
			await makeInstance()
				.buildTx('@bearmint/bep-057')
				.execute(
					{
						publicKey: tendermint.toPublicKey().toBytes(),
						signature: (
							await makeSignatureFactory().sign(
								blake3(
									new BEP57MsgHash({
										moniker: this.random ? randomMoniker() : this.moniker,
									}).toBinary(),
								),
								tendermint,
							)
						).toBytes(),
					},
					MESSAGE_OPTIONS,
				),
		)

		if (this.distribution === true) {
			await this.cli.run(['tx', 'bep-059'], {
				stdout: new PassThrough(),
			})
		}

		if (this.resign === true) {
			await this.cli.run(['tx', 'bep-058'], {
				stdout: new PassThrough(),
			})
		}

		if (this.stake === true) {
			await this.cli.run(['tx', 'bep-104'], {
				stdout: new PassThrough(),
			})
		}
	}
}
