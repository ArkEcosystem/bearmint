import { Command } from 'clipanion'

import { modifyConfig } from '../toml.js'

export class RPCEnableCommand extends Command {
	public static override paths = [['tm', 'rpc', 'enable']]

	public readonly description =
		'Enable the Tendermint RPC (https://docs.tendermint.com/master/rpc/)'

	async execute() {
		modifyConfig({
			cors_allowed_origins: ['*'],
			laddr: {
				replace: 'laddr = "tcp://0.0.0.0:26657"',
				search: new RegExp('laddr = "tcp://127.0.0.1:26657"'),
			},
		})
	}
}
