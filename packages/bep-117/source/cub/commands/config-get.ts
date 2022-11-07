import { dot, file } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'

import { CFG_PATH } from '../../constants.js'

export class ConfigGetCommand extends Command {
	public static override paths = [['cfg', 'get']]

	public readonly description = 'Get a configuration value that alters how cub behaves'

	public readonly key = Option.String()

	async execute() {
		this.context.stdout.write(dot.get(file.readJsonSafe<object>(CFG_PATH), this.key))
	}
}
