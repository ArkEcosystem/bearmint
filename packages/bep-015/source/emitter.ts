/* c8 ignore start */
import type {
	ClassOrFunctionReturning,
	Cradle,
	EventDispatcher,
	EventListener,
} from '@bearmint/bep-013'
import Emittery from 'emittery'

export function makeEventDispatcher(cradle: Pick<Cradle, 'Container'>): EventDispatcher {
	const emitter = new Emittery()

	return {
		async dispatch(eventName: string, eventData?: unknown): Promise<void> {
			await emitter.emit(eventName, eventData)
		},
		async dispatchSerial(eventName: string, eventData?: unknown): Promise<void> {
			await emitter.emitSerial(eventName, eventData)
		},
		listen(eventName: string, listener: ClassOrFunctionReturning<EventListener>) {
			return emitter.on(eventName, (eventData: unknown) =>
				cradle.Container.build(listener).execute(eventData, eventName),
			)
		},
	}
}
