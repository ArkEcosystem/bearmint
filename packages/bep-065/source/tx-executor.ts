import { NonNullableMap } from '@bearmint/bep-009'
import type { Account, Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP65Msg } from '@bearmint/bep-018'
import { decreaseLockedBalance, increaseBalance } from '@bearmint/bep-022'
import type { PendingLock } from '@bearmint/bep-064'
import { getPendingLock, HANDLER } from '@bearmint/bep-064'
import { ok } from 'assert'

/**
 * @remarks
 * Beneficiary
 * \> A person who derives advantage from something, especially a trust, will, or life insurance policy.
 *
 * Benefactor
 * \> A person who gives money or other help to a person or cause.
 */
export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP65Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const beneficiary = await toolkit.getSender()
			const benefactors = new NonNullableMap<Account>()
			const locks = new NonNullableMap<PendingLock>()

			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				// Cache Lock
				const lock = await getPendingLock(
					state.getTxStore(),
					cradle.TxFactory,
					cradle.TxMsgFactoryRegistry,
					state.getMultiStore().get(HANDLER),
					op.hash,
				)

				locks.set(op.hash, lock)

				// Cache Benefactor
				if (benefactors.has(lock.sender)) {
					continue
				}

				benefactors.set(
					lock.sender,
					await state.getAccountRepository().findByPublicKey(lock.sender),
				)
			}

			ok(benefactors.missing(beneficiary.publicKey))

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				const { amount, denomination, sender } = locks.get(op.hash)

				decreaseLockedBalance(benefactors.get(sender), amount, denomination)

				receipt.log(TxReceiptEvent.LockedBalanceDecreased, {
					_modelKey: benefactors.get(sender).address,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					amount,
					denomination,
				})

				increaseBalance(beneficiary, amount, denomination)

				receipt.log(TxReceiptEvent.BalanceIncreased, {
					_modelKey: beneficiary.address,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					amount,
					denomination,
				})

				await state.getMultiStore().get(HANDLER).forget(op.hash)

				receipt.log(TxReceiptEvent.MetadataDeleted, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					_opIndex,
					key: 'id',
					value: { id: op.hash },
				})
			}

			// Abide
			await state.getAccountRepository().index(benefactors.values())
			await state.getAccountRepository().index([beneficiary])
		},
	}
}
