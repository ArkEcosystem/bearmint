import { BN } from '@bearmint/bep-009'
import type { BEP88Milestone, TxAuditor } from '@bearmint/bep-013'
import type { BEP104Msg } from '@bearmint/bep-018'
import { denom } from '@bearmint/bep-021'
import { decreaseBalance, increaseBalance } from '@bearmint/bep-022'
import { AccountBalanceWentNegativeException, ErrorCode, TxAuditException } from '@bearmint/bep-109'

import { assertPowerMode } from './utilities/verify-power-mode.js'
import { isPositiveNumber } from './utils.js'

export function makeTxAuditor(): TxAuditor<BEP104Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(
				msg.ops,
				({ moniker, stake }) => `${isPositiveNumber(stake) ? 'i' : 'd'}${moniker}`,
			)

			const bep88 = toolkit.getModuleMilestone<BEP88Milestone>('@bearmint/bep-088')

			const delegator = await toolkit.getSender()

			// What denomination are we using for staking?
			const denomination = denom(state, 'stake')

			// How many stakes are there right now?
			let stakeCount = Object.keys(delegator.stakes).length

			// Are all `ops` valid in the order they were submitted in?
			for (const [index, { moniker, stake }] of Object.entries(msg.ops)) {
				assertPowerMode({
					delegator,
					mode: bep88.mode,
					moniker,
				})

				const absoluteStake = BN.absolute(BigInt(stake)).toString()

				assert.range('stake', absoluteStake, {
					key: `message.ops.${index}.stake`,
				})

				await assert.validatorExists(moniker)

				if (isPositiveNumber(stake)) {
					// Positive number means staking!
					try {
						decreaseBalance(delegator, stake, denomination)

						if (delegator.stakes[moniker] === undefined) {
							stakeCount++
						}
					} catch (error) {
						if (error instanceof AccountBalanceWentNegativeException) {
							throw new TxAuditException({
								key: `message.ops.${index}.stake`,
								value: ErrorCode.TX_INSUFFICIENT_BALANCE,
							})
						}

						throw error
					}
				} else {
					// Negative number means unstaking!
					if (delegator.stakes[moniker] === undefined) {
						throw new TxAuditException({
							key: `message.ops.${index}.stake`,
							value: ErrorCode.TX_FORBIDDEN_ACTION,
						})
					}

					if (BigInt(absoluteStake) > delegator.stakes[moniker]!) {
						throw new TxAuditException({
							key: `message.ops.${index}.stake`,
							value: ErrorCode.TX_FORBIDDEN_ACTION,
						})
					}

					increaseBalance(delegator, stake, denomination)

					stakeCount--
				}
			}

			// Are we we within the range of min/max number of stakes?
			assert.count('stakes', stakeCount)
		},
	}
}
