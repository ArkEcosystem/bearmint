/**
 * @see https://datatracker.ietf.org/doc/html/rfc5424
 */
export interface Logger {
	emergency(msg: unknown, context?: object | undefined): void
	alert(msg: unknown, context?: object | undefined): void
	critical(msg: unknown, context?: object | undefined): void
	error(msg: unknown, context?: object | undefined): void
	warning(msg: unknown, context?: object | undefined): void
	notice(msg: unknown, context?: object | undefined): void
	info(msg: unknown, context?: object | undefined): void
	debug(msg: unknown, context?: object | undefined): void
}
