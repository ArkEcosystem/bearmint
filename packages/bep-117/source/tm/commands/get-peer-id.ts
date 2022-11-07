import { file, Paths } from '@bearmint/bep-009'
import { Command } from 'clipanion'
import got from 'got'

import { readConfig } from '../toml.js'

export class GetPeerIdCommand extends Command {
	public static override paths = [['tm', 'get', 'peer-id']]

	public readonly description = 'Get the peer ID of the node'

	async execute() {
		console.log('Fetching Node...')
		const node = file.readJson<{ id: string }>(Paths.TM_PATH_CONF_NODE_KEY)

		if (node === undefined) {
			console.warn('Failed to retrieve the Node ID.')

			return
		}

		console.log('Fetching Host...')
		const { ip } = await got('https://api.ipify.org?format=json').json<{ ip: string }>()

		console.log('Fetching Port...')
		const { port } = new URL(readConfig()['p2p'].laddr)

		console.log(`Node ID: ${node.id}`)
		console.log(`Peer ID: ${node.id}@${ip}:${port}`)
	}
}
