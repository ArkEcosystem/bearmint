import { makeKeyPairFactory } from '@bearmint/bep-032'
import { makeAddressFactory } from '@bearmint/bep-042'

export function fakeAddressFactory() {
	return makeAddressFactory(makeKeyPairFactory(), 'bear')
}
