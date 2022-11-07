import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { buildSearchParameters } from '../../../source/rails/query.js'

describe('Build Query', () => {
	it('should build the [field] query', async () => {
		expect(
			Object.fromEntries(
				buildSearchParameters({
					fields: {
						author: ['id'],
					},
				}).entries(),
			),
		).toStrictEqual({
			'fields[author]': 'id',
		})

		expect(
			Object.fromEntries(
				buildSearchParameters({
					fields: {
						author: ['id', 'name'],
					},
				}).entries(),
			),
		).toStrictEqual({
			'fields[author]': 'id,name',
		})
	})

	it('should build the [filter] query', async () => {
		expect(
			Object.fromEntries(
				buildSearchParameters({
					filter: {
						email: ['gmail'],
					},
				}).entries(),
			),
		).toStrictEqual({
			'filter[email]': 'gmail',
		})

		expect(
			Object.fromEntries(
				buildSearchParameters({
					filter: {
						email: ['seb', 'freek'],
					},
				}).entries(),
			),
		).toStrictEqual({
			'filter[email]': 'seb,freek',
		})
	})

	it('should build the [sort] query', async () => {
		expect(
			Object.fromEntries(
				buildSearchParameters({
					sort: ['name'],
				}).entries(),
			),
		).toStrictEqual({
			sort: 'name',
		})

		expect(
			Object.fromEntries(
				buildSearchParameters({
					sort: ['name', '-street'],
				}).entries(),
			),
		).toStrictEqual({
			sort: 'name,-street',
		})
	})

	it('should build the [page] query', async () => {
		expect(
			Object.fromEntries(
				buildSearchParameters({
					page: { cursor: 'cursor' },
				}).entries(),
			),
		).toStrictEqual({
			'page[cursor]': 'cursor',
		})

		expect(
			Object.fromEntries(
				buildSearchParameters({
					page: { size: 5 },
				}).entries(),
			),
		).toStrictEqual({
			'page[size]': '5',
		})
	})

	it('should build the combine all parameters', async () => {
		expect(
			Object.fromEntries(
				buildSearchParameters({
					fields: {
						author: ['id', 'name'],
					},
					filter: {
						email: ['seb', 'freek'],
					},
					page: { cursor: 'cursor', size: 5 },
					sort: ['name', '-street'],
				}).entries(),
			),
		).toStrictEqual({
			'fields[author]': 'id,name',
			'filter[email]': 'seb,freek',
			'page[cursor]': 'cursor',
			'page[size]': '5',
			sort: 'name,-street',
		})
	})
})
