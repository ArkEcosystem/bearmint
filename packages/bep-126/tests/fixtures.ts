/* eslint-disable sort-keys-fix/sort-keys-fix */
import { BEP126UserPermission } from '../source/types.js'

export const STUB_TX_META = {
	id: 'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
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
