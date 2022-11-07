import { file, Paths } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { modifyConfig } from '../toml.js'

export class PresetFullCommand extends Command {
	public static override paths = [['tm', 'preset', 'full']]

	public readonly description = 'Configure the node to act as an archive'

	public readonly seeds = Option.String('--seeds', '127.0.0.1', {
		description: 'seed node IDs (format id@ip:port)',
		validator: t.isString(),
	})

	async execute() {
		modifyConfig({
			addr_book_strict: true,
			discard_abci_responses: true,
			'keep-invalid-txs-in-cache': true,
			pex: true,
			seed_mode: false,
			seeds: this.seeds,
		})

		file.remove(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY)
		file.remove(Paths.TM_PATH_DATA_PRIV_VALIDATOR_STATE)
	}
}
