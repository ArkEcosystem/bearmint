import { config } from '@bearmint/bep-006'
import { blake3 } from '@bearmint/bep-009'
import type { TxMsgFaker } from '@bearmint/bep-013'
import { BEP57Msg, BEP57MsgHash } from '@bearmint/bep-018'

import type { Options } from '../types.js'
import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker({ cryptography }: Options): TxMsgFaker<BEP57Msg> {
	return wrapTxMsgFaker<BEP57Msg, { moniker: string; mnemonic: string }>(async (data, options) => {
		const keyPair = await cryptography.validator.keyPairFactory.fromMnemonic(
			options?.mnemonic ?? config.bearmint.validators[0]!.mnemonic,
		)

		return new BEP57Msg({
			memo: data?.memo ?? 'Hello, World!',
			publicKey: data?.publicKey ?? keyPair.toPublicKey().toBytes(),
			signature:
				data?.signature ??
				(
					await cryptography.validator.signatureFactory.sign(
						blake3(
							new BEP57MsgHash({
								memo: data?.memo ?? 'Hello, World!',
								moniker: options?.moniker ?? 'buckley',
							}).toBinary(),
						),
						keyPair,
					)
				).toBytes(),
		})
	})
}
