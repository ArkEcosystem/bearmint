import type { SinonStub } from 'sinon'
import * as sinon from 'sinon'

import { Fake } from './fake.js'

export class Stub extends Fake<SinonStub> {
	public returnValue(value: unknown): Stub {
		this.subject.returns(value)

		return this
	}

	public returnValueOnce(value: unknown): Stub {
		this.subject.onFirstCall().returns(value)

		return this
	}

	public returnValueNth(nth: number, value: unknown): Stub {
		this.subject.onCall(nth).returns(value)

		return this
	}

	public resolvedValue(value: unknown): Stub {
		this.subject.resolves(value)

		return this
	}

	public resolvedValueNth(nth: number, value: unknown): Stub {
		this.subject.onCall(nth).resolves(value)

		return this
	}

	public rejectedValue(value: unknown): Stub {
		this.subject.rejects(value)

		return this
	}

	public rejectedValueNth(nth: number, value: unknown): Stub {
		this.subject.onCall(nth).rejects(value)

		return this
	}

	public callsFake(value: (...args: any[]) => any): Stub {
		this.subject.callsFake(value)

		return this
	}

	public callsFakeNth(nth: number, value: (...args: any[]) => any): Stub {
		this.subject.onCall(nth).callsFake(value)

		return this
	}
}

export function stub(owner: object, method: string) {
	return new Stub(sinon.stub(owner, method as never))
}

export function stubFn() {
	return new Stub(sinon.stub())
}
