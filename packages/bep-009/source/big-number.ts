function difference(a: bigint, b: bigint) {
	return BigInt(a - b)
}

function isBetween(value: bigint, min: bigint, max: bigint) {
	if (min === BigInt(0) && max === BigInt(0)) {
		return true
	}

	return value >= min && value <= max
}

function isForbidden(value: bigint) {
	if (value === BigInt(0)) {
		return true
	}

	return value < 0
}

export const BN = {
	absolute(value: bigint) {
		if (value < 0n) {
			return BigInt(value.toString().slice(1))
		}

		return BigInt(value)
	},
	comparedTo(a: bigint, b: bigint) {
		if (a > b) {
			return 1
		}

		if (a < b) {
			return -1
		}

		return 0
	},
	difference,
	isBetween,
	isForbidden,
	sum(values: Array<bigint | number | string>) {
		let result = BigInt(0)

		for (const value of values) {
			result = result + BigInt(value)
		}

		return result
	},
	sumBy(values: object[], property: string) {
		let result = BigInt(0)

		for (const value of values) {
			result = result + BigInt(value[property])
		}

		return result
	},
	toBytes(value: bigint) {
		const result = Buffer.allocUnsafe(8)
		result.writeBigUint64BE(value)

		return result
	},
	toFixed(value: bigint) {
		return value.toString()
	},
	toJSON(value: bigint) {
		return value.toString()
	},
	toString(value: bigint, base = 10) {
		return value.toString(base)
	},
}
