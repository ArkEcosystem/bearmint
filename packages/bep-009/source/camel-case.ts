import camelcase from 'camelcase'
import camelcaseKeys from 'camelcase-keys'

export function camelCase(value: string) {
	return camelcase(value)
}

export function camelCaseKeys(object: object) {
	return camelcaseKeys(object, { deep: true })
}
