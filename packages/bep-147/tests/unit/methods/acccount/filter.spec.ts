import { ErrorCode } from '@bearmint/bep-109'
import { makeState } from '@bearmint/bep-020'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'
import {
	fakeAddressFactory,
	fakeEventDispatcher,
	fakeMilestoneKVStore,
	fakeMultiStore,
} from '@bearmint/bep-008'
import { milestone } from '@bearmint/bep-006'
import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { jsonToBytes, stringToHex } from '@bearmint/bep-009'
import type { StateStore } from '@bearmint/bep-013'

import { QueryAccount } from '../../../../source/methods/account/filter.js'
import { BEP22Account } from '@bearmint/bep-018'

describe<{ state: StateStore }>('QueryAccount', () => {
	beforeEach(async (context) => {
		context.state = await makeState(
			// @ts-ignore
			makeAccountRepository({
				AccountSerializer: {
					async deserialize(account) {
						return account
					},
					async serialize(account) {
						return new BEP22Account(account)
					},
				},
				AddressFactory: fakeAddressFactory(),
				EventDispatcher: fakeEventDispatcher(),
			}),
			await fakeMultiStore({
				milestone: await fakeMilestoneKVStore(),
			}),
		)

		context.state.setMilestone(milestone)
	})

	it('should determine if the handler is a match', async () => {
		expect(
			await new QueryAccount().isMatch({
				data: undefined,
				path: ['account', 'filter', 'address', 'value'],
			}),
		).toBeTrue()

		expect(
			await new QueryAccount().isMatch({
				data: undefined,
				path: ['account', 'filter', 'moniker', 'value'],
			}),
		).toBeTrue()

		expect(
			await new QueryAccount().isMatch({
				data: undefined,
				path: ['account', 'filter', 'publicKey', 'value'],
			}),
		).toBeTrue()

		expect(
			await new QueryAccount().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()

		expect(
			await new QueryAccount().isMatch({
				data: jsonToBytes({ publicKey: 'publicKey' }),
				path: ['account', 'filter', 'random', 'value'],
			}),
		).toBeFalse()
	})

	it('should find an account by any identifier', async (context) => {
		await context.state.getAccountRepository().index([
			await makeAccountSerializer({
				AddressFactory: fakeAddressFactory(),
				CommittedState: context.state,
				ExecuteTxState: context.state,
				EventDispatcher: fakeEventDispatcher(),
			}).deserialize({
				address: 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
				moniker: 'moniker',
				publicKey: stringToHex('publicKey'),
			}),
		])

		expect(
			await new QueryAccount({ CommittedState: context.state }).execute({
				path: [
					'account',
					'filter',
					'address',
					'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
				],
			}),
		).toMatchSnapshot()

		expect(
			await new QueryAccount({ CommittedState: context.state }).execute({
				path: ['account', 'filter', 'moniker', 'moniker'],
			}),
		).toMatchSnapshot()

		expect(
			await new QueryAccount({ CommittedState: context.state }).execute({
				path: ['account', 'filter', 'publicKey', 'publicKey'],
			}),
		).toMatchSnapshot()
	})

	it('should throw if an account does not exist by any identifier', async (context) => {
		await expect(() =>
			new QueryAccount({ CommittedState: context.state }).execute({
				path: ['account', 'filter', 'address', 'address'],
			}),
		).rejects.toThrow('Expected value which is "non-null and non-undefined"')

		await expect(() =>
			new QueryAccount({ CommittedState: context.state }).execute({
				path: ['account', 'filter', 'moniker', 'moniker'],
			}),
		).rejects.toThrow('Expected value which is "non-null and non-undefined"')

		await expect(() =>
			new QueryAccount({ CommittedState: context.state }).execute({
				path: ['account', 'filter', 'publicKey', 'publicKey'],
			}),
		).rejects.toThrow('Expected value which is "non-null and non-undefined"')
	})
})
