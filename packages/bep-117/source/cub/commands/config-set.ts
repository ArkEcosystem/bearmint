import { dot, file } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'

import { CFG_PATH } from '../../constants.js'

export class ConfigSetCommand extends Command {
	public static override paths = [['cfg', 'set']]

	public readonly description = 'Set a configuration value that alters how cub behaves'

	public readonly key = Option.String()
	public readonly value = Option.String()

	async execute() {
		let config = {}

		if (file.exists(CFG_PATH)) {
			config = file.readJsonSafe<object>(CFG_PATH)
		}

		dot.set(config, this.key, this.value)

		file.writeJson(CFG_PATH, config)

		this.context.stdout.write(`Wrote modified configuration to ${CFG_PATH}`)
	}
}
