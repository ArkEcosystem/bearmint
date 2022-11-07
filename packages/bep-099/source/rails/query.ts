import type { RequestParameters } from './types.js'

export function buildSearchParameters(parameters: RequestParameters) {
	const result: Record<string, string> = {}

	if (parameters.fields !== undefined) {
		for (const [key, value] of Object.entries(parameters.fields)) {
			result[`fields[${key}]`] = value.join(',')
		}
	}

	if (parameters.filter !== undefined) {
		for (const [key, value] of Object.entries(parameters.filter)) {
			result[`filter[${key}]`] = value.join(',')
		}
	}

	if (parameters.page !== undefined) {
		if (parameters.page.cursor !== undefined) {
			result['page[cursor]'] = parameters.page.cursor
		}

		if (parameters.page.size !== undefined) {
			result['page[size]'] = String(parameters.page.size)
		}
	}

	if (parameters.sort !== undefined) {
		result['sort'] = parameters.sort.join(',')
	}

	return new URLSearchParams(result)
}
