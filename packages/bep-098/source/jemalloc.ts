import { execFileSync, spawnSync } from 'node:child_process'

import type { Logger } from '@bearmint/bep-013'

export function loadJemalloc(logger: Logger) {
	const jemallocPath = spawnSync(
		"ls -d1H $(gcc -print-search-dirs | grep libraries: | awk '{print $2}' | sed -e 's/:/* /g' -e 's/$/*/' -e 's/^.//') | grep libjemalloc.so",
		{ shell: true },
	)
		.stdout.toString()
		.split('\n')
		.shift()
		?.trim()

	if (jemallocPath !== '') {
		if (process.env['LD_PRELOAD'] !== jemallocPath) {
			process.env['LD_PRELOAD'] = jemallocPath

			let exitCode = 0
			try {
				execFileSync(process.argv0, process.argv.slice(1), { stdio: [0, 1, 2] })
			} catch (error) {
				exitCode = error.status
			}

			process.exitCode = exitCode
		}
	} else {
		logger.warning(
			'The jemalloc library was not found on your system. It is recommended to install it for better memory management. Falling back to the system default...',
		)
	}
}
