import { environmentPaths, zeit } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { makeDatabase } from '../database.js'
import { makeMemory } from '../memory.js'
import { makeServer } from '../server/index.js'

export class StartCommand extends Command {
	public static override paths = [['start']]

	public readonly description = 'Start the JSON-RPC server'

	public readonly host = Option.String('--host', '127.0.0.1', { validator: t.isString() })
	public readonly port = Option.String('--port', '25119', { validator: t.isNumber() })

	async execute() {
		const memory = makeMemory({ pendingLimit: 3 })
		const server = await makeServer(memory)

		// Schedule cleanup
		setInterval(() => {
			for (const tx of memory.getAllTxs()) {
				if (tx.timestamp === undefined) {
					continue
				}

				if (zeit.diffInHours(tx.timestamp) >= 24) {
					memory.removeById(tx.hash)
				}
			}
		}, 15 * 60 * 1000)

		// Boot database
		const storage = makeDatabase(environmentPaths('@bearmint/musig-server').data)
		memory.loadTxs(await storage.all())
		await storage.close()

		// Boot server
		const exit = async () => {
			const memTxs = memory.getAllTxs()

			await storage.flush()

			for (const memTx of memTxs) {
				await storage.store(memTx)
			}

			await storage.close()

			server.close()
		}

		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		process.on('exit', exit)
		// eslint-disable-next-line n/no-process-exit,
		process.on('SIGINT', () => process.exit())

		server.listen(this.port, this.host, () =>
			console.log(`MuSig Server listening at http://${this.host}:${this.port}`),
		)
	}
}
