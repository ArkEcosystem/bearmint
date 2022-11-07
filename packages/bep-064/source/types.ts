export const HANDLER = '@bearmint/bep-064'
export const VERSION = '0.0.0'

export interface PendingLock {
	amount: bigint
	denomination: string
	expiration: bigint
	memo?: string
	recipient: string
	secret: Uint8Array
	secretAlgorithm: string
	sender: string
}
