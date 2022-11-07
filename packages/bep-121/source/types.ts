import type { abci } from '@bearmint/bep-018'

export interface Milestone {
	punishments: Array<{
		type: abci.MisbehaviorType | string
		jailSentences: number
	}>
}
