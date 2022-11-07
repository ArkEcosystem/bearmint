import { assert } from '@bearmint/bep-009'
import type { Container, KeyPair, Tx, TxManifestRegistry } from '@bearmint/bep-013'
import { ContainerType, PROTO_OPTS } from '@bearmint/bep-013'
import type { AnyMessage } from '@bearmint/bep-018'
import * as BEP33 from '@bearmint/bep-033'
import * as BEP42 from '@bearmint/bep-042'
import { signTx } from '@bearmint/bep-099'
import { deepStrictEqual } from 'assert'

import { broadcastSignedTx, getMixedString, getNextNonce, getProto } from './http.js'
import type { Event } from './types.js'

function makeAssertedTx(tx: Tx) {
	return {
		async confirmMeta(key: string, value?: object) {
			const response = await getMixedString('abci_query', { data: key, path: '/store' })

			deepStrictEqual(response !== undefined, true)

			if (value !== undefined) {
				deepStrictEqual(response, value)
			}
		},
		async confirmMetaMsg(key: string, value: object, msg: AnyMessage) {
			const response = await getProto('abci_query', { data: key, path: '/store' })

			deepStrictEqual(response !== undefined, true)

			if (value !== undefined) {
				deepStrictEqual(msg.fromBinary(response, PROTO_OPTS).toJson(), value)
			}
		},
		async fail(events: Event[], debug?: boolean) {
			const response = await broadcastSignedTx(tx)

			if (debug === true) {
				console.log(JSON.stringify(response, undefined, 4))
			}

			deepStrictEqual(response.check_tx.code, 1)
			deepStrictEqual(response.check_tx.events, events)

			deepStrictEqual(response.deliver_tx.code, 0)
			// eslint-disable-next-line unicorn/no-null
			deepStrictEqual(response.deliver_tx.data, null)
			// deepStrictEqual(response.deliver_tx.gas_wanted, '0')
			deepStrictEqual(response.deliver_tx.gas_used, '0')
		},
		async pass(events?: Event[], debug?: boolean) {
			const response = await broadcastSignedTx(tx)

			if (debug === true) {
				console.log(JSON.stringify(response, undefined, 4))
			}

			deepStrictEqual(response.check_tx.code, 0)

			if (Array.isArray(events)) {
				deepStrictEqual(response.check_tx.events, events)
			}

			// deepStrictEqual(response.check_tx.gas_wanted, tx.data.gas.toString())
			deepStrictEqual(response.check_tx.gas_used, '0')
			deepStrictEqual(response.check_tx.mempoolError, '')

			deepStrictEqual(response.deliver_tx.code, 0)
			// deepStrictEqual(response.deliver_tx.gas_wanted, tx.data.gas.toString())
			deepStrictEqual(response.deliver_tx.gas_used, tx.data.gas.toString())

			return response.deliver_tx
		},
		toTx() {
			return tx
		},
	}
}

export function makeTxFactory(container: Container, appHash: string) {
	async function plain(
		sender: KeyPair,
		recipient: KeyPair,
		content: Uint8Array,
		handler?: string | undefined,
		version?: string | undefined,
	) {
		const addressFactory = BEP42.makeAddressFactory(BEP33.makeKeyPairFactory(), 'bear')

		const manifests = container.resolve<TxManifestRegistry>(ContainerType.TxManifestRegistry).all()
		const manifest = manifests[handler ?? Object.keys(manifests)[0]!]![version ?? '0.0.0']

		assert.defined(manifest)

		return signTx({
			addressFactory,
			data: {
				gas: `${1e8}`,
				message: {
					content,
					handler: manifest.name(),
					network: appHash,
					version: manifest.version(),
				},
				nonce: await getNextNonce(sender.toPublicKey().toString()),
			},
			publicKeyFactory: BEP33.makePublicKeyFactory(),
			recipient: await addressFactory.fromPublicKey(recipient.toPublicKey()),
			sender,
			signatureFactory: BEP33.makeSignatureFactory(),
		})
	}

	return {
		async asserted(
			sender: KeyPair,
			recipient: KeyPair,
			content: Uint8Array,
			handler?: string | undefined,
			version?: string | undefined,
		) {
			return makeAssertedTx(await plain(sender, recipient, content, handler, version))
		},
		plain,
	}
}

export type TxFactory = ReturnType<typeof makeTxFactory>
