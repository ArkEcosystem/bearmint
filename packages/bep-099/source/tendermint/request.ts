import type { URLSearchParams } from 'node:url'

export async function get({ host, parameters }: { host: string; parameters?: URLSearchParams }) {
	if (parameters !== undefined) {
		host = `${host}?${parameters.toString()}`
	}

	const response = await fetch(host, {
		headers: {
			Accept: 'application/json',
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'Content-Type': 'application/json',
		},
		method: 'GET',
	})

	if (response.status !== 200) {
		throw new Error(response.statusText)
	}

	return response.json()
}
