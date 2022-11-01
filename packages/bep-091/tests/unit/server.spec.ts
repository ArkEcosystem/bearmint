import type { Server } from 'node:http'

import { expect, describe, it, beforeAll, afterAll } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BadRequestException } from '@bearmint/bep-109'

import { injectRawRequest, injectRequest } from '../../source/inject.js'
import { makeServer } from '../../source/server.js'

describe<{
	subject: Server
}>('Server', () => {
	beforeAll(async (context) => {
		context.subject = await makeServer({
			badRequest: {
				async execute() {
					throw new BadRequestException(-32_099, 'bad')
				},
			},
			badRequestOutOfRange: {
				async execute() {
					throw new BadRequestException(-32_100, 'bad')
				},
			},
			info: {
				async execute() {
					return { hello: 'world' }
				},
			},
			unexpected: {
				async execute() {
					throw new Error('ohno')
				},
			},

			validated: {
				async execute() {
					return { hello: 'world' }
				},

				schema: {
					properties: {
						key: { type: 'string' },
					},
					required: ['key'],
					type: 'object',
				},
			},
		})

		context.subject.listen(12_345, '127.0.0.1')
	})

	afterAll((context) => {
		context.subject.close()
	})

	it('should respond with a result', async () => {
		expect((await injectRequest('info', {})).result).toStrictEqual({ hello: 'world' })
	})

	it('should respond with a validation error', async () => {
		expect((await injectRequest('validated', {})).error).toStrictEqual({
			code: -32_602,
			message: "#/required: must have required property 'key'",
		})
	})

	it('should respond with an error if a generic property is faulty', async (context) => {
		expect(
			(
				await injectRawRequest({
					id: 123,
					jsonrpc: '2.0',
					method: 'info',
				})
			).error,
		).toStrictEqual({
			code: -32_600,
			message: '#/properties/id/type: must be string',
		})

		expect(
			(
				await injectRawRequest({
					id: '123',
					jsonrpc: '3.0',
					method: 'info',
				})
			).error,
		).toStrictEqual({
			code: -32_600,
			message: '#/properties/jsonrpc/enum: must be equal to one of the allowed values',
		})

		expect(
			(
				await injectRawRequest({
					id: '123',
					jsonrpc: '2.0',
					method: 'unknown',
				})
			).error,
		).toStrictEqual({
			code: -32_601,
			message: 'The method does not exist / is not available.',
		})

		expect(
			(
				await injectRawRequest({
					id: '123',
					jsonrpc: '2.0',
					method: 'info',
					params: [],
				})
			).error,
		).toStrictEqual({
			code: -32_600,
			message: '#/properties/params/type: must be object',
		})
	})

	it('should handle bad requests', async (context) => {
		expect((await injectRequest('badRequest', {})).error).toStrictEqual({
			code: -32_099,
			message: 'Bad Request: "bad" (-32099)',
		})
	})

	it('should handle bad requests that have an out-of-range error code', async (context) => {
		expect((await injectRequest('badRequestOutOfRange', {})).error).toStrictEqual({
			code: -32_603,
			message:
				'Error code -32100 is outside of the reserved range for implementation-defined server-errors.',
		})
	})

	it('should handle random exceptions', async (context) => {
		expect((await injectRequest('unexpected', {})).error).toStrictEqual({
			code: -32_603,
			message: 'ohno',
		})
	})

	it('should respond with status code 415 if the content-type header is faulty', async (context) => {
		expect(
			(
				await injectRequest('info', undefined, {
					'content-type': 'application/text',
				})
			).error,
		).toStrictEqual({
			code: -32_700,
			message: 'Invalid JSON was received by the server.',
		})
	})

	it('should respond with status code 415 if the accept header is faulty', async (context) => {
		expect(
			(
				await injectRequest('info', undefined, {
					accept: 'random',
					'content-type': 'application/json',
				})
			).error,
		).toStrictEqual({
			code: -32_700,
			message: 'Invalid JSON was received by the server.',
		})
	})
})
