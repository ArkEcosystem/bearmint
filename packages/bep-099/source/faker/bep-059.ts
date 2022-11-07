import { config } from '@bearmint/bep-006'
import { blake3 } from '@bearmint/bep-009'
import type { KeyPairFactory, SignatureFactory, TxMsgFaker } from '@bearmint/bep-013'
import { BEP59Msg, BEP59MsgHash } from '@bearmint/bep-018'

import type { Options } from '../types.js'
import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker({ cryptography }: Options): TxMsgFaker<BEP59Msg> {
	return wrapTxMsgFaker<
		BEP59Msg,
		{
			makeKeyPairFactory: KeyPairFactory
			makeSignatureFactory: SignatureFactory
			mnemonic: string
			percentage: number
		}
	>(async (data, options) => {
		const keyPair = await cryptography.validator.keyPairFactory.fromMnemonic(
			options?.mnemonic ?? config.bearmint.validators[0]!.mnemonic,
		)

		const defaults = {
			percentage: options?.percentage ?? 75,
			strategy: data?.strategy ?? '@bearmint/bep-086',
		}

		return new BEP59Msg({
			memo: data?.memo ?? 'Hello, World!',
			signature:
				data?.signature ??
				(
					await cryptography.validator.signatureFactory.sign(
						blake3(
							new BEP59MsgHash({
								memo: data?.memo ?? 'Hello, World!',
								strategy: defaults.strategy,
								strategyArgs: String(defaults.percentage),
							}).toBinary(),
						),
						keyPair,
					)
				).toBytes(),
			strategy: defaults.strategy,
			strategyArgs: data?.strategyArgs ?? String(defaults.percentage),
		})
	})
}
