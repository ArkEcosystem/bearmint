export function uniq<T>(items: T[]) {
	return [...new Set(items)]
}

export function uniqBy<T>(array: T[], iteratee: CallableFunction) {
	return array.filter(
		(value, index, self) => index === self.findIndex((y) => iteratee(value) === iteratee(y)),
	)
}
