declare global {
	namespace Vi {
		interface Assertion {
			notToBeValidator(expected: StateStore)
			toBeBuffer()
			toBeBytes()
			toBeFalse()
			toBeMissingAttribute(expected: { attribute: string; state: StateStore })
			toBeMissingBalance(expected: { denomination: string; state: StateStore })
			toBeMissingFile()
			toBeMissingProperty(expected: { attribute: string; state: StateStore })
			toBeMissingStake(expected: { moniker: string; state: StateStore })
			toBeTrue()
			toBeValidator(expected: {
				attributes?: Record<string, any>
				state: StateStore
				stakingService: StakingService
			})
			toFailAudit(expected: EventAttribute)
			toFailExecution(expected: string)
			toHaveFile()
			toHaveProperty(expected: { attribute: string; state: StateStore; value?: string })
			toHaveStake(expected: { moniker: string; state: StateStore })
			toMatchBalance(expected)
			toMatchBalances(expected)
			toMatchFileCount(expected: number)
			toMatchJsonBytes(expected: Uint8Array)
			toMatchLockedBalance(expected: { amount: string; denomination: string; state: StateStore })
			toMatchMetadata(expected: { attributes: object; state: StateStore })
			toMatchPower(expected: { amount: string; state: StateStore })
			toMatchProperties(expected: { properties: object; state: StateStore })
			toMatchProperty(expected: { key: string; state: StateStore; value: unknown })
			toMatchReceiptLogs(expected: object)
			toMatchStake(expected: { amount: string; moniker: string; state: StateStore })
			toPassAudit()
			toPassExecution()
			toThrowAttributes(expected: unknown[])
		}
	}
}

export {}
