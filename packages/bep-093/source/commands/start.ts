import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { makeServer } from '../server/index.js'

export class StartCommand extends Command {
	public static override paths = [['start']]

	public readonly description = 'Start the JSON-RPC server'

	public readonly address = Option.String('--address', '@bearmint/bep-042', {
		validator: t.isString(),
	})
	public readonly addressPrefix = Option.String('--address-prefix', 'bear', {
		validator: t.isString(),
	})
	public readonly host = Option.String('--host', '127.0.0.1', { validator: t.isString() })
	public readonly keypair = Option.String('--keypair', '@bearmint/bep-033', {
		validator: t.isString(),
	})
	public readonly port = Option.String('--port', '25118', { validator: t.isNumber() })

	async execute() {
		const {
			makeKeyPairFactory,
			makePrivateKeyFactory,
			makePublicKeyFactory,
			makeSignatureFactory,
		} = await import(this.keypair)

		await makeServer(this.host, this.port, {
			addressFactory: (
				await import(this.address)
			).makeAddressFactory(makeKeyPairFactory(), this.addressPrefix),
			keyPairFactory: makeKeyPairFactory(),
			privateKeyFactory: makePrivateKeyFactory(),
			publicKeyFactory: makePublicKeyFactory(),
			signatureFactory: makeSignatureFactory(),
		})
	}
}
