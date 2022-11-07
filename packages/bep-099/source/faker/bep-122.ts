import { config } from '@bearmint/bep-006'
import { blake3 } from '@bearmint/bep-009'
import type { KeyPairFactory, SignatureFactory, TxMsgFaker } from '@bearmint/bep-013'
import { BEP122Msg, BEP122MsgHash } from '@bearmint/bep-018'

import type { Options } from '../types.js'
import { wrapTxMsgFaker } from './base.js'

export function makeTxMsgFaker({ cryptography }: Options): TxMsgFaker<BEP122Msg> {
	return wrapTxMsgFaker<
		BEP122Msg,
		{
			makeKeyPairFactory: KeyPairFactory
			makeSignatureFactory: SignatureFactory
			mnemonic: string
		}
	>(async (data, options) => {
		const keyPair = await cryptography.validator.keyPairFactory.fromMnemonic(
			options?.mnemonic ?? config.bearmint.validators[0]!.mnemonic,
		)

		return new BEP122Msg({
			memo: data?.memo ?? 'Hello, World!',
			moniker: data?.moniker ?? 'buckley',
			signature:
				data?.signature ??
				(
					await cryptography.validator.signatureFactory.sign(
						blake3(
							new BEP122MsgHash({
								memo: data?.memo ?? 'Hello, World!',
								moniker: data?.moniker ?? 'buckley',
							}).toBinary(),
						),
						keyPair,
					)
				).toBytes(),
		})
	})
}
