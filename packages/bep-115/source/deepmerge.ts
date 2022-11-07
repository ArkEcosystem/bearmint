// @ts-ignore
import dp from 'deepmerge'

export function deepmerge(a: unknown[] | object, b: unknown[] | object) {
	return dp(a, b, { arrayMerge: (_, sourceArray) => sourceArray })
}
