import { execute } from './execute.js'

export const mnemonic =
	'oil absorb party draft trash stamp today together rent enhance vendor tray nut unlock family wrap chapter flight latin antenna record sugar avoid judge'

export async function bench(title: string, callback: ({ mark }) => Promise<void>) {
	await execute(title, async ({ mark }) => {
		await callback({ mark })
	})
}

export async function benchEach(
	title: string,
	callback: ({ mark, predicate, title }) => Promise<void>,
	scenarios: Record<string, CallableFunction>,
) {
	await execute(title, async ({ mark }) => {
		for (const [title, predicate] of Object.entries(scenarios)) {
			await callback({ mark, predicate, title })
		}
	})
}
