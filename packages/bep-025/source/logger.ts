import { format, inspect } from 'node:util'

import type { Logger } from '@bearmint/bep-013'
import pino from 'pino'

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

export function makeLogger(): Logger {
	const logger: pino.Logger = pino({
		// eslint-disable-next-line unicorn/no-null
		base: null,
		level: 'debug',
		timestamp: pino.stdTimeFunctions.isoTime,
		transport: {
			target: 'pino-pretty',
		},
	})

	return {
		alert(msg: unknown, context?: object) {
			log(logger, 'error', msg, context)
		},
		critical(msg: unknown, context?: object) {
			log(logger, 'error', msg, context)
		},
		debug(msg: unknown, context?: object) {
			log(logger, 'debug', msg, context)
		},
		emergency(msg: unknown, context?: object) {
			log(logger, 'error', msg, context)
		},
		error(msg: unknown, context?: object) {
			log(logger, 'error', msg, context)
		},
		info(msg: unknown, context?: object) {
			log(logger, 'info', msg, context)
		},
		notice(msg: unknown, context?: object) {
			log(logger, 'info', msg, context)
		},
		warning(msg: unknown, context?: object) {
			log(logger, 'warn', msg, context)
		},
	}
}
