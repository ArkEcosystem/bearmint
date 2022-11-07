export interface RequestParameters<
	AllowedFields = string[],
	AllowedFilters = string[],
	AllowedSorts = string[],
> {
	fields?: Record<string, AllowedFields>
	filter?: Record<string, AllowedFilters>
	page?: {
		cursor?: string
		size?: number
	}
	sort?: AllowedSorts
}

export type BlockFields = ['hash', 'height', 'header', 'byzantine_validators', 'last_commit_info']

export type BlockRequestParameters = RequestParameters<
	BlockFields,
	BlockFields,
	['-height', 'height']
>

export type AccountFields = [
	'address',
	'balances',
	'locked_balances',
	'metadata',
	'moniker',
	'nonce',
	'public_key',
	'stakes',
	'validator',
]

export type AccountRequestParameters = RequestParameters<
	AccountFields,
	AccountFields,
	['-address', '-moniker', '-public_key', 'address', 'moniker', 'public_key']
>

export type TxFields = [
	'hash',
	'sender',
	'recipient',
	'gas',
	'nonce',
	'signature',
	'version',
	'message',
	'message_canonicalized',
]

export type TxRequestParameters = RequestParameters<
	TxFields,
	TxFields,
	[
		'-gas',
		'-nonce',
		'-recipient',
		'-sender',
		'-version',
		'gas',
		'nonce',
		'recipient',
		'sender',
		'version',
	]
>
