import { dot, file } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'

import { CFG_PATH } from '../../constants.js'

export class ConfigDeleteCommand extends Command {
	public static override paths = [['cfg', 'del']]

	public readonly description = 'Delete a configuration value that alters how cub behaves'

	public readonly key = Option.String()

	async execute() {
		let config = {}

		if (file.exists(CFG_PATH)) {
			config = file.readJsonSafe<object>(CFG_PATH)
		}

		dot.forget(config, this.key)

		file.writeJson(CFG_PATH, config)

		this.context.stdout.write(`Wrote modified configuration to ${CFG_PATH}`)
	}
}
