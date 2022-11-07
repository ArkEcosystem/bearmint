import { file, Paths } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { modifyConfig } from '../toml.js'

export class PresetSeedCommand extends Command {
	public static override paths = [['tm', 'preset', 'seed']]

	public readonly description = 'Initialize the JSON-RPC server'

	public readonly seeds = Option.String('--seeds', {
		description: 'sentry node IDs (format id@ip:port)',
		required: true,
		validator: t.isString(),
	})

	async execute() {
		modifyConfig({
			addr_book_strict: true,
			discard_abci_responses: true,
			'keep-invalid-txs-in-cache': true,
			pex: true,
			seed_mode: true,
			seeds: this.seeds,
		})

		file.remove(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY)
		file.remove(Paths.TM_PATH_DATA_PRIV_VALIDATOR_STATE)
	}
}
