import { NonNullableMap } from '@bearmint/bep-009'
import type { AccountWithValidator, Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP104Msg } from '@bearmint/bep-018'
import { denom } from '@bearmint/bep-021'
import {
	decreaseBalance,
	decreaseLockedBalance,
	increaseBalance,
	increaseLockedBalance,
} from '@bearmint/bep-022'

import { HANDLER } from './types.js'
import { isPositiveNumber } from './utils.js'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP104Msg> {
	return {
		async execute({ msg, receipt, state, toolkit }) {
			// Arrange
			const denomination = denom(state, 'stake')
			const delegator = await toolkit.getSender()
			const validators = new NonNullableMap<AccountWithValidator>()

			const stakingService = cradle.StakingServiceFactory.make(state)

			// Act
			for (const [_opIndex, { moniker, stake }] of Object.entries(msg.ops)) {
				if (validators.missing(moniker)) {
					if (delegator.moniker === moniker) {
						validators.set(moniker, delegator as AccountWithValidator)
					} else {
						validators.set(
							moniker,
							await state.getAccountRepository().findByMoniker<AccountWithValidator>(moniker),
						)
					}
				}

				// What validator are we operating on?
				const validator = validators.get(moniker)

				// Positive number means staking!
				if (isPositiveNumber(stake)) {
					// Delegator...
					decreaseBalance(delegator, stake, denomination)

					receipt.log(TxReceiptEvent.BalanceDecreased, {
						_modelKey: delegator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						amount: stake,
						denomination,
					})

					increaseLockedBalance(delegator, stake, denomination)

					receipt.log(TxReceiptEvent.LockedBalanceIncreased, {
						_modelKey: delegator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						amount: stake,
						denomination,
					})

					await stakingService.increaseStake(validator, delegator, stake)

					receipt.log(TxReceiptEvent.StakeIncreased, {
						_modelKey: delegator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						amount: stake,
						moniker,
					})

					// Validator...
					receipt.log(TxReceiptEvent.DelegatorUpdated, {
						_modelKey: validator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						delegator: delegator.address,
					})

					receipt.log(TxReceiptEvent.PowerIncreased, {
						_modelKey: validator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						amount: stake,
					})
				} else {
					// Negative number means unstaking!
					const stakeAbsolute = BigInt(stake.toString().replace('-', ''))

					// Delegator...
					increaseBalance(delegator, stakeAbsolute, denomination)

					receipt.log(TxReceiptEvent.BalanceIncreased, {
						_modelKey: delegator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						amount: stakeAbsolute,
						denomination,
					})

					decreaseLockedBalance(delegator, stakeAbsolute, denomination)

					receipt.log(TxReceiptEvent.LockedBalanceDecreased, {
						_modelKey: delegator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						amount: stakeAbsolute,
						denomination,
					})

					await stakingService.decreaseStake(validator, delegator, stakeAbsolute)

					receipt.log(TxReceiptEvent.StakeDecreased, {
						_modelKey: delegator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						amount: stakeAbsolute,
						moniker,
					})

					// Validator...
					receipt.log(
						delegator.stakes[validator.moniker] !== undefined
							? TxReceiptEvent.DelegatorUpdated
							: TxReceiptEvent.DelegatorDeleted,
						{
							_modelKey: validator.address,
							_modelType: TxReceiptModelType.Account,
							_module: HANDLER,
							_opIndex,
							delegator: delegator.address,
						},
					)

					receipt.log(TxReceiptEvent.PowerDecreased, {
						_modelKey: validator.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						_opIndex,
						amount: stakeAbsolute,
					})
				}
			}

			// Abide
			await state.getAccountRepository().index(validators.values())
			await state.getAccountRepository().index([delegator])
		},
	}
}
