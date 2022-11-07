import { hexToBytes } from '@bearmint/bep-009'
import type {
	AccountWithValidator,
	Cradle,
	DelegatorRewarderStrategy,
	FunctionReturning,
	TxAuditor,
} from '@bearmint/bep-013'
import type { BEP59Msg } from '@bearmint/bep-018'
import { BEP59MsgHash } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP59Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.memoLength(msg.memo)

			const sender = (await toolkit.getSender()) as AccountWithValidator

			assert.accountHasValidator(sender)

			if (await state.getMultiStore().get('@bearmint/bep-058').has(sender.address)) {
				throw new TxAuditException({
					key: 'sender',
					value: ErrorCode.TX_VALIDATOR_RESIGNED,
				})
			}

			assert.knownByList('strategy', msg.strategy, {
				key: 'message.strategy',
				value: ErrorCode.TX_UNKNOWN_STRATEGY,
			})

			if (
				!(await cradle.Container.build(
					cradle.StrategyRegistry.get<FunctionReturning<DelegatorRewarderStrategy>>(
						'@bearmint/bep-083',
						msg.strategy,
					),
				).validate(msg.strategyArgs))
			) {
				throw new TxAuditException({
					key: 'message.strategy',
					value: ErrorCode.TX_INVALID_ARGUMENTS,
				})
			}

			// BEP83 is the `Delegate Rewarder`
			if (cradle.StrategyRegistry.missing('@bearmint/bep-083', msg.strategy)) {
				throw new TxAuditException({
					key: 'message.strategy',
					value: ErrorCode.TX_UNKNOWN_STRATEGY,
				})
			}

			await assert.validatorAuthenticity(
				new BEP59MsgHash({
					memo: msg.memo as string,
					strategy: msg.strategy,
					strategyArgs: msg.strategyArgs,
				}).toBinary(),
				hexToBytes(sender.validator.publicKey),
				msg.signature,
			)
		},
	}
}
