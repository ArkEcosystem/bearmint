import type { EventRecorder, EventRecorderAttribute, EventRecorderFactory } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'

export function makeEventRecorder(): EventRecorder {
	let errors: abci.EventAttribute[] = []
	let events: abci.EventAttribute[] = []
	let type: string

	function canonicalizeAttributes(attribute: EventRecorderAttribute) {
		return new abci.EventAttribute({
			index: attribute.index ?? false,
			key: attribute.key,
			value: attribute.value,
		})
	}

	function captureError(attribute: EventRecorderAttribute) {
		errors.push(canonicalizeAttributes(attribute))
	}

	function captureEvent(attribute: EventRecorderAttribute) {
		events.push(canonicalizeAttributes(attribute))
	}

	return {
		actingAs(value: string) {
			errors = []
			events = []
			type = value
		},
		all() {
			return new abci.Event({ attributes: [...errors, ...events], type })
		},
		captureError,
		captureErrors(attributes: EventRecorderAttribute[]) {
			for (const attribute of attributes) {
				captureError(attribute)
			}

			return attributes.length > 0
		},
		captureEvent,
		captureEvents(attributes: EventRecorderAttribute[]) {
			for (const attribute of attributes) {
				captureEvent(attribute)
			}

			return attributes.length > 0
		},
		errors() {
			return new abci.Event({
				attributes: errors,
				type,
			})
		},
		events() {
			return new abci.Event({
				attributes: events,
				type,
			})
		},
		hasErrors() {
			return errors.length > 0
		},
		hasEvents() {
			return events.length > 0
		},
	}
}

export function makeEventRecorderFactory(): EventRecorderFactory {
	return {
		make() {
			return makeEventRecorder()
		},
	}
}
