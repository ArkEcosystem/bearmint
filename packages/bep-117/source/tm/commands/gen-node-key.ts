import { Paths } from '@bearmint/bep-009'
import { writeNodeKey } from '@bearmint/bep-097'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

export class GenNodeKeyCommand extends Command {
	public static override paths = [['tm', 'gen', 'node-key']]

	public readonly description = 'Create a new node key'

	public readonly algorithm = Option.String('--algorithm', 'ed25519', {
		validator: t.isEnum(['ed25519', 'secp256k1']),
	})

	async execute() {
		await writeNodeKey({
			keyPairType: this.algorithm,
			path: Paths.TM_PATH_HOME,
			privateKeyType: {
				ed25519: 'tendermint/PrivKeyEd25519',
				secp256k1: 'tendermint/PrivKeySecp256k1',
				// sr25519: 'tendermint/PrivKeySr25519',
			}[this.algorithm],
		})
	}
}
