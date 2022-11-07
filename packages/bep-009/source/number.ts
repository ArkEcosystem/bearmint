export function numberToHex(value: number, padding = 2) {
	const indexHex: string = Number(value).toString(16)

	return '0'.repeat(padding - indexHex.length) + indexHex
}
