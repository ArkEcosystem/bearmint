import { snakeCase as sc } from 'snake-case'

export function snakeCase(value: string) {
	return sc(value)
}

export function upperSnakeCase(value: string) {
	return sc(value).toUpperCase()
}
