import { join } from 'node:path'
import { format, inspect } from 'node:util'

import type { Cradle, Logger } from '@bearmint/bep-013'
import * as winston from 'winston'

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

function wrapLogger(logger: winston.Logger): Logger {
	return {
		alert(msg: unknown, context?: object) {
			log(logger, 'alert', msg, context)
		},
		critical(msg: unknown, context?: object) {
			log(logger, 'crit', msg, context)
		},
		debug(msg: unknown, context?: object) {
			log(logger, 'debug', msg, context)
		},
		emergency(msg: unknown, context?: object) {
			log(logger, 'emerg', msg, context)
		},
		error(msg: unknown, context?: object) {
			log(logger, 'error', msg, context)
		},
		info(msg: unknown, context?: object) {
			log(logger, 'info', msg, context)
		},
		notice(msg: unknown, context?: object) {
			log(logger, 'notice', msg, context)
		},
		warning(msg: unknown, context?: object) {
			log(logger, 'warning', msg, context)
		},
	}
}

export function makeConsoleLogger(): Logger {
	const logger: winston.Logger = winston.createLogger({
		format: winston.format.combine(
			winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
			winston.format.colorize(),
			winston.format.printf(
				({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`,
			),
		),
		level: 'debug',
		levels: winston.config.syslog.levels,
		transports: [new winston.transports.Console()],
	})

	return wrapLogger(logger)
}

export function makeLogger(cradle: Cradle): Logger {
	const logger: winston.Logger = winston.createLogger({
		format: winston.format.combine(
			winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
			winston.format.colorize(),
			winston.format.printf(
				({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`,
			),
		),
		level: cradle.ServiceProviderRepository.get('@bearmint/bep-026')
			.config()
			.get<string>('level', 'debug'),
		levels: winston.config.syslog.levels,
		transports: [
			new winston.transports.File({
				filename: join(cradle.Paths.log, 'error.log'),
				level: 'error',
			}),
			new winston.transports.File({
				filename: join(cradle.Paths.log, 'combined.log'),
			}),
			new winston.transports.Console(),
		],
	})

	return wrapLogger(logger)
}
