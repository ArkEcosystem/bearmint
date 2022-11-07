export interface NonNullableMap<T> {
	all(): Record<string, T>
	entries(): Array<[string, T]>
	get(key: string): NonNullable<T>
	has(key: string): boolean
	keys(): string[]
	missing(key: string): boolean
	set(key: string, value: T): void
	values(): T[]
}
