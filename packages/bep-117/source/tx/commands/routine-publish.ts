import { file } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { ENV_PATHS } from '../../constants.js'
import { DEFAULT_ROUTINES } from '../routines.js'

export class RoutinePublishCommand extends Command {
	public static override paths = [['tx', 'routine', 'publish']]

	public readonly description = 'Publish the default routines'

	public readonly routinePath = Option.String('--path', `${ENV_PATHS.config}/routines.json`, {
		description: 'The path in which to store the routines',
		validator: t.isString(),
	})

	async execute() {
		file.writeJson(this.routinePath, DEFAULT_ROUTINES)

		console.log(`Copied routines to (${ENV_PATHS.config}/routines.json)`)
	}
}
