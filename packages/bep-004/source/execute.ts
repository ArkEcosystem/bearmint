// Based on https://github.com/paulmillr/micro-bmark/blob/master/index.js
// Modified to make the output easier to parse with a lot of benchmarks.
import { chalk } from '@bearmint/bep-116'

import { makeTable } from './table.js'

export function getTime() {
	return process.hrtime.bigint()
}

export function getMemoryUsage() {
	const mapping = {
		bytess: 'arr',
		external: 'ext',
		heapTotal: 'heap',
		heapUsed: 'used',
	}
	const vals = Object.entries(process.memoryUsage())
		.filter(([_, v]) => v > 100_000)
		.map(([k, v]) => `${mapping[k] ?? k}` + '=' + `${(v / 1_000_000).toFixed(1)}mb`)

	return [
		'-------------------------------------------------------------------------------',
		'Memory',
		'-------------------------------------------------------------------------------',
		vals.join(' '),
	].join('\n')
}

export async function mark({ callback, label, table }) {
	const samples = 1
	const [μs, ms, sec] = [10n ** 3n, 10n ** 6n, 10n ** 9n]
	const start = getTime()
	for (let index = 0; index < samples; index++) {
		const value = callback()
		if (value instanceof Promise) {
			await value
		}
	}
	const end = getTime()
	const total = end - start
	const perItem = total / BigInt(samples)

	let perItemString = perItem.toString()
	let symbol = 'ns'
	if (perItem > μs) {
		symbol = 'μs'
		perItemString = (perItem / μs).toString()
	}
	if (perItem > ms) {
		symbol = 'ms'
		perItemString = (perItem / ms).toString()
	}

	const perSec = Intl.NumberFormat('en-US').format(sec / perItem)
	table.push([chalk.white(label), chalk.green(perSec), chalk.blue(`${perItemString}${symbol}`)])
}

export async function execute(title: string, callback: CallableFunction) {
	const table = makeTable()

	await callback({
		mark(label, callback) {
			return mark({ callback, label, table })
		},
	})

	console.log(
		[
			[
				'-------------------------------------------------------------------------------',
				`Benchmarking: ${title}`,
				'-------------------------------------------------------------------------------',
			].join('\n'),
			table.toString(),
			getMemoryUsage(),
		].join('\n'),
	)
}
