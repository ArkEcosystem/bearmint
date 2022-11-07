import { ripemd160, sha256 } from '@bearmint/bep-009'

/**
 * @see https://github.com/tendermint/tendermint/blob/master/crypto/ed25519/ed25519.go#L160-L166
 */
export function deriveEd25519Address(publicKey: Uint8Array) {
	return Uint8Array.from(sha256(publicKey).slice(0, 20))
}

/**
 * @see https://github.com/tendermint/tendermint/blob/master/crypto/secp256k1/secp256k1.go#L148-L161
 */
export function deriveSecp256k1Address(publicKey: Uint8Array) {
	return Uint8Array.from(ripemd160(sha256(publicKey)))
}

/**
 * @see https://github.com/tendermint/tendermint/blob/master/crypto/sr25519/pubkey.go#L28-L34
 */
export function deriveSr25519Address(publicKey: Uint8Array) {
	return deriveEd25519Address(publicKey)
}
