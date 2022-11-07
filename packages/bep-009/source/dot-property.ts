import { deleteProperty, getProperty, hasProperty, setProperty } from 'dot-prop'

export const dot = {
	forget(object: object, path: string) {
		deleteProperty(object, path)
	},
	get<T>(object: object, path: string, defaultValue?: T) {
		return getProperty<object, string, T>(object, path, defaultValue) as T
	},
	has(object: object, path: string) {
		return hasProperty(object, path)
	},
	missing(object: object, path: string) {
		return !hasProperty(object, path)
	},
	set(object: object, path: string, value: unknown) {
		setProperty(object, path, value)
	},
}
