import { format, inspect } from 'node:util'

import type { Logger } from '@bearmint/bep-013'

function log(logger: object, level: string, msg: unknown, context?: object | undefined) {
	if (typeof msg !== 'string') {
		msg = inspect(msg, { depth: 1 })
	}

	if (context !== undefined) {
		const pairs: string[] = []

		for (const [key, value] of Object.entries(context)) {
			pairs.push(`${key}=${value}`)
		}

		msg = format(msg, pairs.join(' '))
	}

	logger[level](msg)
}

export function makeConsoleLogger(): Logger {
	return {
		alert(msg: unknown, context?: object) {
			log(console, 'error', msg, context)
		},
		critical(msg: unknown, context?: object) {
			log(console, 'error', msg, context)
		},
		debug(msg: unknown, context?: object) {
			log(console, 'debug', msg, context)
		},
		emergency(msg: unknown, context?: object) {
			log(console, 'error', msg, context)
		},
		error(msg: unknown, context?: object) {
			log(console, 'error', msg, context)
		},
		info(msg: unknown, context?: object) {
			log(console, 'info', msg, context)
		},
		notice(msg: unknown, context?: object) {
			log(console, 'info', msg, context)
		},
		warning(msg: unknown, context?: object) {
			log(console, 'warn', msg, context)
		},
	}
}
