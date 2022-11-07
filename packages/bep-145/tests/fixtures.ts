/* eslint-disable sort-keys-fix/sort-keys-fix */
import { BEP126UserPermission, getCollectionKey } from '@bearmint/bep-126'

export const STUB_TX_META = {
	id: getCollectionKey('8ffd8171d5f47ec375bc7895ec32424b941440a4cae99386a18a3596603a5b83', '0'),
	name: 'name',
	symbol: 'symbol',
	uriPrefix: 'uriPrefix',
	uriSuffix: 'uriSuffix',
	tokens: [],
	initialOwner:
		'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
	currentOwner:
		'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
	accessControlList: {
		bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl: {
			role: 0,

			permissions: [
				BEP126UserPermission.BURN,
				BEP126UserPermission.MINT,
				BEP126UserPermission.TRANSFER,
			],
		},
	},
	policies: [],
}

export const TOKEN_ID = 'f013165441c2d9cc7ea26cfe5cd7d9cff50b06384a772d012ba92b0b65ca694a'
