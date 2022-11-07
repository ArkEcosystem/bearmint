import type { TendermintConfiguration } from '@bearmint/bep-013'

function toSeconds(value: string) {
	if (value.endsWith('ms')) {
		return Number(value.replace('ms', '')) / 1000
	}

	return Number(value.replace('s', ''))
}

export function calculateScheduleTime({ consensus }: TendermintConfiguration) {
	return Math.ceil(
		toSeconds(consensus.timeout_propose) +
			toSeconds(consensus.timeout_prevote) +
			toSeconds(consensus.timeout_precommit) +
			toSeconds(consensus.timeout_commit),
	)
}
