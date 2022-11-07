import { assert, blake3, bytesToHex, sha256 } from '@bearmint/bep-009'
import type { Cradle, TxFactory } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import type { TxMsg } from '@bearmint/bep-018'
import { SignedTx, TxChecksum } from '@bearmint/bep-018'

export function makeTxFactory(
	cradle: Pick<Cradle, 'AddressFactory' | 'PublicKeyFactory'>,
): TxFactory {
	return {
		async fromBytes(bytes: Uint8Array) {
			const tx = SignedTx.fromBinary(bytes, PROTO_OPTS)

			assert.defined<TxMsg>(tx.message)

			return Object.seal({
				bytes,
				checksum: TxChecksum.fromJson({
					handler: tx.message.handler,
					network: tx.message.network,
					version: tx.message.version,
				}),
				data: {
					gas: BigInt(tx.gas),
					message: tx.message,
					nonce: BigInt(tx.nonce),
					recipient: await cradle.AddressFactory.fromString(tx.recipient),
					sender: await cradle.PublicKeyFactory.fromString(tx.sender),
					signature: tx.signature,
					version: tx.version,
				},
				/**
				 * @see https://github.com/tendermint/tendermint/blob/main/types/tx.go#L28-L31
				 * @see https://github.com/tendermint/tendermint/blob/main/crypto/tmhash/hash.go#L18-L22
				 */
				hash: bytesToHex(sha256(bytes)),
				raw: tx,
				type: bytesToHex(blake3(new TxChecksum(tx.message).toBinary())),
			})
		},
	}
}
