import { benchAddress } from '@bearmint/bep-039'
import { makeKeyPairFactory } from '@bearmint/bep-035'

import { makeAddressFactory } from './distribution/index.js'

await benchAddress({
	...(await import('./distribution/index.js')),
	...(await import('@bearmint/bep-035')),
	address: '13MHrp62rGgJjXBRaHdTZMicvGcHakmeEoCfk9ABnoZkNA78',
	makeAddressFactory: () => makeAddressFactory(makeKeyPairFactory(), 0),
	privateKey: 'e46bd7365d8f3fb498a4b2bdaadb3f758b2ecd5fe2b7a1935931939e3117b732',
	publicKey: '67f22079ab26ff11722e425ae6a3f8efc7d6a66ba1822edffeed2be3de74429e',
	title: 'SS58',
})
