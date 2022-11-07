import { PassThrough } from 'node:stream'

import { file, glob } from '@bearmint/bep-009'
import { chalk } from '@bearmint/bep-116'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { ENV_PATHS } from '../../constants.js'
import { DEFAULT_ROUTINES } from '../routines.js'
import type { Expects, IRoutine } from '../types.js'

export class RoutineCommand extends Command {
	public static override paths = [['tx', 'routine']]

	public readonly description = 'Execute a set of routines'

	public readonly config = Option.String('--config', `${ENV_PATHS.config}/routines.json`, {
		validator: t.isString(),
	})
	public readonly routines = Option.String('--routines', {
		required: true,
		validator: t.isString(),
	})

	async execute() {
		let routines: Record<string, IRoutine[]>

		file.remove(this.config)

		// eslint-disable-next-line security/detect-non-literal-fs-filename
		if (file.exists(this.config)) {
			routines = file.readJson<any>(this.config)
		} else {
			console.warn(`File (${this.config}) does not exist. Attempting to use default routines.`)

			routines = DEFAULT_ROUTINES as any
		}

		for (const name of glob(Object.keys(routines), this.routines.split(','))) {
			for (const routine of routines[name]!) {
				console.log(`Executing routine: ${name} -> ${routine.actions}`)

				await this.#executeRoutine(routine)
			}
		}
	}

	async #executeRoutine(routine: IRoutine) {
		if (routine.command === undefined) {
			throw new Error('Routine lacks a command. Please specify it.')
		}

		if (routine.repeats !== undefined) {
			for (let index = 0; index < routine.repeats; index++) {
				await this.#executeCommand(
					routine.command,
					routine.options ?? {},
					Array.isArray(routine.expects) ? routine.expects[index]! : routine.expects,
				)
			}
		} else {
			await this.#executeCommand(routine.command, routine.options ?? {}, routine.expects)
		}
	}

	async #executeCommand(command: string, flags: Record<string, any>, expects: Expects | Expects[]) {
		try {
			const normalisedFlags: string[] = []

			for (const [key, value] of Object.entries(flags)) {
				normalisedFlags.push(`--${key}`, value)
			}

			await this.cli.run(['tx', command, ...normalisedFlags], {
				stdout: new PassThrough(),
			})

			if (expects === 'fail') {
				console.log(chalk.red(chalk.bold('Expected routine to fail, but it passed. Yikes!')))
			} else {
				console.log(chalk.green(chalk.bold('Expected routine to pass, and it did!')))
			}
		} catch (error) {
			if (expects === 'pass') {
				console.log(
					chalk.red(chalk.bold(`Expected routine to pass, but it failed: ${error.message}`)),
				)
			} else {
				console.log(chalk.green(chalk.bold('Expected routine to fail, and it did!')))
				console.log(chalk.yellow(chalk.bold(error.message)))
			}
		}
	}
}
