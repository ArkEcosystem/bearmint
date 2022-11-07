import type { TxBuilder } from '@bearmint/bep-013'
import type { Message, Plain } from '@bearmint/bep-018'
import { TxMsg } from '@bearmint/bep-018'

export function wrapTxBuilder<T extends Message>({
	content,
	handler,
}: {
	content: (data: Plain<T>) => Promise<T>
	handler: string
}): TxBuilder<T> {
	return {
		async execute(data, options) {
			return new TxMsg({
				content: (await content(data)).toBinary(),
				handler,
				network: options.network,
				version: options.version,
			})
		},
	}
}
