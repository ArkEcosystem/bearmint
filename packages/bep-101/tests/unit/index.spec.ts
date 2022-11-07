import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { denominations } from '@bearmint/bep-006'
import { fakeAccountSerializer, fakeStateStore } from '@bearmint/bep-008'
import type { StateStore } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'

import { getPunishment } from '../../source/index'

describe<{
	state: StateStore
}>('Punishment', () => {
	beforeEach(async (context) => {
		context.state = await fakeStateStore({
			accountSerializer: fakeAccountSerializer({ container: context.container }),
			container: makeContainer(),
		})
	})

	it('should skip slashing if it encounters a percentage that is not a number', async (context) => {
		context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						'@bearmint/bep-118': {
							'*': {
								punishments: [
									{ denomination: 'SEED', percentage: 25, type: 0 }, // UNKNOWN
									{ denomination: 'SEED', percentage: 75, type: 1 }, // DUPLICATE_VOTE
									{ denomination: 'SEED', percentage: '50', type: 2 }, // LIGHT_CLIENT_ATTACK
								],
							},
						},
					},
				},
				transactions: {},
			},
		})

		expect(() =>
			getPunishment(
				'@bearmint/bep-118',
				{
					get() {
						return {
							version() {
								return '0.0.0'
							},
						}
					},
				},
				context.state,
				2,
			),
		).toThrow('Expected percentage to be a number but received (string)')
	})

	it('should skip slashing if it encounters a negative percentage', async (context) => {
		context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						'@bearmint/bep-118': {
							'*': {
								punishments: [
									{ denomination: 'SEED', percentage: 25, type: 0 }, // UNKNOWN
									{ denomination: 'SEED', percentage: 75, type: 1 }, // DUPLICATE_VOTE
									{ denomination: 'SEED', percentage: -25, type: 2 }, // LIGHT_CLIENT_ATTACK
								],
							},
						},
					},
				},
				transactions: {},
			},
		})

		expect(() =>
			getPunishment(
				'@bearmint/bep-118',
				{
					get() {
						return {
							version() {
								return '0.0.0'
							},
						}
					},
				},
				context.state,
				2,
			),
		).toThrow('Expected percentage to be a number between 1 and 100 but received (-25)')
	})

	it('should skip slashing if it encounters an out-of-bound percentage', async (context) => {
		context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						'@bearmint/bep-118': {
							'*': {
								punishments: [
									{ denomination: 'SEED', percentage: 25, type: 0 }, // UNKNOWN
									{ denomination: 'SEED', percentage: 75, type: 1 }, // DUPLICATE_VOTE
									{ denomination: 'SEED', percentage: 101, type: 2 }, // LIGHT_CLIENT_ATTACK
								],
							},
						},
					},
				},
				transactions: {},
			},
		})

		expect(() =>
			getPunishment(
				'@bearmint/bep-118',
				{
					get() {
						return {
							version() {
								return '0.0.0'
							},
						}
					},
				},
				context.state,
				2,
			),
		).toThrow('Expected percentage to be a number between 1 and 100 but received (101)')
	})
})
