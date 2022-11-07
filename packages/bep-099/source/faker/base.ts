import type { TxMsgFaker } from '@bearmint/bep-013'
import type { Message, Plain } from '@bearmint/bep-018'

export function wrapTxMsgFaker<T extends Message, O>(
	callback: (data: Plain<T>, options?: O | undefined) => Promise<T>,
): TxMsgFaker<T, O> {
	return {
		async execute(data, options) {
			return (await callback(data, options)).toBinary()
		},
	}
}
