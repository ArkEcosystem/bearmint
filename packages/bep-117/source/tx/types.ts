export type Expects = 'pass' | 'fail'

export interface IRoutine {
	actions: string
	command: string
	expects: Expects | Expects[]
	options?: object
	repeats?: number
}
