export interface DataSinkDescriptor {
	id: string
	type: string
	subType?: string | undefined
}

export interface DataSinkOp {
	data?: object | undefined
	descriptor: DataSinkDescriptor
	module: string
	time: number
	type: string
}

export interface DataSink {
	all(): Set<DataSinkOp>
	clear(): void
	del(module: string, descriptor: DataSinkDescriptor, data?: object | undefined): void
	put(module: string, descriptor: DataSinkDescriptor, data?: object | undefined): void
	values(): DataSinkOp[]
}
