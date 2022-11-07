import type { Metadata, ServiceError as Contract, status } from '@grpc/grpc-js'

/**
 * https://grpc.io/grpc/node/grpc.html#~ServiceError__anchor
 */
export class ServiceError extends Error implements Partial<Contract> {
	public override name = 'ServiceError'

	constructor(
		public code: status,
		public override message: string,
		public details?: string,
		public metadata?: Metadata,
	) {
		super(message)
	}
}
