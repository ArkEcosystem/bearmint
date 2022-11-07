export function inRange(actual: number, min: number, max: number): boolean {
	return actual >= min && actual <= max
}

export function isPrime(value: number) {
	for (let index = 2, s = Math.sqrt(value); index <= s; index++) {
		if (value % index === 0) {
			return false
		}
	}

	return value > 1
}
