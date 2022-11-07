import { bytesConcat, bytesToBase64, bytesToHex, file, Paths } from '@bearmint/bep-009'
import { deriveEd25519Address } from '@bearmint/bep-089'
import { getPublicKey as ed25519 } from '@noble/ed25519'
import { mnemonicToSeedSync } from '@scure/bip39'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

export class SetValidatorKeyCommand extends Command {
	public static override paths = [['tm', 'set', 'validator-key']]

	public readonly description = 'Set the contents of ~/.tendermint/config/priv_validator_key.json'

	public readonly mnemonic = Option.String('--mnemonic', {
		description: 'The mnemonic of the validator in question',
		required: true,
		validator: t.isString(),
	})

	async execute() {
		// Arrange
		const privateKey = mnemonicToSeedSync(this.mnemonic).subarray(0, 32)
		const publicKey = await ed25519(privateKey)

		// Act
		file.writeJson(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY, {
			address: bytesToHex(deriveEd25519Address(publicKey)),
			priv_key: {
				type: 'tendermint/PrivKeyEd25519',
				// https://github.com/oasisprotocol/curve25519-voi/blob/master/primitives/ed25519/ed25519.go#L625-L648
				value: bytesToBase64(bytesConcat([privateKey, publicKey])),
			},
			pub_key: {
				type: 'tendermint/PubKeyEd25519',
				value: bytesToBase64(publicKey),
			},
		})

		file.writeJson(Paths.TM_PATH_DATA_PRIV_VALIDATOR_STATE, {
			height: '0',
			round: 0,
			step: 0,
		})
	}
}
