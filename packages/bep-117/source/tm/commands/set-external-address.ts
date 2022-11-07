import { Command } from 'clipanion'
import got from 'got'

import { modifyConfig } from '../toml.js'

export class SetExternalAddressCommand extends Command {
	public static override paths = [['tm', 'set', 'external-address']]

	public readonly description = 'Set the external IP address of the Tendermint P2P Interface'

	async execute() {
		const { ip } = await got('https://api.ipify.org?format=json').json<{ ip: string }>()

		modifyConfig({
			external_address: {
				replace: `external_address = "${ip}:26656"`,
				search: new RegExp('external_address = "(.*?)"'),
			},
		})
	}
}
