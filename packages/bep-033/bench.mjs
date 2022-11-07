import { benchKeyPair } from '@bearmint/bep-031'

await benchKeyPair({
	...(await import('./distribution/index.js')),
	privateKey: '10eff071cfc3ab543f628208cbcaf1b176be1ee5d856700722905e2a0a855250',
	publicKey:
		'a094fc3b0880874ab3cef04dcf91910901211fc71ed8202e4954001b8bc8656e313d35ab38e41a9e013577e1faa9a237',
	signatureFail:
		'adeb44d765dfdad53cb65f670b1ad06d9e87fac1d4014ce97a06ee8c7913d39281c3ae6734bfd18da49c6a166409852b128dd30452ab8f8e665a916b8146f7ec01e9a938cd6ab7b345c80fa73d800f07df0211eca80d2cd12c29badefe1c5e9a',
	signaturePass:
		'0e0fba175b6bffe5dc2e62253a1e1d729e87a67eb56989c9c5e13eb5e9c682c1aad5ed4c3920ded1206fabe03a84bd33ae0b2119caa84c4ed769341b15ad60a4',
	title: 'BLS12-381',
})
