import { blake3 } from '@bearmint/bep-009'
import type {
	Address,
	AddressFactory,
	KeyPair,
	PublicKeyFactory,
	SignatureFactory,
} from '@bearmint/bep-013'
import type { PartialMessage, TxMsg } from '@bearmint/bep-018'
import { SignedTx, TxBody } from '@bearmint/bep-018'
import { makeTxFactory } from '@bearmint/bep-051'

export async function signTx({
	addressFactory,
	data,
	publicKeyFactory,
	recipient,
	sender,
	signatureFactory,
}: {
	addressFactory: AddressFactory
	publicKeyFactory: PublicKeyFactory
	signatureFactory: SignatureFactory
	data: { gas: string; nonce: string; message: PartialMessage<TxMsg> }
	recipient: Address
	sender: KeyPair
}) {
	const raw = {
		recipient: recipient.toString(),
		sender: sender.toPublicKey().toString(),
		signature: new Uint8Array(),
		version: '1.0.0',
		...data,
		gas: BigInt(data.gas),
		nonce: BigInt(data.nonce),
	}

	raw.signature = (
		await signatureFactory.sign(blake3(new TxBody(raw).toBinary()), sender)
	).toBytes()

	return makeTxFactory({
		AddressFactory: addressFactory,
		PublicKeyFactory: publicKeyFactory,
	}).fromBytes(new SignedTx(raw).toBinary())
}
