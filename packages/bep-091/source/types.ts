import type { FunctionReturning } from '@bearmint/bep-013'
import type { SchemaObject } from 'ajv'

export interface RequestParameters {
	jsonrpc: '2.0'
	method: string
	id: string
	params: object
}

export interface Response {
	jsonrpc: '2.0'
	id: string
	result: unknown
}

export interface ResponseError {
	jsonrpc: '2.0'
	id: string
	error: {
		code: number
		message: string
		data?: string
	}
}

export type JsonRpcMethodList = Record<
	string,
	{
		execute: FunctionReturning<Promise<unknown>>
		schema?: SchemaObject
	}
>
export interface JsonRpcOptions {
	maxBodySize: number
	timeout: number
}
