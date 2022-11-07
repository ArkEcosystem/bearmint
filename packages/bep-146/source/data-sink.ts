import type { DataSink, DataSinkDescriptor, DataSinkOp } from '@bearmint/bep-013'

export function makeDataSink(): DataSink {
	const set = new Set<DataSinkOp>()

	return {
		all() {
			return set
		},
		clear(): void {
			set.clear()
		},
		del(module: string, descriptor: DataSinkDescriptor, data?: object | undefined) {
			set.add({ data, descriptor, module, time: Date.now(), type: 'del' })
		},
		put(module: string, descriptor: DataSinkDescriptor, data?: object | undefined) {
			set.add({ data, descriptor, module, time: Date.now(), type: 'put' })
		},
		values() {
			return [...set.values()]
		},
	}
}
