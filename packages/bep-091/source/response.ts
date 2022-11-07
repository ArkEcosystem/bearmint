import type { ServerResponse } from 'node:http'

import { HEADERS } from './constants.js'

export function writeResponseWithStatusCode(response: ServerResponse, code: number, body: object) {
	response.writeHead(code, HEADERS)
	response.write(JSON.stringify(body))
	response.end()
}

export function writeResponseWithError(
	id: string | null,
	code: number,
	response: ServerResponse,
	error: Error,
) {
	writeResponseWithStatusCode(response, 200, {
		error: {
			code,
			// data: error.stack,
			message: error.message,
		},
		id,
		jsonrpc: '2.0',
	})
}
