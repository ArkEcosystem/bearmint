import type { ABCIController, Cradle } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { ErrorCode } from '@bearmint/bep-109'
import { serializeError } from 'serialize-error'

export function makeQuery(cradle: Cradle): ABCIController<abci.RequestQuery, abci.ResponseQuery> {
	return {
		async execute(request) {
			try {
				const path: string[] = request.path.slice(1).split('/')

				for (const queryHandlerFactory of cradle.QueryHandlerRegistry.values()) {
					const queryHandler = cradle.Container.build(queryHandlerFactory)

					if (await queryHandler.isMatch({ data: request.data, path })) {
						return await queryHandler.execute({ data: request.data, path })
					}
				}

				return {
					code: 1,
					info: ErrorCode.TM_QUERY_UNKNOWN,
				}
			} catch (error) {
				return {
					code: 1,
					info: `${ErrorCode.TM_QUERY_FAULTY}: ${JSON.stringify(serializeError(error))}`,
				}
			}
		},
	}
}
