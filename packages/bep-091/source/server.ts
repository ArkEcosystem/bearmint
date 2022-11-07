/* eslint-disable unicorn/no-null */
import { createServer } from 'node:http'

import { BadRequestException } from '@bearmint/bep-109'
import type { ErrorObject } from 'ajv'
import Ajv from 'ajv'

import { DEFAULT_OPTIONS } from './constants.js'
import { writeResponseWithError, writeResponseWithStatusCode } from './response.js'
import type { JsonRpcMethodList, JsonRpcOptions, RequestParameters } from './types.js'

function stringifyErrors(errors: ErrorObject[]) {
	const result: string[] = []

	for (const error of errors) {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		result.push(`${error.schemaPath}: ${error.message}`)
	}

	return result.join('')
}

export async function makeServer(
	methods: JsonRpcMethodList,
	options: JsonRpcOptions = DEFAULT_OPTIONS,
) {
	const ajv = new Ajv()
	const requestSchema = ajv.compile({
		properties: {
			id: { type: 'string' },
			jsonrpc: { enum: ['2.0'], type: 'string' },
			method: { enum: Object.keys(methods), type: 'string' },
			params: { type: 'object' },
		},
		required: ['id', 'jsonrpc', 'method'],
		type: 'object',
	})

	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	const server = createServer(async (request, response) => {
		// JSON-RPC only supports "application/json"
		const hasBadContentType =
			(request.headers['content-type'] !== undefined &&
				request.headers['content-type'] !== 'application/json') ||
			(request.headers.accept !== undefined && request.headers.accept !== 'application/json')

		if (hasBadContentType) {
			return writeResponseWithError(
				null,
				-32_700,
				response,
				new Error('Invalid JSON was received by the server.'),
			)
		}

		// JSON-RPC only supports root
		if (request.url !== '/' || request.method !== 'POST') {
			return writeResponseWithError(
				'nil',
				-32_601,
				response,
				new Error('The method does not exist / is not available.'),
			)
		}

		// Start with an empty body and collect data until it stops or exceeds the body size
		let body = ''

		request.on('data', (data) => {
			try {
				const dataLength = Number(data.length)

				if (dataLength > options.maxBodySize) {
					body = ''

					return writeResponseWithError(
						null,
						-32_700,
						response,
						new Error('Invalid JSON was received by the server.'),
					)
				}

				if (body.length + dataLength > options.maxBodySize) {
					body = ''

					return writeResponseWithError(
						null,
						-32_700,
						response,
						new Error('Invalid JSON was received by the server.'),
					)
				}

				body += data
			} catch (error) {
				writeResponseWithStatusCode(response, 404, { message: error.message })
			}
		})

		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		request.on('end', async () => {
			if (body === '') {
				response.end()
				return
			}

			try {
				const requestBody: RequestParameters = JSON.parse(body)
				const { id, method, params } = requestBody

				try {
					// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
					if (!requestSchema(requestBody)) {
						if (
							requestSchema.errors?.find(
								({ schemaPath }) => schemaPath === '#/properties/method/enum',
							) !== undefined
						) {
							return writeResponseWithError(
								id,
								-32_601,
								response,
								new Error('The method does not exist / is not available.'),
							)
						}

						return writeResponseWithError(
							id,
							-32_600,
							response,
							new Error(stringifyErrors(requestSchema.errors as ErrorObject[])),
						)
					}

					const schema = methods[method]?.schema

					if (schema !== undefined) {
						const methodSchema = ajv.compile(schema)

						if (!methodSchema(params)) {
							return writeResponseWithError(
								id,
								-32_602,
								response,
								new Error(stringifyErrors(methodSchema.errors as ErrorObject[])),
							)
						}
					}

					return writeResponseWithStatusCode(response, 200, {
						id,
						jsonrpc: '2.0',
						result: await methods[method]?.execute(params),
					})
				} catch (error) {
					if (error instanceof BadRequestException) {
						if (error.statusCode < -32_099 || error.statusCode > -32_000) {
							return writeResponseWithError(
								id,
								-32_603,
								response,
								new Error(
									`Error code ${error.statusCode} is outside of the reserved range for implementation-defined server-errors.`,
								),
							)
						}

						return writeResponseWithError(id, error.statusCode, response, error)
					}

					return writeResponseWithError(id, -32_603, response, error)
				}
			} catch {
				return writeResponseWithError(
					null,
					-32_700,
					response,
					new Error('Invalid JSON was received by the server.'),
				)
			}
		})
	})

	server.setTimeout(options.timeout)

	return server
}
