import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { fakeStateStore } from '@bearmint/bep-008'
import { StateStore } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'

import { StakingService } from '../../source/staking-service.js'

const DELEGATOR = { address: 'delegator' }
const VALIDATOR = { address: 'validator', validator: { power: BigInt(0) } }

describe<{
	state: StateStore
	subject: StakingService
}>('Staking Service', () => {
	beforeEach(async (context) => {
		context.state = await fakeStateStore({
			accountSerializer: context.accountSerializer,
			container: makeContainer(),
		})
		await context.state.getMultiStore().add('@bearmint/bep-088')

		context.subject = new StakingService(context.state, {
			del() {
				//
			},
			put() {
				//
			},
		})
	})

	it('should attach and detach a delegator and return it for the validator address', async (context) => {
		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({})

		// Mimick stacking
		await context.subject.attach(VALIDATOR, DELEGATOR, BigInt(10))

		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({
			delegators: {
				delegator: '10',
			},
		})

		// Mimick unstaking
		await context.subject.detach(VALIDATOR, DELEGATOR)

		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({})
	})

	it('should increase and decrease the stake of a delegator', async (context) => {
		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({})

		// Mimick stacking
		await context.subject.increaseStake(VALIDATOR, DELEGATOR, BigInt(10))

		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({
			delegators: {
				delegator: '10',
			},
		})

		// Mimick unstaking
		await context.subject.decreaseStake(VALIDATOR, DELEGATOR, BigInt(10))

		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({})
	})

	it('should multiply the stake of a delegator', async (context) => {
		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({})

		// Mimick stacking
		await context.subject.increaseStake(VALIDATOR, DELEGATOR, BigInt(10))

		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({
			delegators: {
				delegator: '10',
			},
		})

		// Mimick unstaking
		await context.subject.multiplyStake(VALIDATOR, DELEGATOR, 200)

		expect((await context.subject.allByValidator(VALIDATOR)).toJson()).toStrictEqual({
			delegators: {
				delegator: '20',
			},
		})
	})
})
