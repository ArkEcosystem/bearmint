import { benchAddress } from '@bearmint/bep-039'
import { makeKeyPairFactory, makePrivateKeyFactory, makePublicKeyFactory } from '@bearmint/bep-037'

import { makeAddressFactory } from './distribution/index.js'

await benchAddress({
	...(await import('./distribution/index.js')),
	address: '0x51fe10e9a2af7dadc5718f7090852ba2778d9aba',
	makeAddressFactory: () => makeAddressFactory(makeKeyPairFactory()),
	makePrivateKeyFactory,
	makePublicKeyFactory,
	privateKey: '918960f4f8d19552a5c4d1eadd5318a7b09bc979e6ca41d0797b0ed37da43f87',
	publicKey:
		'135538d3cf5197db90e89ec57f507aa4ae9d011c6bbaf4958c5f03fa2c367277cd178c24ed2c113f8dcd34752243f4613c3e072d48df5cac28ad8303b9e8f29e',
	title: 'Keccak-256',
})
