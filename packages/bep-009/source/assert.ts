const assertType = (condition: boolean, description: string): asserts condition => {
	if (!condition) {
		throw new Error(`Expected value which is "${description}".`)
	}
}

interface Assert {
	boolean: (value: unknown) => asserts value is boolean
	buffer: (value: unknown) => asserts value is Buffer
	bytes: (value: unknown) => asserts value is Uint8Array
	number: (value: unknown) => asserts value is number
	object: (value: unknown) => asserts value is Record<string, any>
	string: (value: unknown) => asserts value is string
	symbol: (value: unknown) => asserts value is symbol
	undefined: (value: unknown) => asserts value is undefined
	array: <T>(value: unknown) => asserts value is T[]
	bigint: (value: unknown) => asserts value is bigint
	defined<T>(value: unknown): asserts value is NonNullable<T>
}

export const assert: Assert = {
	array: <T>(value: unknown): asserts value is T[] => assertType(Array.isArray(value), 'array'),
	bigint: (value: unknown): asserts value is bigint =>
		assertType(typeof value === 'bigint', 'bigint'),
	boolean: (value: unknown): asserts value is boolean =>
		assertType(typeof value === 'boolean', 'boolean'),
	buffer: (value: unknown): asserts value is Buffer =>
		assertType(value instanceof Buffer, 'buffer'),
	bytes: (value: unknown): asserts value is Uint8Array =>
		assertType(value instanceof Uint8Array, 'bytes'),
	defined: <T>(value: unknown): asserts value is NonNullable<T> =>
		assertType(value !== undefined && value !== null, 'non-null and non-undefined'),
	number: (value: unknown): asserts value is number =>
		assertType(typeof value === 'number', 'number'),
	object: (value: unknown): asserts value is Record<string, any> =>
		assertType(typeof value === 'object', 'object'),
	string: (value: unknown): asserts value is string =>
		assertType(typeof value === 'string', 'string'),
	symbol: (value: unknown): asserts value is symbol =>
		assertType(typeof value === 'symbol', 'symbol'),
	undefined: (value: unknown): asserts value is undefined =>
		assertType(typeof value === 'undefined', 'undefined'),
}
