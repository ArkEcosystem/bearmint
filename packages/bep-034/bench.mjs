import { benchKeyPair } from '@bearmint/bep-031'

await benchKeyPair({
	...(await import('./distribution/index.js')),
	privateKey: 'e46bd7365d8f3fb498a4b2bdaadb3f758b2ecd5fe2b7a1935931939e3117b732',
	publicKey: '03134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
	signatureFail:
		'0e0fba175b6bffe5dc2e62253a1e1d729e87a67eb56989c9c5e13eb5e9c682c1aad5ed4c3920ded1206fabe03a84bd33ae0b2119caa84c4ed769341b15ad60a4',
	signaturePass:
		'304402200882cc672aae9e43de1e295b6bfedca4610e05643cf1e2ed232d16cb42d1b91a0220689178ca94c936caba3624ddae26cad700d7aba8600f8537adfb8dbd66419851',
	title: 'ECDSA',
})
