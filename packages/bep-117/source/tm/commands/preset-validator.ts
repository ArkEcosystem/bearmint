import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { modifyConfig } from '../toml.js'

/**
 * @see https://docs.tendermint.com/master/nodes/validators.html#validator-node-configuration
 */
export class PresetValidatorCommand extends Command {
	public static override paths = [['tm', 'preset', 'validator']]

	public readonly description = 'Configure the node to act as a validator'

	public readonly sentries = Option.String('--sentries', {
		description: 'list of sentry nodes (format id@ip:port)',
		required: true,
		validator: t.isString(),
	})

	async execute() {
		modifyConfig({
			addr_book_strict: true,
			discard_abci_responses: true,
			double_sign_check_height: 0,
			persistent_peers: this.sentries,
			pex: false,
			private_peer_ids: '',
			seed_mode: false,
			unconditional_peer_ids: '',
		})
	}
}
