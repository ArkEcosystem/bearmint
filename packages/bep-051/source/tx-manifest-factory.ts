import { blake3, bytesToHex } from '@bearmint/bep-009'
import type { Cradle, TxManifest } from '@bearmint/bep-013'
import { TxChecksum } from '@bearmint/bep-018'

export function makeTxManifestFactory(
	cradle: Cradle,
	handler: string,
	version: string,
): TxManifest {
	return {
		checksum() {
			return bytesToHex(
				blake3(
					new TxChecksum({
						handler,
						network: cradle.GenesisParameters.app_hash,
						version,
					}).toBinary(),
				),
			)
		},
		name() {
			return handler
		},
		version() {
			return version
		},
	}
}
