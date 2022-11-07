import { strictEqual } from 'assert'

export abstract class Fake<T> {
	protected readonly subject: any

	public constructor(subject: T) {
		this.subject = subject
	}

	public called(): void {
		strictEqual(this.subject.called, true)
	}

	public calledWith(...args: any[]): void {
		strictEqual(this.subject.calledWith(...args), true)
	}

	public notCalledWith(...args: any[]): void {
		strictEqual(this.subject.calledWith(...args), false)
	}

	public calledNthWith(index: number, ...args: any[]): void {
		if (this.subject.callCount <= index) {
			throw new Error(`Failed to get arguments for call#${index}`)
		}

		strictEqual(this.subject.getCall(index).calledWith(...args), true)
	}

	public calledOnce(): void {
		this.calledTimes(1)
	}

	public calledTimes(times: number): void {
		strictEqual(this.subject.callCount === times, true)
	}

	public neverCalled(): void {
		this.calledTimes(0)
	}

	public getCallArgs(index: number): any[] {
		if (this.subject.callCount > index) {
			return this.subject.getCall(index).args
		}

		throw new Error(`Failed to get arguments for call#${index}`)
	}

	public restore(): void {
		this.subject.restore()
	}

	public reset(): void {
		this.subject.resetHistory()
	}
}
