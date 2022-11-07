import { dot, hexToBytes } from '@bearmint/bep-009'
import type { AccountWithValidator, Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP58Msg } from '@bearmint/bep-018'

import type { Milestone } from './types.js'
import { HANDLER } from './types.js'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP58Msg> {
	return {
		async execute({ receipt, state, toolkit, tx }) {
			// Arrange
			const sender = (await toolkit.getSender()) as AccountWithValidator

			// Act
			await state.getMultiStore().get(HANDLER).set(sender.address, hexToBytes(tx.hash))

			receipt.log(TxReceiptEvent.MetadataCreated, {
				_modelKey: sender.address,
				_modelSubType: TxReceiptModelSubType.Metadata,
				_modelType: TxReceiptModelType.Account,
				_module: HANDLER,
				key: 'hash',
				value: { hash: tx.hash },
			})

			if (toolkit.getModuleMilestone<Milestone>().detachDelegators === true) {
				const stakingService = cradle.StakingServiceFactory.make(state)

				for (const delegator of await stakingService.keysByValidator(sender)) {
					if (sender.address === delegator) {
						receipt.log(TxReceiptEvent.StakeDeleted, {
							_modelKey: sender.address,
							_modelType: TxReceiptModelType.Account,
							_module: HANDLER,
							amount: dot.get(sender.stakes, sender.moniker),
							moniker: sender.moniker,
						})

						await stakingService.detach(sender, sender)

						continue
					}

					const account = await state.getAccountRepository().findByAddress(delegator)

					receipt.log(TxReceiptEvent.StakeDeleted, {
						_modelKey: account.address,
						_modelType: TxReceiptModelType.Account,
						_module: HANDLER,
						amount: dot.get(account.stakes, sender.moniker),
						moniker: sender.moniker,
					})

					await stakingService.detach(sender, account)

					await state.getAccountRepository().index([account])
				}

				receipt.log(TxReceiptEvent.PowerDecreased, {
					_modelKey: sender.address,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					amount: sender.validator.power,
				})

				sender.validator.power = BigInt(0)
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
