import { genesisParameters } from '@bearmint/bep-006'
import type { KeyPair } from '@bearmint/bep-013'
import * as BEP33 from '@bearmint/bep-033'
import * as BEP42 from '@bearmint/bep-042'
import { signTx } from '@bearmint/bep-099'

export async function makeTx(
	sender: KeyPair,
	recipient: KeyPair,
	message: { content: Uint8Array; handler: string; version: string },
	data?: object,
) {
	const addressFactory = BEP42.makeAddressFactory(BEP33.makeKeyPairFactory(), 'bear')

	return signTx({
		addressFactory,
		data: {
			gas: `${1e8}`,
			message: {
				content: message.content,
				handler: message.handler,
				network: genesisParameters.app_hash,
				version: message.version,
			},
			nonce: '1',
			...data,
		},
		publicKeyFactory: BEP33.makePublicKeyFactory(),
		recipient: await addressFactory.fromPublicKey(recipient.toPublicKey()),
		sender,
		signatureFactory: BEP33.makeSignatureFactory(),
	})
}
