import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { EventRecorder } from '@bearmint/bep-013'

import { makeEventRecorder } from '../../source/recorder.js'

describe<{
	subject: EventRecorder
}>('Event Recorder', () => {
	beforeEach((context) => {
		context.subject = makeEventRecorder()
	})

	it('should capture errors', async (context) => {
		context.subject.actingAs('type')

		expect(context.subject.hasErrors()).toBeFalse()

		context.subject.captureError({ key: 'key1', value: 'key1' })
		context.subject.captureErrors([{ key: 'key2', value: 'key2' }])
		context.subject.captureErrors([{ key: 'key3', value: 'key3' }])

		expect(context.subject.hasErrors()).toBeTrue()

		expect(context.subject.errors()).toMatchSnapshot()
		expect(context.subject.all()).toMatchSnapshot()
	})

	it('should capture events', async (context) => {
		context.subject.actingAs('type')

		expect(context.subject.hasEvents()).toBeFalse()

		context.subject.captureEvent({ key: 'key1', value: 'key1' })
		context.subject.captureEvents([{ key: 'key2', value: 'key2' }])
		context.subject.captureEvents([{ key: 'key3', value: 'key3' }])

		expect(context.subject.hasEvents()).toBeTrue()

		expect(context.subject.events()).toMatchSnapshot()
		expect(context.subject.all()).toMatchSnapshot()
	})
})
