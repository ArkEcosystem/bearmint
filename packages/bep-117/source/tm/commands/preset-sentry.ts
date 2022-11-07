import { file, Paths } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { modifyConfig } from '../toml.js'

/**
 * @see https://docs.tendermint.com/master/nodes/validators.html#sentry-node-configuration
 */
export class PresetSentryCommand extends Command {
	public static override paths = [['tm', 'preset', 'sentry']]

	public readonly description = 'Configure the node to act as a sentry'

	public readonly seeds = Option.String('--seeds', {
		description: 'seed node IDs (format id@ip:port)',
		required: true,
		validator: t.isString(),
	})
	public readonly validator = Option.String('--validator', {
		description: 'validator node ID (format id@ip:port)',
		required: true,
		validator: t.isString(),
	})

	async execute() {
		const [validatorPeerId] = this.validator.split('@')

		modifyConfig({
			addr_book_strict: true,
			discard_abci_responses: true,
			'keep-invalid-txs-in-cache': true,
			persistent_peers: this.validator,
			pex: true,
			private_peer_ids: validatorPeerId ?? '',
			seed_mode: false,
			seeds: this.seeds,
			unconditional_peer_ids: validatorPeerId ?? '',
		})

		file.remove(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY)
		file.remove(Paths.TM_PATH_DATA_PRIV_VALIDATOR_STATE)
	}
}
