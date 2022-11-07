import type { SinonSpy } from 'sinon'
import * as sinon from 'sinon'

import { Fake } from './fake.js'

export class Spy extends Fake<SinonSpy> {
	public call<T>(): T {
		return this.subject()
	}

	public toFunction(): SinonSpy {
		return this.subject
	}
}

export function spy(owner: object, method: string) {
	return new Spy(sinon.spy(owner, method as never))
}

export function spyFn() {
	return new Spy(sinon.spy())
}
